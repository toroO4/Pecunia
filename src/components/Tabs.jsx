import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Tabs">
      <div
        className={`Tab ${activeTab === 'Tab1' ? 'active' : ''}`}
        onClick={() => handleTabClick('Tab1')}
      >
        Tab 1
      </div>
      <div
        className={`Tab ${activeTab === 'Tab2' ? 'active' : ''}`}
        onClick={() => handleTabClick('Tab2')}
      >
        Tab 2
      </div>
      <div
        className={`Tab ${activeTab === 'Tab3' ? 'active' : ''}`}
        onClick={() => handleTabClick('Tab3')}
      >
        Tab 3
      </div>
    </div>
  );
};

export const Tabs = {
  activeTab,
  handleTabClick,
};
