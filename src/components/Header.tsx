import React from 'react';
import { 
  Radio, 
  RefreshCw, 
  Volume2, 
  VolumeX, 
  Activity, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Disc 
} from 'lucide-react';
import { RadarStatus } from '../types';

interface HeaderProps {
  status: RadarStatus;
  statusText: string;
  isScanning: boolean;
  isMuted: boolean;
  autoScanInterval: number; // in seconds, 0 = off
  lastScanTime: string | null;
  newsCount: number;
  streamsCount: number;
  onScanClick: () => void;
  onToggleMute: () => void;
  onAutoScanChange: (seconds: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  status,
  statusText,
  isScanning,
  isMuted,
  autoScanInterval,
  lastScanTime,
  newsCount,
  streamsCount,
  onScanClick,
  onToggleMute,
  onAutoScanChange
}) => {
  return (
    <header className="relative z-20 flex flex-wrap items-center justify-between border-b border-[#008f11] bg-[#0a0f0d] px-4 py-3 shadow-[0_0_20px_rgba(0,255,65,0.15)]">
      {/* Brand & Subtitle */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center">
          <Radio className="h-6 w-6 text-[#00ff41] glitch-text" />
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff41]"></span>
          </span>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold tracking-widest text-white uppercase">
              S.D.R. CONSOLE <span className="text-[#00ff41] font-mono">v3.0</span>
            </h1>
            <span className="rounded border border-[#008f11] bg-[#008f11]/20 px-1.5 py-0.2 text-[10px] font-bold text-[#00ff41]">
              ONLINE
            </span>
          </div>
          <p className="text-[11px] text-[#6b8f74] font-mono tracking-wider">
            Son Dakika ve Canlı Yayın Sinyal Radarı
          </p>
        </div>
      </div>

      {/* Center Quick Stats */}
      <div className="hidden lg:flex items-center gap-6 text-xs text-[#6b8f74] border-x border-[#008f11]/40 px-6 py-1">
        <div className="flex items-center gap-2">
          <Activity className="h-3.5 w-3.5 text-[#00ff41]" />
          <span>Haber Havuzu: <strong className="text-white font-mono">{newsCount}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <Disc className="h-3.5 w-3.5 text-[#ff003c]" />
          <span>Canlı Yayınlar: <strong className="text-white font-mono">{streamsCount}</strong></span>
        </div>
        {lastScanTime && (
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-[#eab308]" />
            <span>Son Tarama: <strong className="text-white font-mono">{lastScanTime}</strong></span>
          </div>
        )}
      </div>

      {/* Actions & Status */}
      <div className="flex flex-wrap items-center gap-3 mt-2 sm:mt-0">
        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-wider font-mono">
          {status === 'scanning' && (
            <div className="flex items-center gap-1.5 text-[#ff003c]">
              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              <span>{statusText}</span>
            </div>
          )}
          {status === 'idle' && (
            <div className="flex items-center gap-1.5 text-[#6b8f74]">
              <span className="h-2 w-2 rounded-full bg-[#008f11]"></span>
              <span>{statusText}</span>
            </div>
          )}
          {status === 'success' && (
            <div className="flex items-center gap-1.5 text-[#00ff41]">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{statusText}</span>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-1.5 text-[#ff003c]">
              <AlertTriangle className="h-3.5 w-3.5" />
              <span>{statusText}</span>
            </div>
          )}
        </div>

        {/* Auto Scan Selector */}
        <div className="flex items-center border border-[#008f11]/60 bg-[#111b15] px-2 py-1 text-xs">
          <span className="text-[10px] text-[#6b8f74] mr-2">OTO:</span>
          <select
            value={autoScanInterval}
            onChange={(e) => onAutoScanChange(Number(e.target.value))}
            className="bg-transparent text-[#00ff41] text-[11px] outline-none cursor-pointer"
            aria-label="Otomatik tarama periyodu"
          >
            <option value={0} className="bg-[#111b15] text-[#00ff41]">Manuel</option>
            <option value={30} className="bg-[#111b15] text-[#00ff41]">30 sn</option>
            <option value={60} className="bg-[#111b15] text-[#00ff41]">60 sn</option>
            <option value={120} className="bg-[#111b15] text-[#00ff41]">2 dk</option>
          </select>
        </div>

        {/* Audio Mute Toggle */}
        <button
          onClick={onToggleMute}
          title={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
          className="flex items-center justify-center border border-[#008f11]/60 bg-[#111b15] p-1.5 text-[#00ff41] hover:bg-[#00ff41]/20 transition-colors"
          type="button"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4 text-[#ff003c]" />
          ) : (
            <Volume2 className="h-4 w-4 text-[#00ff41]" />
          )}
        </button>

        {/* Scan Button */}
        <button
          id="btn-scan"
          type="button"
          onClick={onScanClick}
          disabled={isScanning}
          className={`flex items-center gap-2 border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
            isScanning
              ? 'border-[#ff003c] bg-[#ff003c]/20 text-[#ff003c] animate-pulse cursor-not-allowed'
              : 'border-[#00ff41] bg-black/40 text-[#00ff41] hover:bg-[#00ff41] hover:text-black cursor-pointer shadow-[0_0_10px_rgba(0,255,65,0.2)]'
          }`}
        >
          <RefreshCw className={`h-3.5 w-3.5 ${isScanning ? 'animate-spin' : ''}`} />
          <span>{isScanning ? '[ TARANIYOR... ]' : '[ Radarı Başlat ]'}</span>
        </button>
      </div>
    </header>
  );
};
