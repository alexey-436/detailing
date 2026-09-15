import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, Car, CheckCircle2, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';
import { SERVICES_DATA } from '../data/detailingSiteData';

interface BookingModalProps {
  isOpen: boolean;
  initialService?: string;
  theme: ThemeMode;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialService = '',
  theme,
  onClose,
}) => {
  const [service, setService] = useState(initialService || SERVICES_DATA[0].name);
  const [car, setCar] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setIsSubmitting(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'direct_booking',
          service,
          carModel: car,
          phone,
          date,
          time
        })
      });
    } catch (err) {
      console.warn('Booking lead logged locally:', err);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className={`border rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative ${
          isDark ? 'bg-[#0E1015] border-white/20 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition cursor-pointer border ${
            isDark ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/10' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 border ${
                  isDark ? 'bg-white/5 border-white/15 text-slate-300' : 'bg-blue-50 border-blue-200 text-blue-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span>Швидкий запис на огляд</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase">
                Забронювати Бокс у Києві
              </h3>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Безкоштовна діагностика ЛФП мікрометром та інспекційним світлом CRI 98+.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Select */}
              <div>
                <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Послуга:
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition border ${
                    isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.name} className={isDark ? 'bg-neutral-900 text-white' : 'bg-white text-slate-900'}>
                      {s.name} ({s.priceStarting})
                    </option>
                  ))}
                  <option value="Комплексний огляд та консультація" className={isDark ? 'bg-neutral-900 text-white' : 'bg-white text-slate-900'}>
                    Комплексний огляд та консультація (Безкоштовно)
                  </option>
                </select>
              </div>

              {/* Car Model */}
              <div>
                <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Марка та модель авто:
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                    placeholder="Наприклад: Porsche Cayenne 2022, BMW X5..."
                    className={`w-full pl-11 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition border ${
                      isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Ваш телефон:
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+38 (067) ___ - __ - __"
                    className={`w-full pl-11 pr-4 py-3 rounded-xl text-sm font-mono focus:outline-none focus:border-blue-500 transition border ${
                      isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Бажана дата:
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`w-full px-3 py-3 rounded-xl text-xs focus:outline-none focus:border-blue-500 transition border ${
                      isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Час візиту:
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className={`w-full px-3 py-3 rounded-xl text-xs focus:outline-none focus:border-blue-500 transition border ${
                      isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="10:00" className={isDark ? 'bg-neutral-900' : 'bg-white'}>10:00</option>
                    <option value="12:00" className={isDark ? 'bg-neutral-900' : 'bg-white'}>12:00</option>
                    <option value="14:00" className={isDark ? 'bg-neutral-900' : 'bg-white'}>14:00</option>
                    <option value="16:00" className={isDark ? 'bg-neutral-900' : 'bg-white'}>16:00</option>
                    <option value="18:00" className={isDark ? 'bg-neutral-900' : 'bg-white'}>18:00</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition shadow-xl bg-blue-600 hover:bg-blue-500 text-white"
                >
                  {isSubmitting ? (
                    <span>Бронювання боксу...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 fill-white" />
                      <span>Підтвердити запис на огляд</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Охоронювана парковка. Київ, Новокостянтинівська, 2Б</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation */
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto mb-4 text-emerald-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase">
              Бокс успішно заброньовано!
            </h3>
            <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Дякуємо! Майстер зв'яжеться з вами за номером <strong className={isDark ? 'text-white' : 'text-slate-900'}>{phone}</strong> протягом 10 хвилин для підтвердження часу.
            </p>

            <div className={`mt-5 p-4 rounded-2xl border text-xs text-left space-y-1 ${isDark ? 'bg-black/60 border-white/15 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
              <div><strong>Послуга:</strong> {service}</div>
              <div><strong>Автомобіль:</strong> {car}</div>
              <div><strong>Локація:</strong> Київ, вул. Новокостянтинівська, 2Б</div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase transition"
            >
              Закрити
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
