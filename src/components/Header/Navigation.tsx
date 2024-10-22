import React, { useState } from "react";

const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const navItems = [
    { label: "Dashboard", id: "dashboard" },
    { label: "Job", id: "job" },
    { label: "Vehicle", id: "vehicle" },
    { label: "Settings", id: "settings" },
  ];

  const handleClick = (id: string) => {
    setActiveTab(id);
    // You can implement scrolling or other logic here if needed
  };

  return (
    <nav className="flex gap-9 self-stretch whitespace-nowrap">
      {navItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleClick(item.id)} // Make it clickable
        >
          <div
            className={`overflow-hidden px-1.5 py-4 ${
              activeTab === item.id ? "font-bold text-red-500" : "text-gray-200"
            }`}
          >
            {item.label}
          </div>
          {activeTab === item.id && <div className="flex shrink-0 mt-1 h-1 bg-red-500 w-full" />}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
