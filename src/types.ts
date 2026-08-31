export interface LocalSource {
  id: string;
  name: string;
  nameNative: string;
  url: string;
  type: 'Gazete' | 'Haber Ajansı' | 'Devlet/Resmi Yayın' | 'Bağımsız Medya' | 'TV/Radyo';
  reliability: 'Yüksek' | 'Ana Akım' | 'Bölgesel';
}

export interface CountryInfo {
  code: string;
  name: string;
  nameNative: string;
  capital: string;
  capitalCoords: [number, number]; // [lat, lng]
  flag: string;
  region: 'Komşular & Yakın Havza' | 'Ortadoğu & Kuzey Afrika' | 'Balkanlar & Doğu Avrupa' | 'Avrupa & Batı' | 'Kafkaslar & Orta Asya' | 'Afrika & Diğer';
  language: string;
  languageCode: string;
  sources: LocalSource[];
}

export interface DisGundemItem {
  id: string;
  countryCode: string;
  countryName: string;
  capital: string;
  flag: string;
  region: string;
  sourceName: string;
  sourceType: string;
  sourceLanguage: string;
  originalTitle: string;
  originalExcerpt: string;
  turkishHeadline: string;
  turkishSummary: string;
  category: 'Diplomasi & Güvenlik' | 'Ekonomi & Ticaret' | 'Enerji & Koridorlar' | 'Bölgesel Siyaset' | 'Savunma Sanayii' | 'Kamuoyu & Kültür';
  sentiment: 'Eleştirel' | 'Nötr / Bilgilendirici' | 'Yapıcı / Olumlu' | 'Güvenlik Odaklı';
  isDirectTurkeyReference: boolean; // Sıkı filtre: Türkiye doğrudan taraf mı / adı geçiyor mu
  verificationPassed: boolean; // Doğrulama katmanı: Başlıktaki özel adlar orijinal metinde geçiyor mu
  verifiedNamedEntities: string[]; // Kanıt gösterilen eşleşen terimler
  sourceUrl: string;
  publishedAt: string;
  storyId?: string; // Seyir / Hikaye takibi ID'si
}

export interface CountryAgendaOverview {
  countryCode: string;
  countryName: string;
  flag: string;
  capital: string;
  region: string;
  capitalCoords: [number, number];
  localDomesticHeadlines: {
    titleNative: string;
    titleTurkish: string;
    source: string;
    category: string;
  }[];
  turkeyMentions: DisGundemItem[];
  hasDirectTurkeyMention: boolean;
}

export interface StoryTimelinePoint {
  id: string;
  date: string;
  dayNumber: number;
  countryCode: string;
  countryName: string;
  flag: string;
  headlineTurkish: string;
  summaryTurkish: string;
  sourceName: string;
  stance: 'Sert Tepki' | 'Temkinli / Bekle-Gör' | 'Destek / İş Birliği' | 'Analitik Değerlendirme';
}

export interface StoryEvolutionTopic {
  id: string;
  title: string;
  category: string;
  startDate: string;
  lastUpdated: string;
  status: 'Gelişiyor' | 'Bölgesel Yayılım' | 'Diplomatik Masada' | 'Sonuçlandı';
  summary: string;
  participatingCountries: string[];
  timeline: StoryTimelinePoint[];
}

export interface GeopoliticalStats {
  totalMonitoredCountries: number;
  totalMonitoredSources: number;
  countriesWithTurkeyMentionToday: number;
  totalDirectArticlesToday: number;
  mentionPercentage: number;
  regionalBreakdown: Record<string, number>;
  topMentioningCountries: { country: string; flag: string; count: number }[];
  dominantNarrativeTopics: { topic: string; count: number; percentage: number }[];
}

export type MainNavTab = 'turkiye' | 'ulkeler' | 'harita' | 'seyir' | 'arama' | 'metodoloji';
