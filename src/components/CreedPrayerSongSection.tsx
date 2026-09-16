import React, { useState } from 'react';
import { Scroll, Heart, Copy, Check } from 'lucide-react';
import { GUARDIANS_CREED, GUARDIANS_PRAYER } from '../data/tgbitoData';

export const CreedPrayerSongSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'creed' | 'prayer'>('creed');
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (type: 'creed' | 'prayer') => {
    const text = type === 'creed' ? GUARDIANS_CREED.join('\n') : GUARDIANS_PRAYER.join('\n');
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="creed-prayer" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-amber-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Scroll className="w-3.5 h-3.5" />
            <span>Spiritual &amp; Fraternal Declarations</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Official Creed &amp; Prayer
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Sacred declarations recorded in <code className="text-amber-400 text-xs">docs/principles/</code> that guide every member&apos;s daily conduct.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700 flex items-center gap-1 max-w-xs w-full">
            <button
              onClick={() => setActiveTab('creed')}
              className={`flex-1 py-2.5 px-4 rounded-xl font-display text-xs sm:text-sm font-bold transition-all min-h-[44px] flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'creed'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Scroll className="w-4 h-4" />
              <span>The Creed</span>
            </button>
            <button
              onClick={() => setActiveTab('prayer')}
              className={`flex-1 py-2.5 px-4 rounded-xl font-display text-xs sm:text-sm font-bold transition-all min-h-[44px] flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'prayer'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>The Prayer</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-slate-950/70 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Action Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                {activeTab === 'creed' ? 'Official Creed of TGBI-TO' : 'Official English Prayer of TGBI-TO'}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                {activeTab === 'creed' ? 'The Guardians Creed' : 'The Guardians Prayer'}
              </h3>
            </div>
            <button
              onClick={() => handleCopy(activeTab)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors min-h-[38px] cursor-pointer"
              title="Copy official text"
            >
              {copied === activeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
          </div>

          {/* Creed View */}
          {activeTab === 'creed' && (
            <div className="space-y-3 font-serif text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto text-center leading-relaxed">
              {GUARDIANS_CREED.map((line, idx) => {
                const isHeading = line === 'I am GUARDIANS' || line === 'I am GUARDIANS,' || line === 'and I live by the CODE.';
                return (
                  <p
                    key={idx}
                    className={
                      isHeading
                        ? 'font-display font-bold text-amber-400 text-lg sm:text-xl py-1'
                        : line.startsWith('I ')
                        ? 'font-semibold text-white pt-2'
                        : 'text-slate-300'
                    }
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          )}

          {/* Prayer View */}
          {activeTab === 'prayer' && (
            <div className="space-y-3 font-serif text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto text-center leading-relaxed">
              {GUARDIANS_PRAYER.map((line, idx) => {
                const isInvocation = line.startsWith('God teach us to be;') || line.startsWith('God help us to be;') || line.startsWith('God, we beseech thee;');
                const isAmen = line === 'Amen.';

                return (
                  <p
                    key={idx}
                    className={
                      isInvocation
                        ? 'font-display font-bold text-amber-400 text-base sm:text-xl pt-3 pb-1'
                        : isAmen
                        ? 'font-display font-bold text-amber-400 text-xl pt-4'
                        : 'text-slate-300'
                    }
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          )}

          {/* Bottom Verification Note */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 text-center text-xs text-slate-400">
            Source: <code className="text-amber-400/90">docs/principles/{activeTab === 'creed' ? 'Creed.md' : 'Prayer.md'}</code> in the official repository
          </div>

        </div>

      </div>
    </section>
  );
};
