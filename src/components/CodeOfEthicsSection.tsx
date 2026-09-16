import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Scale, FileText } from 'lucide-react';
import { CODE_OF_ETHICS_PARAGRAPHS, CODE_OF_ETHICS_BULLETS } from '../data/tgbitoData';

export const CodeOfEthicsSection: React.FC = () => {
  return (
    <section id="ethics" className="py-16 sm:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#0038A8]" />
            <span>Official Code of Ethics</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Code of Ethics for Officers &amp; Members
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Recorded in <code className="text-xs bg-slate-100 text-[#0038A8] px-1.5 py-0.5 rounded font-mono">docs/legal/Code-of-Ethics.md</code>
          </p>
        </div>

        {/* The 4 Official Declarations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {CODE_OF_ETHICS_PARAGRAPHS.map((para, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-bold font-display uppercase tracking-wider text-[#0038A8] bg-blue-100/60 px-2.5 py-1 rounded-lg">
                    <FileText className="w-3.5 h-3.5" />
                    Paragraph 0{index + 1}
                  </span>
                  <Scale className="w-4 h-4 text-slate-400" />
                </div>
                <p className="font-serif text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  &ldquo;{para}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 10 Checkpoints Box */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0d233a] to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-amber-400/30 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                Key Ethical Tenets &amp; Obligations
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Official summary points strictly from the repository documentation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {CODE_OF_ETHICS_BULLETS.map((bullet, idx) => (
              <div
                key={idx}
                className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-3.5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center sm:text-left text-xs text-slate-400">
            <strong>Grievance Machinery:</strong> Internal issues and grievances must be routed exclusively through proper organizational channels and must never be aired to the public.
          </div>
        </div>

      </div>
    </section>
  );
};
