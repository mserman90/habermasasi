import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  DisGundemItem, 
  CountryAgendaOverview, 
  StoryEvolutionTopic, 
  GeopoliticalStats, 
  MainNavTab 
} from './types';
import { 
  SEED_DIS_GUNDEM_ARTICLES, 
  SEED_COUNTRY_AGENDAS, 
  SEED_STORY_EVOLUTIONS, 
  INITIAL_GEOPOLITICAL_STATS,
  MONITORED_COUNTRIES
} from './data/countriesCatalog';
import { Header } from './components/Header';
import { TurkiyePerspectiveView } from './components/TurkiyePerspectiveView';
import { CountryAgendasView } from './components/CountryAgendasView';
import { RadarMap } from './components/RadarMap';
import { StoryEvolutionView } from './components/StoryEvolutionView';
import { ArchiveSearchView } from './components/ArchiveSearchView';
import { MethodologyModal } from './components/MethodologyModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { radarAudio } from './utils/audioSynthesizer';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainNavTab>('turkiye');
  const [articles, setArticles] = useState<DisGundemItem[]>(SEED_DIS_GUNDEM_ARTICLES);
  const [countries, setCountries] = useState<CountryAgendaOverview[]>([]);
  const [stories, setStories] = useState<StoryEvolutionTopic[]>(SEED_STORY_EVOLUTIONS);
  const [stats, setStats] = useState<GeopoliticalStats | null>(INITIAL_GEOPOLITICAL_STATS);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>('GR');
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  
  const [selectedArticleModal, setSelectedArticleModal] = useState<DisGundemItem | null>(null);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState<boolean>(false);

  // Initialize initial countries agenda dataset
  useEffect(() => {
    const formattedCountries: CountryAgendaOverview[] = MONITORED_COUNTRIES.map(c => {
      const existingSeed = SEED_COUNTRY_AGENDAS.find(a => a.countryCode === c.code);
      const turkeyMatches = SEED_DIS_GUNDEM_ARTICLES.filter(art => art.countryCode === c.code);

      return {
        countryCode: c.code,
        countryName: c.name,
        nameNative: c.nameNative,
        flag: c.flag,
        capital: c.capital,
        capitalCoords: c.capitalCoords,
        region: c.region,
        language: c.language,
        sourcesCount: c.sources.length,
        sources: c.sources,
        localDomesticHeadlines: existingSeed?.localDomesticHeadlines || [
          {
            titleNative: `${c.nameNative} Meclis Gündemi ve Sosyal Düzenlemeler`,
            titleTurkish: `${c.name} Parlamentosu yıllık bütçe ve kamu yatırımlarını oyluyor`,
            source: c.sources[0]?.name || 'Ana Akım Medya',
            category: 'İç Siyaset'
          }
        ],
        turkeyMentions: turkeyMatches,
        hasDirectTurkeyMention: turkeyMatches.length > 0
      };
    });

    setCountries(formattedCountries);
  }, []);

  // Fetch Live Feeds from Backend
  const loadLiveIntelligence = useCallback(async () => {
    setIsLoading(true);
    try {
      const [feedRes, countriesRes, statsRes, storiesRes] = await Promise.allSettled([
        fetch('/api/disgundem/feed').then(r => r.json()),
        fetch('/api/disgundem/countries').then(r => r.json()),
        fetch('/api/disgundem/stats').then(r => r.json()),
        fetch('/api/disgundem/stories').then(r => r.json())
      ]);

      if (feedRes.status === 'fulfilled' && feedRes.value?.ok && Array.isArray(feedRes.value.articles)) {
        setArticles(feedRes.value.articles);
      }

      if (countriesRes.status === 'fulfilled' && countriesRes.value?.ok && Array.isArray(countriesRes.value.countries)) {
        setCountries(countriesRes.value.countries);
      }

      if (statsRes.status === 'fulfilled' && statsRes.value?.ok && statsRes.value.stats) {
        setStats(statsRes.value.stats);
      }

      if (storiesRes.status === 'fulfilled' && storiesRes.value?.ok && Array.isArray(storiesRes.value.stories)) {
        setStories(storiesRes.value.stories);
      }

      if (soundEnabled) {
        radarAudio.playRadarPing();
      }
    } catch (err) {
      console.error('Failed to load live data:', err);
    } finally {
      setIsLoading(false);
    }
  }, [soundEnabled]);

  // Initial fetch on load
  useEffect(() => {
    loadLiveIntelligence();
    // Refresh feed every 5 minutes automatically
    const interval = setInterval(loadLiveIntelligence, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [loadLiveIntelligence]);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) {
      radarAudio.unmute();
      radarAudio.playRadarPing();
    } else {
      radarAudio.mute();
    }
  };

  const handleSelectCountryForMap = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
    setActiveTab('harita');
    if (soundEnabled) {
      radarAudio.playRadarPing();
    }
  };

  const handleSelectStory = (storyId: string) => {
    setSelectedStoryId(storyId);
    setActiveTab('seyir');
    if (soundEnabled) {
      radarAudio.playRadarPing();
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-[#0b0f17] text-slate-100 font-sans">
      {/* Top Main Navigation Header */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        stats={stats}
        isLoading={isLoading}
        onRefresh={loadLiveIntelligence}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenMethodology={() => setIsMethodologyOpen(true)}
      />

      {/* Primary Intelligence Workspace Views */}
      <main className="relative flex-1 flex flex-col overflow-hidden">
        {/* 1. Türkiye'ye Bakış Tab */}
        {activeTab === 'turkiye' && (
          <TurkiyePerspectiveView
            articles={articles}
            stats={stats}
            onSelectCountryForMap={handleSelectCountryForMap}
            onSelectStory={handleSelectStory}
            onOpenArticleModal={(art) => setSelectedArticleModal(art)}
          />
        )}

        {/* 2. Ülke Gündemleri Tab (Dual Output) */}
        {activeTab === 'ulkeler' && (
          <CountryAgendasView
            countries={countries}
            onSelectCountryForMap={handleSelectCountryForMap}
            onOpenArticleModal={(art) => setSelectedArticleModal(art)}
          />
        )}

        {/* 3. Jeopolitik Radar Haritası */}
        {activeTab === 'harita' && (
          <div className="flex-1 h-full w-full overflow-hidden">
            <RadarMap
              countries={countries}
              selectedCountryCode={selectedCountryCode}
              onSelectCountry={(code) => setSelectedCountryCode(code)}
              onOpenArticleModal={(art) => setSelectedArticleModal(art)}
            />
          </div>
        )}

        {/* 4. Seyir & Hikaye Takibi */}
        {activeTab === 'seyir' && (
          <StoryEvolutionView
            stories={stories}
            selectedStoryId={selectedStoryId}
            onSelectCountryForMap={handleSelectCountryForMap}
          />
        )}

        {/* 5. Arşiv & Arama Motoru */}
        {activeTab === 'arama' && (
          <ArchiveSearchView
            allArticles={articles}
            onOpenArticleModal={(art) => setSelectedArticleModal(art)}
            onSelectCountryForMap={handleSelectCountryForMap}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation (lg:hidden) */}
      <MobileBottomNav
        activeTab={activeTab}
        turkiyeCount={articles.length}
        countriesCount={countries.length}
        onTabChange={setActiveTab}
      />

      {/* Editorial Methodology Modal */}
      <MethodologyModal
        isOpen={isMethodologyOpen}
        onClose={() => setIsMethodologyOpen(false)}
      />

      {/* Article Deep Analysis Modal */}
      <ArticleDetailModal
        article={selectedArticleModal}
        onClose={() => setSelectedArticleModal(null)}
        onSelectCountryForMap={handleSelectCountryForMap}
        onSelectStory={handleSelectStory}
      />
    </div>
  );
}
