import React, { useState } from 'react';
import NavigationItem from './NavigationItem';

interface NavItem {
  icon: string;
  text: string;
  id: string;
}

const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('block-selection');

  const navItems: NavItem[] = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/80e6466ee0b7d89e38eb6ec3c2caf57615f486e3988375296df7c3941554e216?placeholderIfAbsent=true&apiKey=868bd20bc6d8476891a5b686a1313f9e", text: "Block Selection", id: "block-selection" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0152273ae1262db2cfcff33a8daf790ee166c48946418b58c997d1959ada125f?placeholderIfAbsent=true&apiKey=868bd20bc6d8476891a5b686a1313f9e", text: "Job Configuration", id: "job-configuration" },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-center items-center w-full max-w-2xl mx-auto text-sm leading-loose">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <NavigationItem
              icon={item.icon}
              text={item.text}
              isActive={activeTab === item.id}
              onClick={() => handleTabClick(item.id)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
