import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import LiveClassroomView from './components/LiveClassroomView';
import CommunityView from './components/CommunityView';
import PlaceholderView from './components/PlaceholderView';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
      case 'live': return <LiveClassroomView />;
      case 'courses': return <PlaceholderView title="Derslerim" />;
      case 'simulator': return <PlaceholderView title="Simülatör Alanı" />;
      case 'community': return <CommunityView isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
      default: return <DashboardView isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* MAIN CONTENT */}
      <main className="main-content" style={{ padding: activeTab === 'live' ? '1.5rem' : '2.5rem 3rem' }}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
