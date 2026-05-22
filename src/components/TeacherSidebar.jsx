import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  MonitorPlay,
  PanelLeftClose, 
  PanelLeftOpen,
  Zap,
  Cloud,
  CloudOff,
  CloudLightning,
  RefreshCw,
  LogOut,
  ShieldCheck
} from 'lucide-react';

const TeacherSidebar = ({ activeTab, setActiveTab, playerData, syncStatus, onLogout }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Zap className="logo-icon" size={24} style={{ color: 'var(--accent-red)' }} />
          <span className="logo-text" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '1rem', letterSpacing: '0px', color: 'var(--accent-red)' }}>Teacher</span>
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
          className={`nav-item ${activeTab === 'teacher-students' ? 'active' : ''}`}
          onClick={() => setActiveTab('teacher-students')}
          title="Öğrencilerim"
        >
          <Users className="nav-icon" size={20} />
          <span className="nav-text">Öğrencilerim</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'teacher-tasks' ? 'active' : ''}`}
          onClick={() => setActiveTab('teacher-tasks')}
          title="Görev Yönetimi"
        >
          <BookOpen className="nav-icon" size={20} />
          <span className="nav-text">Görev Yönetimi</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'teacher-live' ? 'active' : ''}`}
          onClick={() => setActiveTab('teacher-live')}
          title="Canlı Ders Aç"
        >
          <MonitorPlay className="nav-icon" size={20} />
          <span className="nav-text">Canlı Ders Aç</span>
        </div>
        <div
          className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
          title="Proje Sergisi"
        >
          <BookOpen className="nav-icon" size={20} />
          <span className="nav-text">Proje Sergisi</span>
        </div>
      </nav>

      <div className="sidebar-bottom-controls">
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
              {!isCollapsed && <span className="sync-text">Yerel Mod</span>}
            </>
          )}
          {syncStatus === 'error' && (
            <>
              <CloudLightning className="sync-icon error animate-pulse" size={16} />
              {!isCollapsed && <span className="sync-text">Bağlantı Hatası</span>}
            </>
          )}
        </div>

        <button
          type="button"
          onClick={onLogout}
          className={`sidebar-logout-btn ${isCollapsed ? 'collapsed' : ''}`}
          title="Oturumu Kapat"
        >
          <LogOut size={16} className="logout-icon" />
          {!isCollapsed && <span className="logout-text">Çıkış Yap</span>}
        </button>
      </div>

      <div className="level-widget" style={{ borderTop: '1px solid var(--accent-red)', paddingTop: '1rem', marginTop: '1rem' }}>
        <div className="level-title" style={{ color: 'var(--accent-red)' }}>YETKİ SEVİYESİ</div>
        <div className="level-number" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck size={18} className="text-red" /> Eğitmen
        </div>
        <div className="xp-text" style={{ marginTop: '0.5rem', color: 'var(--text-secondary)', textAlign: 'left', opacity: 0.8 }}>
          Tüm yetkilere sahipsiniz.
        </div>
      </div>
    </aside>
  );
};

export default TeacherSidebar;
