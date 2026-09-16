import React, { useState } from 'react';
import { Target, Compass, BookOpen, Heart, Activity, UserCheck, Users, MessageSquare, ShieldCheck, DollarSign } from 'lucide-react';
import { MISSION_AND_VISION } from '../data/tgbitoData';

export const MissionVisionSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillarIcons = [
    BookOpen,     // Education
    Heart,        // Family
    Activity,     // Health
    UserCheck,    // Behavior
    Users,        // Friends
    MessageSquare,// Speech
    ShieldCheck,  // Loyalty & Responsibility
    DollarSign    // Material Well-being
  ];

  return (
    <section id="mission" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#009E5F] text-xs font-bold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5 text-[#009E5F]" />
            <span>Guiding Purpose & Direction</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Mission &amp; Vision
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            The foundational commitment that unites our members and guides our service to society.
          </p>
        </div>

        {/* Official Mission Box */}
        <div className="bg-gradient-to-r from-[#0038A8] via-[#0d233a] to-[#0038A8] text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-14 border border-amber-400/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-amber-300 mb-4 border border-white/20">
            <Compass className="w-6 h-6" />
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-widest text-amber-400 mb-3">
            Official Mission Statement
          </h3>

          <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            &ldquo;{MISSION_AND_VISION.mission}&rdquo;
          </p>
        </div>

        {/* 8 Vision Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              The 8 Vision Pillars of TGBI-TO
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Derived from the official teachings in <code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">docs/principles/Mission-Vision.md</code>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {MISSION_AND_VISION.visionPillars.map((pillar, idx) => {
              const IconComponent = pillarIcons[idx] || Compass;
              const isExpanded = selectedPillar === idx;

              return (
                <div
                  key={pillar.title}
                  onClick={() => setSelectedPillar(isExpanded ? null : idx)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-200 border ${
                    isExpanded
                      ? 'bg-white border-[#0038A8] shadow-lg ring-2 ring-[#0038A8]/20'
                      : 'bg-white border-slate-200 hover:border-amber-400/80 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0038A8] flex items-center justify-center shrink-0 border border-blue-100">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Pillar 0{idx + 1}
                      </span>
                      <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-4'}`}>
                    {pillar.content}
                  </p>

                  <button
                    type="button"
                    className="mt-3 text-xs font-semibold text-[#0038A8] hover:text-[#002d87] flex items-center gap-1"
                  >
                    {isExpanded ? 'Show less' : 'Read full text'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
