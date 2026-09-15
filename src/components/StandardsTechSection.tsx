import React from 'react';
import { motion } from 'motion/react';
import { Sun, FlaskConical, ShieldCheck, CheckCircle2, Lock, Video, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface StandardsTechSectionProps {
  theme: ThemeMode;
}

export const StandardsTechSection: React.FC<StandardsTechSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  const STANDARDS = [
    {
      id: 'lighting',
      icon: Sun,
      title: 'Професійне Світло (CRI 98+)',
      tagline: 'Спектральний лабораторний контроль',
      description: 'Спеціальний інспекційний світловий тунель із температурою 4000K-6000K виявляє найменші голограми та мікропавутиння, які неможливо побачити при звичайному освітленні.',
      bullets: [
        'Світловий інспекційний тунель Scangrip',
        'Кути падіння променя під 15°, 45° та 90°',
        'Виявлення 100% прихованих дефектів ЛФП'
      ]
    },
    {
      id: 'chemicals',
      icon: FlaskConical,
      title: 'Преміальна Хімія (Тільки Офіціал)',
      tagline: 'Gyeon • CarPro • Koch Chemie • Colourlock',
      description: 'Жодних "універсальних" сумішей чи дешевих маскуючих силіконів. Ми використовуємо оригінальні кварцові та керамічні склади з прямою гарантією від світових брендів.',
      bullets: [
        'Оригінальна сертифікація Gyeon Certified Detailer',
        'pH-нейтральні формули для збереження ущільнювачів',
        'Безпечні гіпоалергенні склади для дитячих сидінь'
      ]
    },
    {
      id: 'security',
      icon: ShieldCheck,
      title: 'Безпека 24/7 та Online-Камери',
      tagline: 'Охоронна зона + цілодобове відеоспостереження',
      description: 'Ваш автомобіль перебуває в закритому приватному боксі з автономним живленням, пультовою охороною 24/7 та персональним онлайн-доступом до камер спостереження для власника.',
      bullets: [
        'Відеоспостереження 4K над кожним робочим місцем',
        'Охоронна сигналізація та протипожежна система Ajax',
        'Страхування відповідальності студії на час робіт'
      ]
    }
  ];

  return (
    <section
      id="standards"
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
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Hi-End Стандарти Студії</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            Технології та Безпека
          </h2>
          <p className={`text-sm sm:text-base mt-2 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Чому власники преміальних авто в Києві довіряють нам свої Porsche, BMW та Mercedes.
          </p>
        </motion.div>

        {/* 3 Standards Cards with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STANDARDS.map((std, idx) => {
            const Icon = std.icon;
            return (
              <motion.div
                key={std.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#121520] border-white/10 hover:border-blue-500/40 shadow-xl'
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl shadow-sm'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${
                      isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">
                    {std.tagline}
                  </span>

                  <h3 className="text-lg sm:text-xl font-black mt-1">
                    {std.title}
                  </h3>

                  <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {std.description}
                  </p>
                </div>

                <div className={`mt-6 pt-5 border-t space-y-2 text-xs ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                  {std.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
