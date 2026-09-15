import React from 'react';
import { Phone, Send, Zap } from 'lucide-react';
import { ThemeMode } from '../types';

interface FloatingActionBarProps {
  theme: ThemeMode;
  onOpenBooking: () => void;
  onScrollToQuiz: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  theme,
  onOpenBooking,
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 p-3 sm:hidden backdrop-blur-xl border-t transition-colors duration-300 ${
        isDark ? 'bg-[#090A0F]/90 border-white/15' : 'bg-white/95 border-slate-200 shadow-lg'
      }`}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call */}
        <a
          href="tel:+380674409988"
          className={`flex-1 py-3 px-2 rounded-xl border flex flex-col items-center justify-center text-center transition active:scale-95 ${
            isDark ? 'bg-white/10 border-white/15 text-white' : 'bg-slate-100 border-slate-200 text-slate-800'
          }`}
        >
          <Phone className="w-4 h-4 mb-0.5 text-blue-500" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Дзвінок</span>
        </a>

        {/* Telegram Direct */}
        <a
          href="https://t.me/neox_detailing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-2 rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/30 text-[#229ED9] flex flex-col items-center justify-center text-center transition active:scale-95"
        >
          <Send className="w-4 h-4 fill-[#229ED9] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Telegram</span>
        </a>

        {/* Main Quick Action: Book */}
        <button
          onClick={onOpenBooking}
          className="flex-2 py-3.5 px-3 rounded-xl font-black uppercase text-xs tracking-wider flex items-center justify-center gap-1.5 transition active:scale-95 shadow-lg cursor-pointer bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          <Zap className="w-4 h-4 fill-white" />
          <span>Записатися</span>
        </button>
      </div>
    </div>
  );
};
