import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Send, Clock, Navigation, ArrowRight } from 'lucide-react';
import { ThemeMode } from '../types';

interface ContactsMapSectionProps {
  theme: ThemeMode;
  onOpenBooking: () => void;
}

export const ContactsMapSection: React.FC<ContactsMapSectionProps> = ({
  theme,
  onOpenBooking,
}) => {
  const isDark = theme === 'dark';
  const LAT = '50.4735';
  const LNG = '30.4952';
  const ADDRESS = 'вул. Новокостянтинівська, 2Б, Київ (Поділ / Оболонь)';

  return (
    <section
      id="contacts"
      className={`scroll-mt-16 sm:scroll-mt-20 py-20 sm:py-28 relative transition-colors duration-300 border-b ${
        isDark ? 'bg-[#090A0F] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
              isDark ? 'bg-white/5 border-white/15 text-slate-300' : 'bg-blue-50 border-blue-200 text-blue-800'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-blue-500" />
            <span>Локація та Маршрут в 1 Клік</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            Чекаємо Вас у Студії
          </h2>
          <p className={`text-sm sm:text-base mt-2 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Зручний під'їзд з Почайної, Подолу та Оболоні. Охоронювана закрита парковка для клієнтів.
          </p>
        </motion.div>

        {/* 2-Columns: Info Card & Custom Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border shadow-2xl ${
              isDark ? 'bg-[#121520] border-white/10' : 'bg-white border-slate-200 shadow-slate-200/50'
            }`}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase mb-6 flex items-center gap-2">
                <span>NEOX DETAILING LAB</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-blue-500/30 text-blue-500 bg-blue-500/10">
                  KYIV
                </span>
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5 mb-5 text-sm">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-white/5 border-white/10 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[11px] uppercase font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Адреса боксів:</div>
                  <div className="font-bold mt-0.5">{ADDRESS}</div>
                  <div className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Орієнтир: Бізнес-парк, в'їзд через шлагбаум №2</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 mb-5 text-sm">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-white/5 border-white/10 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[11px] uppercase font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Телефон для запису:</div>
                  <a
                    href="tel:+380674409988"
                    className="font-mono font-bold hover:underline text-base mt-0.5 block text-blue-500"
                  >
                    +38 (067) 440-99-88
                  </a>
                  <div className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Відповідаємо щодня з 09:00 до 21:00</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 mb-6 text-sm">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-white/5 border-white/10 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[11px] uppercase font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Графік роботи:</div>
                  <div className="font-bold mt-0.5">Пн – Сб: 09:00 – 20:00</div>
                  <div className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Нд: прийом за попереднім записом</div>
                </div>
              </div>

              {/* Quick Navigation Buttons */}
              <div className={`pt-5 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <div className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <Navigation className="w-3.5 h-3.5 text-blue-500" />
                  <span>Прокласти маршрут в 1 клік:</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={`https://waze.com/ul?ll=${LAT},${LNG}&navigate=yes`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-2 rounded-xl bg-[#33CCFF]/10 hover:bg-[#33CCFF]/20 text-[#0099cc] border border-[#33CCFF]/30 text-xs font-bold transition text-center flex flex-col items-center gap-1 shadow-sm"
                  >
                    <span className="text-base">🚗</span>
                    <span>Waze</span>
                  </a>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-2 rounded-xl bg-[#4285F4]/10 hover:bg-[#4285F4]/20 text-[#3367d6] border border-[#4285F4]/30 text-xs font-bold transition text-center flex flex-col items-center gap-1 shadow-sm"
                  >
                    <span className="text-base">🗺️</span>
                    <span>Google Maps</span>
                  </a>

                  <a
                    href={`https://maps.apple.com/?daddr=${LAT},${LNG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-3 px-2 rounded-xl border text-xs font-bold transition text-center flex flex-col items-center gap-1 shadow-sm ${
                      isDark ? 'bg-white/10 hover:bg-white/20 text-white border-white/20' : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                    }`}
                  >
                    <span className="text-base">🍎</span>
                    <span>Apple Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className={`mt-8 pt-4 border-t flex items-center gap-3 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <a
                href="https://t.me/neox_detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#229ED9] hover:bg-[#1f8ec4] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md"
              >
                <Send className="w-4 h-4 fill-white" />
                <span>Чат у Telegram</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white transition cursor-pointer flex items-center gap-1 shadow-md"
              >
                <span>Записатися</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Custom Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-7 h-[420px] lg:h-auto rounded-3xl overflow-hidden border relative ${
              isDark ? 'border-white/10 bg-[#121520]' : 'border-slate-200 bg-white shadow-sm'
            }`}
          >
            <iframe
              title="NEOX Detailing Kyiv Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.006857181577!2d30.49265287693952!3d50.47350038598711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce0377c8f921%3A0x446e16541f71f11a!2z0LLRg9C70LjRhtGPINCd0L7QstC-0LrQvtC90YHRgtCw0L3RgtC40L3RltCy0YHRjNC60LAsIDLQsSwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: isDark ? 'invert(90%) hue-rotate(180deg) contrast(120%)' : 'none'
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Floating Badge */}
            <div
              className={`absolute top-6 left-6 z-10 p-3.5 rounded-2xl border shadow-xl flex items-center gap-3 backdrop-blur-md ${
                isDark ? 'bg-black/70 border-white/20 text-white' : 'bg-white/90 border-slate-300 text-slate-900'
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-blue-500 animate-ping" />
              <div className="text-xs">
                <div className="font-bold">NEOX LAB KYIV</div>
                <div className={`text-[10px] ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>Новокостянтинівська, 2Б</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
