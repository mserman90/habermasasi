import React, { useState } from 'react';
import { 
  Radio, 
  ExternalLink, 
  Search, 
  FileText, 
  Layers, 
  Globe 
} from 'lucide-react';
import { NewsCluster } from '../types';
import { safeUrl, formatTime } from '../utils/textProcessing';

interface NewsPanelProps {
  clusters: NewsCluster[];
  onSelectCluster: (cluster: NewsCluster) => void;
}

export const NewsPanel: React.FC<NewsPanelProps> = ({
  clusters,
  onSelectCluster
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClusters = clusters.filter((cluster) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLocaleLowerCase('tr-TR');
    return (
      cluster.main.cleanTitle.toLocaleLowerCase('tr-TR').includes(term) ||
      cluster.keywords.toLocaleLowerCase('tr-TR').includes(term) ||
      cluster.sources.some(s => s.toLocaleLowerCase('tr-TR').includes(term))
    );
  });

  return (
    <section className="flex w-full flex-col border-b md:border-b-0 md:border-r border-[#008f11] bg-[#111b15]/60 md:w-1/3 min-h-[360px] h-full overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[#008f11] bg-[#008f11]/15 px-3 py-2">
        <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-[#00ff41]">
          <Radio className="h-4 w-4 text-[#00ff41]" />
          <span>Haber Sinyalleri</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            id="news-count"
            className="rounded bg-[#00ff41] px-2 py-0.5 text-xs font-bold text-black font-mono shadow-[0_0_8px_rgba(0,255,65,0.4)]"
          >
            {clusters.length}
          </span>
        </div>
      </div>

      {/* Search / Filter Sub-bar */}
      <div className="border-b border-[#008f11]/30 bg-[#0a0f0d]/90 px-3 py-1.5 flex items-center gap-2 text-xs">
        <Search className="h-3.5 w-3.5 text-[#6b8f74]" />
        <input
          type="text"
          placeholder="Sinyal veya kaynak filtrele..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent text-[#00ff41] placeholder-[#6b8f74]/60 text-xs outline-none font-mono"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-[10px] text-[#6b8f74] hover:text-[#00ff41]"
          >
            TEMİZLE
          </button>
        )}
      </div>

      {/* News List Container */}
      <div
        id="news-container"
        className="flex-grow space-y-3 overflow-y-auto p-3"
      >
        {filteredClusters.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-center text-[#6b8f74] opacity-60">
            <Radio className="h-10 w-10 mb-3 text-[#008f11] animate-pulse" />
            <p className="text-xs uppercase tracking-widest">
              {clusters.length === 0 ? 'Sinyal bekleniyor…' : 'Eşleşen sinyal bulunamadı'}
            </p>
            <p className="text-[10px] mt-1 text-[#6b8f74]/80">
              {clusters.length === 0 ? 'Taramayı başlatmak için yukarıdaki düğmeye basın' : 'Farklı bir arama terimi deneyin'}
            </p>
          </div>
        ) : (
          filteredClusters.map((cluster) => {
            const hasMultipleSources = cluster.items.length > 1;
            return (
              <article
                key={cluster.id}
                data-news-card="true"
                className="group relative border border-[#008f11]/60 border-l-4 border-l-[#00ff41] bg-black/60 p-3 transition-all hover:bg-[#008f11]/15 hover:border-[#00ff41] shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              >
                {/* Meta Header */}
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-1 text-[10px] text-[#6b8f74]">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="flex items-center gap-1 text-[#00ff41]/90 font-mono">
                      <Globe className="h-3 w-3" />
                      SOURCE: {cluster.sources.slice(0, 2).join(', ')}
                      {cluster.sources.length > 2 && ` +${cluster.sources.length - 2}`}
                    </span>

                    {hasMultipleSources && (
                      <span className="flex items-center gap-0.5 rounded bg-[#008f11] px-1 py-0.2 text-[9px] font-bold text-black font-mono">
                        <Layers className="h-2.5 w-2.5 inline mr-0.5" />
                        {cluster.items.length} KAYNAK
                      </span>
                    )}

                    <span className="rounded bg-[#00ff41] px-1 py-0.2 text-[9px] font-bold text-black font-mono">
                      GOOGLE NEWS EŞLEŞMESİ
                    </span>
                  </div>

                  <span className="text-[#6b8f74] font-mono">
                    {formatTime(new Date(cluster.timestamp))}
                  </span>
                </div>

                {/* News Title */}
                <h2 className="mb-2 text-xs font-bold leading-relaxed text-white group-hover:text-[#00ff41] transition-colors">
                  {cluster.main.cleanTitle || cluster.main.title}
                </h2>

                {/* Target Signature */}
                <div className="mb-2.5 text-[11px] font-mono text-[#00ff41]/80 bg-[#00ff41]/5 border border-[#00ff41]/20 px-2 py-0.5 rounded-sm">
                  HEDEF İMZA: <span className="text-[#eab308]">[{cluster.keywords}]</span>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between gap-2 border-t border-[#008f11]/20 pt-2 text-[10px]">
                  <div className="flex items-center gap-3">
                    <a
                      href={safeUrl(cluster.main.link)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#00ff41] underline decoration-[#008f11] underline-offset-4 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Haberi aç</span>
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => onSelectCluster(cluster)}
                      className="inline-flex items-center gap-1 text-[#6b8f74] hover:text-[#00ff41] transition-colors"
                    >
                      <FileText className="h-2.5 w-2.5" />
                      <span>Detay</span>
                    </button>
                  </div>

                  <span className="text-[#6b8f74] font-mono text-[9px]">
                    {cluster.main.pubDate ? new Date(cluster.main.pubDate).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) : ''}
                  </span>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
};
