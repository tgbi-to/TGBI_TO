import React from 'react';
import { Home, Shield, BookOpen, Users, UserPlus } from 'lucide-react';

interface MobileBottomBarProps {
  activeSection: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, action: () => scrollTo('home') },
    { id: 'about', label: 'About', icon: Shield, action: () => scrollTo('about') },
    { id: 'principles', label: 'Principles', icon: BookOpen, action: () => scrollTo('principles') },
    { id: 'structure', label: 'Leaders', icon: Users, action: () => scrollTo('structure') },
    { id: 'join', label: 'Join Us', icon: UserPlus, action: () => scrollTo('join'), highlight: true },
  ];

  return (
    <nav className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-amber-500/30 py-1 px-2 shadow-2xl">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={item.action}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 px-2 rounded-xl transition-colors cursor-pointer ${
                item.highlight
                  ? 'text-amber-300 font-bold'
                  : isActive
                  ? 'text-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label={item.label}
            >
              <div className={`${item.highlight ? 'bg-amber-400/20 px-2.5 py-0.5 rounded-full text-amber-300' : ''}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
