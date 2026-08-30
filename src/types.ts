export interface NewsItem {
  id: string;
  guid: string;
  title: string;
  cleanTitle: string;
  link: string;
  pubDate: string;
  source: string;
  description?: string;
  keywords?: string[];
  signature?: string;
}

export interface NewsCluster {
  id: string;
  main: NewsItem;
  items: NewsItem[];
  sources: string[];
  keywords: string;
  signature: string;
  timestamp: number;
}

export interface LiveStreamItem {
  videoId: string;
  title: string;
  channelName: string;
  channelId?: string;
  thumbnail: string;
  viewCountText?: string;
  liveUrl: string;
  is24x7?: boolean;
  matchedKeywords?: string[];
}

export interface RadarApiResponse {
  ok: boolean;
  timestamp: number;
  news: NewsItem[];
  liveStreams: LiveStreamItem[];
  warnings?: string[];
  error?: string;
}

export interface TerminalLog {
  id: string;
  timestamp: string;
  message: string;
  type: 'info' | 'warn' | 'error' | 'success' | 'radar';
}

export type RadarStatus = 'idle' | 'scanning' | 'success' | 'error';
