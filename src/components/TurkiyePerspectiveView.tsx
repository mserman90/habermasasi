import React, { useState, useMemo } from 'react';
import { DisGundemItem, GeopoliticalStats } from '../types';
import { 
  ShieldCheck, 
  ExternalLink, 
  MapPin, 
  Filter, 
  Search, 
  Globe, 
  Languages, 
  GitBranch, 
  Calendar, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  SlidersHorizontal,
  Bookmark
} from 'lucide-react';

interface TurkiyePerspectiveViewProps {
  articles: DisGundemItem[];
  stats: GeopoliticalStats | null;
  onSelectCountryForMap: (countryCode: string) => void;
  onSelectStory: (storyId: string) => void;
  onOpenArticleModal: (article: DisGundemItem) => void;
}

const REGIONS = [
  'ALL',
  'Komşular & Yakın Havza',
  'Ortadoğu & Kuzey Afrika',
  'Avrupa & Batı',
  'Balkanlar & Doğu Avrupa',
  'Kafkaslar & Orta Asya',
  'Afrika & Diğer'
];

const CATEGORIES = [
  'ALL',
  'Diplomasi & Güvenlik',
  'Ekonomi & Ticaret',
  'Enerji & Koridorlar',
  'Savunma Sanayii',
  'Bölgesel Siyaset'
];

export const TurkiyePerspectiveView: React.FC<TurkiyePerspectiveViewProps> = ({
  articles,
  stats,
  onSelectCountryForMap,
  onSelectStory,
  onOpenArticleModal
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyVerified, setOnlyVerified] = useState<boolean>(true);

  // Extract unique countries in current dataset
  const availableCountries = useMemo(() => {
    const map = new Map<string, { code: string; name: string; flag: string; count: number }>();
    articles.forEach(a => {
      if (!map.has(a.countryCode)) {
        map.set(a.countryCode, { code: a.countryCode, name: a.countryName, flag: a.flag, count: 0 });
      }
      map.get(a.countryCode)!.count += 1;
    });
    return Array.from(map.values()).sort((a, b) => b.count - a.count);
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter(item => {
      if (selectedRegion !== 'ALL' && item.region !== selectedRegion) return false;
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) return false;
      if (selectedCountryFilter !== 'ALL' && item.countryCode !== selectedCountryFilter) return false;
      if (onlyVerified && !item.verificationPassed) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inHeadline = item.turkishHeadline.toLowerCase().includes(q);
        const inSummary = item.turkishSummary.toLowerCase().includes(q);
        const inOriginal = item.originalTitle.toLowerCase().includes(q);
        const inCountry = item.countryName.toLowerCase().includes(q);
        const inSource = item.sourceName.toLowerCase().includes(q);
        if (!inHeadline && !inSummary && !inOriginal && !inCountry && !inSource) return false;
      }
      return true;
    });
  }, [articles, selectedRegion, selectedCategory, selectedCountryFilter, onlyVerified, searchQuery]);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto bg-[#0b0f17] text-slate-100 pb-16">
      {/* Top Banner: Mission & Verification Standard */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-[#111827] to-[#0b0f17] px-4 sm:px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2 py-0.5 rounded">
                  <Globe className="h-3.5 w-3.5" />
                  Türkiye'ye Bakış
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                50 Ülke Basınında Bugün Türkiye'ye Dair Ne Çıktı?
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                Komşularımızın, ticaret ortaklarımızın ve bölge başkentlerinin ana akım medyasında Türkiye'ye doğrudan atıf yapan, doğrulanmış haberler ve değerlendirmeler — kaynak dilinde toplanıp Türkçeleştirildi.
              </p>
            </div>

            {/* Verification Stats Badge Card */}
            <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-xl shadow-lg shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <span>Doğrulama Filtresi Aktif</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Spekülatif tahminler elendi • Doğrudan atıflar
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  Özel ad eşleşmesi zorunluluğu
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          {stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-4 pt-4 border-t border-slate-800/60">
              <div className="bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-lg">
                <div className="text-[11px] text-slate-400">Türkiye'den Bahseden</div>
                <div className="text-lg font-bold text-white font-mono flex items-baseline gap-1.5">
                  <span>{stats.countriesWithTurkeyMentionToday} Ülke</span>
                  <span className="text-xs text-rose-400 font-normal">%{stats.mentionPercentage}</span>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-lg">
                <div className="text-[11px] text-slate-400">Doğrulanmış Haber Sayısı</div>
                <div className="text-lg font-bold text-white font-mono">
                  {filteredArticles.length} <span className="text-xs text-slate-400 font-normal">Rapor</span>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-lg">
                <div className="text-[11px] text-slate-400">En Çok Bahseden Ülke</div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <span>{stats.topMentioningCountries[0]?.flag}</span>
                  <span className="truncate">{stats.topMentioningCountries[0]?.country}</span>
                  <span className="text-xs text-rose-400 font-mono font-bold">({stats.topMentioningCountries[0]?.count})</span>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-lg">
                <div className="text-[11px] text-slate-400">Öne Çıkan Gündem Alanı</div>
                <div className="text-xs font-bold text-slate-200 truncate mt-1">
                  {stats.dominantNarrativeTopics[0]?.topic || 'Diplomasi & İkili İlişkiler'}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="sticky top-0 z-30 bg-[#0b0f17]/95 border-b border-slate-800/80 px-4 sm:px-6 py-3 backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex flex-col gap-2.5">
          {/* Search and Category Row */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="50 ülke haberlerinde ara (örn: Vize, Doğu Akdeniz, Savunma, Doğalgaz, Koridor)..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Temizle
                </button>
              )}
            </div>

            {/* Category Filter Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-rose-500 w-full sm:w-auto"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'ALL' ? 'Tüm Kategoriler' : cat}
                  </option>
                ))}
              </select>

              <label className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={onlyVerified}
                  onChange={(e) => setOnlyVerified(e.target.checked)}
                  className="rounded text-rose-600 focus:ring-rose-500"
                />
                <span className="hidden sm:inline">Sadece Doğrulanmış</span>
              </label>
            </div>
          </div>

          {/* Region Chips Row */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[11px] text-slate-500 font-medium shrink-0 flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Bölge:
            </span>
            {REGIONS.map(reg => (
              <button
                key={reg}
                onClick={() => {
                  setSelectedRegion(reg);
                  setSelectedCountryFilter('ALL');
                }}
                className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-all text-xs font-medium ${
                  selectedRegion === reg
                    ? 'bg-rose-600 text-white shadow-sm shadow-rose-950'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {reg === 'ALL' ? 'Tüm Bölgeler (50 Ülke)' : reg}
              </button>
            ))}
          </div>

          {/* Country Quick Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[11px] text-slate-500 font-medium shrink-0">Ülke:</span>
            <button
              onClick={() => setSelectedCountryFilter('ALL')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                selectedCountryFilter === 'ALL'
                  ? 'bg-slate-200 text-slate-900 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Tümü ({availableCountries.length})
            </button>
            {availableCountries.map(country => (
              <button
                key={country.code}
                onClick={() => setSelectedCountryFilter(country.code)}
                className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] transition-all whitespace-nowrap ${
                  selectedCountryFilter === country.code
                    ? 'bg-rose-600 text-white font-bold'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <span>{country.flag}</span>
                <span>{country.name}</span>
                <span className="text-[10px] opacity-75 font-mono">({country.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Feed Stream */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-6 w-full">
        {filteredArticles.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/30">
            <Globe className="h-10 w-10 text-slate-600 mb-3" />
            <h3 className="text-base font-semibold text-white">Seçilen Kriterlere Uygun Haber Bulunamadı</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              Filtrelerinizi genişletmeyi veya arama kelimesini değiştirmeyi deneyebilirsiniz.
            </p>
            <button
              onClick={() => {
                setSelectedRegion('ALL');
                setSelectedCategory('ALL');
                setSelectedCountryFilter('ALL');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredArticles.map((article) => {
              return (
                <article
                  key={article.id}
                  id={`article-card-${article.id}`}
                  className="flex flex-col justify-between rounded-xl bg-[#0f172a]/90 border border-slate-800/90 hover:border-rose-700/60 p-4 sm:p-5 transition-all shadow-md hover:shadow-xl hover:shadow-rose-950/20 group"
                >
                  <div>
                    {/* Country & Source Header Bar */}
                    <div className="flex items-center justify-between border-b border-slate-800/70 pb-3 mb-3 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-xl" role="img" aria-label={article.countryName}>{article.flag}</span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <strong className="text-white font-bold">{article.countryName}</strong>
                            <span className="text-slate-500 font-mono text-[11px]">({article.capital})</span>
                          </div>
                          <div className="text-[10px] text-slate-400 flex items-center gap-1">
                            <span>{article.sourceName}</span>
                            <span>•</span>
                            <span className="text-slate-500">{article.sourceType}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {article.category}
                        </span>
                        <button
                          onClick={() => onSelectCountryForMap(article.countryCode)}
                          title="Bu ülkeyi jeopolitik haritada göster"
                          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-400 bg-slate-900 border border-slate-800 px-2 py-1 rounded transition-colors"
                        >
                          <MapPin className="h-3 w-3 text-rose-500" />
                          <span className="hidden sm:inline">Haritada Gör</span>
                        </button>
                      </div>
                    </div>

                    {/* Turkish Headline & Editorial Summary */}
                    <div className="mb-3">
                      <h2 
                        onClick={() => onOpenArticleModal(article)}
                        className="text-base sm:text-lg font-bold text-slate-100 hover:text-rose-300 transition-colors leading-snug cursor-pointer font-sans"
                      >
                        {article.turkishHeadline}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-sans">
                        {article.turkishSummary}
                      </p>
                    </div>

                    {/* Original Source Quote (Native Script) */}
                    <div className="bg-[#070b13] border-l-2 border-rose-500/70 p-2.5 rounded-r-lg mb-3">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                        <span className="flex items-center gap-1 font-mono text-rose-400/90 font-medium">
                          <Languages className="h-3 w-3" />
                          Kaynak Metin ({article.sourceLanguage})
                        </span>
                        <span className="text-slate-400 font-mono">Orijinal Dilinde</span>
                      </div>
                      <p className="text-xs text-slate-300 italic font-serif leading-relaxed line-clamp-2">
                        "{article.originalExcerpt || article.originalTitle}"
                      </p>
                    </div>

                    {/* Verification Layer Box (Anti-Hallucination Proof) */}
                    <div className="flex items-start gap-1.5 text-[11px] bg-emerald-950/30 border border-emerald-900/50 p-2 rounded-lg text-emerald-300/90 mb-3">
                      <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-emerald-300 text-[11px]">
                          Doğrulama Katmanı Geçti (Doğrudan Atıf)
                        </div>
                        <div className="text-[10px] text-emerald-400/80 font-mono mt-0.5">
                          Metinde eşleşen özel adlar: {article.verifiedNamedEntities.join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Metadata, Timeline Link, Original Source Link */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-500">
                        {new Date(article.publishedAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      {article.storyId && (
                        <button
                          onClick={() => onSelectStory(article.storyId!)}
                          className="flex items-center gap-1 text-[10px] bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 px-2 py-0.5 rounded hover:bg-indigo-900/60 transition-colors"
                        >
                          <GitBranch className="h-3 w-3" />
                          <span>Seyir Dosyası</span>
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenArticleModal(article)}
                        className="text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                      >
                        Ayrıntılar & Analiz
                      </button>
                      <a
                        href={article.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-2 py-1 rounded transition-colors"
                      >
                        <span>Orijinal Kaynak</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};
