import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { XMLParser } from "fast-xml-parser";

const app = express();
const PORT = 3000;

app.use(express.json());

// Known Turkish 24/7 Live Broadcast channels on YouTube
const MAJOR_LIVE_NEWS_CHANNELS: Array<{
  videoId: string;
  title: string;
  channelName: string;
  channelId?: string;
  thumbnail: string;
  viewCountText: string;
  liveUrl: string;
  keywords: string[];
}> = [
  {
    videoId: "F5fWJ00k2yU",
    title: "TRT Haber Canlı Yayın ᴴᴰ - Kesintisiz Son Dakika Haberleri",
    channelName: "TRT Haber",
    thumbnail: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=320&auto=format&fit=crop&q=80",
    viewCountText: "CANLI YAYIN • 45.2K izleyici",
    liveUrl: "https://www.youtube.com/watch?v=F5fWJ00k2yU",
    keywords: ["trt", "haber", "türkiye", "son dakika", "gündem", "ankara", "dünya", "ekonomi", "politika", "meclis", "tbmm", "deprem", "istanbul"]
  },
  {
    videoId: "XEJM4HcBM3M",
    title: "NTV Canlı Yayın - Son Dakika ve Türkiye Gündemi",
    channelName: "NTV",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=320&auto=format&fit=crop&q=80",
    viewCountText: "CANLI YAYIN • 38.9K izleyici",
    liveUrl: "https://www.youtube.com/watch?v=XEJM4HcBM3M",
    keywords: ["ntv", "haber", "ekonomi", "dolar", "piyasa", "son dakika", "gündem", "bakanlık", "cumhurbaşkanı", "hava durumu", "siyaset"]
  },
  {
    videoId: "pY5g2zCszqQ",
    title: "Habertürk TV Canlı Yayın - Gündem ve Tartışma Programları",
    channelName: "Habertürk TV",
    thumbnail: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=320&auto=format&fit=crop&q=80",
    viewCountText: "CANLI YAYIN • 29.4K izleyici",
    liveUrl: "https://www.youtube.com/watch?v=pY5g2zCszqQ",
    keywords: ["habertürk", "gündem", "özel", "analiz", "canlı", "manşet", "tartışma", "politika", "seçim", "hükümet"]
  },
  {
    videoId: "yq_03Gv1b08",
    title: "CNN TÜRK Canlı Yayın - Tarafsız Bölge ve Sıcak Haberler",
    channelName: "CNN TÜRK",
    thumbnail: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=320&auto=format&fit=crop&q=80",
    viewCountText: "CANLI YAYIN • 34.1K izleyici",
    liveUrl: "https://www.youtube.com/watch?v=yq_03Gv1b08",
    keywords: ["cnn türk", "cnn", "son dakika", "sıcak gelişme", "operasyon", "flaş", "dış politika", "nato", "bölge", "asayiş"]
  },
  {
    videoId: "tFvA7bA6bEQ",
    title: "Sözcü Televizyonu Canlı Yayın - Gerçeklerin Adresi",
    channelName: "SÖZCÜ Televizyonu",
    thumbnail: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=320&auto=format&fit=crop&q=80",
    viewCountText: "CANLI YAYIN • 42.0K izleyici",
    liveUrl: "https://www.youtube.com/watch?v=tFvA7bA6bEQ",
    keywords: ["sözcü", "szc tv", "ana haber", "muhalefet", "emekli", "zam", "enflasyon", "asgari ücret", "yargı", "adalet"]
  },
  {
    videoId: "uK48rP5k4eE",
    title: "Halk TV Canlı Yayın - Türkiye'nin Haber Kanalı",
    channelName: "Halk TV",
    thumbnail: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=320&auto=format&fit=crop&q=80",
    viewCountText: "CANLI YAYIN • 31.8K izleyici",
    liveUrl: "https://www.youtube.com/watch?v=uK48rP5k4eE",
    keywords: ["halk tv", "haber masası", "gündem özel", "açıklama", "basın toplantısı", "karar", "hukuk", "demokrasi"]
  },
  {
    videoId: "5rT8sZ3qDrs",
    title: "tv100 Canlı Yayın - Türkiye'nin Yeni Yüzü",
    channelName: "tv100",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=320&auto=format&fit=crop&q=80",
    viewCountText: "CANLI YAYIN • 18.5K izleyici",
    liveUrl: "https://www.youtube.com/watch?v=5rT8sZ3qDrs",
    keywords: ["tv100", "gündem", "özel haber", "flaş haber", "uzman görüşü", "anket"]
  },
  {
    videoId: "b01mK1qU9Jk",
    title: "TGRT Haber Canlı Yayın - Son Dakika Gelişmeleri",
    channelName: "TGRT Haber",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=320&auto=format&fit=crop&q=80",
    viewCountText: "CANLI YAYIN • 14.3K izleyici",
    liveUrl: "https://www.youtube.com/watch?v=b01mK1qU9Jk",
    keywords: ["tgrt", "teknoloji", "savunma", "diplomasi", "bakan", "belediye"]
  }
];

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  trimValues: true
});

function stripHtml(html: string = ""): string {
  return String(html)
    .replace(/<[^>]*>?/gm, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function removePublisherSuffix(title: string = ""): string {
  return String(title).replace(/\s+-\s+[^-]{2,80}$/u, "").trim();
}

async function fetchRssFeed(url: string, sourceFallback: string) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8"
      }
    });
    clearTimeout(timeout);

    if (!res.ok) return [];
    const xmlText = await res.text();
    const parsed = xmlParser.parse(xmlText);

    const items = parsed?.rss?.channel?.item || parsed?.feed?.entry || [];
    const itemsArray = Array.isArray(items) ? items : [items];

    return itemsArray.filter(Boolean).map((item: any) => {
      const rawTitle = item.title || "";
      const cleanTitle = removePublisherSuffix(typeof rawTitle === "object" ? rawTitle["#text"] || "" : rawTitle);
      const link = item.link?.["@_href"] || (typeof item.link === "string" ? item.link : item.link?.["#text"] || item.guid?.["#text"] || "");
      const guid = item.guid?.["#text"] || (typeof item.guid === "string" ? item.guid : link || cleanTitle);
      const pubDate = item.pubDate || item.published || item.updated || new Date().toISOString();
      const source = item.source?.["#text"] || (typeof item.source === "string" ? item.source : sourceFallback);
      const description = stripHtml(item.description || item.summary || "");

      return {
        id: Buffer.from(guid || cleanTitle).toString("base64").substring(0, 24),
        guid: String(guid || cleanTitle),
        title: typeof rawTitle === "string" ? rawTitle : cleanTitle,
        cleanTitle: cleanTitle || "Başlıksız Sinyal",
        link: String(link || "#"),
        pubDate: String(pubDate),
        source: String(source || sourceFallback),
        description: description.substring(0, 300)
      };
    });
  } catch (err) {
    console.error(`RSS fetch error for ${url}:`, err);
    return [];
  }
}

// Fallback high-impact breaking news items if network is strictly isolated
function getSimulatedFallbackNews() {
  const now = new Date();
  return [
    {
      id: "signal-mock-1",
      guid: "mock-1-" + Date.now(),
      title: "AFAD ve Kandilli'den Ege Denizi Açıklarında Deprem Açıklaması - Anadolu Ajansı",
      cleanTitle: "AFAD ve Kandilli'den Ege Denizi Açıklarında Deprem Açıklaması",
      link: "https://www.aa.com.tr",
      pubDate: new Date(now.getTime() - 4 * 60000).toISOString(),
      source: "Anadolu Ajansı",
      description: "Ege Denizi açıklarında meydana gelen sarsıntı kıyı illerinde hissedildi. Ekipler saha taraması başlattı."
    },
    {
      id: "signal-mock-2",
      guid: "mock-2-" + Date.now(),
      title: "Merkez Bankası PPK Faiz Kararı Sonrası Piyasalarda Sıcak Saatler - NTV",
      cleanTitle: "Merkez Bankası PPK Faiz Kararı Sonrası Piyasalarda Sıcak Saatler",
      link: "https://www.ntv.com.tr",
      pubDate: new Date(now.getTime() - 11 * 60000).toISOString(),
      source: "NTV",
      description: "Para Politikası Kurulu faiz karar metnini yayımladı. Dolar, Euro ve Borsa İstanbul'da anlık hareketlilik."
    },
    {
      id: "signal-mock-3",
      guid: "mock-3-" + Date.now(),
      title: "Dışişleri Bakanlığı'ndan Kritik Bölgesel Ateşkes ve Diplomasi Hamlesi - TRT Haber",
      cleanTitle: "Dışişleri Bakanlığı'ndan Kritik Bölgesel Ateşkes ve Diplomasi Hamlesi",
      link: "https://www.trthaber.com",
      pubDate: new Date(now.getTime() - 18 * 60000).toISOString(),
      source: "TRT Haber",
      description: "Ankara'da gerçekleştirilen üst düzey diplomatik zirvede bölgesel güvenlik ve koridorlar ele alındı."
    },
    {
      id: "signal-mock-4",
      guid: "mock-4-" + Date.now(),
      title: "Meteoroloji'den 16 İl İçin Sarı ve Turuncu Kodlu Fırtına Uyarısı - Sözcü",
      cleanTitle: "Meteoroloji'den 16 İl İçin Sarı ve Turuncu Kodlu Fırtına Uyarısı",
      link: "https://www.sozcu.com.tr",
      pubDate: new Date(now.getTime() - 25 * 60000).toISOString(),
      source: "Sözcü",
      description: "Marmara ve Karadeniz bölgesinde kuvvetli rüzgar ve sağanak yağış bekleniyor. Valiliklerden tedbir çağrısı."
    },
    {
      id: "signal-mock-5",
      guid: "mock-5-" + Date.now(),
      title: "Ulaştırma Bakanlığı Yüksek Hızlı Tren ve Yeni Hat Projesini Duyurdu - Habertürk",
      cleanTitle: "Ulaştırma Bakanlığı Yüksek Hızlı Tren ve Yeni Hat Projesini Duyurdu",
      link: "https://www.haberturk.com",
      pubDate: new Date(now.getTime() - 32 * 60000).toISOString(),
      source: "Habertürk",
      description: "Yeni demiryolu koridoru ile seyahat süreleri kısalacak. Projenin etapları kamuoyuyla paylaşıldı."
    }
  ];
}

async function searchLiveStreamsFromWeb(queryKeywords: string[]) {
  // Return all live news channels with matching relevance scoring
  const enriched = MAJOR_LIVE_NEWS_CHANNELS.map(stream => {
    let score = 1;
    const streamKeywords = stream.keywords || [];
    const matched: string[] = [];

    for (const q of queryKeywords) {
      const qLower = q.toLocaleLowerCase("tr-TR");
      if (streamKeywords.some(k => k.includes(qLower) || qLower.includes(k))) {
        score += 3;
        matched.push(q);
      }
      if (stream.title.toLocaleLowerCase("tr-TR").includes(qLower)) {
        score += 4;
        matched.push(q);
      }
    }

    return {
      ...stream,
      score,
      matchedKeywords: [...new Set(matched)]
    };
  });

  // Sort by score
  return enriched.sort((a, b) => b.score - a.score);
}

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), timestamp: Date.now() });
});

app.get("/api/radar", async (req, res) => {
  const warnings: string[] = [];

  try {
    const feeds = await Promise.allSettled([
      fetchRssFeed("https://news.google.com/rss?hl=tr&gl=TR&ceid=TR:tr", "Google News TR"),
      fetchRssFeed("https://news.google.com/rss/headlines/section/topic/NATION?hl=tr&gl=TR&ceid=TR:tr", "Gündem"),
      fetchRssFeed("https://news.google.com/rss/search?q=son+dakika&hl=tr&gl=TR&ceid=TR:tr", "Son Dakika Radar"),
      fetchRssFeed("https://www.trthaber.com/sondakika_articles.rss", "TRT Haber"),
      fetchRssFeed("https://feeds.bbci.co.uk/turkce/rss.xml", "BBC Türkçe")
    ]);

    let combinedNews: any[] = [];
    feeds.forEach((result, idx) => {
      if (result.status === "fulfilled" && Array.isArray(result.value)) {
        combinedNews.push(...result.value);
      } else {
        warnings.push(`Sinyal kanalı #${idx + 1} gecikmeli yanıt verdi.`);
      }
    });

    // Deduplicate by clean title similarity
    const seenTitles = new Set<string>();
    let uniqueNews = combinedNews.filter(item => {
      const normalized = item.cleanTitle.toLocaleLowerCase("tr-TR").replace(/[^a-z0-9]/g, "");
      if (!normalized || normalized.length < 5 || seenTitles.has(normalized)) {
        return false;
      }
      seenTitles.add(normalized);
      return true;
    });

    if (uniqueNews.length === 0) {
      warnings.push("Dış RSS kaynaklarına ulaşılamadı, taktiksel simülasyon sinyalleri devreye alındı.");
      uniqueNews = getSimulatedFallbackNews();
    }

    // Extract prominent keywords across news
    const allWords = uniqueNews
      .map(n => n.cleanTitle)
      .join(" ")
      .split(/\s+/)
      .map(w => w.toLocaleLowerCase("tr-TR").replace(/[^\p{L}\p{N}]/gu, ""))
      .filter(w => w.length >= 4);

    const liveStreams = await searchLiveStreamsFromWeb(allWords.slice(0, 30));

    res.json({
      ok: true,
      timestamp: Date.now(),
      news: uniqueNews.slice(0, 35),
      liveStreams: liveStreams.slice(0, 10),
      warnings: warnings.length > 0 ? warnings : undefined
    });
  } catch (error: any) {
    console.error("Radar scan handler error:", error);
    res.status(500).json({
      ok: false,
      error: error.message || "Radar tarama motoru hatası",
      news: getSimulatedFallbackNews(),
      liveStreams: MAJOR_LIVE_NEWS_CHANNELS
    });
  }
});

async function startServer() {
  // Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[S.D.R. CONSOLE] Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
