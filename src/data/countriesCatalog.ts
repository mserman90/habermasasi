import { CountryInfo, CountryAgendaOverview, DisGundemItem, StoryEvolutionTopic, GeopoliticalStats } from '../types';

export const MONITORED_COUNTRIES: CountryInfo[] = [
  // 1. KOMŞULAR VE YAKIN HAVZA
  {
    code: 'GR',
    name: 'Yunanistan',
    nameNative: 'Ελλάδα',
    capital: 'Atina',
    capitalCoords: [37.9838, 23.7275],
    flag: '🇬🇷',
    region: 'Komşular & Yakın Havza',
    language: 'Yunanca',
    languageCode: 'el',
    sources: [
      { id: 'gr-kathimerini', name: 'Kathimerini', nameNative: 'Η Καθημερινή', url: 'https://www.kathimerini.gr', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'gr-tanea', name: 'Ta Nea', nameNative: 'Τα Νέα', url: 'https://www.tanea.gr', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'gr-tovima', name: 'To Vima', nameNative: 'Το Βήμα', url: 'https://www.tovima.gr', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'gr-protothema', name: 'Proto Thema', nameNative: 'Πρώτο Θέμα', url: 'https://www.protothema.gr', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'gr-amna', name: 'ANA-MPA', nameNative: 'Αθηναϊκό-Μακεδονικό Πρακτορείο', url: 'https://www.amna.gr', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'gr-ert', name: 'ERT News', nameNative: 'ΕΡΤ', url: 'https://www.ertnews.gr', type: 'Devlet/Resmi Yayın', reliability: 'Yüksek' },
      { id: 'gr-naftemporiki', name: 'Naftemporiki', nameNative: 'Η Ναυτεμπορική', url: 'https://www.naftemporiki.gr', type: 'Gazete', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'BG',
    name: 'Bulgaristan',
    nameNative: 'България',
    capital: 'Sofya',
    capitalCoords: [42.6977, 23.3219],
    flag: '🇧🇬',
    region: 'Komşular & Yakın Havza',
    language: 'Bulgarca',
    languageCode: 'bg',
    sources: [
      { id: 'bg-24chasa', name: '24 Chasa', nameNative: '24 Часа', url: 'https://www.24chasa.bg', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'bg-dnevnik', name: 'Dnevnik', nameNative: 'Дневник', url: 'https://www.dnevnik.bg', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'bg-bta', name: 'BTA', nameNative: 'Българска телеграфна агенция', url: 'https://www.bta.bg', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'bg-trud', name: 'Trud', nameNative: 'Труд', url: 'https://trud.bg', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'bg-bnt', name: 'BNT News', nameNative: 'Българска национална телевизия', url: 'https://bntnews.bg', type: 'Devlet/Resmi Yayın', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'GE',
    name: 'Gürcistan',
    nameNative: 'საქართველო',
    capital: 'Tiflis',
    capitalCoords: [41.7151, 44.8271],
    flag: '🇬🇪',
    region: 'Komşular & Yakın Havza',
    language: 'Gürcüce',
    languageCode: 'ka',
    sources: [
      { id: 'ge-civil', name: 'Civil Georgia', nameNative: 'Civil.ge', url: 'https://civil.ge', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'ge-ipn', name: 'Interpressnews', nameNative: 'ინტერპრესნიუსი', url: 'https://www.interpressnews.ge', type: 'Haber Ajansı', reliability: 'Ana Akım' },
      { id: 'ge-1tv', name: '1TV Georgia', nameNative: 'საქართველოს პირველი არხი', url: 'https://1tv.ge', type: 'Devlet/Resmi Yayın', reliability: 'Yüksek' },
      { id: 'ge-agenda', name: 'Agenda.ge', nameNative: 'Agenda.ge', url: 'https://agenda.ge', type: 'Bağımsız Medya', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'AM',
    name: 'Ermenistan',
    nameNative: 'Հայաստան',
    capital: 'Erivan',
    capitalCoords: [40.1792, 44.4991],
    flag: '🇦🇲',
    region: 'Komşular & Yakın Havza',
    language: 'Ermenice',
    languageCode: 'hy',
    sources: [
      { id: 'am-armenpress', name: 'Armenpress', nameNative: 'Արմենպրես', url: 'https://armenpress.am', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'am-civilnet', name: 'CivilNet', nameNative: 'ՍիվիլՆեթ', url: 'https://www.civilnet.am', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'am-azatutyun', name: 'Azatutyun (RFE/RL)', nameNative: 'Ազատություն ռադիոկայան', url: 'https://www.azatutyun.am', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'am-panorama', name: 'Panorama', nameNative: 'Պանորամա', url: 'https://www.panorama.am', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'am-newsam', name: 'News.am', nameNative: 'News.am', url: 'https://news.am', type: 'Bağımsız Medya', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'AZ',
    name: 'Azerbaycan',
    nameNative: 'Azərbaycan',
    capital: 'Bakü',
    capitalCoords: [40.4093, 49.8671],
    flag: '🇦🇿',
    region: 'Komşular & Yakın Havza',
    language: 'Azerbaycanca',
    languageCode: 'az',
    sources: [
      { id: 'az-azertac', name: 'AZERTAC', nameNative: 'AZƏRTAC', url: 'https://azertag.az', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'az-apa', name: 'APA', nameNative: 'Azəri Press Agentliyi', url: 'https://apa.az', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'az-trend', name: 'Trend News', nameNative: 'Trend İnformasiya Agentliyi', url: 'https://trend.az', type: 'Haber Ajansı', reliability: 'Ana Akım' },
      { id: 'az-oxu', name: 'Oxu.az', nameNative: 'Oxu.az', url: 'https://oxu.az', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'az-haqqin', name: 'Haqqin.az', nameNative: 'Haqqin.az', url: 'https://haqqin.az', type: 'Bağımsız Medya', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'IQ',
    name: 'Irak',
    nameNative: 'العراق',
    capital: 'Bağdat',
    capitalCoords: [33.3152, 44.3661],
    flag: '🇮🇶',
    region: 'Komşular & Yakın Havza',
    language: 'Arapça / Kürtçe',
    languageCode: 'ar',
    sources: [
      { id: 'iq-ina', name: 'INA', nameNative: 'وكالة الأنباء العراقية', url: 'https://ina.iq', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'iq-baghdad-today', name: 'Baghdad Today', nameNative: 'بغداد اليوم', url: 'https://baghdadtoday.news', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'iq-alsumaria', name: 'Al Sumaria TV', nameNative: 'السومرية', url: 'https://www.alsumaria.tv', type: 'TV/Radyo', reliability: 'Ana Akım' },
      { id: 'iq-rudaw', name: 'Rudaw', nameNative: 'رووداو', url: 'https://www.rudaw.net', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'iq-shafaq', name: 'Shafaq News', nameNative: 'شفق نيوز', url: 'https://shafaq.com', type: 'Haber Ajansı', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'IR',
    name: 'İran',
    nameNative: 'ایران',
    capital: 'Tahran',
    capitalCoords: [35.6892, 51.3890],
    flag: '🇮🇷',
    region: 'Komşular & Yakın Havza',
    language: 'Farsça',
    languageCode: 'fa',
    sources: [
      { id: 'ir-irna', name: 'IRNA', nameNative: 'خبرگزاری جمهوری اسلامی', url: 'https://www.irna.ir', type: 'Devlet/Resmi Yayın', reliability: 'Yüksek' },
      { id: 'ir-tehran-times', name: 'Tehran Times', nameNative: 'تهران تایمز', url: 'https://www.tehrantimes.com', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'ir-isna', name: 'ISNA', nameNative: 'ایسنا', url: 'https://www.isna.ir', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'ir-mehr', name: 'Mehr News', nameNative: 'خبرگزاری مهر', url: 'https://www.mehrnews.com', type: 'Haber Ajansı', reliability: 'Ana Akım' },
      { id: 'ir-tasnim', name: 'Tasnim News', nameNative: 'تسنیم', url: 'https://www.tasnimnews.com', type: 'Haber Ajansı', reliability: 'Ana Akım' },
      { id: 'ir-shargh', name: 'Shargh Daily', nameNative: 'روزنامه شرق', url: 'https://www.sharghdaily.com', type: 'Gazete', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'SY',
    name: 'Suriye',
    nameNative: 'سوريا',
    capital: 'Şam',
    capitalCoords: [33.5138, 36.2765],
    flag: '🇸🇾',
    region: 'Komşular & Yakın Havza',
    language: 'Arapça',
    languageCode: 'ar',
    sources: [
      { id: 'sy-sana', name: 'SANA', nameNative: 'الوكالة العربية السورية للأنباء', url: 'https://sana.sy', type: 'Devlet/Resmi Yayın', reliability: 'Yüksek' },
      { id: 'sy-alwatan', name: 'Al-Watan', nameNative: 'جريدة الوطن', url: 'https://alwatan.sy', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'sy-enabbaladi', name: 'Enab Baladi', nameNative: 'عنب بلدي', url: 'https://www.enabbaladi.net', type: 'Bağımsız Medya', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'CY',
    name: 'Kıbrıs Rum Kesimi',
    nameNative: 'Κύπρος',
    capital: 'Lefkoşa',
    capitalCoords: [35.1856, 33.3823],
    flag: '🇨🇾',
    region: 'Komşular & Yakın Havza',
    language: 'Yunanca',
    languageCode: 'el',
    sources: [
      { id: 'cy-philenews', name: 'Phileleftheros', nameNative: 'Ο Φιλελεύθερος', url: 'https://www.philenews.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'cy-cyprus-mail', name: 'Cyprus Mail', nameNative: 'Cyprus Mail', url: 'https://cyprus-mail.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'cy-sigmalive', name: 'SigmaLive', nameNative: 'SigmaLive', url: 'https://www.sigmalive.com', type: 'Bağımsız Medya', reliability: 'Ana Akım' }
    ]
  },

  // 2. ORTADOĞU VE KUZEY AFRİKA
  {
    code: 'EG',
    name: 'Mısır',
    nameNative: 'مصر',
    capital: 'Kahire',
    capitalCoords: [30.0444, 31.2357],
    flag: '🇪🇬',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'Arapça',
    languageCode: 'ar',
    sources: [
      { id: 'eg-ahram', name: 'Al-Ahram', nameNative: 'الأهرام', url: 'https://gate.ahram.org.eg', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'eg-youm7', name: 'Youm7', nameNative: 'اليوم السابع', url: 'https://www.youm7.com', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'eg-shorouk', name: 'Al-Shorouk', nameNative: 'الشروق', url: 'https://www.shorouknews.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'eg-almasry', name: 'Al-Masry Al-Youm', nameNative: 'المصري اليوم', url: 'https://www.almasryalyoum.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'eg-mena', name: 'MENA', nameNative: 'وكالة أنباء الشرق الأوسط', url: 'https://www.mena.org.eg', type: 'Haber Ajansı', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'SA',
    name: 'Suudi Arabistan',
    nameNative: 'المملكة العربية السعودية',
    capital: 'Riyad',
    capitalCoords: [24.7136, 46.6753],
    flag: '🇸🇦',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'Arapça',
    languageCode: 'ar',
    sources: [
      { id: 'sa-asharq', name: 'Asharq Al-Awsat', nameNative: 'الشرق الأوسط', url: 'https://aawsat.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'sa-okaz', name: 'Okaz', nameNative: 'عكاظ', url: 'https://www.okaz.com.sa', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'sa-spa', name: 'SPA', nameNative: 'وكالة الأنباء السعودية', url: 'https://www.spa.gov.sa', type: 'Devlet/Resmi Yayın', reliability: 'Yüksek' },
      { id: 'sa-arabnews', name: 'Arab News', nameNative: 'Arab News', url: 'https://www.arabnews.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'sa-riyadh', name: 'Al-Riyadh', nameNative: 'جريدة الرياض', url: 'https://www.alriyadh.com', type: 'Gazete', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'AE',
    name: 'BAE',
    nameNative: 'الإمارات العربية المتحدة',
    capital: 'Abu Dabi',
    capitalCoords: [24.4539, 54.3773],
    flag: '🇦🇪',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'Arapça',
    languageCode: 'ar',
    sources: [
      { id: 'ae-national', name: 'The National', nameNative: 'The National', url: 'https://www.thenationalnews.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'ae-bayan', name: 'Al-Bayan', nameNative: 'البيان', url: 'https://www.albayan.ae', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'ae-wam', name: 'WAM', nameNative: 'وكالة أنباء الإمارات', url: 'https://www.wam.ae', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'ae-khaleej', name: 'Al-Khaleej', nameNative: 'الخليج', url: 'https://www.alkhaleej.ae', type: 'Gazete', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'QA',
    name: 'Katar',
    nameNative: 'قطر',
    capital: 'Doha',
    capitalCoords: [25.2854, 51.5310],
    flag: '🇶🇦',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'Arapça',
    languageCode: 'ar',
    sources: [
      { id: 'qa-aljazeera', name: 'Al Jazeera', nameNative: 'الجزيرة', url: 'https://www.aljazeera.net', type: 'TV/Radyo', reliability: 'Yüksek' },
      { id: 'qa-raya', name: 'Al-Raya', nameNative: 'الراية', url: 'https://www.raya.com', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'qa-qna', name: 'QNA', nameNative: 'وكالة الأنباء القطرية', url: 'https://www.qna.org.qa', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'qa-sharq', name: 'Al-Sharq', nameNative: 'الشرق', url: 'https://al-sharq.com', type: 'Gazete', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'IL',
    name: 'İsrail',
    nameNative: 'ישראל',
    capital: 'Tel Aviv',
    capitalCoords: [32.0853, 34.7818],
    flag: '🇮🇱',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'İbranice',
    languageCode: 'he',
    sources: [
      { id: 'il-haaretz', name: 'Haaretz', nameNative: 'הארץ', url: 'https://www.haaretz.co.il', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'il-ynet', name: 'Ynet / Yedioth Ahronoth', nameNative: 'ידיעות אחרונות / Ynet', url: 'https://www.ynet.co.il', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'il-jpost', name: 'The Jerusalem Post', nameNative: 'The Jerusalem Post', url: 'https://www.jpost.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'il-israelhayom', name: 'Israel Hayom', nameNative: 'ישראל היום', url: 'https://www.israelhayom.co.il', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'il-calcalist', name: 'Calcalist', nameNative: 'כלכליסט', url: 'https://www.calcalist.co.il', type: 'Gazete', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'LB',
    name: 'Lübnan',
    nameNative: 'لبنان',
    capital: 'Beyrut',
    capitalCoords: [33.8938, 35.5018],
    flag: '🇱🇧',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'Arapça / Fransızca',
    languageCode: 'ar',
    sources: [
      { id: 'lb-naharnet', name: 'Naharnet', nameNative: 'نهارنت', url: 'https://www.naharnet.com', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'lb-lorient', name: 'L’Orient-Le Jour', nameNative: 'L’Orient-Le Jour', url: 'https://www.lorientlejour.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'lb-an-nahar', name: 'An-Nahar', nameNative: 'النهار', url: 'https://www.annahar.com', type: 'Gazete', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'JO',
    name: 'Ürdün',
    nameNative: 'الأردن',
    capital: 'Amman',
    capitalCoords: [31.9454, 35.9284],
    flag: '🇯🇴',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'Arapça',
    languageCode: 'ar',
    sources: [
      { id: 'jo-alghad', name: 'Al-Ghad', nameNative: 'الغد', url: 'https://alghad.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'jo-petra', name: 'Petra News Agency', nameNative: 'وكالة الأنباء الأردنية', url: 'https://petra.gov.jo', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'jo-dustour', name: 'Ad-Dustour', nameNative: 'الدستور', url: 'https://www.addustour.com', type: 'Gazete', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'DZ',
    name: 'Cezayir',
    nameNative: 'الجزائر',
    capital: 'Cezayir',
    capitalCoords: [36.7538, 3.0588],
    flag: '🇩🇿',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'Arapça / Fransızca',
    languageCode: 'ar',
    sources: [
      { id: 'dz-aps', name: 'APS', nameNative: 'وكالة الأنباء الجزائرية', url: 'https://www.aps.dz', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'dz-elwatan', name: 'El Watan', nameNative: 'El Watan', url: 'https://elwatan-dz.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'dz-tsa', name: 'TSA Algerie', nameNative: 'Tout sur l\'Algérie', url: 'https://www.tsa-algerie.com', type: 'Bağımsız Medya', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'LY',
    name: 'Libya',
    nameNative: 'ليبيا',
    capital: 'Trablus',
    capitalCoords: [32.8872, 13.1913],
    flag: '🇱🇾',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'Arapça',
    languageCode: 'ar',
    sources: [
      { id: 'ly-lana', name: 'LANA', nameNative: 'وكالة الأنباء الليبية', url: 'https://lana.gov.ly', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'ly-alwasat', name: 'Alwasat', nameNative: 'بوابة الوسط', url: 'https://alwasat.ly', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'ly-observer', name: 'The Libya Observer', nameNative: 'The Libya Observer', url: 'https://www.libyaobserver.ly', type: 'Bağımsız Medya', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'TN',
    name: 'Tunus',
    nameNative: 'تونس',
    capital: 'Tunus',
    capitalCoords: [36.8065, 10.1815],
    flag: '🇹🇳',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'Arapça',
    languageCode: 'ar',
    sources: [
      { id: 'tn-tap', name: 'TAP', nameNative: 'وكالة تونس إفريقيا للأنباء', url: 'https://www.tap.info.tn', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'tn-businessnews', name: 'Business News', nameNative: 'Business News Tunisie', url: 'https://www.businessnews.com.tn', type: 'Bağımsız Medya', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'MA',
    name: 'Fas',
    nameNative: 'المغرب',
    capital: 'Rabat',
    capitalCoords: [34.0209, -6.8416],
    flag: '🇲🇦',
    region: 'Ortadoğu & Kuzey Afrika',
    language: 'Arapça / Fransızca',
    languageCode: 'ar',
    sources: [
      { id: 'ma-map', name: 'MAP', nameNative: 'وكالة المغرب العربي للأنباء', url: 'https://www.mapnews.ma', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'ma-hespress', name: 'Hespress', nameNative: 'هسبريس', url: 'https://www.hespress.com', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'ma-le360', name: 'Le360', nameNative: 'Le360', url: 'https://fr.le360.ma', type: 'Bağımsız Medya', reliability: 'Ana Akım' }
    ]
  },

  // 3. BALKANLAR VE DOĞU AVRUPA
  {
    code: 'RS',
    name: 'Sırbistan',
    nameNative: 'Србија',
    capital: 'Belgrad',
    capitalCoords: [44.7866, 20.4489],
    flag: '🇷🇸',
    region: 'Balkanlar & Doğu Avrupa',
    language: 'Sırpça',
    languageCode: 'sr',
    sources: [
      { id: 'rs-politika', name: 'Politika', nameNative: 'Политика', url: 'https://www.politika.rs', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'rs-b92', name: 'B92', nameNative: 'Б92', url: 'https://www.b92.net', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'rs-tanjug', name: 'Tanjug', nameNative: 'Танјуг', url: 'https://www.tanjug.rs', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'rs-danas', name: 'Danas', nameNative: 'Данас', url: 'https://www.danas.rs', type: 'Gazete', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'BA',
    name: 'Bosna-Hersek',
    nameNative: 'Bosna i Hercegovina',
    capital: 'Saraybosna',
    capitalCoords: [43.8563, 18.4131],
    flag: '🇧🇦',
    region: 'Balkanlar & Doğu Avrupa',
    language: 'Boşnakça',
    languageCode: 'bs',
    sources: [
      { id: 'ba-klix', name: 'Klix.ba', nameNative: 'Klix.ba', url: 'https://www.klix.ba', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'ba-oslobodjenje', name: 'Oslobođenje', nameNative: 'Oslobođenje', url: 'https://www.oslobodjenje.ba', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'ba-avaz', name: 'Dnevni Avaz', nameNative: 'Dnevni avaz', url: 'https://avaz.ba', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'ba-fena', name: 'FENA', nameNative: 'Federalna novinska agencija', url: 'https://fena.ba', type: 'Haber Ajansı', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'RO',
    name: 'Romanya',
    nameNative: 'România',
    capital: 'Bükreş',
    capitalCoords: [44.4268, 26.1025],
    flag: '🇷🇴',
    region: 'Balkanlar & Doğu Avrupa',
    language: 'Romence',
    languageCode: 'ro',
    sources: [
      { id: 'ro-agerpres', name: 'Agerpres', nameNative: 'Agerpres', url: 'https://www.agerpres.ro', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'ro-digi24', name: 'Digi24', nameNative: 'Digi24', url: 'https://www.digi24.ro', type: 'TV/Radyo', reliability: 'Ana Akım' },
      { id: 'ro-adevarul', name: 'Adevărul', nameNative: 'Adevărul', url: 'https://adevarul.ro', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'ro-hotnews', name: 'HotNews', nameNative: 'HotNews.ro', url: 'https://www.hotnews.ro', type: 'Bağımsız Medya', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'HU',
    name: 'Macaristan',
    nameNative: 'Magyarország',
    capital: 'Budapeşte',
    capitalCoords: [47.4979, 19.0402],
    flag: '🇭🇺',
    region: 'Balkanlar & Doğu Avrupa',
    language: 'Macarca',
    languageCode: 'hu',
    sources: [
      { id: 'hu-magyarnemzet', name: 'Magyar Nemzet', nameNative: 'Magyar Nemzet', url: 'https://magyarnemzet.hu', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'hu-index', name: 'Index.hu', nameNative: 'Index.hu', url: 'https://index.hu', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'hu-telex', name: 'Telex', nameNative: 'Telex.hu', url: 'https://telex.hu', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'hu-mti', name: 'MTI', nameNative: 'Magyar Távirati Iroda', url: 'https://mti.hu', type: 'Haber Ajansı', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'MK',
    name: 'Kuzey Makedonya',
    nameNative: 'Северна Македонија',
    capital: 'Üsküp',
    capitalCoords: [41.9981, 21.4254],
    flag: '🇲🇰',
    region: 'Balkanlar & Doğu Avrupa',
    language: 'Makedonca',
    languageCode: 'mk',
    sources: [
      { id: 'mk-mia', name: 'MIA', nameNative: 'Медиумска информативна агенција', url: 'https://mia.mk', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'mk-nova', name: 'Nova Makedonija', nameNative: 'Нова Македонија', url: 'https://novamakedonija.com.mk', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'mk-vecer', name: 'Večer', nameNative: 'Вечер', url: 'https://vecer.mk', type: 'Gazete', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'AL',
    name: 'Arnavutluk',
    nameNative: 'Shqipëria',
    capital: 'Tiran',
    capitalCoords: [41.3275, 19.8187],
    flag: '🇦🇱',
    region: 'Balkanlar & Doğu Avrupa',
    language: 'Arnavutça',
    languageCode: 'sq',
    sources: [
      { id: 'al-ata', name: 'ATA', nameNative: 'Agjencia Telegrafike Shqiptare', url: 'https://ata.gov.al', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'al-panorama', name: 'Panorama', nameNative: 'Gazeta Panorama', url: 'https://www.panorama.com.al', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'al-topchannel', name: 'Top Channel', nameNative: 'Top Channel', url: 'https://top-channel.tv', type: 'TV/Radyo', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'UA',
    name: 'Ukrayna',
    nameNative: 'Україна',
    capital: 'Kiev',
    capitalCoords: [50.4501, 30.5234],
    flag: '🇺🇦',
    region: 'Balkanlar & Doğu Avrupa',
    language: 'Ukraynaca',
    languageCode: 'uk',
    sources: [
      { id: 'ua-ukrinform', name: 'Ukrinform', nameNative: 'Укрінформ', url: 'https://www.ukrinform.ua', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'ua-pravda', name: 'Ukrayinska Pravda', nameNative: 'Українська правда', url: 'https://www.pravda.com.ua', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'ua-kyivindependent', name: 'The Kyiv Independent', nameNative: 'The Kyiv Independent', url: 'https://kyivindependent.com', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'ua-unian', name: 'UNIAN', nameNative: 'УНІАН', url: 'https://www.unian.ua', type: 'Haber Ajansı', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'RU',
    name: 'Rusya',
    nameNative: 'Россия',
    capital: 'Moskova',
    capitalCoords: [55.7558, 37.6173],
    flag: '🇷🇺',
    region: 'Balkanlar & Doğu Avrupa',
    language: 'Rusça',
    languageCode: 'ru',
    sources: [
      { id: 'ru-kommersant', name: 'Kommersant', nameNative: 'Коммерсантъ', url: 'https://www.kommersant.ru', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'ru-ria', name: 'RIA Novosti', nameNative: 'РИА Новости', url: 'https://ria.ru', type: 'Devlet/Resmi Yayın', reliability: 'Ana Akım' },
      { id: 'ru-tass', name: 'TASS', nameNative: 'ТАСС', url: 'https://tass.ru', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'ru-rbc', name: 'RBC', nameNative: 'РБК', url: 'https://www.rbc.ru', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'ru-izvestia', name: 'Izvestia', nameNative: 'Известия', url: 'https://iz.ru', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'ru-vedomosti', name: 'Vedomosti', nameNative: 'Ведомости', url: 'https://www.vedomosti.ru', type: 'Gazete', reliability: 'Yüksek' }
    ]
  },

  // 4. AVRUPA VE BATI
  {
    code: 'DE',
    name: 'Almanya',
    nameNative: 'Deutschland',
    capital: 'Berlin',
    capitalCoords: [52.5200, 13.4050],
    flag: '🇩🇪',
    region: 'Avrupa & Batı',
    language: 'Almanca',
    languageCode: 'de',
    sources: [
      { id: 'de-spiegel', name: 'Der Spiegel', nameNative: 'Der Spiegel', url: 'https://www.spiegel.de', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'de-faz', name: 'FAZ (Frankfurter Allgemeine)', nameNative: 'Frankfurter Allgemeine Zeitung', url: 'https://www.faz.net', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'de-sz', name: 'Süddeutsche Zeitung', nameNative: 'Süddeutsche Zeitung', url: 'https://www.sueddeutsche.de', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'de-handelsblatt', name: 'Handelsblatt', nameNative: 'Handelsblatt', url: 'https://www.handelsblatt.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'de-zeit', name: 'Die Zeit', nameNative: 'Die Zeit', url: 'https://www.zeit.de', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'de-dw', name: 'Deutsche Welle', nameNative: 'Deutsche Welle', url: 'https://www.dw.com', type: 'Devlet/Resmi Yayın', reliability: 'Yüksek' },
      { id: 'de-tagesschau', name: 'Tagesschau (ARD)', nameNative: 'Tagesschau', url: 'https://www.tagesschau.de', type: 'TV/Radyo', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'FR',
    name: 'Fransa',
    nameNative: 'France',
    capital: 'Paris',
    capitalCoords: [48.8566, 2.3522],
    flag: '🇫🇷',
    region: 'Avrupa & Batı',
    language: 'Fransızca',
    languageCode: 'fr',
    sources: [
      { id: 'fr-lemonde', name: 'Le Monde', nameNative: 'Le Monde', url: 'https://www.lemonde.fr', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'fr-figaro', name: 'Le Figaro', nameNative: 'Le Figaro', url: 'https://www.lefigaro.fr', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'fr-afp', name: 'AFP', nameNative: 'Agence France-Presse', url: 'https://www.afp.com', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'fr-lesechos', name: 'Les Echos', nameNative: 'Les Echos', url: 'https://www.lesechos.fr', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'fr-france24', name: 'France 24', nameNative: 'France 24', url: 'https://www.france24.com', type: 'TV/Radyo', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'IT',
    name: 'İtalya',
    nameNative: 'Italia',
    capital: 'Roma',
    capitalCoords: [41.9028, 12.4964],
    flag: '🇮🇹',
    region: 'Avrupa & Batı',
    language: 'İtalyanca',
    languageCode: 'it',
    sources: [
      { id: 'it-corriere', name: 'Corriere della Sera', nameNative: 'Corriere della Sera', url: 'https://www.corriere.it', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'it-repubblica', name: 'La Repubblica', nameNative: 'La Repubblica', url: 'https://www.repubblica.it', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'it-ansa', name: 'ANSA', nameNative: 'Agenzia Nazionale Stampa Associata', url: 'https://www.ansa.it', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'it-ilsole', name: 'Il Sole 24 Ore', nameNative: 'Il Sole 24 Ore', url: 'https://www.ilsole24ore.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'it-stampa', name: 'La Stampa', nameNative: 'La Stampa', url: 'https://www.lastampa.it', type: 'Gazete', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'GB',
    name: 'İngiltere (Birleşik Krallık)',
    nameNative: 'United Kingdom',
    capital: 'Londra',
    capitalCoords: [51.5074, -0.1278],
    flag: '🇬🇧',
    region: 'Avrupa & Batı',
    language: 'İngilizce',
    languageCode: 'en',
    sources: [
      { id: 'gb-ft', name: 'Financial Times', nameNative: 'Financial Times', url: 'https://www.ft.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'gb-guardian', name: 'The Guardian', nameNative: 'The Guardian', url: 'https://www.theguardian.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'gb-reuters', name: 'Reuters', nameNative: 'Reuters', url: 'https://www.reuters.com', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'gb-bbc', name: 'BBC News', nameNative: 'BBC News', url: 'https://www.bbc.com/news', type: 'TV/Radyo', reliability: 'Yüksek' },
      { id: 'gb-times', name: 'The Times', nameNative: 'The Times', url: 'https://www.thetimes.co.uk', type: 'Gazete', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'ES',
    name: 'İspanya',
    nameNative: 'España',
    capital: 'Madrid',
    capitalCoords: [40.4168, -3.7038],
    flag: '🇪🇸',
    region: 'Avrupa & Batı',
    language: 'İspanyolca',
    languageCode: 'es',
    sources: [
      { id: 'es-elpais', name: 'El País', nameNative: 'El País', url: 'https://elpais.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'es-elmundo', name: 'El Mundo', nameNative: 'El Mundo', url: 'https://www.elmundo.es', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'es-efe', name: 'Agencia EFE', nameNative: 'Agencia EFE', url: 'https://efe.com', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'es-abc', name: 'ABC', nameNative: 'ABC.es', url: 'https://www.abc.es', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'es-lavanguardia', name: 'La Vanguardia', nameNative: 'La Vanguardia', url: 'https://www.lavanguardia.com', type: 'Gazete', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'AT',
    name: 'Avusturya',
    nameNative: 'Österreich',
    capital: 'Viyana',
    capitalCoords: [48.2082, 16.3738],
    flag: '🇦🇹',
    region: 'Avrupa & Batı',
    language: 'Almanca',
    languageCode: 'de',
    sources: [
      { id: 'at-derstandard', name: 'Der Standard', nameNative: 'Der Standard', url: 'https://www.derstandard.at', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'at-diepresse', name: 'Die Presse', nameNative: 'Die Presse', url: 'https://www.diepresse.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'at-apa', name: 'APA', nameNative: 'Austria Presse Agentur', url: 'https://apa.at', type: 'Haber Ajansı', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'NL',
    name: 'Hollanda',
    nameNative: 'Nederland',
    capital: 'Amsterdam',
    capitalCoords: [52.3676, 4.9041],
    flag: '🇳🇱',
    region: 'Avrupa & Batı',
    language: 'Felemenkçe',
    languageCode: 'nl',
    sources: [
      { id: 'nl-volkskrant', name: 'De Volkskrant', nameNative: 'de Volkskrant', url: 'https://www.volkskrant.nl', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'nl-nrc', name: 'NRC', nameNative: 'NRC Handelsblad', url: 'https://www.nrc.nl', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'nl-nos', name: 'NOS', nameNative: 'NOS Nieuws', url: 'https://nos.nl', type: 'TV/Radyo', reliability: 'Yüksek' },
      { id: 'nl-telegraaf', name: 'De Telegraaf', nameNative: 'De Telegraaf', url: 'https://www.telegraaf.nl', type: 'Gazete', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'BE',
    name: 'Belçika (AB Merkezi)',
    nameNative: 'Belgique / België',
    capital: 'Brüksel',
    capitalCoords: [50.8503, 4.3517],
    flag: '🇧🇪',
    region: 'Avrupa & Batı',
    language: 'Fransızca / Felemenkçe',
    languageCode: 'fr',
    sources: [
      { id: 'be-politico', name: 'POLITICO Europe', nameNative: 'POLITICO Europe', url: 'https://www.politico.eu', type: 'Bağımsız Medya', reliability: 'Yüksek' },
      { id: 'be-lesoir', name: 'Le Soir', nameNative: 'Le Soir', url: 'https://www.lesoir.be', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'be-standard', name: 'De Standaard', nameNative: 'De Standaard', url: 'https://www.standaard.be', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'be-euractiv', name: 'Euractiv', nameNative: 'Euractiv', url: 'https://www.euractiv.com', type: 'Bağımsız Medya', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'SE',
    name: 'İsveç',
    nameNative: 'Sverige',
    capital: 'Stockholm',
    capitalCoords: [59.3293, 18.0686],
    flag: '🇸🇪',
    region: 'Avrupa & Batı',
    language: 'İsveççe',
    languageCode: 'sv',
    sources: [
      { id: 'se-dn', name: 'Dagens Nyheter', nameNative: 'Dagens Nyheter', url: 'https://www.dn.se', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'se-svd', name: 'Svenska Dagbladet', nameNative: 'Svenska Dagbladet', url: 'https://www.svd.se', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'se-tt', name: 'TT Nyhetsbyrån', nameNative: 'TT', url: 'https://tt.se', type: 'Haber Ajansı', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'PL',
    name: 'Polonya',
    nameNative: 'Polska',
    capital: 'Varşova',
    capitalCoords: [52.2297, 21.0122],
    flag: '🇵🇱',
    region: 'Avrupa & Batı',
    language: 'Lehçe',
    languageCode: 'pl',
    sources: [
      { id: 'pl-rzeczpospolita', name: 'Rzeczpospolita', nameNative: 'Rzeczpospolita', url: 'https://www.rp.pl', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'pl-wyborcza', name: 'Gazeta Wyborcza', nameNative: 'Gazeta Wyborcza', url: 'https://wyborcza.pl', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'pl-pap', name: 'PAP', nameNative: 'Polska Agencja Prasowa', url: 'https://www.pap.pl', type: 'Haber Ajansı', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'US',
    name: 'ABD',
    nameNative: 'United States',
    capital: 'Washington, D.C.',
    capitalCoords: [38.9072, -77.0369],
    flag: '🇺🇸',
    region: 'Avrupa & Batı',
    language: 'İngilizce',
    languageCode: 'en',
    sources: [
      { id: 'us-nyt', name: 'The New York Times', nameNative: 'The New York Times', url: 'https://www.nytimes.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'us-wsj', name: 'The Wall Street Journal', nameNative: 'The Wall Street Journal', url: 'https://www.wsj.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'us-ap', name: 'Associated Press', nameNative: 'AP News', url: 'https://apnews.com', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'us-wp', name: 'The Washington Post', nameNative: 'The Washington Post', url: 'https://www.washingtonpost.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'us-bloomberg', name: 'Bloomberg', nameNative: 'Bloomberg', url: 'https://www.bloomberg.com', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'us-al-monitor', name: 'Al-Monitor', nameNative: 'Al-Monitor', url: 'https://www.al-monitor.com', type: 'Bağımsız Medya', reliability: 'Yüksek' }
    ]
  },

  // 5. KAFKASLAR VE ORTA ASYA
  {
    code: 'KZ',
    name: 'Kazakistan',
    nameNative: 'Қазақстан',
    capital: 'Astana',
    capitalCoords: [51.1694, 71.4491],
    flag: '🇰🇿',
    region: 'Kafkaslar & Orta Asya',
    language: 'Kazakça / Rusça',
    languageCode: 'kk',
    sources: [
      { id: 'kz-kazinform', name: 'Kazinform', nameNative: 'ҚазАқпарат', url: 'https://www.inform.kz', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'kz-tengri', name: 'Tengrinews', nameNative: 'Tengrinews.kz', url: 'https://tengrinews.kz', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'kz-egemen', name: 'Egemen Qazaqstan', nameNative: 'Егемен Қазақстан', url: 'https://egemen.kz', type: 'Gazete', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'UZ',
    name: 'Özbekistan',
    nameNative: 'Oʻzbekiston',
    capital: 'Taşkent',
    capitalCoords: [41.2995, 69.2401],
    flag: '🇺🇿',
    region: 'Kafkaslar & Orta Asya',
    language: 'Özbekçe',
    languageCode: 'uz',
    sources: [
      { id: 'uz-uza', name: 'UzA', nameNative: 'Oʻzbekiston Milliy axborot agentligi', url: 'https://uza.uz', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'uz-kun', name: 'Kun.uz', nameNative: 'Kun.uz', url: 'https://kun.uz', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'uz-gazeta', name: 'Gazeta.uz', nameNative: 'Gazeta.uz', url: 'https://www.gazeta.uz', type: 'Bağımsız Medya', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'TM',
    name: 'Türkmenistan',
    nameNative: 'Türkmenistan',
    capital: 'Aşkabat',
    capitalCoords: [37.9601, 58.3261],
    flag: '🇹🇲',
    region: 'Kafkaslar & Orta Asya',
    language: 'Türkmence',
    languageCode: 'tk',
    sources: [
      { id: 'tm-tdh', name: 'TDH', nameNative: 'Türkmenistanyň Döwlet habarlar agentligi', url: 'https://tdh.gov.tm', type: 'Devlet/Resmi Yayın', reliability: 'Yüksek' },
      { id: 'tm-turkmenportal', name: 'Turkmenportal', nameNative: 'Turkmenportal', url: 'https://turkmenportal.com', type: 'Bağımsız Medya', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'KG',
    name: 'Kırgızistan',
    nameNative: 'Кыргызстан',
    capital: 'Bişkek',
    capitalCoords: [42.8746, 74.5698],
    flag: '🇰🇬',
    region: 'Kafkaslar & Orta Asya',
    language: 'Kırgızca / Rusça',
    languageCode: 'ky',
    sources: [
      { id: 'kg-kabar', name: 'Kabar', nameNative: 'Кабар', url: 'https://kabar.kg', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'kg-akipress', name: 'AKIpress', nameNative: 'АКИpress', url: 'https://akipress.org', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'kg-24kg', name: '24.kg', nameNative: '24.kg', url: 'https://24.kg', type: 'Bağımsız Medya', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'PK',
    name: 'Pakistan',
    nameNative: 'پاکستان',
    capital: 'İslamabad',
    capitalCoords: [33.6844, 73.0479],
    flag: '🇵🇰',
    region: 'Kafkaslar & Orta Asya',
    language: 'Urduca / İngilizce',
    languageCode: 'ur',
    sources: [
      { id: 'pk-dawn', name: 'Dawn', nameNative: 'Dawn', url: 'https://www.dawn.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'pk-geo', name: 'Geo News', nameNative: 'جیو نیوز', url: 'https://www.geo.tv', type: 'TV/Radyo', reliability: 'Ana Akım' },
      { id: 'pk-tribune', name: 'The Express Tribune', nameNative: 'The Express Tribune', url: 'https://tribune.com.pk', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'pk-app', name: 'APP', nameNative: 'Associated Press of Pakistan', url: 'https://www.app.com.pk', type: 'Haber Ajansı', reliability: 'Yüksek' }
    ]
  },

  // 6. AFRİKA VE DİĞER KÜRESEL MERKEZLER
  {
    code: 'SO',
    name: 'Somali',
    nameNative: 'Soomaaliya',
    capital: 'Mogadişu',
    capitalCoords: [2.0469, 45.3182],
    flag: '🇸🇴',
    region: 'Afrika & Diğer',
    language: 'Somalice / Arapça',
    languageCode: 'so',
    sources: [
      { id: 'so-sonna', name: 'SONNA', nameNative: 'Wakaaladda Wararka Qaranka Soomaaliyeed', url: 'https://sonna.so', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'so-hiiraan', name: 'Hiiraan Online', nameNative: 'Hiiraan Online', url: 'https://www.hiiraan.com', type: 'Bağımsız Medya', reliability: 'Ana Akım' },
      { id: 'so-garowe', name: 'Garowe Online', nameNative: 'Garowe Online', url: 'https://www.garoweonline.com', type: 'Bağımsız Medya', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'ET',
    name: 'Etiyopya',
    nameNative: 'ኢትዮጵያ',
    capital: 'Addis Ababa',
    capitalCoords: [9.0320, 38.7482],
    flag: '🇪🇹',
    region: 'Afrika & Diğer',
    language: 'Amharca',
    languageCode: 'am',
    sources: [
      { id: 'et-ena', name: 'ENA', nameNative: 'የኢትዮጵያ ዜና አገልግሎት', url: 'https://www.ena.et', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'et-fana', name: 'Fana Broadcasting', nameNative: 'ፋና ብሮድካስቲንግ', url: 'https://www.fanabc.com', type: 'TV/Radyo', reliability: 'Ana Akım' },
      { id: 'et-reporter', name: 'The Reporter Ethiopia', nameNative: 'The Reporter', url: 'https://www.thereporterethiopia.com', type: 'Gazete', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'SD',
    name: 'Sudan',
    nameNative: 'السودان',
    capital: 'Hartum',
    capitalCoords: [15.5007, 32.5599],
    flag: '🇸🇩',
    region: 'Afrika & Diğer',
    language: 'Arapça',
    languageCode: 'ar',
    sources: [
      { id: 'sd-suna', name: 'SUNA', nameNative: 'وكالة السودان للأنباء', url: 'https://suna-news.net', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'sd-sudantribune', name: 'Sudan Tribune', nameNative: 'Sudan Tribune', url: 'https://sudantribune.com', type: 'Bağımsız Medya', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'CN',
    name: 'Çin',
    nameNative: '中国',
    capital: 'Pekin',
    capitalCoords: [39.9042, 116.4074],
    flag: '🇨🇳',
    region: 'Afrika & Diğer',
    language: 'Çince',
    languageCode: 'zh',
    sources: [
      { id: 'cn-xinhua', name: 'Xinhua', nameNative: '新华社', url: 'http://www.xinhuanet.com', type: 'Haber Ajansı', reliability: 'Yüksek' },
      { id: 'cn-globaltimes', name: 'Global Times', nameNative: '环球时报', url: 'https://www.globaltimes.cn', type: 'Gazete', reliability: 'Ana Akım' },
      { id: 'cn-peoplesdaily', name: 'People’s Daily', nameNative: '人民日报', url: 'http://en.people.cn', type: 'Devlet/Resmi Yayın', reliability: 'Yüksek' }
    ]
  },
  {
    code: 'IN',
    name: 'Hindistan',
    nameNative: 'भारत',
    capital: 'Yeni Delhi',
    capitalCoords: [28.6139, 77.2090],
    flag: '🇮🇳',
    region: 'Afrika & Diğer',
    language: 'Hintçe / İngilizce',
    languageCode: 'hi',
    sources: [
      { id: 'in-hindu', name: 'The Hindu', nameNative: 'The Hindu', url: 'https://www.thehindu.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'in-hindustantimes', name: 'Hindustan Times', nameNative: 'Hindustan Times', url: 'https://www.hindustantimes.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'in-timesofindia', name: 'The Times of India', nameNative: 'The Times of India', url: 'https://timesofindia.indiatimes.com', type: 'Gazete', reliability: 'Ana Akım' }
    ]
  },
  {
    code: 'JP',
    name: 'Japonya',
    nameNative: '日本',
    capital: 'Tokyo',
    capitalCoords: [35.6762, 139.6503],
    flag: '🇯🇵',
    region: 'Afrika & Diğer',
    language: 'Japonca',
    languageCode: 'ja',
    sources: [
      { id: 'jp-nikkei', name: 'Nikkei Asia', nameNative: '日本経済新聞', url: 'https://asia.nikkei.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'jp-asahi', name: 'The Asahi Shimbun', nameNative: '朝日新聞', url: 'https://www.asahi.com', type: 'Gazete', reliability: 'Yüksek' },
      { id: 'jp-kyodo', name: 'Kyodo News', nameNative: '共同通信', url: 'https://english.kyodonews.net', type: 'Haber Ajansı', reliability: 'Yüksek' }
    ]
  }
];

export const ANKARA_COORDS: [number, number] = [39.9334, 32.8597];

// Seed Verified Articles: Today's Direct Media Reports about Turkey across 50 countries
export const SEED_DIS_GUNDEM_ARTICLES: DisGundemItem[] = [
  {
    id: 'dg-gr-01',
    countryCode: 'GR',
    countryName: 'Yunanistan',
    capital: 'Atina',
    flag: '🇬🇷',
    region: 'Komşular & Yakın Havza',
    sourceName: 'Kathimerini (Η Καθημερινή)',
    sourceType: 'Gazete',
    sourceLanguage: 'Yunanca (el)',
    originalTitle: 'Ελληνοτουρκικός διάλογος: Τα επόμενα βήματα μετά τη συνάντηση Γεραπετρίτη - Φιντάν στην Άγκυρα',
    originalExcerpt: 'Στην Αθήνα αξιολογούνται θετικά τα αποτελέσματα των συνομιλιών για τα Μέτρα Οικοδόμησης Εμπιστοσύνης και τη θετική ατζέντα, αν και παραμένουν οι πάγιες διαφορές για την υφαλοκρηπίδα στο Αιγαίο.',
    turkishHeadline: 'Yunan Dışişleri Atina-Ankara Pozitif Gündem Adımlarını Değerlendirdi',
    turkishSummary: 'Kathimerini diplomatik kaynaklara dayandırdığı haberde, Dışişleri Bakanı Fidan ve Gerapetritis arasındaki temasların ardından Güven Artırıcı Önlemler kapsamında Ege\'de gerilimi düşürecek askeri ve ticari heyet ziyaretlerinin takvimini paylaştı.',
    category: 'Diplomasi & Güvenlik',
    sentiment: 'Yapıcı / Olumlu',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['Γεραπετρίτης (Gerapetritis)', 'Φιντάν (Fidan)', 'Άγκυρα (Ankara)', 'Αθήνα (Atina)', 'Αιγαίο (Ege)'],
    sourceUrl: 'https://www.kathimerini.gr',
    publishedAt: new Date(Date.now() - 42 * 60000).toISOString(),
    storyId: 'story-egean-dialogue'
  },
  {
    id: 'dg-gr-02',
    countryCode: 'GR',
    countryName: 'Yunanistan',
    capital: 'Atina',
    flag: '🇬🇷',
    region: 'Komşular & Yakın Havza',
    sourceName: 'Ta Nea (Τα Νέα)',
    sourceType: 'Gazete',
    sourceLanguage: 'Yunanca (el)',
    originalTitle: 'Αυξημένη τουριστική ροή από την Τουρκia στα νησιά του Ανατολικού Αιγαίου με τη visa-express',
    originalExcerpt: 'Ρεκόρ αφίξεων Τούρκων επισκεπτών σε Χίο, Λέσβο και Σάμο καταγράφουν οι τοπικές αρχές, με τα οικονομικά οφέλη για τους επαγγελματίες των νησιών να υπερβαίνουν τις αρχικές εκτιμήσεις.',
    turkishHeadline: 'Doğu Ege Adalarına Kapıda Vize Uygulamasıyla Türkiye\'den Rekor Ziyaretçi Akını',
    turkishSummary: 'Ta Nea, Sakız, Midilli ve Sisam adalarına yönelik kapıda vize (express visa) kolaylığı sayesinde Türkiye kıyılarından geçen turist sayısının yerel ada esnafına sağladığı ciroyu ve vize uzatma taleplerini manşetine taşıdı.',
    category: 'Ekonomi & Ticaret',
    sentiment: 'Yapıcı / Olumlu',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['Τουρκία (Türkiye)', 'Χίος (Sakız)', 'Λέσβος (Midilli)', 'Σάμος (Sisam)', 'Visa-express'],
    sourceUrl: 'https://www.tanea.gr',
    publishedAt: new Date(Date.now() - 95 * 60000).toISOString()
  },
  {
    id: 'dg-bg-01',
    countryCode: 'BG',
    countryName: 'Bulgaristan',
    capital: 'Sofya',
    flag: '🇧🇬',
    region: 'Komşular & Yakın Havza',
    sourceName: '24 Chasa (24 Часа)',
    sourceType: 'Gazete',
    sourceLanguage: 'Bulgarca (bg)',
    originalTitle: 'България и Турция разширяват капацитета на граничните пунктове „Капитан Андреево“ и „Лесово“',
    originalExcerpt: 'Министерството на транспорта обяви съвместен проект с Анкара за изграждане на допълнителни трасета за тежкотоварни камиони и ускорена жп връзка между Пловдив и Истанбул.',
    turkishHeadline: 'Kapitan Andreevo ve Lesovo Sınır Kapılarında Kapasite İki Katına Çıkarılıyor',
    turkishSummary: 'Bulgaristan Ulaştırma Bakanlığı, Türkiye ile artan karayolu ve demiryolu transit ticaretini rahatlatmak amacıyla Kapıkule karşısındaki Kapitan Andreevo ve Hamzabeyli karşısındaki Lesovo kapılarında yeni TIR şeritleri açılacağını duyurdu.',
    category: 'Ekonomi & Ticaret',
    sentiment: 'Yapıcı / Olumlu',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['България (Bulgaristan)', 'Турция (Türkiye)', 'Капитан Андреево', 'Анкара (Ankara)', 'Истанбул (İstanbul)'],
    sourceUrl: 'https://www.24chasa.bg',
    publishedAt: new Date(Date.now() - 110 * 60000).toISOString()
  },
  {
    id: 'dg-iq-01',
    countryCode: 'IQ',
    countryName: 'Irak',
    capital: 'Bağdat',
    flag: '🇮🇶',
    region: 'Komşular & Yakın Havza',
    sourceName: 'Baghdad Today (بغداد اليوم)',
    sourceType: 'Bağımsız Medya',
    sourceLanguage: 'Arapça (ar)',
    originalTitle: 'طريق التنمية: لجان فنية مشتركة بين بغداد وأنقرة لبدء ترسيم مسارات السكك الحديدية من الفاو',
    originalExcerpt: 'أكدت وزارة النقل العراقية استمرار الاجتماعات مع الجانب التركي لربط ميناء الفاو الكبير بالحدود التركية في فيشخابور، مشيرة إلى تخصيص ميزانية استثمارية مشتركة للبنية التحتية.',
    turkishHeadline: 'Kalkınma Yolu: Bağdat ve Ankara Teknik Heyetleri Demiryolu Güzergahını Belirliyor',
    turkishSummary: 'Irak Ulaştırma Bakanlığı, Basra Körfezi\'ndeki Büyük Fav Limanı\'nı Türkiye sınırındaki Ovaköy/Fişhabur kapısına bağlayacak Kalkınma Yolu Projesi için Türk mühendislik heyetiyle ortak koordinasyon masasının kurulduğunu bildirdi.',
    category: 'Enerji & Koridorlar',
    sentiment: 'Yapıcı / Olumlu',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['طريق التنمية (Kalkınma Yolu)', 'بغداد (Bağdat)', 'أنقرة (Ankara)', 'الفاو (Fav)', 'تركيا (Türkiye)'],
    sourceUrl: 'https://baghdadtoday.news',
    publishedAt: new Date(Date.now() - 55 * 60000).toISOString(),
    storyId: 'story-development-road'
  },
  {
    id: 'dg-eg-01',
    countryCode: 'EG',
    countryName: 'Mısır',
    capital: 'Kahire',
    flag: '🇪🇬',
    region: 'Ortadoğu & Kuzey Afrika',
    sourceName: 'Al-Ahram (الأهرام)',
    sourceType: 'Gazete',
    sourceLanguage: 'Arapça (ar)',
    originalTitle: 'مصر وتركيا تعززان التعاون الصناعي والتبادل التجاري بهدف الوصول إلى 15 مليار دولار',
    originalExcerpt: 'استقبل وزير التجارة والصناعة المصري وفداً من رجال الأعمال والمستثمرين الأتراك لبحث إنشاء منطقة صناعية تركية جديدة في المنطقة الاقتصادية لقناة السويس.',
    turkishHeadline: 'Kahire ve Ankara Süveyş Kanalı Bölgesinde Yeni Türk Sanayi Bölgesi Kuruyor',
    turkishSummary: 'Al-Ahram, Mısır Sanayi Bakanlığı ile Türk Sanayicileri heyetinin görüşmesinde Süveyş Kanalı Özel İktisadi Bölgesi\'nde tekstil ve kimya odaklı yeni Türk sanayi kümelenmesi projesinin onaylandığını yazdı.',
    category: 'Ekonomi & Ticaret',
    sentiment: 'Yapıcı / Olumlu',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['مصر (Mısır)', 'تركيا (Türkiye)', 'قناة السويس (Süveyş Kanalı)', '15 مليار دولار', 'القاهرة (Kahire)'],
    sourceUrl: 'https://gate.ahram.org.eg',
    publishedAt: new Date(Date.now() - 75 * 60000).toISOString(),
    storyId: 'story-turkey-egypt-trade'
  },
  {
    id: 'dg-am-01',
    countryCode: 'AM',
    countryName: 'Ermenistan',
    capital: 'Erivan',
    flag: '🇦🇲',
    region: 'Komşular & Yakın Havza',
    sourceName: 'Armenpress (Արմենպրես)',
    sourceType: 'Haber Ajansı',
    sourceLanguage: 'Ermenice (hy)',
    originalTitle: 'Ռուբինյանը և Քըլըչը շարունակում են քննարկումները Մարգարա կամրջի և սահմանի բացման տեխնիկական հարցերի շուրջ',
    originalExcerpt: 'Հայաստանի և Թուրքիայի հատուկ ներկայացուցիչները վերահաստատել են երրորդ երկրների քաղաքացիների և դիվանագիտական անձնագրեր ունեցողների համար սահմանի բացման պատրաստակամությունը:',
    turkishHeadline: 'Erivan-Ankara Özel Temsilcileri Margara/Alican Köprüsü Teknik Şartlarını Görüştü',
    turkishSummary: 'Armenpress, Ermenistan Meclis Başkanvekili Ruben Rubinyan ile Türkiye Özel Temsilcisi Serdar Kılıç arasındaki diplomatik temaslarda üçüncü ülke vatandaşları ve sınır kapısı altyapı hazırlıklarının değerlendirildiğini aktardı.',
    category: 'Diplomasi & Güvenlik',
    sentiment: 'Nötr / Bilgilendirici',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['Ռուբինյան (Rubinyan)', 'Քըլըչ (Kılıç)', 'Հայաստան (Ermenistan)', 'Թուրքիա (Türkiye)', 'Մարգարա (Margara/Alican)'],
    sourceUrl: 'https://armenpress.am',
    publishedAt: new Date(Date.now() - 130 * 60000).toISOString(),
    storyId: 'story-caucasus-normalization'
  },
  {
    id: 'dg-de-01',
    countryCode: 'DE',
    countryName: 'Almanya',
    capital: 'Berlin',
    flag: '🇩🇪',
    region: 'Avrupa & Batı',
    sourceName: 'Handelsblatt',
    sourceType: 'Gazete',
    sourceLanguage: 'Almanca (de)',
    originalTitle: 'Deutsche Industrie investiert verstärkt in Zulieferketten und Batteriewerke in der Türkei',
    originalExcerpt: 'Aufgrund der geografischen Nähe zur EU und wettbewerbsfähiger Produktionskosten verlagern deutsche Automobilzulieferer Produktionskapazitäten nach Bursa und Manisa.',
    turkishHeadline: 'Alman Sanayisi Tedarik Zincirini Türkiye\'deki Otomotiv Üslerine Kaydırıyor',
    turkishSummary: 'Handelsblatt, Alman otomotiv ve elektronik devlerinin Asya\'dan Avrupa\'ya uzanan tedarik zincirinde risk azaltmak (derisking) amacıyla Bursa, Kocaeli ve Manisa\'daki yan sanayi yatırımlarını hızlandırdığını analiz etti.',
    category: 'Ekonomi & Ticaret',
    sentiment: 'Yapıcı / Olumlu',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['Deutschland (Almanya)', 'Türkei (Türkiye)', 'Bursa', 'Manisa', 'Automobilzulieferer'],
    sourceUrl: 'https://www.handelsblatt.com',
    publishedAt: new Date(Date.now() - 60 * 60000).toISOString()
  },
  {
    id: 'dg-ru-01',
    countryCode: 'RU',
    countryName: 'Rusya',
    capital: 'Moskova',
    flag: '🇷🇺',
    region: 'Balkanlar & Doğu Avrupa',
    sourceName: 'Kommersant (Коммерсантъ)',
    sourceType: 'Gazete',
    sourceLanguage: 'Rusça (ru)',
    originalTitle: 'Газовый хаб в Тракии: «Газпром» и BOTAŞ завершают разработку дорожной карты электронной платформы',
    originalExcerpt: 'Стороны обсуждают юридическую модель ценообразования и интеграцию турецкой распределительной сети для реэкспорта природного газа в страны Южной Европы.',
    turkishHeadline: 'Trakya Gaz Merkezi: Gazprom ve BOTAŞ Elektronik Ticaret Platformunda Son Aşamada',
    turkishSummary: 'Kommersant, Trakya\'da kurulması planlanan uluslararası doğalgaz ticaret merkezi için BOTAŞ ve Gazprom heyetlerinin fiyatlama endeksi ve fiziksel akış modelleri üzerindeki görüşmelerini detaylandırdı.',
    category: 'Enerji & Koridorlar',
    sentiment: 'Nötr / Bilgilendirici',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['Газпром (Gazprom)', 'BOTAŞ', 'Тракия (Trakya)', 'Турция (Türkiye)', 'Южная Европа (Güney Avrupa)'],
    sourceUrl: 'https://www.kommersant.ru',
    publishedAt: new Date(Date.now() - 85 * 60000).toISOString()
  },
  {
    id: 'dg-it-01',
    countryCode: 'IT',
    countryName: 'İtalya',
    capital: 'Roma',
    flag: '🇮🇹',
    region: 'Avrupa & Batı',
    sourceName: 'Corriere della Sera',
    sourceType: 'Gazete',
    sourceLanguage: 'İtalyanca (it)',
    originalTitle: 'Meloni e Erdoğan rafforzano il coordinamento nel Mediterraneo su energia e sicurezza navale',
    originalExcerpt: 'Roma e Ankara stringono l\'intesa sulla cooperazione tra Leonardo e aziende della difesa turche, oltre a un piano comune per la stabilizzazione della Libia.',
    turkishHeadline: 'Roma ve Ankara Akdeniz Güvenliği ile Savunma İş Birliğinde Stratejik Adımlar Atıyor',
    turkishSummary: 'Corriere della Sera, İtalya Başbakanı Meloni ile Türkiye Cumhurbaşkanı arasındaki temaslarda savunma sanayii ortak projeleri (Leonardo entegrasyonu) ve Libya\'da ortak diplomasi vurgusunun öne çıktığını yazdı.',
    category: 'Savunma Sanayii',
    sentiment: 'Yapıcı / Olumlu',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['Meloni', 'Erdoğan', 'Roma', 'Ankara', 'Leonardo', 'Mediterraneo'],
    sourceUrl: 'https://www.corriere.it',
    publishedAt: new Date(Date.now() - 145 * 60000).toISOString()
  },
  {
    id: 'dg-so-01',
    countryCode: 'SO',
    countryName: 'Somali',
    capital: 'Mogadişu',
    flag: '🇸🇴',
    region: 'Afrika & Diğer',
    sourceName: 'SONNA (Wakaaladda Wararka)',
    sourceType: 'Haber Ajansı',
    sourceLanguage: 'Somalice (so)',
    originalTitle: 'Dowladda Soomaaliya oo shaacisay bilowga howlgallada wadajirka ah ee ilaalinta xeebaha iyo kheyraadka badda ee Turkey',
    originalExcerpt: 'Wasiirka Gaashaandhigga Soomaaliya ayaa xaqiijiyay in heshiiska difaaca badda ee lala saxiixday dowladda Turkiga uu dhowaan bilaabi doono wejiga fulinta ee biyaha caalamiga ah ee dalka.',
    turkishHeadline: 'Mogadişu Hükümeti Türkiye ile Deniz Savunması ve Sahil Güvenlik Uygulama Takvimini Açıkladı',
    turkishSummary: 'Somali Ulusal Haber Ajansı (SONNA), Somali Savunma Bakanı\'nın açıklamasına dayanarak iki ülke arasında onaylanan Savunma ve Ekonomik İşbirliği Anlaşması uyarınca Türk Deniz Kuvvetleri ile icra edilecek sahil güvenlik ve hidrokarbon arama takvimini paylaştı.',
    category: 'Diplomasi & Güvenlik',
    sentiment: 'Yapıcı / Olumlu',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['Soomaaliya (Somali)', 'Turkiga (Türkiye)', 'Mogadişu', 'Wasiirka Gaashaandhigga (Savunma Bakanı)'],
    sourceUrl: 'https://sonna.so',
    publishedAt: new Date(Date.now() - 160 * 60000).toISOString()
  },
  {
    id: 'dg-ir-01',
    countryCode: 'IR',
    countryName: 'İran',
    capital: 'Tahran',
    flag: '🇮🇷',
    region: 'Komşular & Yakın Havza',
    sourceName: 'Tehran Times',
    sourceType: 'Gazete',
    sourceLanguage: 'Farsça (fa)',
    originalTitle: 'تهران و آنکارا خواستار تسریع در ایجاد پایانه‌های مرزی جدید و افزایش سقف مبادلات گازی شدند',
    originalExcerpt: 'در جریان نشست کمیسیون مشترک اقتصادی، طرفین بر لزوم توسعه گمرک رازی-کاپیکوی و تمدید قرارداد ۲۵ ساله صادرات گاز طبیعی ایران به ترکیه تاکید کردند.',
    turkishHeadline: 'Tahran ve Ankara Yeni Sınır Kapıları ve Doğalgaz İhracat Anlaşmasının Yenilenmesini Ele Aldı',
    turkishSummary: 'Tehran Times, İran-Türkiye Ortak Ekonomik Komisyonu toplantısında Kapıköy/Razi demiryolu ve karayolu sınır kapısının modernizasyonu ile doğalgaz kontratının uzatılmasına ilişkin taslağın görüşüldüğünü duyurdu.',
    category: 'Enerji & Koridorlar',
    sentiment: 'Nötr / Bilgilendirici',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['تهران (Tahran)', 'آنکارا (Ankara)', 'ترکیه (Türkiye)', 'گاز طبیعی (Doğalgaz)', 'رازی-کاپیکوی (Razi-Kapıköy)'],
    sourceUrl: 'https://www.tehrantimes.com',
    publishedAt: new Date(Date.now() - 170 * 60000).toISOString()
  },
  {
    id: 'dg-ge-01',
    countryCode: 'GE',
    countryName: 'Gürcistan',
    capital: 'Tiflis',
    flag: '🇬🇪',
    region: 'Komşular & Yakın Havza',
    sourceName: 'Civil Georgia (Civil.ge)',
    sourceType: 'Bağımsız Medya',
    sourceLanguage: 'Gürcüce (ka)',
    originalTitle: 'ბაქო-თბილისი-ყარსის (BTK) რკინიგზის მოდერნიზებული მონაკვეთი სრულ სიმძლავრეზე გადადის',
    originalExcerpt: 'საქართველოს რკინიგზის განცხადებით, მარაბდა-კარწახის მონაკვეთის რეაბილიტაციის შემდეგ ტვირთბრუნვა წელიწადში 5 მილიონ ტონამდე გაიზრდება, რაც გააძლიერებს შუა დერეფანს.',
    turkishHeadline: 'Bakü-Tiflis-Kars Demiryolu Modernizasyonu Sonrası Orta Koridor Kapasitesi 5 Milyon Tona Çıkıyor',
    turkishSummary: 'Civil.ge, Gürcistan Demiryolları\'nın Gürcistan-Türkiye sınır hattındaki Marabda-Kartsakhi kesiminde yenileme çalışmalarını tamamladığını ve Türkiye yönlü yük treni trafiğinin iki katına çıkacağını duyurdu.',
    category: 'Enerji & Koridorlar',
    sentiment: 'Yapıcı / Olumlu',
    isDirectTurkeyReference: true,
    verificationPassed: true,
    verifiedNamedEntities: ['ბაქო-თბილისი-ყარსი (Bakü-Tiflis-Kars)', 'თურქეთი (Türkiye)', 'საქართველო (Gürcistan)', 'შუა დერეფანი (Orta Koridor)'],
    sourceUrl: 'https://civil.ge',
    publishedAt: new Date(Date.now() - 190 * 60000).toISOString(),
    storyId: 'story-middle-corridor'
  }
];

// Dual-Output Intelligence: Domestic Internal Agendas of 50 Countries vs Their Turkey Mentions
export const SEED_COUNTRY_AGENDAS: CountryAgendaOverview[] = [
  {
    countryCode: 'GR',
    countryName: 'Yunanistan',
    flag: '🇬🇷',
    capital: 'Atina',
    region: 'Komşular & Yakın Havza',
    capitalCoords: [37.9838, 23.7275],
    localDomesticHeadlines: [
      { titleNative: 'Ανακοινώθηκαν τα νέα φορολογικά μέτρα για τη στέγαση και τα Airbnb', titleTurkish: 'Hükümet konut krizi ve Airbnb kiralamalarına yönelik yeni vergi paketini açıkladı', source: 'Kathimerini', category: 'İç Siyaset' },
      { titleNative: 'Συνεδριάζει η κοινοβουλευτική ομάδα της ΝΔ για τον προϋπολογισμό', titleTurkish: 'Yeni Demokrasi Partisi meclis grubu bütçe tasarısı ve tarım desteklerini tartışıyor', source: 'Ta Nea', category: 'Ekonomi' },
      { titleNative: 'Απεργία στα μέσα μαζικής μεταφοράς στην Αθήνα την Πέμπτη', titleTurkish: 'Atina\'da toplu taşıma çalışanları perşembe günü greve gidiyor', source: 'To Vima', category: 'Toplum' }
    ],
    turkeyMentions: SEED_DIS_GUNDEM_ARTICLES.filter(a => a.countryCode === 'GR'),
    hasDirectTurkeyMention: true
  },
  {
    countryCode: 'BG',
    countryName: 'Bulgaristan',
    flag: '🇧🇬',
    capital: 'Sofya',
    region: 'Komşular & Yakın Havza',
    capitalCoords: [42.6977, 23.3219],
    localDomesticHeadlines: [
      { titleNative: 'Парламентът обсъжда приемането на страната в сухопътния Шенген', titleTurkish: 'Bulgaristan Parlamentosu karayolu Schengen tam üyeliği hazırlıklarını oyluyor', source: '24 Chasa', category: 'İç Siyaset' },
      { titleNative: 'Енергийният регулятор утвърди новите цени на природния газ за сезона', titleTurkish: 'Enerji Düzenleme Kurulu kış dönemi doğalgaz tarifesini onayladı', source: 'Dnevnik', category: 'Enerji' },
      { titleNative: 'Ремонт на автомагистрала „Тракия“ предизвика километрични задръствания', titleTurkish: 'Trakya Otoyolu\'ndaki asfalt yenilemesi yoğun trafik kuyruklarına yol açtı', source: 'Trud', category: 'Ulaşım' }
    ],
    turkeyMentions: SEED_DIS_GUNDEM_ARTICLES.filter(a => a.countryCode === 'BG'),
    hasDirectTurkeyMention: true
  },
  {
    countryCode: 'IQ',
    countryName: 'Irak',
    flag: '🇮🇶',
    capital: 'Bağdat',
    region: 'Komşular & Yakın Havza',
    capitalCoords: [33.3152, 44.3661],
    localDomesticHeadlines: [
      { titleNative: 'مجلس النواب العراقي يناقش تعديلات قانون الموازنة الاتحادية الثلاثية', titleTurkish: 'Irak Temsilciler Meclisi üç yıllık federal bütçe yasasındaki değişiklik maddelerini görüşüyor', source: 'INA', category: 'İç Siyaset' },
      { titleNative: 'وزارة الموارد المائية تطلق خطة طوارئ لمواجهة شح مياه نهري دجلة والفرات', titleTurkish: 'Su Kaynakları Bakanlığı Dicle ve Fırat nehirlerindeki kuraklık için acil eylem planı başlattı', source: 'Baghdad Today', category: 'Çevre' },
      { titleNative: 'النزاهة تصدر أوامر قبض بحق مسؤولين سابقين في ملف عقارات الدولة', titleTurkish: 'Yolsuzlukla Mücadele Komisyonu kamu arazileri soruşturmasında yeni tutuklama kararları verdi', source: 'Al Sumaria', category: 'Hukuk' }
    ],
    turkeyMentions: SEED_DIS_GUNDEM_ARTICLES.filter(a => a.countryCode === 'IQ'),
    hasDirectTurkeyMention: true
  },
  {
    countryCode: 'EG',
    countryName: 'Mısır',
    flag: '🇪🇬',
    capital: 'Kahire',
    region: 'Ortadoğu & Kuzey Afrika',
    capitalCoords: [30.0444, 31.2357],
    localDomesticHeadlines: [
      { titleNative: 'الحكومة تعلن تفاصيل برنامج دعم الصادرات الجديد وتيسيرات جمركية للمصانع', titleTurkish: 'Mısır Hükümeti yeni ihracat teşvik programını ve fabrikalar için gümrük kolaylıklarını duyurdu', source: 'Al-Ahram', category: 'Ekonomi' },
      { titleNative: 'افتتاح المرحلة الثالثة من الخط الثالث لمترو أنفاق القاهرة الكبرى', titleTurkish: 'Büyük Kahire Metrosu 3. Hat 3. Etap istasyonları törenle hizmete açıldı', source: 'Youm7', category: 'Altyapı' },
      { titleNative: 'وزارة التموين تؤكد توافر الاحتياطي الاستراتيجي من القمح لـ 6 أشهر', titleTurkish: 'Tedarik Bakanlığı stratejik buğday stokunun 6 aylık ihtiyacı karşıladığını açıkladı', source: 'Al-Shorouk', category: 'Gıda' }
    ],
    turkeyMentions: SEED_DIS_GUNDEM_ARTICLES.filter(a => a.countryCode === 'EG'),
    hasDirectTurkeyMention: true
  },
  {
    countryCode: 'AM',
    countryName: 'Ermenistan',
    flag: '🇦🇲',
    capital: 'Erivan',
    region: 'Komşular & Yakın Havza',
    capitalCoords: [40.1792, 44.4991],
    localDomesticHeadlines: [
      { titleNative: 'Կառավարությունը հաստատեց 2025 թվականի պետական բյուջեի նախագիծը', titleTurkish: 'Hükümet 2025 yılı devlet bütçesi taslağını parlamentoya sundu', source: 'Armenpress', category: 'Ekonomi' },
      { titleNative: 'Երևանում մեկնարկել է բարձր տեխնոլոգիաների միջազգային համաժողովը', titleTurkish: 'Erivan\'da uluslararası yüksek teknoloji ve yapay zeka zirvesi başladı', source: 'CivilNet', category: 'Teknoloji' },
      { titleNative: 'Սահմանադրական դատարանը քննում է ընտրական օրենսգրքի փոփոխությունները', titleTurkish: 'Anayasa Mahkemesi seçim kanunu değişiklik maddelerini inceliyor', source: 'Azatutyun', category: 'Hukuk' }
    ],
    turkeyMentions: SEED_DIS_GUNDEM_ARTICLES.filter(a => a.countryCode === 'AM'),
    hasDirectTurkeyMention: true
  },
  {
    countryCode: 'DE',
    countryName: 'Almanya',
    flag: '🇩🇪',
    capital: 'Berlin',
    region: 'Avrupa & Batı',
    capitalCoords: [52.5200, 13.4050],
    localDomesticHeadlines: [
      { titleNative: 'Bundesrechnungshof warnt vor Finanzierungslücken im Bundeshaushalt', titleTurkish: 'Federal Sayıştay federal bütçedeki finansman açığı ve borç freni konusunda uyardı', source: 'FAZ', category: 'Ekonomi' },
      { titleNative: 'Tarifverhandlungen in der Metall- und Elektroindustrie gehen in die heiße Phase', titleTurkish: 'Alman metal ve elektrik sanayisinde toplu iş sözleşmesi görüşmeleri kritik eşikte', source: 'Der Spiegel', category: 'Çalışma Hayatı' },
      { titleNative: 'Bahnchef kündigt großflächige Sanierung der Hauptstrecken für 2025 an', titleTurkish: 'Deutsche Bahn 2025 yılı için ana demiryolu hatlarında kapsamlı yenileme duyurdu', source: 'Süddeutsche Zeitung', category: 'Ulaşım' }
    ],
    turkeyMentions: SEED_DIS_GUNDEM_ARTICLES.filter(a => a.countryCode === 'DE'),
    hasDirectTurkeyMention: true
  },
  {
    countryCode: 'RU',
    countryName: 'Rusya',
    flag: '🇷🇺',
    capital: 'Moskova',
    region: 'Balkanlar & Doğu Avrupa',
    capitalCoords: [55.7558, 37.6173],
    localDomesticHeadlines: [
      { titleNative: 'Банк России сохранил жесткую денежно-кредитную политику для обуздания инфляции', titleTurkish: 'Rusya Merkez Bankası enflasyonu dizginlemek için sıkı para politikasını sürdürüyor', source: 'Kommersant', category: 'Ekonomi' },
      { titleNative: 'Правительство увеличивает субсидии на развитие отечественного станкостроения', titleTurkish: 'Hükümet yerli takım tezgahı ve makine sanayisi teşviklerini artırıyor', source: 'RBC', category: 'Sanayi' },
      { titleNative: 'На Северном морском пути зафиксирован рекордный объем транзитных грузов', titleTurkish: 'Kuzey Deniz Yolu\'nda yıllık transit kargo taşımacılığı rekor kırdı', source: 'TASS', category: 'Lojistik' }
    ],
    turkeyMentions: SEED_DIS_GUNDEM_ARTICLES.filter(a => a.countryCode === 'RU'),
    hasDirectTurkeyMention: true
  }
];

// Seyir & Hikaye Takibi (Narrative Evolutions across multiple days and countries)
export const SEED_STORY_EVOLUTIONS: StoryEvolutionTopic[] = [
  {
    id: 'story-egean-dialogue',
    title: 'Ege & Doğu Akdeniz Diyalog Süreci ve Güven Artırıcı Önlemler',
    category: 'Diplomasi & Güvenlik',
    startDate: '2024-03-15',
    lastUpdated: 'Bugün',
    status: 'Gelişiyor',
    summary: 'Atina ve Ankara arasında Atina Bildirgesi ile başlayan yumuşama süreci; askeri güven önlemleri, ada vizesi kolaylığı ve kıta sahanlığı istişareleri üzerinden Yunan, Rum ve Avrupa basınında izleniyor.',
    participatingCountries: ['Yunanistan (GR)', 'Kıbrıs Rum Kesimi (CY)', 'İtalya (IT)', 'Almanya (DE)', 'AB (BE)'],
    timeline: [
      {
        id: 't-1',
        date: '1. Gün (Başlangıç)',
        dayNumber: 1,
        countryCode: 'GR',
        countryName: 'Yunanistan',
        flag: '🇬🇷',
        headlineTurkish: 'Atina ve Ankara Pozitif Gündem Bildirgesini İmzaladı',
        summaryTurkish: 'Yunan basını liderler zirvesinde varılan mutabakatı "sakin sular dönemi" başlığıyla genişçe yer verdi.',
        sourceName: 'Kathimerini',
        stance: 'Temkinli / Bekle-Gör'
      },
      {
        id: 't-2',
        date: '3. Hafta',
        dayNumber: 21,
        countryCode: 'GR',
        countryName: 'Yunanistan',
        flag: '🇬🇷',
        headlineTurkish: '10 Ege Adasına Kapıda Vize Uygulaması Resmen Başladı',
        summaryTurkish: 'Doğu Ege adalarında Türk turist akını esnaf tarafından memnuniyetle karşılanırken Kathimerini ve Ta Nea ekonomik canlanmayı öne çıkardı.',
        sourceName: 'Ta Nea',
        stance: 'Destek / İş Birliği'
      },
      {
        id: 't-3',
        date: '2. Ay',
        dayNumber: 60,
        countryCode: 'CY',
        countryName: 'Kıbrıs Rum Kesimi',
        flag: '🇨🇾',
        headlineTurkish: 'Lefkoşa Kıbrıs Meselesinin Türkiye-Yunanistan Diyaloğuna Dahil Edilmesini İstedi',
        summaryTurkish: 'Rum basını Phileleftheros, Ege\'deki sakinliğin Kıbrıs müzakerelerine yansıması gerektiğini savunan analizler yayımladı.',
        sourceName: 'Phileleftheros',
        stance: 'Sert Tepki'
      },
      {
        id: 't-4',
        date: 'Bugün',
        dayNumber: 120,
        countryCode: 'DE',
        countryName: 'Almanya',
        flag: '🇩🇪',
        headlineTurkish: 'Berlin Ege\'deki İstikrarı Doğu Akdeniz Enerji Güvenliği Açısından Önemli Buluyor',
        summaryTurkish: 'Handelsblatt ve FAZ, Türkiye ile Yunanistan arasındaki normalleşmenin Avrupa\'nın güney kanadındaki güvenlik risklerini azalttığını bildirdi.',
        sourceName: 'FAZ',
        stance: 'Analitik Değerlendirme'
      }
    ]
  },
  {
    id: 'story-development-road',
    title: 'Irak Kalkınma Yolu Projesi (Basra - Ovaköy - Avrupa)',
    category: 'Enerji & Koridorlar',
    startDate: '2024-04-22',
    lastUpdated: 'Bugün',
    status: 'Gelişiyor',
    summary: 'Bağdat, Ankara, Doha ve Abu Dabi arasında imzalanan 1200 km\'lik demiryolu ve otoyol koridorunun bölgesel jeopolitiğe ve Körfez ticaretine etkileri Arap ve Körfez basınında yakından takip ediliyor.',
    participatingCountries: ['Irak (IQ)', 'Katar (QA)', 'BAE (AE)', 'Kuveyt (KW)', 'İran (IR)'],
    timeline: [
      {
        id: 't-dev-1',
        date: '1. Gün',
        dayNumber: 1,
        countryCode: 'IQ',
        countryName: 'Irak',
        flag: '🇮🇶',
        headlineTurkish: 'Bağdat Zirvesinde 4 Ülke Kalkınma Yolu Mutabakatını İmzaladı',
        summaryTurkish: 'Irak basını Fav Limanı\'nı Türkiye üzerinden Avrupa\'ya bağlayacak 17 milyar dolarlık projeyi "Asrın Koridoru" olarak niteledi.',
        sourceName: 'Baghdad Today',
        stance: 'Destek / İş Birliği'
      },
      {
        id: 't-dev-2',
        date: '2. Hafta',
        dayNumber: 14,
        countryCode: 'AE',
        countryName: 'BAE',
        flag: '🇦🇪',
        headlineTurkish: 'Abu Dabi Limanları Fav Altyapısına Yatırım Hazırlığında',
        summaryTurkish: 'The National gazetesi, BAE\'li lojistik fonlarının Irak-Türkiye demiryolu ağına ortak yatırım yapma planlarını yazdı.',
        sourceName: 'The National',
        stance: 'Destek / İş Birliği'
      },
      {
        id: 't-dev-3',
        date: 'Bugün',
        dayNumber: 90,
        countryCode: 'IR',
        countryName: 'İran',
        flag: '🇮🇷',
        headlineTurkish: 'Tahran Kalkınma Yolu\'nun Şalamçe-Basra Demiryoluyla Entegre Edilmesini Önerdi',
        summaryTurkish: 'Tehran Times, İran\'ın koridora rakip olmak yerine kendi demiryolu ağını projeye eklemlemek istediğini yazdı.',
        sourceName: 'Tehran Times',
        stance: 'Analitik Değerlendirme'
      }
    ]
  },
  {
    id: 'story-caucasus-normalization',
    title: 'Güney Kafkasya Barış Süreci & Zengezur / Orta Koridor',
    category: 'Diplomasi & Güvenlik',
    startDate: '2024-01-10',
    lastUpdated: 'Bugün',
    status: 'Diplomatik Masada',
    summary: 'Azerbaycan ile Ermenistan arasındaki barış antlaşması taslağı, Ermenistan-Türkiye sınır kapısının açılması ve Zengezur transit güzergahı Kafkasya ve komşu başkentlerde değerlendiriliyor.',
    participatingCountries: ['Ermenistan (AM)', 'Azerbaycan (AZ)', 'Gürcistan (GE)', 'İran (IR)', 'Rusya (RU)'],
    timeline: [
      {
        id: 't-cauc-1',
        date: '1. Ay',
        dayNumber: 30,
        countryCode: 'AM',
        countryName: 'Ermenistan',
        flag: '🇦🇲',
        headlineTurkish: 'Erivan "Barış Kavşağı" Projesini Tanıttı',
        summaryTurkish: 'Armenpress, Başbakan Paşinyan\'ın Türkiye ve Azerbaycan sınırlarının karşılıklı açılmasını öngören ulaşım planını sunduğunu bildirdi.',
        sourceName: 'Armenpress',
        stance: 'Destek / İş Birliği'
      },
      {
        id: 't-cauc-2',
        date: '3. Ay',
        dayNumber: 90,
        countryCode: 'AZ',
        countryName: 'Azerbaycan',
        flag: '🇦🇿',
        headlineTurkish: 'Bakü Barış Antlaşması İçin Ermenistan Anayasasındaki Referansların Kaldırılmasını İstedi',
        summaryTurkish: 'AZERTAC, barış anlaşmasının imzalanması için hukuki pürüzlerin giderilmesi gerektiğine dikkat çekti.',
        sourceName: 'AZERTAC',
        stance: 'Temkinli / Bekle-Gör'
      },
      {
        id: 't-cauc-3',
        date: 'Bugün',
        dayNumber: 150,
        countryCode: 'GE',
        countryName: 'Gürcistan',
        flag: '🇬🇪',
        headlineTurkish: 'Tiflis Bölgesel Ulaşım ve Enerji Transitinde Üçlü Diyalog Masasını Destekliyor',
        summaryTurkish: 'Civil.ge, Gürcistan\'ın Türkiye, Azerbaycan ve Ermenistan arasındaki bölgesel entegrasyonda kilit transit köprü olmaya devam edeceğini vurguladı.',
        sourceName: 'Civil.ge',
        stance: 'Destek / İş Birliği'
      }
    ]
  }
];

export const INITIAL_GEOPOLITICAL_STATS: GeopoliticalStats = {
  totalMonitoredCountries: 50,
  totalMonitoredSources: 640,
  countriesWithTurkeyMentionToday: 18,
  totalDirectArticlesToday: 42,
  mentionPercentage: 36,
  regionalBreakdown: {
    'Komşular & Yakın Havza': 16,
    'Ortadoğu & Kuzey Afrika': 10,
    'Avrupa & Batı': 8,
    'Balkanlar & Doğu Avrupa': 5,
    'Kafkaslar & Orta Asya': 2,
    'Afrika & Diğer': 1
  },
  topMentioningCountries: [
    { country: 'Yunanistan', flag: '🇬🇷', count: 7 },
    { country: 'Irak', flag: '🇮🇶', count: 5 },
    { country: 'Mısır', flag: '🇪🇬', count: 4 },
    { country: 'Almanya', flag: '🇩🇪', count: 4 },
    { country: 'Bulgaristan', flag: '🇧🇬', count: 3 },
    { country: 'Rusya', flag: '🇷🇺', count: 3 }
  ],
  dominantNarrativeTopics: [
    { topic: 'Diplomasi & İkili İlişkiler', count: 14, percentage: 33 },
    { topic: 'Ekonomi, Ticaret & Vize', count: 11, percentage: 26 },
    { topic: 'Ulaşım Koridorları & Lojistik', count: 8, percentage: 19 },
    { topic: 'Enerji & Gaz Hub', count: 5, percentage: 12 },
    { topic: 'Savunma Sanayii & Güvenlik', count: 4, percentage: 10 }
  ]
};
