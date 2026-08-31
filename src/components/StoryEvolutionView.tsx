import React, { useState } from 'react';
import { StoryEvolutionTopic } from '../types';
import { 
  GitBranch, 
  Calendar, 
  ChevronRight, 
  MapPin, 
  Languages, 
  ExternalLink, 
  Globe2, 
  Building, 
  Flame,
  ArrowRight
} from 'lucide-react';

interface StoryEvolutionViewProps {
  stories: StoryEvolutionTopic[];
  selectedStoryId?: string | null;
  onSelectCountryForMap: (countryCode: string) => void;
}

export const StoryEvolutionView: React.FC<StoryEvolutionViewProps> = ({
  stories,
  selectedStoryId,
  onSelectCountryForMap
}) => {
  const [activeStoryId, setActiveStoryId] = useState<string>(selectedStoryId || stories[0]?.id || 'story-aegean-dialogue');

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
          <div className="text-xs font-mono text-slate-400 mb-1">
            AKTİF SEYİR DOSYALARI ({stories.length})
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
                  <span className="flex items-center gap-1">
                    {story.countriesInvolved.map((c, i) => (
                      <span key={i} className="text-sm">{c.flag}</span>
                    ))}
                  </span>
                  <span className="text-[10px] font-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
                    {story.days.length} Günlük Seyir
                  </span>
                </div>

                <h3 className={`font-bold text-sm leading-snug ${isSelected ? 'text-indigo-400' : 'text-white group-hover:text-indigo-300'}`}>
                  {story.title}
                </h3>

                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {story.summary}
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-800/60 font-mono">
                  <span>Son Güncelleme: {story.lastUpdated}</span>
                  <ChevronRight className={`h-4 w-4 ${isSelected ? 'text-indigo-400' : 'text-slate-600'}`} />
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
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1 bg-indigo-950/70 border border-indigo-800/60 px-2.5 py-1 rounded-lg text-xs text-indigo-300 font-semibold">
                  <GitBranch className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Dosya: {activeStory.title}</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Başlangıç: {activeStory.startedAt}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {activeStory.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {activeStory.summary}
              </p>

              {/* Countries Involved Bar */}
              <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-800/60 text-xs">
                <span className="text-slate-400 font-mono">İlgili Başkentler:</span>
                {activeStory.countriesInvolved.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectCountryForMap(c.code)}
                    className="flex items-center gap-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 px-2 py-0.5 rounded text-xs transition-colors"
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Stream */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 space-y-6">
              {activeStory.days.map((day, dIdx) => (
                <div key={dIdx} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-indigo-500 border-4 border-[#0f172a] shadow-sm shadow-indigo-500"></div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded">
                      {day.date}
                    </span>
                    <h4 className="text-sm font-bold text-slate-200">
                      {day.headline}
                    </h4>
                  </div>

                  {/* Multi-country comparison statements for this day */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    {day.developments.map((dev, devIdx) => (
                      <div key={devIdx} className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-lg">{dev.countryFlag}</span>
                            <strong className="text-white text-xs">{dev.countryName}</strong>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">{dev.source}</span>
                        </div>

                        <div className="text-xs font-semibold text-slate-200 leading-snug">
                          {dev.statementTurkish}
                        </div>

                        <div className="text-[11px] text-slate-400 italic font-serif mt-1.5 bg-[#070b13] p-2 rounded border-l-2 border-indigo-500/60">
                          "{dev.statementNative}"
                        </div>
                      </div>
                    ))}
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
