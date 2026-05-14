import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">⚡</span>
        <span>RoboCraft</span>
      </div>

      <nav className="nav-menu">
        <div
          className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <span>🏠</span>
          <span>Gösterge Paneli</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          <span>📖</span>
          <span>Derslerim</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'live' ? 'active' : ''}`}
          onClick={() => setActiveTab('live')}
        >
          <span>💻</span>
          <span>Canlı Yayınlar</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'simulator' ? 'active' : ''}`}
          onClick={() => setActiveTab('simulator')}
        >
          <span>⚙️</span>
          <span>Simülatör Alanı</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'community' ? 'active' : ''}`}
          onClick={() => setActiveTab('community')}
        >
          <span>👥</span>
          <span>Topluluk</span>
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
