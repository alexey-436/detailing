import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA } from '../data/detailingSiteData';
import { ThemeMode } from '../types';

interface LiveReviewsSectionProps {
  theme: ThemeMode;
}

export const LiveReviewsSection: React.FC<LiveReviewsSectionProps> = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDark = theme === 'dark';

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS_DATA[currentIndex];

  return (
    <section
      id="reviews"
      className={`scroll-mt-16 sm:scroll-mt-20 py-20 sm:py-28 relative transition-colors duration-300 border-b ${
        isDark ? 'bg-[#0B0D14] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
              isDark ? 'bg-white/5 border-white/15 text-slate-300' : 'bg-amber-50 border-amber-200 text-amber-800'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Google Maps Live Відгуки • 4.9 Рейтинг</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            Що Кажуть Власники Авто в Києві
          </h2>
          <p className={`text-sm sm:text-base mt-2 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Реальні враження клієнтів після полірування, бронеплівки та відновлення салону.
          </p>
        </motion.div>

        {/* Big Review Slider Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className={`p-6 sm:p-10 rounded-3xl border relative shadow-2xl ${
            isDark ? 'bg-[#121520] border-white/10' : 'bg-slate-50 border-slate-200 shadow-slate-200/50'
          }`}
        >
          <Quote className={`w-16 h-16 absolute top-6 right-6 pointer-events-none ${isDark ? 'text-white/5' : 'text-slate-200'}`} />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={currentReview.avatar}
                alt={currentReview.author}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500/30"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-black">{currentReview.author}</h3>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-xs text-blue-500 font-bold uppercase tracking-wider">
                  {currentReview.car} • {currentReview.serviceUsed}
                </div>
                <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {currentReview.date} • Підтверджений клієнт Google
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Review Text with AnimatePresence */}
          <div className="min-h-[90px] my-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className={`text-sm sm:text-base md:text-lg italic leading-relaxed ${
                  isDark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                "{currentReview.text}"
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className={`flex items-center justify-between pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <div className={`text-xs font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              0{currentIndex + 1} / 0{REVIEWS_DATA.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className={`p-3 rounded-xl border transition cursor-pointer ${
                  isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white' : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-800'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className={`p-3 rounded-xl border transition cursor-pointer ${
                  isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white' : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-800'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Small reviews grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEWS_DATA.slice(0, 3).map((r, i) => (
            <div
              key={r.id}
              onClick={() => setCurrentIndex(i)}
              className={`p-4 rounded-2xl border transition cursor-pointer ${
                currentIndex === i
                  ? 'border-blue-500 bg-blue-500/10'
                  : isDark
                  ? 'bg-white/5 border-white/5 hover:border-white/20'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold">{r.author}</span>
                <span className="text-[11px] text-blue-500 font-mono">{r.car}</span>
              </div>
              <p className={`text-xs line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
