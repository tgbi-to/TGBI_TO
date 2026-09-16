import React, { useState } from 'react';
import { Menu, X, Shield, ChevronRight, ExternalLink } from 'lucide-react';
import { Emblem } from './Emblem';
import { ORGANIZATIONAL_INFO, OFFICIAL_LINKS } from '../data/tgbitoData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Mission & Vision', href: '#mission' },
    { label: 'Ethics', href: '#ethics' },
    { label: 'History', href: '#history' },
    { label: 'Principles', href: '#principles' },
    { label: 'Creed & Prayer', href: '#creed-prayer' },
    { label: 'Structure', href: '#structure' },
    { label: 'Documents', href: '#documents' },
    { label: 'Join Us', href: '#join' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0038A8] via-[#0d233a] to-[#C8102E] text-white shadow-lg border-b border-amber-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Official Brand Logo and Title */}
          <a href="#home" className="flex items-center gap-3 sm:gap-4 group cursor-pointer py-1">
            <Emblem size="md" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-lg md:text-xl tracking-wide text-white group-hover:text-amber-300 transition-colors leading-tight uppercase">
                {ORGANIZATIONAL_INFO.name}
              </span>
              <span className="font-display font-medium text-xs sm:text-sm text-amber-300 tracking-wider">
                {ORGANIZATIONAL_INFO.legalIdentifier}
              </span>
              <span className="text-[10px] text-slate-200/90 hidden sm:block">
                SEC Reg. No. {ORGANIZATIONAL_INFO.secRegNumber} • Dec 10, 1984
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2 text-xs font-semibold">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={OFFICIAL_LINKS.inquiryForm}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition-all flex items-center gap-1 text-xs shadow-md"
            >
              <span>Apply</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="#join"
              className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs shadow-md"
            >
              Join Us
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-300" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Out / Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 border-b border-amber-500/30 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-3 duration-200">
          <div className="py-2 px-3 mb-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs text-amber-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              SEC Reg. No. {ORGANIZATIONAL_INFO.secRegNumber}
            </span>
            <span className="text-slate-400">Dec 10, 1984</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors min-h-[44px] ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={OFFICIAL_LINKS.inquiryForm}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs text-center"
            >
              <span>Official Google Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs text-center"
            >
              Contact GHQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
