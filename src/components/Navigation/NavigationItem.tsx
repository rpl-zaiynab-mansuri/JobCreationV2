import React from 'react';

interface NavigationItemProps {
  icon: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ icon, text, isActive, onClick }) => {
  const baseClasses = "flex items-center gap-2 px-4 py-3 rounded-md cursor-pointer";
  const activeClasses = isActive ? "text-red-500 font-bold" : "text-gray-400";
  
  return (
    <div className={`${baseClasses} ${activeClasses}`} onClick={onClick} role="tab" aria-selected={isActive}>
      <img loading="lazy" src={icon} alt={text} className="object-contain w-6 h-6" />
      <span>{text}</span>
      {isActive}
    </div>
  );
};

export default NavigationItem;
