import React, { useState, useMemo } from 'react';
import { DisGundemItem } from '../types';
import { 
  Search, 
  Globe, 
  ExternalLink, 
  ShieldCheck, 
  Languages, 
  Calendar, 
  Tag, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';

interface ArchiveSearchViewProps {
  allArticles: DisGundemItem[];
  onOpenArticleModal: (article: DisGundemItem) => void;
  onSelectCountryForMap: (countryCode: string) => void;
}

const POPULAR_SEARCH_TOPICS = [
  'Vize & Schengen',
  'Doğu Akdeniz',
  'Kalkınma Yolu',
  'Eurofighter & F-16',
  'Zengezur Koridoru',
  'Karadeniz Güvenliği',
  'Doğalgaz & Enerji',
  'Savunma Sanayii',
  'Gümrük Birliği'
];

export const ArchiveSearchView: React.FC<ArchiveSearchViewProps> = ({
  allArticles,
  onOpenArticleModal,
  onSelectCountryForMap
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');

  const countriesInArchive = useMemo(() => {
    const map = new Map<string, { code: string; name: string; flag: string }>();
    allArticles.forEach(a => {
      if (!map.has(a.countryCode)) {
        map.set(a.countryCode, { code: a.countryCode, name: a.countryName, flag: a.flag });
      }
    });
    return Array.from(map.values());
  }, [allArticles]);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      if (selectedCountry === 'ALL') return allArticles;
      return allArticles.filter(a => a.countryCode === selectedCountry);
    }

    const q = searchTerm.toLowerCase();
    return allArticles.filter(a => {
      if (selectedCountry !== 'ALL' && a.countryCode !== selectedCountry) return false;
      return (
        a.turkishHeadline.toLowerCase().includes(q) ||
        a.turkishSummary.toLowerCase().includes(q) ||
        a.originalTitle.toLowerCase().includes(q) ||
        a.originalExcerpt.toLowerCase().includes(q) ||
        a.countryName.toLowerCase().includes(q) ||
        a.sourceName.toLowerCase().includes(q) ||
        a.verifiedNamedEntities.some(e => e.toLowerCase().includes(q))
      );
    });
  }, [allArticles, searchTerm, selectedCountry]);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto bg-[#0b0f17] text-slate-100 pb-16">
      {/* Header Bar */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-[#111827] to-[#0b0f17] px-4 sm:px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2 py-0.5 rounded">
              <Search className="h-3.5 w-3.5" />
              Arşiv & Arama Motoru
            </span>
            <span className="text-xs text-slate-400 font-mono">50 Ülke Basın Hafızası</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Hangi Ülke Basınında Ne Zaman Ne Yazıldı?
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
            50 ülkenin yerel basınında Türkiye'ye dair geçmiş ve anlık haberlerde kelime araması yapın. Kaynak dili, başkent ve konu bazlı derinlemesine basın taraması.
          </p>

          {/* Search Box */}
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 max-w-3xl">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Arama yapın (örn: Vize, Doğu Akdeniz, Savunma Sanayii, Fidan, Miçotakis)..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 shadow-inner"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Temizle
                </button>
              )}
            </div>

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 w-full sm:w-auto"
            >
              <option value="ALL">Tüm Ülkeler (50 Ülke)</option>
              {countriesInArchive.map(c => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Preset Suggested Topics */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3 text-xs">
            <span className="text-slate-400 font-mono flex items-center gap-1 text-[11px]">
              <Sparkles className="h-3 w-3 text-amber-400" />
              Sık Aranan Konular:
            </span>
            {POPULAR_SEARCH_TOPICS.map(topic => (
              <button
                key={topic}
                onClick={() => setSearchTerm(topic)}
                className="px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 w-full">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
          <span>
            BULUNAN SONUÇLAR: <strong className="text-white">{searchResults.length}</strong> HABER
            {searchTerm && <span> ("{searchTerm}" için)</span>}
          </span>
          <span>50 Ülke Arşivi</span>
        </div>

        {searchResults.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/30">
            <Search className="h-10 w-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white">Aradığınız kriterlere uygun sonuç bulunamadı</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              Farklı bir anahtar kelime yazabilir veya önerilen konulardan birini seçebilirsiniz.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {searchResults.map(article => (
              <div
                key={article.id}
                className="bg-[#0f172a] border border-slate-800 hover:border-rose-700/60 p-4 sm:p-5 rounded-xl transition-all shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{article.flag}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-white text-sm">{article.countryName}</strong>
                        <span className="text-slate-500 text-xs font-mono">({article.capital})</span>
                        <span className="text-[11px] text-slate-400 font-mono">• {article.sourceName}</span>
                      </div>
                      <div className="text-[11px] text-slate-400">{article.region}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <button
                      onClick={() => onSelectCountryForMap(article.countryCode)}
                      className="text-xs text-rose-400 hover:text-rose-300 font-medium"
                    >
                      Haritada Göster
                    </button>
                  </div>
                </div>

                <h3
                  onClick={() => onOpenArticleModal(article)}
                  className="text-base font-bold text-white hover:text-rose-300 cursor-pointer transition-colors leading-snug"
                >
                  {article.turkishHeadline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  {article.turkishSummary}
                </p>

                <div className="bg-[#070b13] border-l-2 border-rose-500/70 p-2.5 rounded-r-lg mt-3">
                  <div className="text-[10px] text-slate-400 font-mono mb-0.5">
                    Orijinal Kaynak Metni ({article.sourceLanguage}):
                  </div>
                  <p className="text-xs text-slate-300 italic font-serif leading-relaxed">
                    "{article.originalExcerpt || article.originalTitle}"
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Doğrulandı: {article.verifiedNamedEntities.join(', ')}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenArticleModal(article)}
                      className="text-rose-400 hover:text-rose-300 font-semibold"
                    >
                      Ayrıntılı Analiz
                    </button>
                    <a
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-400 hover:text-white"
                    >
                      <span>Habere Git</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
