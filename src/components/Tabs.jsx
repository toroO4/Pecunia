import { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Tab1');
  
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
    
    return {activeTab, handleTabClick};
};

export default Tabs;