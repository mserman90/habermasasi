import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  NewsCluster, 
  LiveStreamItem, 
  TerminalLog, 
  RadarStatus, 
  RadarApiResponse 
} from './types';
import { 
  extractKeywords, 
  makeTopicSignature, 
  clusterNewsItems, 
  formatTime, 
  normalizeText, 
  tokenize 
} from './utils/textProcessing';
import { radarAudio } from './utils/audioSynthesizer';
import { Header } from './components/Header';
import { NewsPanel } from './components/NewsPanel';
import { RadarTerminalPanel } from './components/RadarTerminalPanel';
import { LiveStreamsPanel } from './components/LiveStreamsPanel';
import { NewsDetailModal } from './components/NewsDetailModal';
import { StreamPlayerModal } from './components/StreamPlayerModal';

export default function App() {
  const [status, setStatus] = useState<RadarStatus>('idle');
  const [statusText, setStatusText] = useState('Sistem Beklemede');
  const [isScanning, setIsScanning] = useState(false);
  const [isMuted, setIsMuted] = useState(radarAudio.isMuted);
  const [autoScanInterval, setAutoScanInterval] = useState<number>(0);
  const [lastScanTime, setLastScanTime] = useState<string | null>(null);

  const [clusters, setClusters] = useState<NewsCluster[]>([]);
  const [streams, setStreams] = useState<LiveStreamItem[]>([]);
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: 'log-0',
      timestamp: formatTime(),
      message: 'SDR v3.0 başlatıldı.',
      type: 'info'
    },
    {
      id: 'log-1',
      timestamp: formatTime(),
      message: 'Backend API bağlantısı hazır.',
      type: 'info'
    },
    {
      id: 'log-2',
      timestamp: formatTime(),
      message: 'Google News RSS sinyal hattı etkin.',
      type: 'info'
    },
    {
      id: 'log-3',
      timestamp: formatTime(),
      message: 'YouTube Live API hattı etkin.',
      type: 'info'
    },
    {
      id: 'log-4',
      timestamp: formatTime(),
      message: 'Hazır. Emir bekleniyor…',
      type: 'success'
    }
  ]);

  const [selectedCluster, setSelectedCluster] = useState<NewsCluster | null>(null);
  const [selectedStream, setSelectedStream] = useState<LiveStreamItem | null>(null);

  // Persistent references for topic cache and processed guids
  const processedGuidsRef = useRef<Set<string>>(new Set());
  const topicCacheRef = useRef<Map<string, number>>(new Map());
  const foundStreamsMapRef = useRef<Map<string, LiveStreamItem>>(new Map());
  const scanControllerRef = useRef<AbortController | null>(null);
  const autoScanTimerRef = useRef<any>(null);

  const addLog = useCallback((message: string, type: TerminalLog['type'] = 'info') => {
    setLogs((prev) => [
      ...prev,
      {
        id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        timestamp: formatTime(),
        message,
        type
      }
    ]);
  }, []);

  const checkAndCacheTopic = useCallback((signature: string): boolean => {
    const now = Date.now();
    const ttl = 20 * 60 * 1000; // 20 minutes

    // Clean expired items
    for (const [key, timestamp] of topicCacheRef.current.entries()) {
      if (now - timestamp > ttl) {
        topicCacheRef.current.delete(key);
      }
    }

    if (!signature) return false;
    if (topicCacheRef.current.has(signature)) return true;

    topicCacheRef.current.set(signature, now);
    return false;
  }, []);

  const executeRadarScan = useCallback(async () => {
    if (isScanning) return;

    setIsScanning(true);
    setStatus('scanning');
    setStatusText('Derin Tarama Aktif');
    radarAudio.playScanBeep();

    addLog('=== RADAR DÖNGÜSÜ BAŞLADI ===', 'radar');
    addLog('Backend üzerinden haber ve canlı yayın sinyalleri isteniyor…', 'info');

    const controller = new AbortController();
    scanControllerRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 28000);

    try {
      const response = await fetch('/api/radar', {
        method: 'GET',
        headers: { Accept: 'application/json' },
        signal: controller.signal
      });

      clearTimeout(timeout);

      const data: RadarApiResponse = await response.json().catch(() => ({
        ok: false,
        timestamp: Date.now(),
        news: [],
        liveStreams: []
      }));

      if (!response.ok || !data.ok) {
        throw new Error(data.error || `Radar API HTTP hatası: ${response.status}`);
      }

      const incomingNews = Array.isArray(data.news) ? data.news : [];
      const newClusters = clusterNewsItems(incomingNews, processedGuidsRef.current);

      addLog(
        `${incomingNews.length} ham haber kaydı alındı; ${newClusters.length} tekil konu oluşturuldu.`,
        'success'
      );

      if (newClusters.length === 0) {
        addLog('Yeni ve tekil haber sinyali tespit edilemedi.', 'warn');
      }

      const validClustersToAdd: NewsCluster[] = [];
      let newStreamFound = false;

      for (const cluster of newClusters) {
        const text = `${cluster.main.cleanTitle || cluster.main.title} ${cluster.main.description || ''}`;
        const keywords = extractKeywords(text);

        if (!keywords) {
          addLog(`Anahtar kelime çıkarılamadı: ${cluster.main.cleanTitle}`, 'warn');
          continue;
        }

        const signature = makeTopicSignature(keywords);
        if (checkAndCacheTopic(signature)) {
          addLog(`20 dk. konu cache kaydı nedeniyle atlandı: [${signature}]`, 'warn');
          continue;
        }

        addLog(`Konu işlendi: [${keywords}]`, 'success');
        validClustersToAdd.push({
          ...cluster,
          keywords,
          signature
        });

        // Match against live streams
        const streamMatches = Array.isArray(data.liveStreams)
          ? data.liveStreams.filter((stream) => {
              const haystack = normalizeText(`${stream.title || ''} ${stream.channelName || ''}`);
              const tokens = tokenize(keywords);
              return tokens.some((keyword) => haystack.includes(keyword)) || stream.is24x7;
            })
          : [];

        if (streamMatches.length > 0) {
          addLog(`${streamMatches.length} canlı yayın eşleşmesi bulundu.`, 'success');
          for (const s of streamMatches) {
            if (!foundStreamsMapRef.current.has(s.videoId)) {
              foundStreamsMapRef.current.set(s.videoId, {
                ...s,
                matchedKeywords: tokenize(keywords)
              });
              newStreamFound = true;
            }
          }
        } else {
          addLog(`YouTube canlı eşleşmesi bulunamadı: ${keywords}`, 'warn');
        }
      }

      // Also ensure standard high-impact live channels are in stream list
      if (Array.isArray(data.liveStreams)) {
        for (const s of data.liveStreams) {
          if (!foundStreamsMapRef.current.has(s.videoId)) {
            foundStreamsMapRef.current.set(s.videoId, s);
          }
        }
      }

      // Update state
      if (validClustersToAdd.length > 0) {
        setClusters((prev) => [...validClustersToAdd, ...prev]);
      }

      setStreams(Array.from(foundStreamsMapRef.current.values()));

      if (data.warnings && data.warnings.length > 0) {
        for (const w of data.warnings) {
          addLog(w, 'warn');
        }
      }

      if (newStreamFound) {
        radarAudio.playAlertBeep();
      } else {
        radarAudio.playRadarPing();
      }

      setStatus('success');
      setStatusText('Tarama Tamamlandı');
      setLastScanTime(formatTime());
    } catch (error: any) {
      if (error.name === 'AbortError') {
        addLog('İstek zaman aşımına uğradı. Backend yanıt vermedi.', 'error');
      } else {
        addLog(`Kritik sistem hatası: ${error.message || error}`, 'error');
      }
      setStatus('error');
      setStatusText('Tarama Hatası');
    } finally {
      setIsScanning(false);
      scanControllerRef.current = null;
      setTimeout(() => {
        setStatus('idle');
        setStatusText('Sistem Beklemede');
      }, 3000);
      addLog('=== RADAR DÖNGÜSÜ TAMAMLANDI ===', 'info');
    }
  }, [isScanning, addLog, checkAndCacheTopic]);

  // Auto scan timer effect
  useEffect(() => {
    if (autoScanTimerRef.current) {
      clearInterval(autoScanTimerRef.current);
      autoScanTimerRef.current = null;
    }

    if (autoScanInterval > 0) {
      addLog(`Otomatik radar döngüsü ${autoScanInterval} saniye olarak ayarlandı.`, 'info');
      autoScanTimerRef.current = setInterval(() => {
        executeRadarScan();
      }, autoScanInterval * 1000);
    }

    return () => {
      if (autoScanTimerRef.current) {
        clearInterval(autoScanTimerRef.current);
      }
    };
  }, [autoScanInterval, executeRadarScan, addLog]);

  // Initial scan on first mount
  useEffect(() => {
    const timer = setTimeout(() => {
      addLog('Sistem çevrimiçi. Otomatik ilk radar başlatılıyor…', 'success');
      executeRadarScan();
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleToggleMute = () => {
    const newMuted = radarAudio.toggleMute();
    setIsMuted(newMuted);
    addLog(newMuted ? 'Sesli uyarılar susturuldu.' : 'Sesli uyarılar etkinleştirildi.', 'info');
  };

  const handleClearLogs = () => {
    setLogs([
      {
        id: `log-${Date.now()}`,
        timestamp: formatTime(),
        message: 'Log tamponu temizlendi.',
        type: 'info'
      }
    ]);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-[#0a0f0d] text-[#00ff41] font-mono select-none">
      {/* CRT Scanline Overlay */}
      <div className="crt-overlay" />

      {/* Main Tactical Header */}
      <Header
        status={status}
        statusText={statusText}
        isScanning={isScanning}
        isMuted={isMuted}
        autoScanInterval={autoScanInterval}
        lastScanTime={lastScanTime}
        newsCount={clusters.length}
        streamsCount={streams.length}
        onScanClick={executeRadarScan}
        onToggleMute={handleToggleMute}
        onAutoScanChange={setAutoScanInterval}
      />

      {/* 3-Column Radar Workspace */}
      <main className="relative z-10 flex flex-grow flex-col overflow-hidden md:flex-row">
        {/* Column 1: Haber Sinyalleri (Google News & RSS) */}
        <NewsPanel
          clusters={clusters}
          onSelectCluster={(cluster) => setSelectedCluster(cluster)}
        />

        {/* Column 2: Sistem Logları & Doppler Radar HUD */}
        <RadarTerminalPanel
          logs={logs}
          status={status}
          newsCount={clusters.length}
          streamsCount={streams.length}
          onClearLogs={handleClearLogs}
        />

        {/* Column 3: Canlı Yayın Eşleşmeleri (YouTube Live) */}
        <LiveStreamsPanel
          streams={streams}
          onSelectStream={(stream) => setSelectedStream(stream)}
        />
      </main>

      {/* Modals */}
      <NewsDetailModal
        cluster={selectedCluster}
        onClose={() => setSelectedCluster(null)}
      />

      <StreamPlayerModal
        stream={selectedStream}
        onClose={() => setSelectedStream(null)}
      />
    </div>
  );
}
