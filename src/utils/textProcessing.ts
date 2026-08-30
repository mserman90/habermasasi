import { NewsCluster, NewsItem } from '../types';

export const STOP_WORDS = new Set([
  'son', 'dakika', 'sondakika', 'flaş', 'flash', 'haber', 'haberler',
  'gündem', 'ile', 'ama', 'fakat', 've', 'veya', 'için', 'gibi',
  'kadar', 'olan', 'olarak', 'tarafından', 'bir', 'bu', 'şu', 'o',
  'da', 'de', 'ki', 'mi', 'mı', 'mu', 'mü', 'çok', 'daha', 'yeni',
  'işte', 'üzerine', 'sonrası', 'öncesi', 'göre', 'karşı', 'sonra',
  'önce', 'ancak', 'şöyle', 'böyle', 'diye', 'hem', 'tüm', 'her'
]);

export function normalizeText(text: string = ''): string {
  return String(text)
    .toLocaleLowerCase('tr-TR')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function removePublisherSuffix(title: string = ''): string {
  return String(title)
    .replace(/\s+-\s+[^-]{2,80}$/u, '')
    .replace(/\s+\|\s+[^|]{2,80}$/u, '')
    .trim();
}

export function tokenize(text: string = ''): string[] {
  return normalizeText(text)
    .split(/\s+/)
    .filter(word => word.length >= 4 && !STOP_WORDS.has(word) && !/^\d+$/.test(word));
}

export function calculateJaccard(textA: string, textB: string): number {
  const a = new Set(tokenize(textA));
  const b = new Set(tokenize(textB));
  if (!a.size || !b.size) return 0;
  const intersection = [...a].filter((word) => b.has(word)).length;
  const union = new Set([...a, ...b]).size;
  return union ? intersection / union : 0;
}

export function extractKeywords(text: string = ''): string {
  const cleanText = removePublisherSuffix(String(text).replace(/<[^>]*>/g, ' '));
  const hashtags = [...new Set((cleanText.match(/#[\p{L}\p{N}_]+/gu) || []).map(t => t.slice(1)).filter(t => t.length >= 3))];
  const titleCaseEntities = cleanText.match(/[A-ZÇĞİÖŞÜ][a-zçğıöşü]+(?:\s+[A-ZÇĞİÖŞÜ][a-zçğıöşü]+){0,2}/g) || [];
  const words = tokenize(cleanText);
  const frequency = new Map<string, number>();

  for (const word of words) {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  }
  const frequentWords = [...frequency.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([word]) => word);

  const candidates: string[] = [];
  for (const item of hashtags) candidates.push(item);
  for (const item of titleCaseEntities) {
    const normalized = item.trim();
    if (normalized.length >= 4 && !normalized.toLocaleLowerCase('tr-TR').includes('son dakika')) {
      candidates.push(normalized);
    }
  }
  for (const item of frequentWords) candidates.push(item);

  const unique: string[] = [];
  const seen = new Set<string>();
  for (const candidate of candidates) {
    const normalized = normalizeText(candidate);
    if (normalized && !seen.has(normalized) && unique.length < 3) {
      unique.push(candidate.trim());
      seen.add(normalized);
    }
  }
  return unique.join(' ');
}

export function makeTopicSignature(keywords: string = ''): string {
  return tokenize(keywords)
    .sort((a, b) => a.localeCompare(b, 'tr'))
    .join('_');
}

export function clusterNewsItems(
  items: NewsItem[],
  processedGuids: Set<string>
): NewsCluster[] {
  const clusters: NewsCluster[] = [];

  for (const item of items) {
    if (!item.guid || processedGuids.has(item.guid)) continue;

    const title = removePublisherSuffix(item.cleanTitle || item.title || '');
    let matchedCluster: NewsCluster | null = null;

    for (const cluster of clusters) {
      const similarity = calculateJaccard(cluster.main.cleanTitle || cluster.main.title, title);
      if (similarity >= 0.32) {
        matchedCluster = cluster;
        break;
      }
    }

    const normalizedItem: NewsItem = { ...item, cleanTitle: title };
    if (matchedCluster) {
      matchedCluster.items.push(normalizedItem);
      if (!matchedCluster.sources.includes(item.source || 'Bilinmeyen kaynak')) {
        matchedCluster.sources.push(item.source || 'Bilinmeyen kaynak');
      }
    } else {
      const keywords = extractKeywords(`${normalizedItem.cleanTitle} ${normalizedItem.description || ''}`);
      const signature = makeTopicSignature(keywords);
      clusters.push({
        id: `cluster-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        main: normalizedItem,
        items: [normalizedItem],
        sources: [item.source || 'Bilinmeyen kaynak'],
        keywords: keywords || 'Gündem',
        signature: signature || 'gundem',
        timestamp: Date.now()
      });
    }
    processedGuids.add(item.guid);
  }

  return clusters;
}

export function safeUrl(value: string = ''): string {
  try {
    const url = new URL(value);
    if (url.protocol === 'https:' || url.protocol === 'http:') {
      return url.href;
    }
  } catch {
    return '#';
  }
  return '#';
}

export function formatTime(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date);
}
