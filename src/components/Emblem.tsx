import React from 'react';

interface EmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBorder?: boolean;
}

export const Emblem: React.FC<EmblemProps> = ({ 
  size = 'md', 
  className = '',
  showBorder = true
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-32 h-32 sm:w-40 sm:h-40'
  };

  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden ${
        showBorder ? 'ring-2 sm:ring-3 ring-amber-400 shadow-md' : ''
      } ${sizeClasses[size]} ${className}`}
    >
      <img
        src="/assets/brand/TGBITO.jpg"
        alt="The Guardians Brotherhood, Inc. - The Original (TGBI-TO) Official Logo"
        className="w-full h-full object-cover rounded-full select-none"
        loading="eager"
      />
    </div>
  );
};
