import React from 'react';
import { FileText, ExternalLink, Shield } from 'lucide-react';
import { OFFICIAL_DOCUMENTS } from '../data/tgbitoData';

export const DocumentsSection: React.FC = () => {
  return (
    <section id="documents" className="py-16 sm:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5 text-[#0038A8]" />
            <span>Constitutional Archive</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Official Documents
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            TGBI-TO Constitution, By-Laws &amp; Training Courseware as cataloged in the official repository.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {OFFICIAL_DOCUMENTS.map((doc) => (
            <div
              key={doc.title}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100/60 text-[#0038A8] flex items-center justify-center mb-4 border border-blue-200">
                  <FileText className="w-6 h-6" />
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {doc.type}
                </span>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  {doc.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {doc.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0038A8] hover:bg-[#002d87] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View in Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Info Callout */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 text-xs sm:text-sm text-slate-600">
          <Shield className="w-5 h-5 text-[#0038A8] shrink-0 mt-0.5" />
          <p>
            All chartering documents, promotion records, and mutual-benefit templates are preserved in the official repository. Chapters in good standing may request authorized copies from the International Executive Secretariat.
          </p>
        </div>

      </div>
    </section>
  );
};
