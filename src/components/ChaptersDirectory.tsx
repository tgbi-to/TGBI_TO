import React from 'react';
import { MapPin, Globe, ExternalLink, Bell, Image as ImageIcon, Video } from 'lucide-react';
import { REGIONS_DATA, ANNOUNCEMENTS, OFFICIAL_GALLERY, OFFICIAL_LINKS } from '../data/tgbitoData';

export const ChaptersDirectory: React.FC = () => {
  return (
    <section id="chapters" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-[#0038A8]" />
            <span>Regional Presence &amp; Activity</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chapters, Announcements &amp; Media
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Official regional locations recorded in <code className="text-xs bg-slate-200 px-1 py-0.5 rounded text-slate-800">regions/</code> and official memos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Chapters Directory */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#0038A8]" />
                <span>Active Regional Chapters</span>
              </h3>
              <a
                href={OFFICIAL_LINKS.registerChapterContacts}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#0038A8] hover:text-[#002d87] flex items-center gap-1"
              >
                <span>Register Chapter</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REGIONS_DATA.map((ch) => (
                <div
                  key={ch.chapter}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-[#0038A8] transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#0038A8] border border-blue-100">
                      {ch.country}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {ch.region}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base mb-1">
                    {ch.chapter}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    {ch.path}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
              <span className="text-xs text-slate-700">
                Are you a chapter officer looking to update chapter contacts?
              </span>
              <a
                href={OFFICIAL_LINKS.registerChapterContacts}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#0038A8] text-white text-xs font-semibold hover:bg-[#002d87] transition-colors shrink-0 ml-2"
              >
                Register Online
              </a>
            </div>
          </div>

          {/* Right Column: Official Announcements from repository */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
              <Bell className="w-5 h-5 text-amber-600" />
              <span>Official Announcements</span>
            </h3>

            <div className="space-y-4">
              {ANNOUNCEMENTS.map((ann, idx) => (
                <div
                  key={idx}
                  className="bg-white border-l-4 border-amber-500 border-y border-r border-slate-200 rounded-xl p-5 shadow-sm"
                >
                  <span className="text-xs font-bold text-red-700 block mb-1">
                    {ann.tag}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {ann.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Official Photo & Video Media */}
            <div className="pt-4">
              <h4 className="font-display font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#0038A8]" />
                <span>Official Media &amp; Gallery</span>
              </h4>

              <div className="space-y-2.5">
                {OFFICIAL_GALLERY.map((media) => (
                  <a
                    key={media.title}
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-center justify-between hover:border-amber-400 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                        {media.type === 'Video' ? <Video className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
                      </div>
                      <div>
                        <h5 className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-[#0038A8] transition-colors">
                          {media.title}
                        </h5>
                        {media.subtitle && (
                          <p className="text-[11px] text-slate-500">{media.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0038A8] shrink-0" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
