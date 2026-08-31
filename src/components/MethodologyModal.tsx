import React from 'react';
import { 
  ShieldCheck, 
  X, 
  Globe2, 
  Layers, 
  GitBranch, 
  Search, 
  CheckCircle2, 
  Languages,
  Filter,
  Radio,
  BookOpen
} from 'lucide-react';
import { MONITORED_COUNTRIES } from '../data/countriesCatalog';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600/20 border border-rose-500/40 text-rose-500">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
              EDİTORYAL MİMARİ VE VERİ FELSEFESİ
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Dış Gündem Nasıl Çalışır?
            </h2>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          {/* Principle 1 */}
          <div className="bg-[#080d16] border border-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-2 text-rose-400 font-bold mb-2">
              <Globe2 className="h-5 w-5" />
              <h3 className="text-base text-white">1. Kör Noktayı Kapatmak: 50 Ülke ve 640+ Yerel Kaynak</h3>
            </div>
            <p className="text-slate-300">
              Türkiye hakkında yabancı basında ne çıktığı dendiğinde genellikle birkaç büyük Batı gazetesi ve ajans akla gelir. Oysa Türkiye'yi her gün en ayrıntılı konuşan basın; <strong>komşularımızın, ticaret ortaklarımızın ve aynı coğrafyayı paylaştığımız ülkelerin basınıdır</strong>: Atina, Sofya, Bağdat, Kahire, Erivan, Tiflis, Bakü, Tahran ve Şam.
            </p>
            <p className="text-slate-400 mt-2">
              Dış Gündem, 50 ülkenin ana akım medyasını kendi dillerinde (Yunanca, Arapça, Ermenice, Rusça, Bulgarca, Farsça, İbranice, Gürcüce vb.) doğrudan tarar.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="bg-[#080d16] border border-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
              <Layers className="h-5 w-5" />
              <h3 className="text-base text-white">2. İkili Çıktı Mimarisi (Gündem Ayrıştırma)</h3>
            </div>
            <p className="text-slate-300">
              Bir ülkenin günün en çok okunan beş maddesine bakarsanız, Türkiye'yi ilgilendiren haber çoğu zaman o beşin içinde yer almaz. Örneğin Yunan basınının o günkü ilk beş manşeti tamamen iç siyaset olabilir; ama aynı gün Türkiye'ye dair üç ayrı kritik haber yayımlanmıştır.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <strong className="text-amber-400 font-mono block mb-1">ÇIKTI 1: Ülkenin Kendi İç Gündemi</strong>
                <span className="text-xs text-slate-400">Orada o gün halkın ve siyasetin gerçekten neyi konuştuğu (Ulusal bütçe, iç reformlar, grevler vb.).</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-lg border border-rose-900/40">
                <strong className="text-rose-400 font-mono block mb-1">ÇIKTI 2: Türkiye'ye Bakış</strong>
                <span className="text-xs text-slate-400">O ülkenin basınında Türkiye'ye dair çıkan doğrulanmış haberler ve analizler.</span>
              </div>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="bg-[#080d16] border border-emerald-900/50 rounded-xl p-5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="text-base text-white">3. Doğrulama Katmanı (Anti-Hallucination & Anti-Speculation)</h3>
            </div>
            <p className="text-slate-300">
              Yapay zeka modellerinin genel geçer veya spekülatif çıkarımlar yapmasını önleyen <strong>katı iki kural</strong> uygulanır:
            </p>
            <ul className="mt-2 space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>"Türkiye'yi İlgilendirir" Kriteri:</strong> Haberin doğrudan Türkiye'ye atıf yapması zorunludur. "Gelişmeler Türkiye'yi de etkileyebilir" gibi spekülatif tahminler otomatik olarak elenir.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Özel Ad Doğrulama Eşleşmesi:</strong> Bir maddenin başlığında geçen özel adların (bakanlar, kurumlar, antlaşmalar), kanıt gösterilen haberin orijinal metninde de geçmesi zorunludur.
                </span>
              </li>
            </ul>
          </div>

          {/* Principle 4 */}
          <div className="bg-[#080d16] border border-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-2 text-indigo-400 font-bold mb-2">
              <GitBranch className="h-5 w-5" />
              <h3 className="text-base text-white">4. Seyir: Çok Günlü Hikaye Takibi</h3>
            </div>
            <p className="text-slate-300">
              Diplomaside olaylar tek günde bitmez. Bir hikâye ertesi gün devam ederse aynı dosyaya bağlanır. Böylece Ege diyalog sürecinde, Kalkınma Yolu projesinde veya Kafkasya normalleşmesinde dün ne dendi, bugün ne dendi, yarın ne dendi — tek bir akışta, gün gün karşılaştırmalı olarak görülebilir.
            </p>
          </div>

          {/* Monitored Countries Catalog Grid */}
          <div className="bg-[#080d16] border border-slate-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-rose-500" />
                İzlenen 50 Ülke Kataloğu
              </h3>
              <span className="text-xs text-slate-400 font-mono">640+ Ana Akım Gazete, TV ve Ajans</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-48 overflow-y-auto p-1 text-xs">
              {MONITORED_COUNTRIES.map(c => (
                <div key={c.code} className="bg-slate-900/80 p-1.5 rounded border border-slate-800 flex items-center gap-1.5 truncate">
                  <span>{c.flag}</span>
                  <span className="truncate text-slate-200">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Anladım, Platforma Dön
          </button>
        </div>
      </div>
    </div>
  );
};
