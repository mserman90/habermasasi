import React from 'react';
import { 
  X, 
  ExternalLink, 
  Globe, 
  Layers, 
  Clock, 
  ShieldAlert, 
  Hash 
} from 'lucide-react';
import { NewsCluster } from '../types';
import { safeUrl } from '../utils/textProcessing';

interface NewsDetailModalProps {
  cluster: NewsCluster | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  cluster,
  onClose
}) => {
  if (!cluster) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl border border-[#00ff41] bg-[#0a0f0d] p-5 shadow-[0_0_30px_rgba(0,255,65,0.3)]">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#008f11] pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00ff41]">
            <ShieldAlert className="h-4 w-4 text-[#00ff41]" />
            <span className="font-bold uppercase tracking-wider">
              SİNYAL TELEMETRİ DETAYI
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-[#6b8f74] hover:text-[#00ff41] p-1 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          {/* Main Title */}
          <h2 className="text-base sm:text-lg font-bold leading-relaxed text-white">
            {cluster.main.cleanTitle || cluster.main.title}
          </h2>

          {/* Metadata badges */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="flex items-center gap-1 bg-[#008f11]/30 border border-[#008f11] px-2 py-1 text-[#00ff41]">
              <Globe className="h-3 w-3" />
              Kaynaklar: {cluster.sources.join(', ')}
            </span>

            <span className="flex items-center gap-1 bg-[#111b15] border border-[#008f11]/60 px-2 py-1 text-[#eab308]">
              <Hash className="h-3 w-3" />
              İmza: [{cluster.keywords}]
            </span>

            <span className="flex items-center gap-1 bg-[#111b15] border border-[#008f11]/60 px-2 py-1 text-[#6b8f74]">
              <Clock className="h-3 w-3" />
              {cluster.main.pubDate ? new Date(cluster.main.pubDate).toLocaleString('tr-TR') : ''}
            </span>
          </div>

          {/* Description */}
          {cluster.main.description && (
            <div className="rounded border border-[#008f11]/40 bg-[#111b15] p-3 text-xs leading-relaxed text-[#c3e8cb]">
              <p className="font-sans text-sm">{cluster.main.description}</p>
            </div>
          )}

          {/* Clustered Sub-Items / Sources */}
          {cluster.items.length > 1 && (
            <div className="mt-4 border-t border-[#008f11]/30 pt-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#00ff41] mb-2 font-mono">
                <Layers className="h-3.5 w-3.5" />
                <span>KÜMELEŞEN DİĞER KAYNAK BAŞLIKLARI ({cluster.items.length - 1})</span>
              </div>

              <div className="space-y-2">
                {cluster.items.slice(1).map((subItem, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-l-2 border-[#008f11] bg-black/40 p-2 text-xs"
                  >
                    <div>
                      <p className="font-medium text-white">{subItem.cleanTitle || subItem.title}</p>
                      <span className="text-[10px] text-[#6b8f74] font-mono">{subItem.source}</span>
                    </div>

                    <a
                      href={safeUrl(subItem.link)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00ff41] hover:underline flex items-center gap-1 text-[11px] ml-2 shrink-0"
                    >
                      <span>Oku</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-[#008f11] pt-3">
          <button
            type="button"
            onClick={onClose}
            className="border border-[#008f11] px-4 py-1.5 text-xs font-bold text-[#6b8f74] hover:bg-[#008f11]/20 hover:text-white"
          >
            KAPAT
          </button>

          <a
            href={safeUrl(cluster.main.link)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-[#00ff41] bg-[#00ff41] px-4 py-1.5 text-xs font-bold text-black hover:bg-[#00ff41]/80"
          >
            <span>ORİJİNAL KAYNAĞA GİT</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
