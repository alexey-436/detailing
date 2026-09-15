import React from 'react';
import { Shield, Send, Phone, MapPin, Instagram } from 'lucide-react';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <footer
      className={`border-t pt-16 pb-24 sm:pb-16 text-xs transition-colors duration-300 ${
        isDark ? 'bg-[#060709] border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                  isDark ? 'bg-black border-white/20 text-blue-500' : 'bg-white border-slate-300 text-blue-600'
                }`}
              >
                <Shield className="w-4 h-4" />
              </div>
              <span className={`text-xl font-black tracking-widest uppercase font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                NEOX LAB
              </span>
            </div>
            <p className={`text-xs leading-relaxed max-w-md mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Hi-End детейлінг-центр преміум-сегменту в Києві. Антигравійна бронеплівка PPF 215 мкм, нанокерамічні кварцові покриття 9H, відновлювальне полірування кузова та стерильна хімчистка салону з озонуванням.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition ${
                  isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:text-black'
                }`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/neox_detailing"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition ${
                  isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:text-black'
                }`}
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="tel:+380674409988"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition ${
                  isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:text-black'
                }`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className={`text-xs font-black uppercase tracking-wider mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Послуги
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-500 transition">Антигравійна плівка PPF</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition">Кераміка 9H та Рідке Скло</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition">Корекція ЛФП та Полірування</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition">Детейлінг-Хімчистка + Озон</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition">Захист лобового скла</a></li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div>
            <h4 className={`text-xs font-black uppercase tracking-wider mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Локація
            </h4>
            <ul className="space-y-2">
              <li>м. Київ, вул. Новокостянтинівська, 2Б</li>
              <li>Пн – Сб: 09:00 – 20:00</li>
              <li><a href="tel:+380674409988" className="font-mono font-bold text-blue-500 hover:underline">+38 (067) 440-99-88</a></li>
              <li>Охоронювана парковка для клієнтів</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] ${isDark ? 'border-white/10 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
          <div>© {new Date().getFullYear()} NEOX Detailing Lab Kyiv. Всі права захищено.</div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:underline">Політика конфіденційності</a>
            <a href="#rules" className="hover:underline">Гарантійні зобов'язання</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
