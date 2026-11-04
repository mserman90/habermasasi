import React, { useState, useEffect } from 'react';
import { StoryEvolutionTopic, StoryTimelinePoint } from '../types';
import { 
  GitBranch, 
  Calendar, 
  ChevronRight, 
  MapPin, 
  ExternalLink, 
  Globe2, 
  Building, 
  Flame,
  ArrowRight,
  ShieldAlert,
  Clock,
  Layers,
  Sparkles
} from 'lucide-react';
import { MONITORED_COUNTRIES } from '../data/countriesCatalog';

interface StoryEvolutionViewProps {
  stories: StoryEvolutionTopic[];
  selectedStoryId?: string | null;
  onSelectCountryForMap: (countryCode: string) => void;
}

const getStanceBadgeClass = (stance: StoryTimelinePoint['stance']) => {
  switch (stance) {
    case 'Sert Tepki':
      return 'bg-rose-950/80 text-rose-300 border-rose-800/80';
    case 'Temkinli / Bekle-Gör':
      return 'bg-amber-950/80 text-amber-300 border-amber-800/80';
    case 'Destek / İş Birliği':
      return 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80';
    case 'Analitik Değerlendirme':
    default:
      return 'bg-blue-950/80 text-blue-300 border-blue-800/80';
  }
};

const extractCountryCode = (countryStr: string): string => {
  const match = countryStr.match(/\(([A-Z]{2})\)/);
  return match ? match[1] : '';
};

const getCountryFlag = (countryCode: string): string => {
  const found = MONITORED_COUNTRIES.find(c => c.code === countryCode);
  return found?.flag || '🌐';
};

export const StoryEvolutionView: React.FC<StoryEvolutionViewProps> = ({
  stories,
  selectedStoryId,
  onSelectCountryForMap
}) => {
  const [activeStoryId, setActiveStoryId] = useState<string>(
    selectedStoryId || stories[0]?.id || ''
  );

  useEffect(() => {
    if (selectedStoryId) {
      setActiveStoryId(selectedStoryId);
    } else if (!activeStoryId && stories.length > 0) {
      setActiveStoryId(stories[0].id);
    }
  }, [selectedStoryId, stories]);

  const activeStory = stories.find(s => s.id === activeStoryId) || stories[0];

  return (
    <div className="flex flex-col flex-1 overflow-y-auto bg-[#0b0f17] text-slate-100 pb-16">
      {/* Header Bar */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-[#111827] to-[#0b0f17] px-4 sm:px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded">
              <GitBranch className="h-3.5 w-3.5" />
              Seyir & Hikaye Takibi
            </span>
            <span className="text-xs text-slate-400 font-mono">Çok Günlü Dosya Takip Modülü</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Konuların Gün Gün Seyri ve Ülke Karşılaştırmaları
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
            Bir hikâye ertesi gün devam ettiğinde aynı dosyaya bağlanır. Böylece Atina'yla diyalogda dün ne dendi, bugün ne dendi, yarın ne dendi — tek bir akışta, gün gün karşılaştırmalı olarak takip edilir.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left List of Stories */}
        <div className="lg:col-span-4 flex flex-col gap-2.5">
          <div className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
            <span>AKTİF SEYİR DOSYALARI ({stories.length})</span>
            <span className="text-[10px] text-indigo-400 font-sans">Canlı Diplomatik Akış</span>
          </div>

          {stories.map(story => {
            const isSelected = activeStory?.id === story.id;
            return (
              <button
                key={story.id}
                id={`story-btn-${story.id}`}
                onClick={() => setActiveStoryId(story.id)}
                className={`p-4 rounded-xl border text-left transition-all group ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-950/30 ring-1 ring-indigo-500/40'
                    : 'bg-[#0f172a]/70 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-950/70 border border-indigo-800/60 text-indigo-300">
                      {story.category}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      {story.status}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
                    {story.timeline?.length || 0} Adım
                  </span>
                </div>

                <h3 className={`font-bold text-sm leading-snug ${isSelected ? 'text-indigo-400' : 'text-white group-hover:text-indigo-300'}`}>
                  {story.title}
                </h3>

                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {story.summary}
                </p>

                {/* Country flags */}
                {story.participatingCountries && story.participatingCountries.length > 0 && (
                  <div className="flex items-center gap-1.5 mt-2.5">
                    <span className="text-[10px] text-slate-500 font-mono">Taraflar:</span>
                    <div className="flex items-center gap-1">
                      {story.participatingCountries.map((cStr, i) => {
                        const code = extractCountryCode(cStr);
                        return (
                          <span key={i} title={cStr} className="text-xs">
                            {getCountryFlag(code)}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-800/60 font-mono">
                  <span>Son Güncelleme: {story.lastUpdated}</span>
                  <ChevronRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${isSelected ? 'text-indigo-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Timeline Detail */}
        {activeStory && (
          <div className="lg:col-span-8 flex flex-col gap-6 bg-[#0f172a] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
            {/* Story Dossier Header */}
            <div className="border-b border-slate-800/80 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-indigo-950/70 border border-indigo-800/60 px-2.5 py-1 rounded-lg text-xs text-indigo-300 font-semibold">
                    <GitBranch className="h-3.5 w-3.5 text-indigo-400" />
                    <span>{activeStory.category}</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                    {activeStory.status}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Clock className="h-3 w-3 text-slate-500" />
                  Başlangıç: {activeStory.startDate} • Güncelleme: {activeStory.lastUpdated}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {activeStory.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {activeStory.summary}
              </p>

              {/* Countries Involved Bar */}
              {activeStory.participatingCountries && activeStory.participatingCountries.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-800/60 text-xs">
                  <span className="text-slate-400 font-mono">İlgili Başkentler & Aktörler:</span>
                  {activeStory.participatingCountries.map((cStr, idx) => {
                    const code = extractCountryCode(cStr);
                    const flag = getCountryFlag(code);
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (code) onSelectCountryForMap(code);
                        }}
                        className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-xs transition-colors"
                      >
                        <span className="text-sm">{flag}</span>
                        <span>{cStr}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Timeline Stream */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 space-y-6">
              {activeStory.timeline?.map((point, dIdx) => (
                <div key={point.id || dIdx} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-indigo-500 border-4 border-[#0f172a] shadow-sm shadow-indigo-500"></div>

                  {/* Date & Country Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded">
                        {point.date}
                      </span>
                      <button
                        onClick={() => {
                          if (point.countryCode) onSelectCountryForMap(point.countryCode);
                        }}
                        className="flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-800 px-2 py-0.5 rounded hover:bg-slate-800 transition-colors"
                      >
                        <span>{point.flag}</span>
                        <span>{point.countryName}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        Kaynak: {point.sourceName}
                      </span>
                      <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded border ${getStanceBadgeClass(point.stance)}`}>
                        {point.stance}
                      </span>
                    </div>
                  </div>

                  {/* Statement Card */}
                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl shadow-md space-y-2">
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {point.headlineTurkish}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {point.summaryTurkish}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
