import React, { useState } from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">RoboCraft</span>
        </div>
        <button 
          className="sidebar-toggle-btn" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Menüyü Genişlet" : "Menüyü Daralt"}
        >
          {isCollapsed ? '»' : '«'}
        </button>
      </div>

      <nav className="nav-menu">
        <div
          className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
          title="Gösterge Paneli"
        >
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Gösterge Paneli</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
          title="Derslerim"
        >
          <span className="nav-icon">📖</span>
          <span className="nav-text">Derslerim</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'live' ? 'active' : ''}`}
          onClick={() => setActiveTab('live')}
          title="Canlı Yayınlar"
        >
          <span className="nav-icon">💻</span>
          <span className="nav-text">Canlı Yayınlar</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'simulator' ? 'active' : ''}`}
          onClick={() => setActiveTab('simulator')}
          title="Simülatör Alanı"
        >
          <span className="nav-icon">⚙️</span>
          <span className="nav-text">Simülatör Alanı</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'community' ? 'active' : ''}`}
          onClick={() => setActiveTab('community')}
          title="Topluluk"
        >
          <span className="nav-icon">👥</span>
          <span className="nav-text">Topluluk</span>
        </div>
      </nav>

      <div className="level-widget">
        <div className="level-title">MEVCUT SEVİYE</div>
        <div className="level-number">Seviye 5</div>
        <div className="progress-bar-bg">
          <div className="progress-fill" style={{ width: '62%' }}></div>
        </div>
        <div className="xp-text">1250 / 2000 XP</div>
      </div>
    </aside>
  );
};

export default Sidebar;
