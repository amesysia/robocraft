import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Map, 
  Pickaxe,
  MonitorPlay, 
  Settings, 
  Users, 
  Backpack, 
  PanelLeftClose, 
  PanelLeftOpen,
  Zap,
  Cloud,
  CloudOff,
  CloudLightning,
  RefreshCw
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, playerData, syncStatus }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const xp = playerData?.xp ?? 1250;
  const level = playerData?.level ?? 5;
  const xpForNextLevel = level * 500;
  const xpProgress = ((xp % 500) / 500) * 100;

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Zap className="logo-icon" size={24} />
          <span className="logo-text" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '1rem', letterSpacing: '0px' }}>RoboCraft</span>
        </div>
        <button
          className="sidebar-toggle-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Menüyü Genişlet" : "Menüyü Daralt"}
        >
          {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </button>
      </div>

      <nav className="nav-menu">
        <div
          className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
          title="Gösterge Paneli"
        >
          <Home className="nav-icon" size={20} />
          <span className="nav-text">Gösterge Paneli</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
          title="Derslerim"
        >
          <BookOpen className="nav-icon" size={20} />
          <span className="nav-text">Derslerim</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'adventure' ? 'active' : ''}`}
          onClick={() => setActiveTab('adventure')}
          title="Keşif Madeni"
        >
          <Pickaxe className="nav-icon" size={20} />
          <span className="nav-text">Keşif Madeni</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'live' ? 'active' : ''}`}
          onClick={() => setActiveTab('live')}
          title="Canlı Yayınlar"
        >
          <MonitorPlay className="nav-icon" size={20} />
          <span className="nav-text">Canlı Yayınlar</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'simulator' ? 'active' : ''}`}
          onClick={() => setActiveTab('simulator')}
          title="Simülatör Alanı"
        >
          <Settings className="nav-icon" size={20} />
          <span className="nav-text">Simülatör Alanı</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'community' ? 'active' : ''}`}
          onClick={() => setActiveTab('community')}
          title="Topluluk"
        >
          <Users className="nav-icon" size={20} />
          <span className="nav-text">Topluluk</span>
        </div>

        {/* === YENİ: Profil & Envanter === */}
        <div
          className={`nav-item nav-item-profile ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
          title="Profil & Envanter"
          id="nav-profile"
        >
          <Backpack className="nav-icon" size={20} />
          <span className="nav-text">Profil & Envanter</span>
          {activeTab !== 'profile' && <span className="nav-new-dot" />}
        </div>
      </nav>

      {/* Cloud Sync Status Widget */}
      <div className={`sync-widget ${syncStatus || 'local'} ${isCollapsed ? 'collapsed' : ''}`}>
        {syncStatus === 'synced' && (
          <>
            <Cloud className="sync-icon success" size={16} />
            {!isCollapsed && <span className="sync-text">Bulut Eşitlendi</span>}
          </>
        )}
        {syncStatus === 'saving' && (
          <>
            <RefreshCw className="sync-icon spinning" size={16} />
            {!isCollapsed && <span className="sync-text">Eşitleniyor...</span>}
          </>
        )}
        {syncStatus === 'local' && (
          <>
            <CloudOff className="sync-icon local" size={16} />
            {!isCollapsed && <span className="sync-text">Yerel Mod (Offline)</span>}
          </>
        )}
        {syncStatus === 'error' && (
          <>
            <CloudLightning className="sync-icon error animate-pulse" size={16} />
            {!isCollapsed && <span className="sync-text">Bağlantı Hatası</span>}
          </>
        )}
      </div>

      <div className="level-widget">
        <div className="level-title">MEVCUT SEVİYE</div>
        <div className="level-number">Seviye {level}</div>
        <div className="progress-bar-bg">
          <div className="progress-fill" style={{ width: `${xpProgress}%` }} />
        </div>
        <div className="xp-text">{xp.toLocaleString()} / {xpForNextLevel.toLocaleString()} XP</div>
      </div>
    </aside>
  );
};

export default Sidebar;
