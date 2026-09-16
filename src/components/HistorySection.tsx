import React from 'react';
import { BookOpen, Calendar, Award, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { HISTORY_TIMELINE, ORGANIZATIONAL_INFO } from '../data/tgbitoData';

export const HistorySection: React.FC = () => {
  return (
    <section id="history" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Lineage &amp; Heritage</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Brief History of TGBI-TO
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            From wartime roots in the jungles of Mindanao in 1976 to formal Republic incorporation on December 10, 1984, and worldwide reform today.
          </p>
        </div>

        {/* Milestone Timeline strictly from repository */}
        <div className="relative border-l-2 border-amber-500/30 ml-4 sm:ml-8 md:ml-28 lg:ml-36 space-y-10 sm:space-y-12 pb-4">
          {HISTORY_TIMELINE.map((item) => (
            <div key={item.year} className="relative pl-6 sm:pl-10">
              
              {/* Year Marker Badge on the left line */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-amber-500 border-4 border-slate-900 flex items-center justify-center text-slate-950 shadow-md">
                <Calendar className="w-3.5 h-3.5" />
              </div>

              {/* Desktop Year Label */}
              <div className="hidden md:block absolute -left-32 top-1 text-right w-24">
                <span className="font-display font-black text-xl text-amber-400 tracking-wider">
                  {item.year}
                </span>
              </div>

              {/* Card Container */}
              <div className="bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/50 rounded-2xl p-5 sm:p-7 shadow-lg transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="md:hidden font-display font-black text-lg text-amber-400">
                    {item.year}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    <Award className="w-3 h-3" />
                    Official Record
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-2xl text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Primacy Notice */}
        <div className="mt-14 bg-gradient-to-r from-slate-800 via-slate-800/90 to-amber-950/40 border border-amber-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                Legal Primacy of &ldquo;The Original&rdquo; (TGBI-TO)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Under Philippine law, <strong className="text-white">SEC Registration No. {ORGANIZATIONAL_INFO.secRegNumber}</strong> issued on <strong className="text-white">{ORGANIZATIONAL_INFO.secRegDate}</strong> grants legal identity to The Guardians Brotherhood, Inc. Guided by original Incorporator UPMF Carlomagno and pioneer leaders, TGBI-TO adheres to its founding constitution, keeping the brotherhood uncorrupted by factionalism.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
