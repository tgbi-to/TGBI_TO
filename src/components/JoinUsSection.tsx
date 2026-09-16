import React, { useState } from 'react';
import { UserCheck, CheckCircle2, Shield, ExternalLink, Send, Check } from 'lucide-react';
import { JOINING_PROCESS, OFFICIAL_LINKS } from '../data/tgbitoData';

interface JoinUsSectionProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const JoinUsSection: React.FC<JoinUsSectionProps> = ({ isModal = false, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    sponsor: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
          <UserCheck className="w-3.5 h-3.5 text-[#0038A8]" />
          <span>Membership Enrollment</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          How to Join TGBI-TO
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          The verified six-stage recruitment protocol established in the Amended By-Laws and MBC doctrine.
        </p>
      </div>

      {/* Requirements & 6-Stage Process Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
        
        {/* Eligibility Requirements */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-display font-bold text-xl text-slate-900 mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#0038A8]" />
            <span>Eligibility Requirements</span>
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Under Section 1 &amp; 2, Article III of the Amended By-Laws:
          </p>

          <ul className="space-y-3.5">
            {JOINING_PROCESS.eligibility.map((req, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {req}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Official Repository Forms
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={OFFICIAL_LINKS.inquiryForm}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0038A8] text-xs font-semibold flex items-center justify-between transition-colors"
              >
                <span>Membership Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={OFFICIAL_LINKS.idAndCertForm}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold flex items-center justify-between transition-colors"
              >
                <span>ID &amp; Certificate Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Six-Stage Process */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
            The Six-Stage Process
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Every candidate must complete all six verified stages before formal acceptance into the Brotherhood:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {JOINING_PROCESS.stages.map((stage) => (
              <div
                key={stage.step}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400/80 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-[#0038A8] text-white text-xs font-bold flex items-center justify-center">
                    {stage.step}
                  </span>
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    {stage.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Official Membership Inquiry Form from websites/global-main/index.html */}
      <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
        <div className="text-center mb-6">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
            Membership Inquiry Form
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Submit your inquiry to the local Membership Committee. Remember that bona fide membership requires sponsorship.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
            <Check className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
            <h4 className="font-display font-bold text-lg text-emerald-900 mb-1">
              Thank You for Your Inquiry!
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed mb-4">
              We will review your submission and get back to you soon. Important: Official membership requires sponsorship from a bona fide member and completion of the Mandatory Basic Course (MBC).
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: '', email: '', location: '', sponsor: '', message: '' });
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                placeholder="Juan Dela Cruz"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="juan@example.com"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Location (City / Country) *
                </label>
                <input
                  id="location"
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="Cebu City, Philippines"
                />
              </div>
            </div>

            <div>
              <label htmlFor="sponsor" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Do you have a Sponsor? (If yes, provide name)
              </label>
              <input
                id="sponsor"
                type="text"
                value={formData.sponsor}
                onChange={(e) => setFormData({ ...formData, sponsor: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                placeholder="Name of bona fide sponsor (or leave blank if inquiring)"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Brief statement about your interest in joining *
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                placeholder="Describe your goodwill, background, and desire to uphold the 7 Guiding Principles..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <span>Submit Inquiry</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-slate-50 text-slate-900 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative my-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200"
          >
            ✕
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="join" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      {content}
    </section>
  );
};
