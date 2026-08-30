import React, { useRef, useEffect } from 'react';
import { 
  Terminal, 
  Trash2, 
  Copy, 
  Crosshair, 
  Radio, 
  Check 
} from 'lucide-react';
import { TerminalLog, RadarStatus } from '../types';

interface RadarTerminalPanelProps {
  logs: TerminalLog[];
  status: RadarStatus;
  newsCount: number;
  streamsCount: number;
  onClearLogs: () => void;
}

export const RadarTerminalPanel: React.FC<RadarTerminalPanelProps> = ({
  logs,
  status,
  newsCount,
  streamsCount,
  onClearLogs
}) => {
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCopyLogs = () => {
    const text = logs.map(l => `[${l.timestamp}] [${l.type.toUpperCase()}] ${l.message}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex w-full flex-col overflow-hidden border-b md:border-b-0 md:border-r border-[#008f11] bg-[#0a0f0d] md:w-1/3 min-h-[360px] h-full">
      {/* Background Radar Animation HUD */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-15">
        <div className="relative h-[340px] w-[340px] rounded-full border border-[#00ff41] shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          {/* Concentric rings */}
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ff41]/60"></div>
          <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ff41]/50"></div>
          <div className="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ff41]/40"></div>
          <div className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ff41]/80 bg-[#00ff41]/10"></div>
          
          {/* Crosshairs */}
          <div className="absolute top-1/2 h-[1px] w-full bg-[#00ff41]/80"></div>
          <div className="absolute left-1/2 h-full w-[1px] bg-[#00ff41]/80"></div>
          <div className="absolute top-1/2 left-1/2 h-[1px] w-full -rotate-45 -translate-x-1/2 bg-[#00ff41]/20"></div>
          <div className="absolute top-1/2 left-1/2 h-[1px] w-full rotate-45 -translate-x-1/2 bg-[#00ff41]/20"></div>

          {/* Radar Sweep Effect */}
          <div className={`radar-sweep ${status === 'scanning' ? 'radar-sweep-fast' : ''}`}></div>

          {/* Dynamic Radar Blips */}
          {newsCount > 0 && (
            <>
              <div className="absolute top-1/4 left-1/3 h-2 w-2 rounded-full bg-[#00ff41] animate-ping"></div>
              <div className="absolute top-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-[#00ff41]"></div>
            </>
          )}
          {streamsCount > 0 && (
            <>
              <div className="absolute bottom-1/3 right-1/4 h-2 w-2 rounded-full bg-[#ff003c] animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-[#ff003c]"></div>
            </>
          )}
        </div>
      </div>

      {/* Header bar */}
      <div className="z-10 flex items-center justify-between border-b border-[#008f11] bg-[#008f11]/15 px-3 py-2">
        <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-[#00ff41]">
          <Terminal className="h-4 w-4 text-[#00ff41]" />
          <span>Sistem Logları & Telemetri</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLogs}
            title="Logları Kopyala"
            className="flex items-center gap-1 text-[10px] text-[#6b8f74] hover:text-[#00ff41] bg-black/40 border border-[#008f11]/40 px-1.5 py-0.5"
          >
            {copied ? <Check className="h-3 w-3 text-[#00ff41]" /> : <Copy className="h-3 w-3" />}
            <span>{copied ? 'KOPYALANDI' : 'KOPYALA'}</span>
          </button>

          <button
            onClick={onClearLogs}
            title="Logları Temizle"
            className="flex items-center gap-1 text-[10px] text-[#6b8f74] hover:text-[#ff003c] bg-black/40 border border-[#008f11]/40 px-1.5 py-0.5"
          >
            <Trash2 className="h-3 w-3" />
            <span>TEMİZLE</span>
          </button>
        </div>
      </div>

      {/* Terminal Radar HUD Status Overlay */}
      <div className="z-10 border-b border-[#008f11]/30 bg-black/70 px-3 py-1 text-[10px] flex items-center justify-between font-mono text-[#6b8f74]">
        <div className="flex items-center gap-2">
          <Crosshair className="h-3 w-3 text-[#00ff41]" />
          <span>MOD: <strong className="text-[#00ff41]">DOPPLER FREQ {status === 'scanning' ? '12.4 GHz' : '9.8 GHz'}</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <span>HEDEFLER: <strong className="text-white">{newsCount + streamsCount}</strong></span>
          <span className="flex items-center gap-1">
            <Radio className="h-2.5 w-2.5 text-[#00ff41]" />
            LOCK: {status === 'scanning' ? 'TARANIYOR' : 'AKTİF'}
          </span>
        </div>
      </div>

      {/* Terminal Log Output */}
      <div
        id="terminal-log"
        className="z-10 flex flex-grow flex-col gap-1 overflow-y-auto p-3 font-mono text-[11px] leading-relaxed"
      >
        {logs.map((log) => {
          let typeClass = '';
          if (log.type === 'error') typeClass = 'log-error';
          else if (log.type === 'warn') typeClass = 'log-warn';
          else if (log.type === 'success') typeClass = 'log-success';
          else if (log.type === 'radar') typeClass = 'log-radar';

          return (
            <div key={log.id} className={`log-entry ${typeClass}`}>
              <span className="opacity-40 select-none mr-1.5">[{log.timestamp}]</span>
              <span>{log.message}</span>
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>
    </section>
  );
};
