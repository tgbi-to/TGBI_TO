import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileBottomBar } from './components/MobileBottomBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MissionVisionSection } from './components/MissionVisionSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { CreedPrayerSongSection } from './components/CreedPrayerSongSection';
import { CodeOfEthicsSection } from './components/CodeOfEthicsSection';
import { HistorySection } from './components/HistorySection';
import { LeadershipSection } from './components/LeadershipSection';
import { DocumentsSection } from './components/DocumentsSection';
import { ChaptersDirectory } from './components/ChaptersDirectory';
import { JoinUsSection } from './components/JoinUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'home',
        'about',
        'mission',
        'ethics',
        'history',
        'principles',
        'creed-prayer',
        'structure',
        'documents',
        'chapters',
        'join',
        'contact'
      ];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Top Header & Navbar with Official Logo */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections strictly following repository logic */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About TGBI-TO: Welcome, Identity, G-U-A-R-D-I-A-N-S Acronym & Filipino Translation */}
        <AboutSection />

        {/* 3. Official Mission & 8 Vision Pillars */}
        <MissionVisionSection />

        {/* 4. The 7 Guiding Principles with Official Emojis */}
        <PrinciplesSection />

        {/* 5. Official Creed & English Prayer */}
        <CreedPrayerSongSection />

        {/* 6. Official Code of Ethics (Verbatim 4 Paragraphs & Tenets) */}
        <CodeOfEthicsSection />

        {/* 7. Brief History & Origins (1976 -> 1984 SEC 123899 -> Today Reform) */}
        <HistorySection />

        {/* 8. Structure & Leadership (Levels 1-6, UPMF Carlomagno, MF Alamid, GHQ & OIC) */}
        <LeadershipSection />

        {/* 9. Official Documents Archive (Amended CBL, Amended By-Laws, MBC) */}
        <DocumentsSection />

        {/* 10. Regional Chapters, Official Announcements & Media Gallery */}
        <ChaptersDirectory />

        {/* 11. How to Join TGBI-TO (Eligibility, 6-Stage Process, Inquiry Form, Official Forms) */}
        <JoinUsSection />

        {/* 12. Contact Us (GHQ, OIC, Email, Grievance Policy, Google Forms) */}
        <ContactSection />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Quick Bar */}
      <MobileBottomBar activeSection={activeSection} />
    </div>
  );
}
