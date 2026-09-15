import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Quiz3DSection } from './components/Quiz3DSection';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ShowroomReelsSection } from './components/ShowroomReelsSection';
import { StandardsTechSection } from './components/StandardsTechSection';
import { LiveReviewsSection } from './components/LiveReviewsSection';
import { ContactsMapSection } from './components/ContactsMapSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { BookingModal } from './components/BookingModal';
import { ThemeMode } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedBookingService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleScrollToQuiz = () => {
    const quizEl = document.getElementById('quiz');
    if (quizEl) {
      const navbarOffset = 75;
      const elementPosition = quizEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark
        ? 'bg-[#090A0F] text-slate-100 selection:bg-blue-600 selection:text-white'
        : 'bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white'
    }`}>
      {/* Top Navbar */}
      <Navbar
        theme={theme}
        onChangeTheme={setTheme}
        onOpenBooking={() => handleOpenBooking()}
        onScrollToQuiz={handleScrollToQuiz}
      />

      {/* Main Content with Wow Effect Scroll Animations */}
      <main>
        {/* Block 1: Hero-Screen */}
        <HeroSection
          theme={theme}
          onScrollToQuiz={handleScrollToQuiz}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Block 2: Interactive Quiz (Lead Magnet) */}
        <Quiz3DSection
          theme={theme}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Block 3: Services (Cards-Transformers) */}
        <ServicesSection
          theme={theme}
          onOpenBookingForService={(srv) => handleOpenBooking(srv)}
        />

        {/* Block 4: Before / After 2.0 (Interactive Slider) */}
        <BeforeAfterSection
          theme={theme}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Block 5: Showroom Results (Reels / Backstage) */}
        <ShowroomReelsSection
          theme={theme}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Block 6: Standards & Technologies */}
        <StandardsTechSection
          theme={theme}
        />

        {/* Block 7: Live Reviews from Google Maps */}
        <LiveReviewsSection
          theme={theme}
        />

        {/* Block 8: Contacts + 1-Click Route */}
        <ContactsMapSection
          theme={theme}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Mobile Floating Action Bar (Thumb-Friendly UI) */}
      <FloatingActionBar
        theme={theme}
        onOpenBooking={() => handleOpenBooking()}
        onScrollToQuiz={handleScrollToQuiz}
      />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        initialService={selectedBookingService}
        theme={theme}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedBookingService('');
        }}
      />
    </div>
  );
}
