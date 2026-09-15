import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Sparkles, ArrowRight, Zap, Award } from 'lucide-react';
import { ThemeMode } from '../types';

interface HeroSectionProps {
  theme: ThemeMode;
  onScrollToQuiz: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  onScrollToQuiz,
  onOpenBooking,
}) => {
  const [savedCarsCount, setSavedCarsCount] = useState(342);
  const isDark = theme === 'dark';

  // Subtle live counter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSavedCarsCount(prev => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden transition-colors duration-300 border-b ${
        isDark ? 'bg-[#090A0F] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      {/* Background High-Definition Visual (Vivid, clearly visible, rock-solid CDN link) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85"
          alt="NEOX Lab Detailing Studio"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85';
          }}
          className={`w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            isDark ? 'opacity-70 contrast-110 brightness-95' : 'opacity-40 contrast-110'
          }`}
        />

        {/* Ambient Gradients to preserve optimal text readability without darkening out the video */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-t from-[#090A0F] via-[#090A0F]/55 to-[#090A0F]/25'
              : 'bg-gradient-to-t from-slate-50 via-slate-50/65 to-slate-50/20'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-r from-[#090A0F]/70 via-transparent to-[#090A0F]/70'
              : 'bg-gradient-to-r from-slate-50/70 via-transparent to-slate-50/70'
          }`}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/15 blur-[140px] pointer-events-none rounded-full" />
      </div>

      {/* Floating Droplets Effect */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/12 w-6 h-6 rounded-full bg-blue-500/20 border border-white/30 backdrop-blur-xs animate-pulse" />
        <div className="absolute top-2/3 left-1/6 w-8 h-8 rounded-full bg-blue-400/15 border border-white/20 backdrop-blur-xs animate-bounce" />
        <div className="absolute top-1/3 right-1/8 w-5 h-5 rounded-full bg-white/20 border border-white/25 backdrop-blur-xs" />
        <div className="absolute bottom-1/4 right-1/5 w-7 h-7 rounded-full bg-blue-600/20 border border-white/25 backdrop-blur-xs" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col items-center text-center">
        
        {/* Dynamic Trigger Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border mb-6 group cursor-pointer transition ${
            isDark
              ? 'bg-white/5 border-white/15 text-slate-200 hover:border-white/30'
              : 'bg-white border-slate-200 text-slate-800 shadow-sm hover:border-slate-300'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
            Вже захищено <span className="text-blue-500 font-bold">{savedCarsCount}+ кузовів</span> у Києві
          </span>
          <span className="opacity-40">•</span>
          <span className={`text-xs font-medium flex items-center gap-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            Гарантія до 10 років
          </span>
        </motion.div>

        {/* H1 Headline with Smooth Entrance */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl leading-[1.08] uppercase"
        >
          Твоє авто заслуговує на вигляд,{' '}
          <span className={isDark ? 'text-white' : 'text-slate-900'}>
            як із салону.
          </span>{' '}
          <span className="block mt-2 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Детейлінг із гарантією до 5 років.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-6 text-sm sm:text-lg max-w-2xl leading-relaxed font-normal ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Лабораторна точність, сертифіковані нанопокриття Gyeon та CarPro, антигравійна бронеплівка PPF 215 мкм і стерильні бокси на Почайній.
        </motion.p>

        {/* Interactive CTA Buttons Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          {/* Main Interactive Button */}
          <button
            onClick={onScrollToQuiz}
            id="hero-main-cta-btn"
            className="w-full sm:w-auto px-8 py-4 sm:py-4.5 text-sm sm:text-base font-black uppercase tracking-wider rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-98"
          >
            <Zap className="w-5 h-5 fill-white" />
            <span>Розрахувати вартість за 1 хв</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Secondary Button */}
          <button
            onClick={onOpenBooking}
            className={`w-full sm:w-auto px-7 py-4 sm:py-4.5 text-sm sm:text-base font-bold uppercase tracking-wider rounded-2xl border transition cursor-pointer flex items-center justify-center gap-2 ${
              isDark
                ? 'bg-white/5 hover:bg-white/10 border-white/20 text-white'
                : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm'
            }`}
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Записатися на огляд</span>
          </button>
        </motion.div>

        {/* Social Proof & Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold"
        >
          {/* Google Maps Rating Badge */}
          <div
            className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold">4.9 / 5.0</span>
            <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              (180+ відгуків Google Maps)
            </span>
          </div>

          {/* Certification Badge */}
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <Award className="w-4 h-4 text-blue-500" />
            <span>Сертифікований центр Gyeon & SunTek</span>
          </div>

          {/* Location Badge */}
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>м. Київ, Поділ / Оболонь</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
