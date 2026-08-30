import React from 'react';
import { 
  X, 
  ExternalLink, 
  Tv, 
  Radio, 
  Users 
} from 'lucide-react';
import { LiveStreamItem } from '../types';

interface StreamPlayerModalProps {
  stream: LiveStreamItem | null;
  onClose: () => void;
}

export const StreamPlayerModal: React.FC<StreamPlayerModalProps> = ({
  stream,
  onClose
}) => {
  if (!stream) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-3xl border border-[#ff003c] bg-[#0a0f0d] p-4 shadow-[0_0_40px_rgba(255,0,60,0.3)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ff003c]/40 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff003c]">
            <span className="h-2 w-2 rounded-full bg-[#ff003c] animate-ping"></span>
            <Tv className="h-4 w-4" />
            <span className="font-bold uppercase tracking-wider">
              CANLI YAYIN BESLEMESİ: {stream.channelName}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-[#6b8f74] hover:text-[#ff003c] p-1 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Embed Player */}
        <div className="mt-4 relative aspect-video w-full overflow-hidden bg-black border border-[#ff003c]/60">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(stream.videoId)}?autoplay=1&rel=0`}
            title={stream.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        {/* Stream Details */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-sm font-bold text-white">{stream.title}</h2>
            <div className="mt-1 flex items-center gap-3 text-xs font-mono text-[#6b8f74]">
              <span className="flex items-center gap-1 text-[#ff003c]">
                <Radio className="h-3 w-3" />
                {stream.channelName}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {stream.viewCountText || 'Canlı Akış'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://www.youtube.com/watch?v=${encodeURIComponent(stream.videoId)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-[#ff003c] bg-[#ff003c] px-3 py-1.5 text-xs font-bold text-black hover:bg-[#ff003c]/80"
            >
              <span>YOUTUBE'DA AÇ</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
