import React, { useState } from 'react';
import { Shield, Phone, Sun, Moon, Menu, X, Zap, ChevronRight, MapPin } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onChangeTheme: (theme: ThemeMode) => void;
  onOpenBooking: () => void;
  onScrollToQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onChangeTheme,
  onOpenBooking,
  onScrollToQuiz,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    onChangeTheme(isDark ? 'light' : 'dark');
  };

  const navLinks = [
    { label: 'Послуги', href: '#services' },
    { label: 'Калькулятор', href: '#quiz' },
    { label: 'До / Після', href: '#before-after' },
    { label: 'Шоурум', href: '#reels' },
    { label: 'Стандарти', href: '#standards' },
    { label: 'Відгуки', href: '#reviews' },
    { label: 'Контакти', href: '#contacts' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        isDark
          ? 'bg-[#090A0F]/90 border-white/10 text-white'
          : 'bg-white/90 border-slate-200 text-slate-900 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105 border ${
              isDark
                ? 'bg-black border-blue-500/40 text-blue-400 shadow-blue-500/10'
                : 'bg-blue-600 border-blue-600 text-white'
            }`}
          >
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-2xl font-black tracking-wider uppercase font-mono leading-none">
                NEOX
              </span>
              <span
                className={`text-[9px] sm:text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded border leading-none ${
                  isDark
                    ? 'border-blue-500/40 text-blue-400 bg-blue-500/10'
                    : 'border-blue-200 text-blue-700 bg-blue-50'
                }`}
              >
                LAB
              </span>
            </div>
            <div
              className={`hidden sm:flex items-center gap-1 text-[10px] tracking-wider uppercase font-medium mt-0.5 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block"></span>
              <span>Київ • Поділ</span>
            </div>
          </div>
        </a>

        {/* Desktop Quick Nav Links */}
        <nav
          className={`hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition hover:text-blue-500 ${
                isDark ? 'hover:text-white' : 'hover:text-blue-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Block - Guaranteed Mobile Visible & Non-clipping */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'}
            title={isDark ? 'Перемкнути на світлу тему' : 'Перемкнути на темну тему'}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
              isDark
                ? 'bg-white/5 border-white/15 text-amber-300 hover:bg-white/10 hover:border-white/25'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            ) : (
              <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            )}
          </button>

          {/* Direct Phone Link (Desktop & Tablet) */}
          <a
            href="tel:+380674409988"
            className={`hidden md:flex items-center gap-2 px-3 py-2 text-xs font-bold border rounded-xl transition ${
              isDark
                ? 'text-slate-200 bg-white/5 hover:bg-white/10 border-white/10'
                : 'text-slate-700 bg-slate-100 hover:bg-slate-200 border-slate-200'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-mono">+38 (067) 440-99-88</span>
          </a>

          {/* Quick CTA button */}
          <button
            onClick={onScrollToQuiz}
            id="nav-quiz-cta-btn"
            className="px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-blue-500/20 active:scale-95 flex items-center gap-1.5 shrink-0"
          >
            <Zap className="w-3.5 h-3.5 fill-white shrink-0" />
            <span className="whitespace-nowrap">Розрахунок</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Навігаційне меню"
            className={`lg:hidden w-9 h-9 rounded-xl flex items-center justify-center border transition cursor-pointer shrink-0 ${
              isDark
                ? 'bg-white/5 border-white/15 text-white hover:bg-white/10'
                : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
            }`}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t px-4 py-5 shadow-2xl transition-all ${
            isDark
              ? 'bg-[#0B0D14] border-white/10 text-white'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2 text-sm font-bold uppercase tracking-wider transition ${
                  isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </a>
            ))}

            <div className={`pt-4 mt-2 border-t flex flex-col gap-3 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <a
                href="tel:+380674409988"
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold border transition ${
                  isDark
                    ? 'bg-white/5 border-white/15 text-white'
                    : 'bg-slate-100 border-slate-200 text-slate-800'
                }`}
              >
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+38 (067) 440-99-88</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-blue-600 text-white shadow-lg flex items-center justify-center gap-2"
              >
                <span>Записатися онлайн</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
