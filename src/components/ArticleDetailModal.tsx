import React from 'react';
import { DisGundemItem } from '../types';
import { 
  X, 
  ShieldCheck, 
  ExternalLink, 
  Languages, 
  MapPin, 
  Calendar, 
  Building2, 
  GitBranch,
  Globe2,
  Share2,
  CheckCircle2
} from 'lucide-react';

interface ArticleDetailModalProps {
  article: DisGundemItem | null;
  onClose: () => void;
  onSelectCountryForMap: (countryCode: string) => void;
  onSelectStory: (storyId: string) => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onSelectCountryForMap,
  onSelectStory
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Country & Source Meta Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
          <span className="text-4xl" role="img" aria-label={article.countryName}>
            {article.flag}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">{article.countryName} Basını</h2>
              <span className="text-xs text-slate-400 font-mono">({article.capital})</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
              <span>Kaynak: <strong className="text-slate-200">{article.sourceName}</strong></span>
              <span>•</span>
              <span>Tür: <strong className="text-slate-300">{article.sourceType}</strong></span>
              <span>•</span>
              <span>Bölge: <strong className="text-rose-400">{article.region}</strong></span>
            </div>
          </div>
        </div>

        {/* Turkish Headline & Analysis */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {article.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {new Date(article.publishedAt).toLocaleString('tr-TR')}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {article.turkishHeadline}
            </h1>
          </div>

          {/* Full Turkish Summary */}
          <div className="bg-[#080d16] border border-slate-800 p-4 rounded-xl text-slate-200 text-sm leading-relaxed">
            <h3 className="text-xs font-mono font-bold uppercase text-slate-400 mb-2">
              EDİTORYAL TÜRKÇE RAPOR & ÖZET:
            </h3>
            <p>{article.turkishSummary}</p>
          </div>

          {/* Native Script Quote */}
          <div className="bg-[#070b13] border-l-4 border-rose-500 p-4 rounded-r-xl">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
              <span className="flex items-center gap-1.5 font-mono text-rose-400 font-bold">
                <Languages className="h-4 w-4" />
                Orijinal Kaynak Metni ({article.sourceLanguage})
              </span>
              <span className="text-[11px] text-slate-500">Kaynak Dilinde Alıntı</span>
            </div>
            <p className="text-sm text-slate-300 italic font-serif leading-relaxed">
              "{article.originalExcerpt || article.originalTitle}"
            </p>
          </div>

          {/* Verification Layer Details */}
          <div className="bg-emerald-950/30 border border-emerald-900/60 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-2">
              <ShieldCheck className="h-5 w-5" />
              <span>DOĞRULAMA KATMANI DENETİMİ (ANTI-HALLUCINATION)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bu haber, yapay zeka spekülasyonu içermeyen doğrudan Türkiye atfı olarak doğrulanmıştır. Haberde geçen özel isimler, orijinal kaynak metni ile %100 eşleşmektedir.
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-400 font-mono text-[11px]">Eşleşen Varlıklar / Özel Adlar:</span>
              {article.verifiedNamedEntities.map((ent, idx) => (
                <span key={idx} className="bg-emerald-900/60 text-emerald-200 border border-emerald-700/60 px-2 py-0.5 rounded font-mono text-xs">
                  {ent}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onSelectCountryForMap(article.countryCode);
                onClose();
              }}
              className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-lg transition-colors"
            >
              <MapPin className="h-3.5 w-3.5 text-rose-500" />
              <span>Haritada Başkenti Göster</span>
            </button>

            {article.storyId && (
              <button
                onClick={() => {
                  onSelectStory(article.storyId!);
                  onClose();
                }}
                className="flex items-center gap-1.5 text-xs bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-800 text-indigo-200 px-3 py-2 rounded-lg transition-colors"
              >
                <GitBranch className="h-3.5 w-3.5" />
                <span>Seyir Dosyasına Git</span>
              </button>
            )}
          </div>

          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs bg-rose-600 hover:bg-rose-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <span>Orijinal Gazete / Habere Git</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
