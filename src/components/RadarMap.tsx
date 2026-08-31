import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { 
  Globe2, 
  MapPin, 
  Crosshair, 
  Maximize2, 
  Radio, 
  ExternalLink, 
  Filter, 
  ShieldCheck,
  Compass,
  Layers,
  ArrowRight
} from 'lucide-react';
import { CountryAgendaOverview, DisGundemItem } from '../types';
import { MONITORED_COUNTRIES } from '../data/countriesCatalog';
import { radarAudio } from '../utils/audioSynthesizer';

interface RadarMapProps {
  countries: CountryAgendaOverview[];
  selectedCountryCode?: string | null;
  onSelectCountry: (countryCode: string) => void;
  onOpenArticleModal: (article: DisGundemItem) => void;
}

const isValidCoordinate = (val: any): val is number => {
  return typeof val === 'number' && !isNaN(val) && isFinite(val);
};

const ANKARA_COORDS: [number, number] = [39.9334, 32.8597];

export const RadarMap: React.FC<RadarMapProps> = ({
  countries,
  selectedCountryCode,
  onSelectCountry,
  onOpenArticleModal
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersGroupRef = useRef<L.LayerGroup | null>(null);
  const linesGroupRef = useRef<L.LayerGroup | null>(null);
  
  const [activeRegionFilter, setActiveRegionFilter] = useState<string>('ALL');
  const [onlyMentioning, setOnlyMentioning] = useState<boolean>(false);
  const [mapCenterCoords, setMapCenterCoords] = useState<{ lat: number; lng: number; zoom: number }>({
    lat: 39.0,
    lng: 35.0,
    zoom: 4
  });

  const regions = [
    'ALL',
    'Komşular & Yakın Havza',
    'Ortadoğu & Kuzey Afrika',
    'Avrupa & Batı',
    'Balkanlar & Doğu Avrupa',
    'Kafkaslar & Orta Asya'
  ];

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [39.0, 35.0],
      zoom: 4,
      minZoom: 3,
      maxZoom: 10,
      zoomControl: false
    });

    // Dark Matter Tactical Map Tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const linesGroup = L.layerGroup().addTo(map);
    const markersGroup = L.layerGroup().addTo(map);

    linesGroupRef.current = linesGroup;
    markersGroupRef.current = markersGroup;
    mapInstanceRef.current = map;

    map.on('moveend', () => {
      try {
        const center = map.getCenter();
        if (center && isValidCoordinate(center.lat) && isValidCoordinate(center.lng)) {
          setMapCenterCoords({
            lat: Number(center.lat.toFixed(2)),
            lng: Number(center.lng.toFixed(2)),
            zoom: map.getZoom() || 4
          });
        }
      } catch {
        // Safe catch
      }
    });

    // ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      if (mapInstanceRef.current && mapContainerRef.current) {
        const { clientWidth, clientHeight } = mapContainerRef.current;
        if (clientWidth > 0 && clientHeight > 0) {
          try {
            mapInstanceRef.current.invalidateSize({ pan: false });
          } catch {
            // Safe fallback
          }
        }
      }
    });

    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
      markersGroupRef.current = null;
      linesGroupRef.current = null;
    };
  }, []);

  // Update Markers & Geopolitical Laser Rays to Ankara
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersGroupRef.current;
    const linesGroup = linesGroupRef.current;
    if (!map || !markersGroup || !linesGroup) return;

    markersGroup.clearLayers();
    linesGroup.clearLayers();

    // 1. Plot Central Ankara Beacon
    const ankaraIcon = L.divIcon({
      className: 'relative flex items-center justify-center',
      html: `
        <div class="relative flex items-center justify-center">
          <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-rose-500 opacity-40"></span>
          <div class="h-6 w-6 rounded-full bg-rose-600 border-2 border-white shadow-[0_0_15px_#f43f5e] flex items-center justify-center text-xs font-bold text-white">
            🇹🇷
          </div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const ankaraMarker = L.marker(ANKARA_COORDS, { icon: ankaraIcon });
    ankaraMarker.bindPopup(`
      <div class="p-2 text-xs font-sans">
        <div class="font-bold text-rose-400 flex items-center gap-1.5 mb-1">
          <span>🇹🇷 ANKARA (MERKEZ RADAR)</span>
        </div>
        <p class="text-slate-300 text-[11px]">
          50 Başkentin basın sinyalleri ve diplomatik değerlendirmeleri bu merkezde toplanır.
        </p>
      </div>
    `);
    markersGroup.addLayer(ankaraMarker);

    // 2. Plot All 50 Monitored Countries
    countries.forEach(country => {
      if (activeRegionFilter !== 'ALL' && country.region !== activeRegionFilter) return;
      if (onlyMentioning && !country.hasDirectTurkeyMention) return;

      const coords = country.capitalCoords;
      if (!coords || !isValidCoordinate(coords[0]) || !isValidCoordinate(coords[1])) return;

      const hasMentions = country.hasDirectTurkeyMention;
      const isSelected = selectedCountryCode === country.countryCode;

      // Draw Laser Ray connecting country to Ankara if mentioning Turkey
      if (hasMentions) {
        const polyline = L.polyline([coords, ANKARA_COORDS], {
          color: isSelected ? '#f43f5e' : '#e11d48',
          weight: isSelected ? 2.5 : 1.5,
          opacity: isSelected ? 0.9 : 0.6,
          dashArray: '4, 8'
        });
        linesGroup.addLayer(polyline);
      }

      // Marker Icon
      const markerHtml = `
        <div class="relative flex items-center justify-center cursor-pointer group">
          ${hasMentions ? '<span class="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-rose-500 opacity-60"></span>' : ''}
          <div class="h-6 w-6 rounded-full ${
            hasMentions 
              ? 'bg-rose-950/90 border-2 border-rose-500 shadow-[0_0_12px_#f43f5e]' 
              : 'bg-slate-900 border border-slate-700 opacity-80'
          } flex items-center justify-center text-xs shadow-md transition-transform hover:scale-125">
            ${country.flag}
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'relative',
        html: markerHtml,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker(coords, { icon: customIcon });

      // Interactive Popup
      const mentionsHtml = hasMentions
        ? `
          <div class="mt-2 pt-2 border-t border-rose-900/60">
            <span class="text-[10px] font-mono text-rose-400 font-bold block mb-1">
              🔴 BUGÜN TÜRKİYE RAPORU (${country.turkeyMentions.length} HABER):
            </span>
            <div class="text-[11px] font-bold text-white leading-tight">
              ${country.turkeyMentions[0]?.turkishHeadline || 'Türkiye konulu analiz'}
            </div>
            <div class="text-[10px] text-slate-400 mt-1 font-mono">
              Kaynak: ${country.turkeyMentions[0]?.sourceName || 'Yerel Basın'}
            </div>
          </div>
        `
        : `
          <div class="mt-2 pt-2 border-t border-slate-800 text-[10px] text-slate-400">
            <span>Bugün yerel iç gündem takip ediliyor (Türkiye konulu doğrudan atıf yok).</span>
          </div>
        `;

      const popupContent = `
        <div class="p-2.5 font-sans min-w-[220px] max-w-[280px]">
          <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1.5">
            <div class="flex items-center gap-1.5">
              <span class="text-xl">${country.flag}</span>
              <div>
                <strong class="text-white text-xs block">${country.countryName}</strong>
                <span class="text-[10px] text-slate-400 font-mono">${country.capital} • ${country.region}</span>
              </div>
            </div>
          </div>

          <div class="text-[10px] text-amber-400 font-mono mb-1">
            YEREL İÇ GÜNDEM:
          </div>
          <p class="text-[11px] text-slate-300 leading-snug">
            ${country.localDomesticHeadlines[0]?.titleTurkish || 'Ulusal gündem maddeleri'}
          </p>

          ${mentionsHtml}
        </div>
      `;

      marker.bindPopup(popupContent, { maxWidth: 300 });

      marker.on('click', () => {
        radarAudio.playRadarPing();
        onSelectCountry(country.countryCode);
      });

      markersGroup.addLayer(marker);
    });
  }, [countries, activeRegionFilter, onlyMentioning, selectedCountryCode, onSelectCountry]);

  // Fly to selected country if specified
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !selectedCountryCode) return;

    const matched = countries.find(c => c.countryCode === selectedCountryCode);
    if (matched && matched.capitalCoords && isValidCoordinate(matched.capitalCoords[0]) && isValidCoordinate(matched.capitalCoords[1])) {
      try {
        map.flyTo(matched.capitalCoords, 6, { duration: 1.2 });
        radarAudio.playRadarPing();
      } catch {
        // Safe catch
      }
    }
  }, [selectedCountryCode, countries]);

  const handleReset = () => {
    const map = mapInstanceRef.current;
    if (!map) return;
    try {
      map.flyTo([39.0, 35.0], 4, { duration: 1 });
    } catch {
      try {
        map.setView([39.0, 35.0], 4);
      } catch {
        // Safe
      }
    }
  };

  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden bg-[#06090e]">
      {/* Top Map Bar */}
      <div className="z-10 flex flex-wrap items-center justify-between border-b border-slate-800 bg-[#0b0f17]/95 px-3 sm:px-6 py-2.5 text-xs gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-rose-500 font-bold uppercase tracking-wider text-xs">
            <Radio className="h-4 w-4" />
            JEOPOLİTİK RADAR HARİTASI
          </span>
          <span className="bg-rose-950/80 border border-rose-800/80 text-rose-300 text-[10px] font-mono px-2 py-0.5 rounded">
            50 Başkent / Ankara Odaklı
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOnlyMentioning(!onlyMentioning)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
              onlyMentioning
                ? 'bg-rose-600 text-white border-rose-500 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            Sadece Türkiye'yi Konuşanlar
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-lg text-xs transition-colors"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span>Merkeze Dön</span>
          </button>
        </div>
      </div>

      {/* Region Filter Bar */}
      <div className="z-10 flex items-center gap-1.5 overflow-x-auto border-b border-slate-800/60 bg-[#070b13]/90 px-3 sm:px-6 py-1.5 text-xs scrollbar-none">
        <span className="text-[11px] text-slate-500 font-mono shrink-0">BÖLGE:</span>
        {regions.map(r => (
          <button
            key={r}
            onClick={() => setActiveRegionFilter(r)}
            className={`px-2 py-0.5 rounded text-xs whitespace-nowrap transition-colors ${
              activeRegionFilter === r
                ? 'bg-rose-600 text-white font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {r === 'ALL' ? 'Tüm Havzalar' : r}
          </button>
        ))}
      </div>

      {/* Leaflet Canvas Container */}
      <div className="relative flex-grow w-full h-full min-h-[450px]">
        <div ref={mapContainerRef} className="h-full w-full z-0" />

        {/* Legend Box at Bottom Left */}
        <div className="absolute bottom-4 left-4 z-10 rounded-xl border border-slate-800 bg-[#0b0f17]/95 p-3.5 text-xs shadow-2xl backdrop-blur-md max-w-xs">
          <div className="font-bold text-white mb-2 flex items-center gap-1.5 font-mono text-[11px]">
            <Compass className="h-3.5 w-3.5 text-rose-500" />
            <span>RADAR LEJANDI</span>
          </div>
          <div className="space-y-1.5 text-[11px] text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500 animate-ping"></span>
              <span><strong>Kırmızı Sinyal & Çizgi:</strong> Türkiye'yi Konuşan Başkent</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
              <span><strong>Gri Nokta:</strong> Yerel Gündem İzlenen Başkent</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">🇹🇷</span>
              <span><strong>Ankara Hub:</strong> Sinyal Toplama Merkezi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
