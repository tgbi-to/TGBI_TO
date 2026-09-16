import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { SEVEN_PRINCIPLES } from '../data/tgbitoData';

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Foundational Core Values</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            The 7 Guiding Principles
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We live by seven fundamental core values that define our identity, bind us together, and solidify our commitment to every member and the community we serve.
          </p>
        </div>

        {/* 7 Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-4 mb-12">
          {SEVEN_PRINCIPLES.map((p) => (
            <div
              key={p.id}
              className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-5 sm:p-6 text-center transition-all duration-200 shadow-sm hover:shadow-md flex flex-col items-center justify-between"
            >
              <div className="text-3xl sm:text-4xl mb-3 select-none">
                {p.emoji}
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 block mb-1">
                  Principle 0{p.number}
                </span>
                <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Reaffirmation Quote */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto border border-amber-400/30">
          <ShieldCheck className="w-8 h-8 text-amber-400 mx-auto mb-2" />
          <p className="font-serif italic text-base sm:text-lg text-slate-200">
            &ldquo;They are not just words; they are the foundation of our organization, the values that bind us together and the commitment we make to every member and to the community we serve.&rdquo;
          </p>
          <span className="text-xs text-amber-400 mt-2 block font-semibold">
            — Master Founder Alamid
          </span>
        </div>

      </div>
    </section>
  );
};
