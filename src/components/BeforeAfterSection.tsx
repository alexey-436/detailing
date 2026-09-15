import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MoveHorizontal, Check, ShieldCheck, Clock, Eye, AlertCircle, Layers } from 'lucide-react';
import { BEFORE_AFTER_WORKS } from '../data/detailingSiteData';
import { ThemeMode } from '../types';

interface BeforeAfterSectionProps {
  theme: ThemeMode;
  onOpenBooking: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  theme,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const [showOriginalSplit, setShowOriginalSplit] = useState(false);
  const [inspectionLamp, setInspectionLamp] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentWork = BEFORE_AFTER_WORKS[activeTab];
  const isDark = theme === 'dark';

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const clamped = Math.max(2, Math.min(98, (x / width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // fallback
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // fallback
    }
  };

  return (
    <section
      id="before-after"
      className={`scroll-mt-16 sm:scroll-mt-20 py-20 sm:py-28 relative overflow-hidden transition-colors duration-300 border-b ${
        isDark ? 'bg-[#090A0F] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
              isDark ? 'bg-white/5 border-white/15 text-slate-300' : 'bg-blue-50 border-blue-200 text-blue-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Інспекційне світло Scangrip • Реальний результат 50/50</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            Результат PPF та Полірування
          </h2>
          <p className={`text-sm sm:text-base mt-2 max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <strong className="text-red-400 font-semibold">ЗЛІВА — СТАН «ДО»</strong> (павутиння, потертості, помутніння).
            {' '}<strong className="text-emerald-400 font-semibold">СПРАВА — РЕЗУЛЬТАТ «ПІСЛЯ»</strong> (дзеркальний глянець, антигравійна броня PPF 215 мкм).
          </p>
        </motion.div>

        {/* Work Category Switcher Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8"
        >
          {BEFORE_AFTER_WORKS.map((work, idx) => (
            <button
              key={work.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
                setShowOriginalSplit(false);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 border ${
                activeTab === idx
                  ? isDark
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : isDark
                  ? 'bg-white/5 text-slate-400 hover:text-white border-white/10 hover:border-white/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300'
              }`}
            >
              <span>{work.category}</span>
            </button>
          ))}
        </motion.div>

        {/* Main Interactive Slider Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className={`max-w-4xl mx-auto rounded-3xl overflow-hidden border shadow-2xl p-4 sm:p-7 ${
            isDark
              ? 'bg-[#11141D]/95 backdrop-blur-xl border-white/15'
              : 'bg-white border-slate-200/90 shadow-slate-200/50'
          }`}
        >
          {/* Work Specs Header */}
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b gap-3 ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}>
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`text-lg sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {currentWork.title}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  Lab Certified
                </span>
              </div>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {currentWork.subtitle}
              </p>
            </div>

            {/* Quick preset comparisons */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 flex-wrap">
              <button
                onClick={() => {
                  setShowOriginalSplit(false);
                  setSliderPosition(96);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  !showOriginalSplit && sliderPosition > 85
                    ? 'bg-red-500/25 border-red-500 text-red-400'
                    : isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
              >
                100% ДО
              </button>
              <button
                onClick={() => {
                  setShowOriginalSplit(false);
                  setSliderPosition(50);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  !showOriginalSplit && sliderPosition >= 45 && sliderPosition <= 55
                    ? 'bg-blue-500/25 border-blue-500 text-blue-400'
                    : isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
              >
                50 / 50
              </button>
              <button
                onClick={() => {
                  setShowOriginalSplit(false);
                  setSliderPosition(4);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  !showOriginalSplit && sliderPosition < 15
                    ? 'bg-emerald-500/25 border-emerald-500 text-emerald-400'
                    : isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
              >
                100% ПІСЛЯ
              </button>

              {currentWork.splitTestImg && (
                <button
                  onClick={() => setShowOriginalSplit(!showOriginalSplit)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border flex items-center gap-1.5 ${
                    showOriginalSplit
                      ? 'bg-amber-500/25 border-amber-500 text-amber-300'
                      : isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-600'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Фото з боксу</span>
                </button>
              )}
            </div>
          </div>

          {/* Guaranteed Non-Overlapping Position Bar Above Image */}
          <div className="flex items-center justify-between gap-2 mb-2.5 px-1">
            <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 text-[10px] sm:text-xs font-bold uppercase tracking-wide">
              <AlertCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
              <span>ДО (Дефекти)</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-wide">
              <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
              <span>ПІСЛЯ (Броня + Блиск)</span>
            </div>
          </div>

          {/* Interactive Image Container */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={`relative h-[300px] sm:h-[440px] md:h-[490px] rounded-2xl overflow-hidden select-none cursor-ew-resize border touch-none ${
              isDark ? 'border-white/15 bg-black' : 'border-slate-300 bg-slate-100'
            }`}
          >
            {showOriginalSplit && currentWork.splitTestImg ? (
              /* Direct Studio 50/50 Comparison Photo Mode */
              <div className="relative w-full h-full">
                <img
                  src={currentWork.splitTestImg}
                  alt="Прямий тест 50 на 50 під інспекційним світлом"
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-mono bg-black/75 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <span className="text-red-400 font-bold">← ДО: пошкоджений шар під світлом</span>
                  <span className="text-emerald-400 font-bold">ПІСЛЯ: відновлений глянець без дефектів →</span>
                </div>
              </div>
            ) : (
              /* Interactive Slider Mode (Same Car & Angle, Left = Before, Right = After) */
              <>
                {/* 1. Base Layer: AFTER Image (Right side revealed, flawless mirror PPF) */}
                <img
                  src={currentWork.afterImg}
                  alt="Після нанесення PPF бронеплівки та полірування"
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />

                {/* 2. Top Layer: BEFORE Image (Left side revealed, clipped strictly to sliderPosition) */}
                <div
                  className="absolute inset-0 overflow-hidden select-none pointer-events-none"
                  style={{
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                  }}
                >
                  <img
                    src={currentWork.beforeImg}
                    alt="До дітейлінгу: стан із дефектами"
                    className="absolute inset-0 w-full h-full object-cover select-none filter contrast-105"
                    draggable={false}
                  />

                  {/* Inspection light simulator on the BEFORE side */}
                  {inspectionLamp && (
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-screen opacity-35 bg-[radial-gradient(circle_at_30%_45%,rgba(255,255,255,0.7)_0%,rgba(255,210,120,0.25)_40%,transparent_70%)]"
                    />
                  )}
                </div>

                {/* 3. Divider Line & Interactive Handle */}
                <div
                  className="absolute top-0 bottom-0 z-30 pointer-events-none"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  {/* Vertical Dividing Laser Line */}
                  <div className="w-[3px] h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.95),0_0_25px_rgba(37,99,235,0.8)]" />

                  {/* Centered Ergonomic Drag Button */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-black/90 border-2 border-white shadow-[0_0_25px_rgba(0,0,0,0.9),0_0_15px_rgba(255,255,255,0.7)] flex items-center justify-center text-white cursor-grab active:cursor-grabbing pointer-events-auto">
                    <MoveHorizontal className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom Center Floating Hint */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-medium text-slate-300 border border-white/15 pointer-events-none shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <MoveHorizontal className="w-3.5 h-3.5 text-blue-400" />
                  <span>Потягніть ліворуч або праворуч</span>
                </div>
              </>
            )}
          </div>

          {/* Bottom Card Footer Details */}
          <div className={`mt-4 pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
            isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'
          }`}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 min-w-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="truncate">Матеріали: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{currentWork.coating}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Час: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{currentWork.timeSpent}</strong></span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto min-w-0">
              <button
                type="button"
                onClick={() => setInspectionLamp(!inspectionLamp)}
                className={`flex-1 sm:flex-none px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 border transition cursor-pointer text-center ${
                  inspectionLamp
                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                    : isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
              >
                <Eye className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{inspectionLamp ? 'Світло: Вкл' : 'Світло: Викл'}</span>
              </button>

              <button
                type="button"
                onClick={onOpenBooking}
                className="flex-1 sm:flex-none px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-md transition cursor-pointer flex items-center justify-center gap-1.5 text-center active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Замовити</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
