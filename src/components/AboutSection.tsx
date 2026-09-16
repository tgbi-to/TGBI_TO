import React from 'react';
import { Shield, Sparkles, Award } from 'lucide-react';
import { 
  ORGANIZATIONAL_INFO, 
  OFFICIAL_ABOUT_TEXT, 
  GUARDIANS_ACRONYM_ITEMS, 
  GUARDIANS_ACRONYM_FILIPINO 
} from '../data/tgbitoData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-[#0038A8]" />
            <span>Official Identity & Heritage</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            About TGBI - The Original
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
            {OFFICIAL_ABOUT_TEXT.welcome}
          </p>
        </div>

        {/* Two-Column Official Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Official Declaration */}
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <p className="font-serif italic text-slate-900 text-base sm:text-lg mb-2">
                &ldquo;{OFFICIAL_ABOUT_TEXT.paragraphs[0]}&rdquo;
              </p>
            </div>

            <p>
              {OFFICIAL_ABOUT_TEXT.paragraphs[1]}
            </p>

            <p>
              {OFFICIAL_ABOUT_TEXT.paragraphs[2]}
            </p>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <h4 className="font-display font-bold text-amber-900 text-sm sm:text-base mb-1">
                A Message from Master Founder Alamid
              </h4>
              <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed italic">
                &ldquo;{OFFICIAL_ABOUT_TEXT.paragraphs[3]}&rdquo;
              </p>
            </div>

            <p>
              {OFFICIAL_ABOUT_TEXT.paragraphs[4]}
            </p>
          </div>

          {/* Right Column: Identity Highlights & Official SEC Record */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* SEC Registration Card */}
            <div className="bg-gradient-to-br from-[#0d233a] to-[#0038A8] text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-amber-400/40">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>Republic of the Philippines Record</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                SEC Registration No. {ORGANIZATIONAL_INFO.secRegNumber}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mb-4 leading-relaxed">
                Officially registered on <strong className="text-amber-300">{ORGANIZATIONAL_INFO.secRegDate}</strong> under Philippine corporate law as a non-stock, non-profit fraternal organization.
              </p>
              
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-300">Origin:</span>
                  <span className="font-semibold text-white">Mindanao (1976)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Incorporation Date:</span>
                  <span className="font-semibold text-amber-300">{ORGANIZATIONAL_INFO.secRegDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Incorporator / Chairman:</span>
                  <span className="font-semibold text-white">UPMF Carlomagno</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Classification:</span>
                  <span className="font-semibold text-white">The Original (TGBI-TO)</span>
                </div>
              </div>
            </div>

            {/* Core Pillars Summary */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h4 className="font-display font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0038A8]" />
                <span>What We Stand For</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {OFFICIAL_ABOUT_TEXT.paragraphs[5]}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Brotherhood', 'Integrity', 'Peace', 'Discipline', 'Service', 'Equality', 'Justice'].map((p) => (
                  <span key={p} className="px-2.5 py-1 rounded-md bg-white border border-slate-300 text-xs font-semibold text-slate-800 shadow-2xs">
                    {p}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* The Meaning of G-U-A-R-D-I-A-N-S Box */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0d233a] to-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-amber-400/30 shadow-lg">
          <div className="max-w-3xl mb-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-amber-400 mb-2">
              The Meaning of G-U-A-R-D-I-A-N-S:
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Each letter represents a fundamental pillar of our fraternal calling and commitment to the nation:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4 mb-6">
            {GUARDIANS_ACRONYM_ITEMS.map((item) => (
              <div 
                key={item.letter + item.word} 
                className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 sm:p-4 text-center hover:border-amber-400/60 transition-colors"
              >
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1">
                  {item.letter}
                </div>
                <div className="text-xs font-semibold text-slate-200 leading-tight">
                  {item.word}
                </div>
              </div>
            ))}
          </div>

          {/* Filipino Translation from repository */}
          <div className="pt-4 border-t border-slate-800 text-center sm:text-left">
            <span className="text-xs font-bold text-amber-400/90 uppercase tracking-wider block mb-1">
              Translated into the Filipino Language:
            </span>
            <p className="font-serif italic text-sm sm:text-base text-slate-200">
              &ldquo;{GUARDIANS_ACRONYM_FILIPINO}&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
