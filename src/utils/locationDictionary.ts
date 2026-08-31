export interface LocationSignal {
  name: string;
  province: string;
  district?: string;
  lat: number;
  lng: number;
  confidence: number;
  rawMatchedTerm: string;
}

export interface GeoLocationEntry {
  name: string;
  normalized: string;
  province: string;
  district?: string;
  lat: number;
  lng: number;
  aliases?: string[];
  isDistrict?: boolean;
}

// 81 Provinces of Turkey + Major Districts + Key Seas/Regions
export const TURKISH_LOCATION_DATABASE: GeoLocationEntry[] = [
  // 81 Provinces
  { name: 'Adana', normalized: 'adana', province: 'Adana', lat: 37.0, lng: 35.3213 },
  { name: 'Adıyaman', normalized: 'adiyaman', province: 'Adıyaman', lat: 37.7648, lng: 38.2786 },
  { name: 'Afyonkarahisar', normalized: 'afyonkarahisar', province: 'Afyonkarahisar', lat: 38.7507, lng: 30.5567, aliases: ['afyon'] },
  { name: 'Ağrı', normalized: 'agri', province: 'Ağrı', lat: 39.7191, lng: 43.0503 },
  { name: 'Amasya', normalized: 'amasya', province: 'Amasya', lat: 40.6534, lng: 35.833 },
  { name: 'Ankara', normalized: 'ankara', province: 'Ankara', lat: 39.9334, lng: 32.8597, aliases: ['baskent'] },
  { name: 'Antalya', normalized: 'antalya', province: 'Antalya', lat: 36.8969, lng: 30.7133 },
  { name: 'Artvin', normalized: 'artvin', province: 'Artvin', lat: 41.1828, lng: 41.8183 },
  { name: 'Aydın', normalized: 'aydin', province: 'Aydın', lat: 37.856, lng: 27.8416 },
  { name: 'Balıkesir', normalized: 'balikesir', province: 'Balıkesir', lat: 39.6484, lng: 27.8826 },
  { name: 'Bilecik', normalized: 'bilecik', province: 'Bilecik', lat: 40.1451, lng: 29.9799 },
  { name: 'Bingöl', normalized: 'bingol', province: 'Bingöl', lat: 38.8854, lng: 40.4983 },
  { name: 'Bitlis', normalized: 'bitlis', province: 'Bitlis', lat: 38.4006, lng: 42.1095 },
  { name: 'Bolu', normalized: 'bolu', province: 'Bolu', lat: 40.7358, lng: 31.6061 },
  { name: 'Burdur', normalized: 'burdur', province: 'Burdur', lat: 37.7203, lng: 30.2908 },
  { name: 'Bursa', normalized: 'bursa', province: 'Bursa', lat: 40.1885, lng: 29.061 },
  { name: 'Çanakkale', normalized: 'canakkale', province: 'Çanakkale', lat: 40.1553, lng: 26.4142 },
  { name: 'Çankırı', normalized: 'cankiri', province: 'Çankırı', lat: 40.6013, lng: 33.6134 },
  { name: 'Çorum', normalized: 'corum', province: 'Çorum', lat: 40.5506, lng: 34.9556 },
  { name: 'Denizli', normalized: 'denizli', province: 'Denizli', lat: 37.7765, lng: 29.0864 },
  { name: 'Diyarbakır', normalized: 'diyarbakir', province: 'Diyarbakır', lat: 37.9144, lng: 40.2306 },
  { name: 'Edirne', normalized: 'edirne', province: 'Edirne', lat: 41.6768, lng: 26.5603 },
  { name: 'Elazığ', normalized: 'elazig', province: 'Elazığ', lat: 38.681, lng: 39.2264 },
  { name: 'Erzincan', normalized: 'erzincan', province: 'Erzincan', lat: 39.75, lng: 39.5 },
  { name: 'Erzurum', normalized: 'erzurum', province: 'Erzurum', lat: 39.9043, lng: 41.2679 },
  { name: 'Eskişehir', normalized: 'eskisehir', province: 'Eskişehir', lat: 39.7667, lng: 30.5256 },
  { name: 'Gaziantep', normalized: 'gaziantep', province: 'Gaziantep', lat: 37.0662, lng: 37.3833, aliases: ['antep'] },
  { name: 'Giresun', normalized: 'giresun', province: 'Giresun', lat: 40.9128, lng: 38.3895 },
  { name: 'Gümüşhane', normalized: 'gumushane', province: 'Gümüşhane', lat: 40.4608, lng: 39.4814 },
  { name: 'Hakkari', normalized: 'hakkari', province: 'Hakkari', lat: 37.5833, lng: 43.7333 },
  { name: 'Hatay', normalized: 'hatay', province: 'Hatay', lat: 36.2023, lng: 36.1606, aliases: ['antakya'] },
  { name: 'Isparta', normalized: 'isparta', province: 'Isparta', lat: 37.7644, lng: 30.5522 },
  { name: 'Mersin', normalized: 'mersin', province: 'Mersin', lat: 36.8, lng: 34.6333, aliases: ['icel'] },
  { name: 'İstanbul', normalized: 'istanbul', province: 'İstanbul', lat: 41.0082, lng: 28.9784 },
  { name: 'İzmir', normalized: 'izmir', province: 'İzmir', lat: 38.4237, lng: 27.1428 },
  { name: 'Kars', normalized: 'kars', province: 'Kars', lat: 40.6013, lng: 43.0975 },
  { name: 'Kastamonu', normalized: 'kastamonu', province: 'Kastamonu', lat: 41.3887, lng: 33.7827 },
  { name: 'Kayseri', normalized: 'kayseri', province: 'Kayseri', lat: 38.7312, lng: 35.4787 },
  { name: 'Kırklareli', normalized: 'kirklareli', province: 'Kırklareli', lat: 41.7333, lng: 27.2167 },
  { name: 'Kırşehir', normalized: 'kirsehir', province: 'Kırşehir', lat: 39.1425, lng: 34.1709 },
  { name: 'Kocaeli', normalized: 'kocaeli', province: 'Kocaeli', lat: 40.8533, lng: 29.8815, aliases: ['izmit'] },
  { name: 'Konya', normalized: 'konya', province: 'Konya', lat: 37.8667, lng: 32.4833 },
  { name: 'Kütahya', normalized: 'kutahya', province: 'Kütahya', lat: 39.4167, lng: 29.9833 },
  { name: 'Malatya', normalized: 'malatya', province: 'Malatya', lat: 38.3552, lng: 38.3095 },
  { name: 'Manisa', normalized: 'manisa', province: 'Manisa', lat: 38.6191, lng: 27.4289 },
  { name: 'Kahramanmaraş', normalized: 'kahramanmaras', province: 'Kahramanmaraş', lat: 37.5858, lng: 36.9371, aliases: ['maras'] },
  { name: 'Mardin', normalized: 'mardin', province: 'Mardin', lat: 37.3212, lng: 40.7245 },
  { name: 'Muğla', normalized: 'mugla', province: 'Muğla', lat: 37.2153, lng: 28.3636 },
  { name: 'Muş', normalized: 'mus', province: 'Muş', lat: 38.7432, lng: 41.5064 },
  { name: 'Nevşehir', normalized: 'nevsehir', province: 'Nevşehir', lat: 38.625, lng: 34.7122, aliases: ['kapadokya'] },
  { name: 'Niğde', normalized: 'nigde', province: 'Niğde', lat: 37.9667, lng: 34.6833 },
  { name: 'Ordu', normalized: 'ordu', province: 'Ordu', lat: 40.9839, lng: 37.8764 },
  { name: 'Rize', normalized: 'rize', province: 'Rize', lat: 41.0201, lng: 40.5234 },
  { name: 'Sakarya', normalized: 'sakarya', province: 'Sakarya', lat: 40.7569, lng: 30.3783, aliases: ['adapazari'] },
  { name: 'Samsun', normalized: 'samsun', province: 'Samsun', lat: 41.2867, lng: 36.33 },
  { name: 'Siirt', normalized: 'siirt', province: 'Siirt', lat: 37.9333, lng: 41.95 },
  { name: 'Sinop', normalized: 'sinop', province: 'Sinop', lat: 42.0231, lng: 35.1531 },
  { name: 'Sivas', normalized: 'sivas', province: 'Sivas', lat: 39.7477, lng: 37.0179 },
  { name: 'Tekirdağ', normalized: 'tekirdag', province: 'Tekirdağ', lat: 40.9833, lng: 27.5167 },
  { name: 'Tokat', normalized: 'tokat', province: 'Tokat', lat: 40.3167, lng: 36.55 },
  { name: 'Trabzon', normalized: 'trabzon', province: 'Trabzon', lat: 41.0027, lng: 39.7168 },
  { name: 'Tunceli', normalized: 'tunceli', province: 'Tunceli', lat: 39.1079, lng: 39.5401 },
  { name: 'Şanlıurfa', normalized: 'sanliurfa', province: 'Şanlıurfa', lat: 37.1591, lng: 38.7969, aliases: ['urfa'] },
  { name: 'Uşak', normalized: 'usak', province: 'Uşak', lat: 38.6823, lng: 29.4082 },
  { name: 'Van', normalized: 'van', province: 'Van', lat: 38.4891, lng: 43.4089 },
  { name: 'Yozgat', normalized: 'yozgat', province: 'Yozgat', lat: 39.8181, lng: 34.8147 },
  { name: 'Zonguldak', normalized: 'zonguldak', province: 'Zonguldak', lat: 41.4564, lng: 31.7987 },
  { name: 'Aksaray', normalized: 'aksaray', province: 'Aksaray', lat: 38.3687, lng: 34.037 },
  { name: 'Bayburt', normalized: 'bayburt', province: 'Bayburt', lat: 40.2552, lng: 40.2249 },
  { name: 'Karaman', normalized: 'karaman', province: 'Karaman', lat: 37.1759, lng: 33.2287 },
  { name: 'Kırıkkale', normalized: 'kirikkale', province: 'Kırıkkale', lat: 39.8468, lng: 33.5153 },
  { name: 'Batman', normalized: 'batman', province: 'Batman', lat: 37.8812, lng: 41.1292 },
  { name: 'Şırnak', normalized: 'sirnak', province: 'Şırnak', lat: 37.5164, lng: 42.4611, aliases: ['cizre', 'silopi'] },
  { name: 'Bartın', normalized: 'bartin', province: 'Bartın', lat: 41.6344, lng: 32.3375, aliases: ['amasra'] },
  { name: 'Ardahan', normalized: 'ardahan', province: 'Ardahan', lat: 41.1105, lng: 42.7022 },
  { name: 'Iğdır', normalized: 'igdir', province: 'Iğdır', lat: 39.9196, lng: 44.045 },
  { name: 'Yalova', normalized: 'yalova', province: 'Yalova', lat: 40.655, lng: 29.2769 },
  { name: 'Karabük', normalized: 'karabuk', province: 'Karabük', lat: 41.2061, lng: 32.6204, aliases: ['safranbolu'] },
  { name: 'Kilis', normalized: 'kilis', province: 'Kilis', lat: 36.7184, lng: 37.1212 },
  { name: 'Osmaniye', normalized: 'osmaniye', province: 'Osmaniye', lat: 37.0742, lng: 36.2472 },
  { name: 'Düzce', normalized: 'duzce', province: 'Düzce', lat: 40.8438, lng: 31.1565 },

  // Key Districts - İstanbul
  { name: 'Kadıköy', normalized: 'kadikoy', province: 'İstanbul', district: 'Kadıköy', lat: 40.9819, lng: 29.0576, isDistrict: true },
  { name: 'Beşiktaş', normalized: 'besiktas', province: 'İstanbul', district: 'Beşiktaş', lat: 41.0422, lng: 29.0067, isDistrict: true },
  { name: 'Şişli', normalized: 'sisli', province: 'İstanbul', district: 'Şişli', lat: 41.0602, lng: 28.9877, isDistrict: true },
  { name: 'Üsküdar', normalized: 'uskudar', province: 'İstanbul', district: 'Üsküdar', lat: 41.0264, lng: 29.0153, isDistrict: true },
  { name: 'Fatih', normalized: 'fatih', province: 'İstanbul', district: 'Fatih', lat: 41.0186, lng: 28.9398, isDistrict: true },
  { name: 'Bakırköy', normalized: 'bakirkoy', province: 'İstanbul', district: 'Bakırköy', lat: 40.9782, lng: 28.8744, isDistrict: true },
  { name: 'Beyoğlu', normalized: 'beyoglu', province: 'İstanbul', district: 'Beyoğlu', lat: 41.0284, lng: 28.9737, aliases: ['taksim'], isDistrict: true },
  { name: 'Silivri', normalized: 'silivri', province: 'İstanbul', district: 'Silivri', lat: 41.0742, lng: 28.2464, isDistrict: true },
  { name: 'Maltepe', normalized: 'maltepe', province: 'İstanbul', district: 'Maltepe', lat: 40.9255, lng: 29.1311, isDistrict: true },
  { name: 'Kartal', normalized: 'kartal', province: 'İstanbul', district: 'Kartal', lat: 40.8901, lng: 29.1852, isDistrict: true },
  { name: 'Pendik', normalized: 'pendik', province: 'İstanbul', district: 'Pendik', lat: 40.8768, lng: 29.2334, isDistrict: true },
  { name: 'Tuzla', normalized: 'tuzla', province: 'İstanbul', district: 'Tuzla', lat: 40.8153, lng: 29.3093, isDistrict: true },
  { name: 'Esenyurt', normalized: 'esenyurt', province: 'İstanbul', district: 'Esenyurt', lat: 41.0343, lng: 28.6801, isDistrict: true },
  { name: 'Sarıyer', normalized: 'sariyer', province: 'İstanbul', district: 'Sarıyer', lat: 41.1664, lng: 29.0503, isDistrict: true },
  { name: 'Beylikdüzü', normalized: 'beylikduzu', province: 'İstanbul', district: 'Beylikdüzü', lat: 41.0015, lng: 28.6419, isDistrict: true },
  { name: 'Ümraniye', normalized: 'umraniye', province: 'İstanbul', district: 'Ümraniye', lat: 41.0256, lng: 29.1161, isDistrict: true },
  { name: 'Ataşehir', normalized: 'atasehir', province: 'İstanbul', district: 'Ataşehir', lat: 40.9847, lng: 29.1067, isDistrict: true },

  // Key Districts - Ankara
  { name: 'Çankaya', normalized: 'cankaya', province: 'Ankara', district: 'Çankaya', lat: 39.9031, lng: 32.8596, isDistrict: true },
  { name: 'Keçiören', normalized: 'kecioren', province: 'Ankara', district: 'Keçiören', lat: 40.0039, lng: 32.8687, isDistrict: true },
  { name: 'Yenimahalle', normalized: 'yenimahalle', province: 'Ankara', district: 'Yenimahalle', lat: 39.9708, lng: 32.8028, isDistrict: true },
  { name: 'Mamak', normalized: 'mamak', province: 'Ankara', district: 'Mamak', lat: 39.9298, lng: 32.9099, isDistrict: true },
  { name: 'Etimesgut', normalized: 'etimesgut', province: 'Ankara', district: 'Etimesgut', lat: 39.95, lng: 32.6833, isDistrict: true },
  { name: 'Sincan', normalized: 'sincan', province: 'Ankara', district: 'Sincan', lat: 39.9583, lng: 32.5786, isDistrict: true },
  { name: 'Polatlı', normalized: 'polatli', province: 'Ankara', district: 'Polatlı', lat: 39.5833, lng: 32.1333, isDistrict: true },

  // Key Districts - İzmir
  { name: 'Konak', normalized: 'konak', province: 'İzmir', district: 'Konak', lat: 38.4189, lng: 27.1287, isDistrict: true },
  { name: 'Karşıyaka', normalized: 'karsiyaka', province: 'İzmir', district: 'Karşıyaka', lat: 38.4556, lng: 27.1124, isDistrict: true },
  { name: 'Bornova', normalized: 'bornova', province: 'İzmir', district: 'Bornova', lat: 38.4682, lng: 27.2177, isDistrict: true },
  { name: 'Buca', normalized: 'buca', province: 'İzmir', district: 'Buca', lat: 38.3842, lng: 27.1772, isDistrict: true },
  { name: 'Çeşme', normalized: 'cesme', province: 'İzmir', district: 'Çeşme', lat: 38.3236, lng: 26.3042, aliases: ['alacati'], isDistrict: true },
  { name: 'Urla', normalized: 'urla', province: 'İzmir', district: 'Urla', lat: 38.3225, lng: 26.7636, isDistrict: true },
  { name: 'Seferihisar', normalized: 'seferihisar', province: 'İzmir', district: 'Seferihisar', lat: 38.1978, lng: 26.8392, isDistrict: true },

  // Key Districts - Muğla & Antalya
  { name: 'Bodrum', normalized: 'bodrum', province: 'Muğla', district: 'Bodrum', lat: 37.0344, lng: 27.4305, isDistrict: true },
  { name: 'Marmaris', normalized: 'marmaris', province: 'Muğla', district: 'Marmaris', lat: 36.855, lng: 28.2742, isDistrict: true },
  { name: 'Fethiye', normalized: 'fethiye', province: 'Muğla', district: 'Fethiye', lat: 36.6592, lng: 29.1264, aliases: ['oludeniz'], isDistrict: true },
  { name: 'Alanya', normalized: 'alanya', province: 'Antalya', district: 'Alanya', lat: 36.5438, lng: 31.9998, isDistrict: true },
  { name: 'Manavgat', normalized: 'manavgat', province: 'Antalya', district: 'Manavgat', lat: 36.7869, lng: 31.4422, aliases: ['side'], isDistrict: true },
  { name: 'Kaş', normalized: 'kas', province: 'Antalya', district: 'Kaş', lat: 36.2007, lng: 29.6378, isDistrict: true },
  { name: 'Kemer', normalized: 'kemer', province: 'Antalya', district: 'Kemer', lat: 36.5986, lng: 30.5606, isDistrict: true },

  // Key Industrial & Earthquake Regions
  { name: 'Gebze', normalized: 'gebze', province: 'Kocaeli', district: 'Gebze', lat: 40.8039, lng: 29.4308, isDistrict: true },
  { name: 'İskenderun', normalized: 'iskenderun', province: 'Hatay', district: 'İskenderun', lat: 36.5872, lng: 36.1733, isDistrict: true },
  { name: 'Elbistan', normalized: 'elbistan', province: 'Kahramanmaraş', district: 'Elbistan', lat: 38.2047, lng: 37.1911, isDistrict: true },
  { name: 'Pazarcık', normalized: 'pazarcik', province: 'Kahramanmaraş', district: 'Pazarcık', lat: 37.4858, lng: 37.2917, isDistrict: true },
  { name: 'İnegöl', normalized: 'inegol', province: 'Bursa', district: 'İnegöl', lat: 40.0781, lng: 29.5133, isDistrict: true },
  { name: 'Çorlu', normalized: 'corlu', province: 'Tekirdağ', district: 'Çorlu', lat: 41.1592, lng: 27.8, isDistrict: true },

  // Seas & Marine Zones (Often associated with earthquake & maritime signals)
  { name: 'Ege Denizi', normalized: 'ege', province: 'Ege Denizi', lat: 38.0, lng: 25.5, aliases: ['ege denizi', 'ege\'de'] },
  { name: 'Marmara Denizi', normalized: 'marmara', province: 'Marmara', lat: 40.75, lng: 28.0, aliases: ['marmara denizi', 'marmara\'da'] },
  { name: 'Akdeniz', normalized: 'akdeniz', province: 'Akdeniz', lat: 35.5, lng: 32.0, aliases: ['akdeniz\'de'] },
  { name: 'Karadeniz', normalized: 'karadeniz', province: 'Karadeniz', lat: 42.5, lng: 35.0, aliases: ['karadeniz\'de'] }
];

/**
 * Normalizes Turkish text for strict geographic token comparison
 */
function cleanTurkishText(input: string = ''): string {
  return String(input)
    .toLocaleLowerCase('tr-TR')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics for fallback comparison
    .replace(/['’`´]/g, ' ') // treat apostrophes as space to decouple suffixes like İstanbul'da -> istanbul da
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extracts the most relevant Turkish location signal from news title, description or keywords.
 */
export function extractLocationSignal(text: string = ''): LocationSignal | null {
  if (!text || text.trim().length === 0) return null;

  const rawClean = cleanTurkishText(text);
  const words = rawClean.split(' ').filter(w => w.length >= 3);
  const textJoined = ` ${rawClean} `;

  let bestMatch: { entry: GeoLocationEntry; confidence: number; matchedWord: string } | null = null;

  for (const entry of TURKISH_LOCATION_DATABASE) {
    const targets = [entry.normalized, ...(entry.aliases || [])];

    for (const target of targets) {
      const normalizedTarget = cleanTurkishText(target);
      if (normalizedTarget.length < 3) continue;

      // Check whole-word match in padded string
      const pattern = new RegExp(`(?:^|\\s)${normalizedTarget}(?:\\s|$)`, 'i');
      if (pattern.test(textJoined)) {
        // District matches get higher priority than province if both exist
        const confidence = entry.isDistrict ? 0.95 : 0.85;

        if (!bestMatch || confidence > bestMatch.confidence) {
          bestMatch = {
            entry,
            confidence,
            matchedWord: target
          };
        }
      }
    }
  }

  if (!bestMatch) {
    return null;
  }

  const { entry, confidence, matchedWord } = bestMatch;

  return {
    name: entry.isDistrict ? `${entry.name} / ${entry.province}` : entry.name,
    province: entry.province,
    district: entry.district,
    lat: entry.lat,
    lng: entry.lng,
    confidence,
    rawMatchedTerm: matchedWord
  };
}
