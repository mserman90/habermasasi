import React from 'react';
import { 
  Radio, 
  Layers, 
  MapPin, 
  GitBranch, 
  Search 
} from 'lucide-react';
import { MainNavTab } from '../types';

interface MobileBottomNavProps {
  activeTab: MainNavTab;
  turkiyeCount: number;
  countriesCount: number;
  onTabChange: (tab: MainNavTab) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  turkiyeCount,
  countriesCount,
  onTabChange
}) => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-slate-800 bg-[#0b0f17]/95 backdrop-blur-lg px-1 py-1.5 shadow-2xl mobile-bottom-nav">
      {/* 1. Türkiye'ye Bakış */}
      <button
        type="button"
        id="mobile-nav-turkiye"
        onClick={() => onTabChange('turkiye')}
        className={`relative flex flex-1 flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-colors ${
          activeTab === 'turkiye'
            ? 'bg-rose-600/20 text-rose-400 font-bold border border-rose-500/40'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <Radio className="h-4 w-4" />
          {turkiyeCount > 0 && (
            <span className="absolute -top-1.5 -right-3 rounded-full bg-rose-600 px-1 text-[9px] font-bold text-white leading-tight font-mono">
              {turkiyeCount}
            </span>
          )}
        </div>
        <span className="mt-1 text-[10px] tracking-wider font-sans">Türkiye</span>
      </button>

      {/* 2. Ülke Gündemleri */}
      <button
        type="button"
        id="mobile-nav-ulkeler"
        onClick={() => onTabChange('ulkeler')}
        className={`relative flex flex-1 flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-colors ${
          activeTab === 'ulkeler'
            ? 'bg-rose-600/20 text-rose-400 font-bold border border-rose-500/40'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <Layers className="h-4 w-4" />
        </div>
        <span className="mt-1 text-[10px] tracking-wider font-sans">Gündemler</span>
      </button>

      {/* 3. Radar Haritası */}
      <button
        type="button"
        id="mobile-nav-harita"
        onClick={() => onTabChange('harita')}
        className={`relative flex flex-1 flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-colors ${
          activeTab === 'harita'
            ? 'bg-rose-600/20 text-rose-400 font-bold border border-rose-500/40'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <MapPin className="h-4 w-4" />
        </div>
        <span className="mt-1 text-[10px] tracking-wider font-sans">Harita</span>
      </button>

      {/* 4. Seyir */}
      <button
        type="button"
        id="mobile-nav-seyir"
        onClick={() => onTabChange('seyir')}
        className={`relative flex flex-1 flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-colors ${
          activeTab === 'seyir'
            ? 'bg-rose-600/20 text-rose-400 font-bold border border-rose-500/40'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <GitBranch className="h-4 w-4" />
        </div>
        <span className="mt-1 text-[10px] tracking-wider font-sans">Seyir</span>
      </button>

      {/* 5. Arama */}
      <button
        type="button"
        id="mobile-nav-arama"
        onClick={() => onTabChange('arama')}
        className={`relative flex flex-1 flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-colors ${
          activeTab === 'arama'
            ? 'bg-rose-600/20 text-rose-400 font-bold border border-rose-500/40'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <Search className="h-4 w-4" />
        </div>
        <span className="mt-1 text-[10px] tracking-wider font-sans">Arama</span>
      </button>
    </nav>
  );
};
