import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Check, ArrowRight, ArrowLeft, Send, Gift, Car, CheckCircle2, Phone, MessageSquare, X, Copy, CheckCheck, Calendar } from 'lucide-react';
import { ThemeMode } from '../types';

interface Quiz3DSectionProps {
  theme: ThemeMode;
  onOpenBooking: () => void;
}

const CAR_CLASSES = [
  {
    id: 'sedan',
    title: 'Седан / Купе',
    example: 'BMW 3/5, Audi A4/A6, Tesla 3',
  },
  {
    id: 'crossover',
    title: 'Кросовер',
    example: 'Porsche Macan, BMW X3/X5, Lexus RX',
  },
  {
    id: 'suv',
    title: 'Позашляховик / Пікап',
    example: 'Mercedes G-Class, Toyota LC300, Defender',
  },
  {
    id: 'sport',
    title: 'Спорткар / Суперкар',
    example: 'Porsche 911, Ferrari, Corvette, AMG GT',
  }
];

const MAIN_GOALS = [
  {
    id: 'ppf',
    title: 'Захистити кузов від сколів (PPF)',
    desc: 'Антигравійна поліуретанова броня зон ризику або 100% кузова',
    estimated: 'від 18 500 ₴',
    badge: 'Топ вибір для нових авто'
  },
  {
    id: 'ceramic',
    title: 'Відновити дзеркальний блиск + Кераміка 9H',
    desc: '3-етапне полірування + нанокерамічний гідрофобний панцир',
    estimated: 'від 11 000 ₴',
    badge: 'Карамельний глянець'
  },
  {
    id: 'interior',
    title: 'Ідеальна чистота салону + Озонування',
    desc: 'Хімчистка з розбором сидінь, догляд за шкірою Nappa та озон',
    estimated: 'від 5 500 ₴',
    badge: 'Стерильність без запахів'
  },
  {
    id: 'total',
    title: 'Повний детейлінг-комплекс (All Inclusive)',
    desc: 'Кузов (PPF + кераміка) + диски + салон + підкапотний простір',
    estimated: 'від 28 000 ₴',
    badge: 'Максимальна вигода'
  }
];

export const Quiz3DSection: React.FC<Quiz3DSectionProps> = ({ theme, onOpenBooking }) => {
  const [step, setStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState<string>('crossover');
  const [selectedGoal, setSelectedGoal] = useState<string>('ppf');
  // Starts completely blank so the user can fill a clean input
  const [carModel, setCarModel] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [messenger, setMessenger] = useState<'telegram' | 'viber' | 'whatsapp'>('telegram');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const quizCardRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';

  const scrollToQuizCard = () => {
    if (quizCardRef.current) {
      const navOffset = 85;
      const cardTop = quizCardRef.current.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: cardTop, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      setTimeout(scrollToQuizCard, 50);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setTimeout(scrollToQuizCard, 50);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('NEOX-10-KYIV');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 9) return;
    setSending(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'quiz_lead',
          carClass: selectedClass,
          goal: selectedGoal,
          carModel: carModel.trim() || CAR_CLASSES.find(c => c.id === selectedClass)?.title,
          phone,
          messenger,
          discountCode: 'NEOX-10-KYIV'
        })
      });
    } catch (err) {
      console.warn('Lead logged locally:', err);
    } finally {
      setTimeout(() => {
        setSending(false);
        setSubmitted(true);
        // Ensure screen remains locked onto the calculation result!
        setTimeout(scrollToQuizCard, 50);
      }, 400);
    }
  };

  const selectedClassObj = CAR_CLASSES.find(c => c.id === selectedClass);
  const selectedGoalObj = MAIN_GOALS.find(g => g.id === selectedGoal);

  const getEstimatedCalculation = () => {
    return selectedGoalObj ? selectedGoalObj.estimated : 'від 15 000 ₴';
  };

  return (
    <section
      id="quiz"
      className={`py-16 sm:py-24 relative overflow-hidden transition-colors duration-300 border-b scroll-mt-20 sm:scroll-mt-24 ${
        isDark ? 'bg-[#0B0D14] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
              isDark ? 'bg-white/5 border-white/15 text-slate-300' : 'bg-blue-50 border-blue-200 text-blue-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Інтерактивний Квіз • Точний кошторис за 30 секунд</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase">
            Дізнайся точну вартість для свого авто
          </h2>
          <p className={`text-sm sm:text-base mt-2 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Отримай персональний розрахунок комплексу та зафіксуй подарункові бонуси на суму 3 200 ₴.
          </p>
        </motion.div>

        {/* Quiz Container Card with stable min-height to prevent jumping */}
        <motion.div
          ref={quizCardRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`border rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl relative min-h-[580px] flex flex-col justify-between transition-all ${
            isDark
              ? 'bg-[#121520]/95 backdrop-blur-xl border-white/15'
              : 'bg-slate-50 border-slate-200/90 shadow-slate-200/50'
          }`}
        >
          {/* Bonus Guaranteed Badge */}
          <div
            className={`mb-6 p-3 sm:p-4 rounded-2xl border flex items-center justify-between gap-3 flex-wrap ${
              isDark
                ? 'bg-white/5 border-white/10 text-white'
                : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                  isDark ? 'bg-black/60 border-white/10 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                }`}
              >
                <Gift className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-black flex items-center gap-1.5">
                  <span>Бонус за проходження:</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                    -10% Знижка
                  </span>
                </div>
                <div className={`text-[11px] sm:text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  + Безкоштовний озоновий антибак салону та кондиціонування шкіри
                </div>
              </div>
            </div>

            {/* Progress Stepper */}
            <div className="flex items-center gap-1.5 text-xs font-bold ml-auto">
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                {submitted ? 'Готово' : `Крок ${step} з 3`}
              </span>
              <div className="flex gap-1 ml-2">
                {[1, 2, 3].map((s) => (
                  <span
                    key={s}
                    className={`w-5 h-1.5 rounded-full transition-all ${
                      submitted || step >= s
                        ? 'bg-blue-500'
                        : isDark ? 'bg-white/20' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {!submitted ? (
            <div className="flex-1 flex flex-col justify-between">
              {/* STEP 1: Choose Car Class */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">1</span>
                      <span>Оберіть клас та тип кузова автомобіля:</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {CAR_CLASSES.map((car) => {
                        const isSelected = selectedClass === car.id;
                        return (
                          <div
                            key={car.id}
                            onClick={() => setSelectedClass(car.id)}
                            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer select-none relative group ${
                              isSelected
                                ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                                : isDark
                                ? 'bg-black/40 border-white/10 hover:border-white/25 hover:bg-white/5'
                                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="text-base font-extrabold transition">
                                  {car.title}
                                </h4>
                                <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{car.example}</p>
                              </div>
                              <div
                                className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                                  isSelected ? 'bg-blue-600 border-blue-600 text-white' : isDark ? 'border-white/30' : 'border-slate-300'
                                }`}
                              >
                                {isSelected && <Check className="w-4 h-4 text-white stroke-[3]" />}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Brand input - Clean empty string by default */}
                    <div className="mt-5">
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Марка та модель авто (опціонально, введіть своє авто):
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={carModel}
                          onChange={(e) => setCarModel(e.target.value)}
                          placeholder="Введіть марку та модель (наприклад: Porsche Cayenne, BMW X5, Audi Q8...)"
                          className={`w-full px-4 py-3.5 pr-10 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition border ${
                            isDark
                              ? 'bg-black/60 border-white/15 text-white placeholder:text-slate-500'
                              : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                          }`}
                        />
                        {carModel && (
                          <button
                            type="button"
                            onClick={() => setCarModel('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-white transition cursor-pointer"
                            title="Очистити поле"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-lg flex items-center justify-center gap-2 cursor-pointer transition active:scale-95"
                    >
                      <span>Далі: Головна мета</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Main Goal */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">2</span>
                      <span>Яке головне завдання стоїть перед детейлінгом?</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {MAIN_GOALS.map((goal) => {
                        const isSelected = selectedGoal === goal.id;
                        return (
                          <div
                            key={goal.id}
                            onClick={() => setSelectedGoal(goal.id)}
                            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer select-none relative group ${
                              isSelected
                                ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                                : isDark
                                ? 'bg-black/40 border-white/10 hover:border-white/25 hover:bg-white/5'
                                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/20">
                                {goal.badge}
                              </span>
                              <div
                                className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                                  isSelected ? 'bg-blue-600 border-blue-600 text-white' : isDark ? 'border-white/30' : 'border-slate-300'
                                }`}
                              >
                                {isSelected && <Check className="w-4 h-4 text-white stroke-[3]" />}
                              </div>
                            </div>
                            <h4 className="text-sm sm:text-base font-extrabold mt-3">
                              {goal.title}
                            </h4>
                            <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {goal.desc}
                            </p>
                            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Орієнтовно:</span>
                              <span className="font-mono font-bold text-blue-500">{goal.estimated}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-center gap-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer border ${
                        isDark ? 'border-white/15 text-slate-300 hover:bg-white/5' : 'border-slate-300 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Назад</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 sm:px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-lg flex items-center gap-2 cursor-pointer transition active:scale-95"
                    >
                      <span>Далі: Розрахунок та бонуси</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Contact & Get Result */}
              {step === 3 && (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">3</span>
                      <span>Ваш попередній розрахунок готовий! Закріпити знижку 10%?</span>
                    </h3>

                    {/* Prominent Live Calculation Summary Box */}
                    <div className={`p-4 sm:p-5 rounded-2xl border mb-5 ${isDark ? 'bg-black/50 border-white/15' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Автомобіль:</span>
                        <span className="font-bold text-slate-100">
                          {carModel.trim() ? carModel : (selectedClassObj?.title || 'Кросовер')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Комплекс робіт:</span>
                        <span className="font-bold text-blue-400 text-right">
                          {selectedGoalObj?.title}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm pt-3 mt-2 border-t border-white/10">
                        <span className={isDark ? 'text-slate-300 font-semibold' : 'text-slate-700 font-semibold'}>
                          Розрахована вартість:
                        </span>
                        <span className="font-mono text-lg sm:text-xl font-black text-emerald-400">
                          {getEstimatedCalculation()} <span className="text-xs text-emerald-500/80 font-normal">(-10% включено)</span>
                        </span>
                      </div>
                    </div>

                    {/* Phone input */}
                    <div className="mb-4">
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Введіть телефон для закріплення знижки та отримання детального кошторису:
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+38 (067) 000-00-00"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition border ${
                            isDark ? 'bg-black/60 border-white/15 text-white' : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Messenger selection */}
                    <div className="mb-6">
                      <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Оберіть месенджер для надсилання специфікації:
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['telegram', 'viber', 'whatsapp'] as const).map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setMessenger(m)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-bold capitalize transition border cursor-pointer ${
                              messenger === m
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : isDark
                                ? 'bg-black/40 border-white/10 text-slate-300 hover:border-white/25'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-center gap-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer border ${
                        isDark ? 'border-white/15 text-slate-300 hover:bg-white/5' : 'border-slate-300 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Назад</span>
                    </button>

                    <button
                      type="submit"
                      disabled={sending || !phone || phone.length < 9}
                      className="px-6 sm:px-8 py-4 rounded-xl font-black text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-xl flex items-center gap-2 cursor-pointer transition active:scale-95 disabled:opacity-50"
                    >
                      {sending ? (
                        <span>Генеруємо розрахунок...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Зафіксувати розрахунок та -10%</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </div>
          ) : (
            /* Calculation Result Success State - Screen remains perfectly in place! */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-4 text-center flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(16,185,129,0.25)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Розрахунок успішно сформовано та зафіксовано</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  Вартість та бонуси закріплено!
                </h3>
                
                <p className={`text-xs sm:text-sm mt-2 max-w-lg mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Майстер-технолог уже надіслав детальну калькуляцію для {carModel.trim() ? <strong>{carModel}</strong> : 'Вашого авто'} у <strong>{messenger.toUpperCase()}</strong> на номер <strong>{phone}</strong>.
                </p>

                {/* Calculation Summary Card */}
                <div className={`mt-6 p-5 rounded-2xl border max-w-lg mx-auto text-left ${
                  isDark ? 'bg-black/60 border-white/15' : 'bg-white border-slate-200 shadow-md'
                }`}>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs sm:text-sm">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Автомобіль:</span>
                    <span className="font-bold text-white">
                      {carModel.trim() ? carModel : (selectedClassObj?.title || 'Кросовер')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2.5 border-b border-white/10 text-xs sm:text-sm">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Обрана послуга:</span>
                    <span className="font-bold text-blue-400 text-right">
                      {selectedGoalObj?.title}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-xs sm:text-sm font-bold">Орієнтовна вартість:</span>
                    <span className="font-mono text-xl font-black text-emerald-400">
                      {getEstimatedCalculation()}
                    </span>
                  </div>

                  {/* Promo Code & Bonuses Box */}
                  <div className="mt-3.5 pt-2 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[11px] text-blue-400 font-bold uppercase tracking-wider">
                        Промокод на знижку 10%:
                      </div>
                      <div className="text-base font-mono font-black tracking-wider text-white">
                        NEOX-10-KYIV
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-1.5 transition cursor-pointer ${
                        copiedCode
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                          : isDark
                          ? 'bg-white/10 border-white/15 text-slate-300 hover:text-white'
                          : 'bg-slate-100 border-slate-300 text-slate-700'
                      }`}
                    >
                      {copiedCode ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Скопійовано' : 'Копіювати'}</span>
                    </button>
                  </div>

                  <div className="mt-2 text-[11px] text-slate-400 leading-snug">
                    ✓ Озонування салону в подарунок • Захисне кондиціювання шкіри • Гарантія до 10 років
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-xl flex items-center justify-center gap-2 cursor-pointer transition active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Забронювати час у боксі зараз</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setCarModel('');
                    setPhone('');
                    setTimeout(scrollToQuizCard, 50);
                  }}
                  className={`w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition cursor-pointer ${
                    isDark
                      ? 'border-white/15 text-slate-300 hover:bg-white/5'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Зробити розрахунок для іншого авто
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
