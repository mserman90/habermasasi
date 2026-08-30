import React from 'react';
import { 
  Tv, 
  Radio, 
  ExternalLink, 
  Play, 
  Users, 
  Flame 
} from 'lucide-react';
import { LiveStreamItem } from '../types';
import { safeUrl } from '../utils/textProcessing';

interface LiveStreamsPanelProps {
  streams: LiveStreamItem[];
  onSelectStream: (stream: LiveStreamItem) => void;
}

export const LiveStreamsPanel: React.FC<LiveStreamsPanelProps> = ({
  streams,
  onSelectStream
}) => {
  return (
    <section className="flex w-full flex-col bg-[#111b15]/60 md:w-1/3 min-h-[360px] h-full overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[#ff003c] bg-[#ff003c]/20 px-3 py-2">
        <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-[#ff003c]">
          <Tv className="h-4 w-4 text-[#ff003c]" />
          <span>Canlı Yayın Eşleşmeleri</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            id="yt-count"
            className="rounded bg-[#ff003c] px-2 py-0.5 text-xs font-bold text-black font-mono shadow-[0_0_8px_rgba(255,0,60,0.4)]"
          >
            {streams.length}
          </span>
        </div>
      </div>

      {/* Stream List Container */}
      <div
        id="yt-container"
        className="flex-grow space-y-3 overflow-y-auto p-3"
      >
        {streams.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-center text-[#ff003c] opacity-60">
            <Radio className="h-10 w-10 mb-3 text-[#ff003c] animate-pulse" />
            <p className="text-xs uppercase tracking-widest">
              Aktif yayın bulunamadı
            </p>
            <p className="text-[10px] mt-1 text-[#6b8f74]">
              Radar taraması yapıldığında eşleşen YouTube canlı haber yayınları burada listelenir.
            </p>
          </div>
        ) : (
          streams.map((stream) => {
            const hasMatched = stream.matchedKeywords && stream.matchedKeywords.length > 0;
            return (
              <article
                key={stream.videoId}
                onClick={() => onSelectStream(stream)}
                className="pulse-border group relative cursor-pointer overflow-hidden border border-[#ff003c]/70 bg-black/70 p-3 transition-all hover:bg-[#ff003c]/15 hover:border-[#ff003c] shadow-[0_2px_12px_rgba(255,0,60,0.15)]"
              >
                <div className="flex gap-3">
                  {/* Thumbnail Wrap */}
                  <div className="relative h-18 w-26 flex-shrink-0 overflow-hidden bg-gray-900 border border-[#ff003c]/40 rounded-sm">
                    <img
                      src={safeUrl(stream.thumbnail)}
                      alt={stream.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* CANLI Badge */}
                    <div className="absolute top-1 left-1 flex items-center gap-1 bg-[#ff003c] px-1.5 py-0.2 text-[8px] font-bold text-black tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping"></span>
                      <span>CANLI</span>
                    </div>

                    {/* Play Icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-6 w-6 text-[#00ff41] fill-[#00ff41]" />
                    </div>
                  </div>

                  {/* Content Wrap */}
                  <div className="flex min-w-0 flex-grow flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="line-clamp-2 text-xs font-bold text-white group-hover:text-[#00ff41] transition-colors leading-snug">
                        {stream.title}
                      </h3>

                      {/* Channel Name */}
                      <div className="mt-1 flex items-center gap-1.5 text-[11px] font-bold text-[#ff003c]">
                        <Radio className="h-3 w-3" />
                        <span className="truncate">{stream.channelName}</span>
                      </div>
                    </div>

                    {/* Viewers & Signatures */}
                    <div className="mt-2 flex flex-col gap-1">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="flex items-center gap-1 text-[#ff003c]/80 font-mono">
                          <Users className="h-2.5 w-2.5" />
                          {stream.viewCountText || 'Canlı yayın algılandı'}
                        </span>

                        <a
                          href={`https://www.youtube.com/watch?v=${encodeURIComponent(stream.videoId)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-0.5 text-[9px] text-[#00ff41] hover:underline"
                        >
                          <span>YouTube</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      </div>

                      {hasMatched && (
                        <div className="truncate text-[9px] font-mono text-[#00ff41]/90 bg-[#00ff41]/10 px-1.5 py-0.5 border border-[#00ff41]/20 rounded-sm">
                          <Flame className="h-2.5 w-2.5 inline mr-1 text-[#eab308]" />
                          Eşleşen İmza: <strong className="text-[#eab308]">[{stream.matchedKeywords?.join(', ')}]</strong>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
};
