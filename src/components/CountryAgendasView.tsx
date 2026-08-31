import React, { useState, useMemo } from 'react';
import { CountryAgendaOverview, DisGundemItem } from '../types';
import { 
  Layers, 
  Globe, 
  Search, 
  MapPin, 
  ExternalLink, 
  Radio, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  Languages,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface CountryAgendasViewProps {
  countries: CountryAgendaOverview[];
  onSelectCountryForMap: (countryCode: string) => void;
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

export const CountryAgendasView: React.FC<CountryAgendasViewProps> = ({
  countries,
  onSelectCountryForMap,
  onOpenArticleModal
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyMentioningTurkey, setOnlyMentioningTurkey] = useState<boolean>(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('GR');

  const filteredCountries = useMemo(() => {
    return countries.filter(c => {
      if (selectedRegion !== 'ALL' && c.region !== selectedRegion) return false;
      if (onlyMentioningTurkey && !c.hasDirectTurkeyMention) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inName = c.countryName.toLowerCase().includes(q);
        const inCapital = c.capital.toLowerCase().includes(q);
        const inRegion = c.region.toLowerCase().includes(q);
        if (!inName && !inCapital && !inRegion) return false;
      }
      return true;
    });
  }, [countries, selectedRegion, onlyMentioningTurkey, searchQuery]);

  const activeCountry = useMemo(() => {
    return countries.find(c => c.countryCode === selectedCountryCode) || countries[0];
  }, [countries, selectedCountryCode]);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto bg-[#0b0f17] text-slate-100 pb-16">
      {/* Top Explanation Header */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-[#111827] to-[#0b0f17] px-4 sm:px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2 py-0.5 rounded">
                  <Layers className="h-3.5 w-3.5" />
                  İkili Çıktı Mimarisi
                </span>
                <span className="text-xs text-slate-400 font-mono">50 Ülke Gözlem Masası</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Ülke Gündemleri ve Yerel Manşetler
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                Her ülkenin <strong>kendi iç gündemi</strong> (yerelde o gün gerçekten ne konuşulduğu) ile <strong>o ülkenin basınında Türkiye'ye dair çıkan haberler</strong> ayrı iki havuz olarak analiz edilir. Böylece Türkiye konulu haberler iç siyaset gürültüsünde kaybolmaz.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setOnlyMentioningTurkey(!onlyMentioningTurkey)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  onlyMentioningTurkey
                    ? 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-950'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                }`}
              >
                <Radio className="h-3.5 w-3.5" />
                <span>Sadece Türkiye'yi Konuşan Ülkeler</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 bg-[#0b0f17]/95 border-b border-slate-800/80 px-4 sm:px-6 py-2.5 backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ülke veya başkent ara (Atina, Kahire, Sofya)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            {REGIONS.map(reg => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-all text-xs font-medium ${
                  selectedRegion === reg
                    ? 'bg-rose-600 text-white font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {reg === 'ALL' ? 'Tüm Bölgeler' : reg}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Split Layout: Left Country List, Right Country Intelligence Dossier */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 50 Countries Grid / Selector */}
        <div className="lg:col-span-5 flex flex-col gap-2 overflow-y-auto max-h-[750px] pr-1">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
            <span>ÜLKE LİSTESİ ({filteredCountries.length})</span>
            <span>TÜRKİYE REFERANSI</span>
          </div>

          {filteredCountries.map(country => {
            const isSelected = activeCountry?.countryCode === country.countryCode;
            return (
              <button
                key={country.countryCode}
                id={`country-list-btn-${country.countryCode}`}
                onClick={() => setSelectedCountryCode(country.countryCode)}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all text-left group ${
                  isSelected
                    ? 'bg-slate-900 border-rose-500 shadow-md shadow-rose-950/30 ring-1 ring-rose-500/50'
                    : 'bg-[#0f172a]/70 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={country.countryName}>{country.flag}</span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <strong className={`font-bold text-sm ${isSelected ? 'text-rose-400' : 'text-white group-hover:text-rose-300'}`}>
                        {country.countryName}
                      </strong>
                      <span className="text-slate-500 text-xs font-mono">({country.capital})</span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans">
                      {country.region}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {country.hasDirectTurkeyMention ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-rose-950/80 border border-rose-700/60 text-rose-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                      {country.turkeyMentions.length} Haber
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded">
                      Gündemde Yok
                    </span>
                  )}
                  <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? 'text-rose-400 translate-x-0.5' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Selected Country Dual Intelligence Dossier */}
        {activeCountry && (
          <div className="lg:col-span-7 flex flex-col gap-4 bg-[#0f172a] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
            {/* Dossier Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label={activeCountry.countryName}>{activeCountry.flag}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-white font-sans">{activeCountry.countryName}</h2>
                    <span className="text-xs text-slate-400 font-mono">/ {activeCountry.capital}</span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                    <span>Bölge: <strong className="text-slate-300">{activeCountry.region}</strong></span>
                    <span>•</span>
                    <span>Kaynak Dili: <strong className="text-rose-400 font-mono">{activeCountry.language || 'Yerel Dil'}</strong></span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectCountryForMap(activeCountry.countryCode)}
                className="flex items-center gap-1 text-xs bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 px-3 py-1.5 rounded-lg transition-all"
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>Haritada Odaklan</span>
              </button>
            </div>

            {/* Output 1: Ülkenin Kendi İç Gündemi (Domestic Headlines) */}
            <div className="rounded-xl bg-[#080d16] border border-slate-800/80 p-4">
              <div className="flex items-center justify-between mb-3 border-b border-slate-800/60 pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-amber-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                    1. ÇIKTI: {activeCountry.countryName.toUpperCase()} YEREL İÇ GÜNDEMİ
                  </h3>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">O gün yerelde ne konuşuldu</span>
              </div>

              <div className="space-y-3">
                {activeCountry.localDomesticHeadlines.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800 p-3 rounded-lg">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1 font-mono">
                      <span className="text-amber-400/90 font-semibold">{item.source} • {item.category}</span>
                      <span className="text-slate-400">Yerel Manşet #{idx + 1}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 leading-snug">
                      {item.titleTurkish}
                    </div>
                    <div className="text-[11px] text-slate-400 italic font-serif mt-1">
                      "{item.titleNative}"
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Output 2: O Ülke Basınında Türkiye'ye Dair Ne Çıktı? (Direct References) */}
            <div className="rounded-xl bg-[#080d16] border border-rose-900/40 p-4">
              <div className="flex items-center justify-between mb-3 border-b border-rose-900/50 pb-2">
                <div className="flex items-center gap-2">
                  <Radio className="h-4 w-4 text-rose-500 animate-pulse" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
                    2. ÇIKTI: {activeCountry.countryName.toUpperCase()} BASININDA TÜRKİYE
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-rose-300 font-bold">
                  {activeCountry.turkeyMentions.length} Doğrudan Rapor
                </span>
              </div>

              {activeCountry.turkeyMentions.length === 0 ? (
                <div className="p-6 text-center border border-dashed border-slate-800 rounded-lg text-xs text-slate-400">
                  <p>Bugün {activeCountry.countryName} ana akım basınında Türkiye'ye doğrudan atıf yapan doğrulanmış bir madde bulunmadı.</p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    (Spekülatif "etkileyebilir" tahminleri editoryal filtre gereği elenmiştir.)
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {activeCountry.turkeyMentions.map(article => (
                    <div 
                      key={article.id} 
                      className="bg-slate-900/90 border border-slate-800 hover:border-rose-700/60 p-3.5 rounded-lg transition-all"
                    >
                      <div className="flex items-center justify-between text-[10px] mb-1.5">
                        <span className="font-mono text-rose-400 font-semibold">{article.sourceName}</span>
                        <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono">{article.category}</span>
                      </div>

                      <h4 
                        onClick={() => onOpenArticleModal(article)}
                        className="text-sm font-bold text-white hover:text-rose-300 cursor-pointer transition-colors leading-snug"
                      >
                        {article.turkishHeadline}
                      </h4>

                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {article.turkishSummary}
                      </p>

                      <div className="mt-2 text-[10px] bg-emerald-950/40 border border-emerald-900/40 p-1.5 rounded flex items-center gap-1.5 text-emerald-300">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>Doğrulandı: {article.verifiedNamedEntities.join(', ')}</span>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px]">
                        <button
                          onClick={() => onOpenArticleModal(article)}
                          className="text-rose-400 hover:text-rose-300 font-semibold"
                        >
                          Detaylı Analiz
                        </button>
                        <a
                          href={article.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-slate-400 hover:text-white"
                        >
                          <span>Kaynak Metin</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
