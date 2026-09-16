import React from 'react';
import { Users, Shield, MapPin, Building, Award, GitBranch } from 'lucide-react';
import { LEADERSHIP_DATA, ORGANIZATIONAL_INFO } from '../data/tgbitoData';

export const LeadershipSection: React.FC = () => {
  const structureLevels = [
    { level: 1, name: 'International Headquarters', desc: 'Philippines (GHQ) & USA (OIC)', highlight: true },
    { level: 2, name: 'Guardians Supreme Council (GSC)', desc: 'Supreme governing policy and oversight body' },
    { level: 3, name: 'Regional Chapters', desc: 'Philippines regions and International jurisdictions' },
    { level: 4, name: 'Provincial Chapters', desc: 'Provincial council leadership and coordination' },
    { level: 5, name: 'Municipal / City Chapters', desc: 'City level chapters and membership committees' },
    { level: 6, name: 'Barangay Chapters', desc: 'Grassroots community service units' }
  ];

  return (
    <section id="structure" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-[#0038A8]" />
            <span>Governance &amp; Administration</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Structure &amp; Leadership
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Official hierarchy and authentic leadership serving TGBI - The Original worldwide.
          </p>
        </div>

        {/* Organizational Hierarchy Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GitBranch className="w-5 h-5 text-[#0038A8]" />
            <h3 className="font-display font-bold text-xl text-slate-900">
              Organizational Structure
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {structureLevels.map((lvl) => (
              <div
                key={lvl.level}
                className={`p-5 rounded-2xl border transition-all ${
                  lvl.highlight
                    ? 'bg-gradient-to-br from-[#0d233a] to-[#0038A8] text-white border-amber-400/40 shadow-md'
                    : 'bg-white border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    lvl.highlight ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`}>
                    Level {lvl.level}
                  </span>
                </div>
                <h4 className={`font-display font-bold text-base sm:text-lg mb-1 ${lvl.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {lvl.name}
                </h4>
                <p className={`text-xs sm:text-sm ${lvl.highlight ? 'text-slate-200' : 'text-slate-600'}`}>
                  {lvl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leaders Roster strictly from repository docs/leadership.html */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-amber-600" />
            <h3 className="font-display font-bold text-xl text-slate-900">
              TGBI-TO International &amp; Founding Leaders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_DATA.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0038A8] flex items-center justify-center mb-4 border border-blue-100">
                    <Shield className="w-6 h-6" />
                  </div>
                  
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0038A8] block mb-1">
                    {leader.role}
                  </span>
                  
                  <h4 className="font-display font-bold text-lg text-slate-900 leading-tight mb-2">
                    {leader.name}
                  </h4>

                  <span className="text-xs font-semibold text-amber-600 block mb-3">
                    {leader.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Headquarters Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0038A8] flex items-center justify-center shrink-0 border border-blue-100">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0038A8] block">
                Philippines Jurisdiction
              </span>
              <h4 className="font-display font-bold text-lg text-slate-900">
                General Headquarters (GHQ)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-start gap-1">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  {ORGANIZATIONAL_INFO.ghqAddress.line1}, {ORGANIZATIONAL_INFO.ghqAddress.city}, {ORGANIZATIONAL_INFO.ghqAddress.zipCode} {ORGANIZATIONAL_INFO.ghqAddress.country}
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                International Jurisdiction
              </span>
              <h4 className="font-display font-bold text-lg text-slate-900">
                Office of the International Chairman (OIC)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-start gap-1">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  {ORGANIZATIONAL_INFO.oicAddress.line1}, {ORGANIZATIONAL_INFO.oicAddress.city}, {ORGANIZATIONAL_INFO.oicAddress.stateZip}, {ORGANIZATIONAL_INFO.oicAddress.country}
                </span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
