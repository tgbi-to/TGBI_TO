import React, { useState } from 'react';
import { FileText, Download, BookOpen, ExternalLink, X, Shield } from 'lucide-react';
import { OFFICIAL_DOCUMENTS } from '../data/tgbitoData';

export const DocumentsSection: React.FC = () => {
  const [readingDoc, setReadingDoc] = useState<string | null>(null);

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
            TGBI-TO Constitution, By-Laws &amp; Training Courseware as cataloged in <code className="text-xs bg-slate-100 text-[#0038A8] px-1.5 py-0.5 rounded font-mono">docs/cbl/</code> and <code className="text-xs bg-slate-100 text-[#0038A8] px-1.5 py-0.5 rounded font-mono">docs/mbc/</code>.
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
                <button
                  onClick={() => setReadingDoc(doc.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0038A8] hover:bg-[#002d87] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Repository Details</span>
                </button>
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

        {/* Document Modal */}
        {readingDoc && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#0038A8]" />
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
                    {readingDoc}
                  </h3>
                </div>
                <button
                  onClick={() => setReadingDoc(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900">
                  Official repository file: <code className="bg-slate-100 px-2 py-0.5 rounded text-blue-700 font-mono">docs/cbl/Amended-By-Laws.md</code>
                </p>
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-2 max-h-72 overflow-y-auto">
                  <p className="font-bold text-slate-900">AMENDED BY-LAWS OF THE GUARDIANS BROTHERHOOD, INC.</p>
                  <p className="font-bold text-slate-800">MEMBERSHIP (Amended 12/11/2016)</p>
                  <p><strong>Section 1. Qualifications for Membership:</strong></p>
                  <p>a. Must be a citizen of the Philippines;</p>
                  <p>b. Must have good standing in the community;</p>
                  <p>c. Must not have been convicted of any crime involving moral turpitude;</p>
                  <p>d. The age requirement for MAGIC GROUP is at least Twenty-One (21) years old.</p>
                  <p><strong>Section 2. Foreign Nationals:</strong></p>
                  <p>Foreign nationals may be accepted as members after passing through the process of recruitment and after satisfying qualifications... Provided that such applicants shall have made significant contributions to the cause of the TGBI.</p>
                  <p><strong>Section 3. Pre-Membership Requirements:</strong></p>
                  <p>Application, Presentation of Applicant, Background Investigation, Orientation Seminar/Lecture, Indoctrination Rites, and Acceptance.</p>
                </div>

                <p className="text-xs text-slate-500 italic">
                  Note: Official editable Microsoft Word (.docx) copies are stored directly in the repository filesystem under <code className="bg-slate-100 px-1 py-0.5 rounded">docs/cbl/</code> and <code className="bg-slate-100 px-1 py-0.5 rounded">docs/mbc/</code>.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setReadingDoc(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
