import React from 'react';
import { X, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem, ThemeMode } from '../types';

interface ServiceDrawerModalProps {
  service: ServiceItem | null;
  theme: ThemeMode;
  onClose: () => void;
  onBookThisService?: () => void;
  onSelectForBooking?: (serviceName: string) => void;
}

export const ServiceDrawerModal: React.FC<ServiceDrawerModalProps> = ({
  service,
  theme,
  onClose,
  onBookThisService,
  onSelectForBooking,
}) => {
  if (!service) return null;
  const isDark = theme === 'dark';

  const handleBook = () => {
    if (onBookThisService) {
      onBookThisService();
    } else if (onSelectForBooking) {
      onSelectForBooking(service.name);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`border-t sm:border rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-5 sm:p-8 relative flex flex-col ${
          isDark ? 'bg-[#0F121A] border-white/20 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition cursor-pointer border ${
            isDark ? 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image preview */}
        <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-white/10">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/70 border border-white/20 text-white">
              {service.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-blue-600 text-white border border-blue-400">
              {service.priceStarting}
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            {service.name}
          </h3>
          <p className={`text-sm mt-1 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {service.shortDesc}
          </p>

          <div className={`flex items-center gap-4 mt-3 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              Термін: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{service.timeEstimate}</strong>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              Гарантія: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{service.warranty}</strong>
            </span>
          </div>
        </div>

        {/* Options Available */}
        <div className="mb-6">
          <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Доступні пакети та конфігурації:
          </h4>
          <div className="space-y-2.5">
            {service.options.map((opt, i) => (
              <div
                key={i}
                className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <div className="text-sm font-bold">{opt.title}</div>
                  <div className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{opt.description}</div>
                </div>
                <div className="text-xs font-mono font-bold text-blue-500 text-right shrink-0">
                  {opt.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technological Protocol Steps */}
        <div className={`mb-6 p-4 rounded-xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
          <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Регламент виконання робіт:
          </h4>
          <div className={`space-y-1.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-500 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Spec Note */}
        <div className={`mb-6 text-xs p-3 rounded-xl border ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-blue-50/50 border-blue-200 text-slate-700'}`}>
          <strong className="text-blue-500">Технологічні матеріали:</strong> {service.techSpec}
        </div>

        {/* Action Button */}
        <div className={`mt-auto pt-4 border-t flex items-center justify-between gap-3 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
          <div>
            <div className={`text-[11px] uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Орієнтовний старт:</div>
            <div className="text-lg font-mono font-black text-blue-500">
              {service.priceStarting}
            </div>
          </div>

          <button
            onClick={handleBook}
            className="flex-1 max-w-xs px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition bg-blue-600 hover:bg-blue-500 text-white shadow-lg"
          >
            <span>Записатися на цю послугу</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
