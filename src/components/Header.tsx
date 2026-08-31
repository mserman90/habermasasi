import React from 'react';
import { MainNavTab, GeopoliticalStats } from '../types';
import { 
  Globe2, 
  MapPin, 
  Layers, 
  Search, 
  ShieldCheck, 
  GitBranch, 
  RefreshCw, 
  Volume2, 
  VolumeX,
  Radio,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  activeTab: MainNavTab;
  onTabChange: (tab: MainNavTab) => void;
  stats: GeopoliticalStats | null;
  isLoading: boolean;
  onRefresh: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenMethodology: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  stats,
  isLoading,
  onRefresh,
  soundEnabled,
  onToggleSound,
  onOpenMethodology
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0b0f17]/95 backdrop-blur-md">
      {/* Top Geopolitical Intelligence Ticker Bar */}
      <div className="border-b border-slate-800/50 bg-[#070a10] px-3 sm:px-6 py-1.5 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 text-slate-400">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-none">
            <span className="flex items-center gap-1.5 font-medium text-rose-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              CANLI JEOPOLİTİK İSTİHBARAT
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">
              <strong className="text-white font-mono">50</strong> Ülke
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">
              <strong className="text-white font-mono">640+</strong> Yerel Ana Akım Kaynak
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 hidden sm:inline">
              Orijinal Kaynak Dilinde (Yunanca, Arapça, Ermenice, Rusça, Bulgarca, Farsça, İbranice...)
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {stats && (
              <div className="flex items-center gap-1.5 text-[11px] bg-rose-950/40 border border-rose-800/40 px-2 py-0.5 rounded text-rose-300">
                <span>Bugün Türkiye:</span>
                <strong className="text-white font-mono">{stats.countriesWithTurkeyMentionToday} Ülke ({stats.mentionPercentage}%)</strong>
              </div>
            )}
            <button
              onClick={onOpenMethodology}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-400 transition-colors ml-1 hidden md:flex"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Doğrulama Katmanı</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand & Navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 py-2.5">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onTabChange('turkiye')}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-600/20 border border-rose-500/40 text-rose-500 shadow-sm shadow-rose-950 group-hover:bg-rose-600/30 transition-all">
              <Globe2 className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans">
                  HABER MASASI
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/30 px-1.5 py-0.5 rounded">
                  BETA
                </span>
              </div>
              <p className="text-[11px] text-slate-400 -mt-0.5 hidden sm:block">
                Dünya Basınında Türkiye ve Komşu Başkentlerin Gündemleri
              </p>
            </div>
          </button>
        </div>

        {/* Primary Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 border border-slate-800 p-1 rounded-xl shadow-inner">
          <button
            id="nav-turkiye-btn"
            onClick={() => onTabChange('turkiye')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'turkiye'
                ? 'bg-rose-600 text-white shadow-sm shadow-rose-900'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Radio className="h-3.5 w-3.5" />
            <span>Türkiye'ye Bakış</span>
            {stats && (
              <span className="ml-1 text-[10px] bg-black/30 px-1.5 py-0.2 rounded-full font-mono">
                {stats.totalDirectArticlesToday}
              </span>
            )}
          </button>

          <button
            id="nav-countries-btn"
            onClick={() => onTabChange('ulkeler')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'ulkeler'
                ? 'bg-rose-600 text-white shadow-sm shadow-rose-900'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Ülke Gündemleri</span>
            <span className="text-[10px] text-slate-400 font-mono">50</span>
          </button>

          <button
            id="nav-map-btn"
            onClick={() => onTabChange('harita')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'harita'
                ? 'bg-rose-600 text-white shadow-sm shadow-rose-900'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>Jeopolitik Harita</span>
          </button>

          <button
            id="nav-timeline-btn"
            onClick={() => onTabChange('seyir')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'seyir'
                ? 'bg-rose-600 text-white shadow-sm shadow-rose-900'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <GitBranch className="h-3.5 w-3.5" />
            <span>Seyir & Hikayeler</span>
          </button>

          <button
            id="nav-search-btn"
            onClick={() => onTabChange('arama')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'arama'
                ? 'bg-rose-600 text-white shadow-sm shadow-rose-900'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Search className="h-3.5 w-3.5" />
            <span>Arşiv & Arama</span>
          </button>
        </nav>

        {/* Quick Utilities */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            id="header-refresh-btn"
            onClick={onRefresh}
            disabled={isLoading}
            title="50 Ülke Sinyallerini Yeniden Tara"
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg text-xs transition-all disabled:opacity-50"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? 'animate-spin text-rose-500' : ''}`} />
            <span className="hidden sm:inline">Yenile</span>
          </button>

          <button
            id="header-sound-btn"
            onClick={onToggleSound}
            title={soundEnabled ? 'Sesli Uyarıları Kapat' : 'Sesli Uyarıları Aç'}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            {soundEnabled ? <Volume2 className="h-4 w-4 text-emerald-400" /> : <VolumeX className="h-4 w-4" />}
          </button>

          <button
            id="header-methodology-btn"
            onClick={onOpenMethodology}
            className="flex items-center gap-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg text-xs transition-all"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="hidden md:inline">Metodoloji</span>
          </button>
        </div>
      </div>
    </header>
  );
};
