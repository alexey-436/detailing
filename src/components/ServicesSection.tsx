import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Flame, Wind, Zap, ArrowUpRight, Clock, Shield } from 'lucide-react';
import { ServiceItem, ThemeMode } from '../types';
import { SERVICES_DATA } from '../data/detailingSiteData';
import { ServiceDrawerModal } from './ServiceDrawerModal';

interface ServicesSectionProps {
  theme: ThemeMode;
  onOpenBookingForService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  theme,
  onOpenBookingForService,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const isDark = theme === 'dark';

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-blue-500" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-blue-500" />;
      case 'Flame': return <Flame className="w-4 h-4 text-blue-500" />;
      case 'Wind': return <Wind className="w-4 h-4 text-blue-500" />;
      default: return <Zap className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <section
      id="services"
      className={`scroll-mt-16 sm:scroll-mt-20 py-20 sm:py-28 relative transition-colors duration-300 border-b ${
        isDark ? 'bg-[#090A0F] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4"
        >
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
                isDark ? 'bg-white/5 border-white/15 text-slate-300' : 'bg-blue-50 border-blue-200 text-blue-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Послуги Преміум-Класу</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              Картки-Трансформери
            </h2>
            <p className={`text-sm sm:text-base mt-2 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Натисніть на будь-яку послугу, щоб відкрити повну технологічну карту, пакети та актуальний прайс.
            </p>
          </div>

          <div
            className={`text-xs p-3.5 rounded-2xl border max-w-xs ${
              isDark ? 'bg-[#121520] border-white/10 text-slate-400' : 'bg-white border-slate-200 text-slate-600 shadow-sm'
            }`}
          >
            ✨ Роботи виконуються в стерильних боксах із клімат-контролем (21°C та вологість 50%).
          </div>
        </motion.div>

        {/* Services Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_DATA.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedService(service)}
                className={`group rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col relative ${
                  isDark
                    ? 'bg-[#121520] border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl shadow-sm'
                }`}
              >
                {/* Image Header */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isDark ? 'from-[#121520] via-black/20 to-black/30' : 'from-white via-transparent to-black/20'
                    }`}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5 shadow-md">
                      {renderIcon(service.iconName)}
                      <span>{service.category}</span>
                    </span>

                    <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20 group-hover:rotate-45 transition-transform shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom badge on image */}
                  <div className="absolute bottom-3 left-3.5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600/90 text-white border border-blue-400/30 shadow-md">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-black transition-colors group-hover:text-blue-500">
                    {service.name}
                  </h3>

                  <p className={`text-xs sm:text-sm mt-2 leading-relaxed flex-grow ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {service.shortDesc}
                  </p>

                  {/* Meta Specs */}
                  <div
                    className={`mt-4 pt-4 border-t flex items-center justify-between text-xs ${
                      isDark ? 'border-white/10 text-slate-400' : 'border-slate-100 text-slate-500'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      <span>{service.timeEstimate}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-blue-500" />
                      <span>{service.warranty}</span>
                    </span>
                  </div>

                  {/* Price & Action Button */}
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className={`text-[10px] uppercase font-bold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Вартість від
                      </div>
                      <div className="text-base sm:text-lg font-mono font-black text-blue-500">
                        {service.priceStarting}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-600 group-hover:bg-blue-500 text-white transition shadow-sm"
                    >
                      Детальніше
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal Drawer */}
      {selectedService && (
        <ServiceDrawerModal
          service={selectedService}
          theme={theme}
          onClose={() => setSelectedService(null)}
          onBookThisService={() => {
            const sName = selectedService.name;
            setSelectedService(null);
            onOpenBookingForService(sName);
          }}
        />
      )}
    </section>
  );
};
