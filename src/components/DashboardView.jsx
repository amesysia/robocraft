import React from 'react';
import AvatarDisplay from './AvatarDisplay';
import { AVATARS } from '../data/avatarData';

const DashboardView = ({ isDarkMode, toggleTheme, playerData, setActiveTab }) => {
  const currentAvatar = AVATARS.find(a => a.id === playerData?.avatarId) || AVATARS[0];
  const firstName = playerData?.displayName
    ? playerData.displayName.split(' ')[0]
    : 'Kahraman';
  return (
    <>
      <header className="top-header">
        <div className="greeting-area">
          <h1>Hoş Geldin, {firstName}!</h1>
          <p>Öğrenmeye ve üretmeye hazır mısın?</p>
        </div>
        <div className="header-actions">
          <div className="icon-btn theme-toggle" onClick={toggleTheme} title="Tema Değiştir">
            {isDarkMode ? '☀️' : '🌙'}
          </div>
          <div className="search-bar">
            <span>🔍</span>
            <input type="text" placeholder="Kurs veya konu ara..." />
          </div>
          <div className="icon-btn">
            <span>🔔</span>
            <div className="notification-dot"></div>
          </div>
          <div 
            className="user-avatar-placeholder" 
            style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', border: '2px solid var(--accent-cyan)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setActiveTab('showcase')}
            title="Vitrinine Git!"
          >
            <div style={{ transform: 'scale(0.35)', transformOrigin: 'center center' }}>
              <AvatarDisplay
                avatar={currentAvatar}
                customSkin={playerData?.customSkin}
                equippedItems={playerData?.equippedItems}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="dashboard-grid">
        <div className="left-column">
          <div className="card icebreaker-banner-card">
            <div className="icebreaker-banner-info">
              <span className="badge badge-icebreaker">ÖZEL ETKİNLİK</span>
              <h2>Giriş: Buz Kırma Etkinliği</h2>
              <p>Toplulukla tanışmak için kendi robotunun veya devrenin görselini yükle, diğer öğrencilerin paylaşımlarını keşfet! 📸🤖</p>
              <button className="btn-primary" onClick={() => setActiveTab('icebreaker')}>
                <span>🚀</span> Etkinliğe Katıl
              </button>
            </div>
            <div className="icebreaker-preview-area">
              <div className="neon-grid-pattern"></div>
              <span>👾</span>
            </div>
          </div>

          <div className="card active-course-card">
            <div className="course-info">
              <span className="badge">Aktif Kursun</span>
              <h2>Arduino: LED Yakıp Söndürme</h2>
              <p>🕑 Son çalışma: 2 saat önce • Adım 3'te kaldın.</p>
              <button className="btn-primary">
                <span>▶</span> Kaldığın Yerden Devam Et
              </button>
            </div>
            <div className="image-placeholder">Breadboard Görsel Alanı</div>
          </div>
          <div className="stats-row">
            <div className="card stat-card">
              <div className="stat-icon icon-purple">🔥</div>
              <div className="stat-text">
                <h3>7 Gün</h3>
                <p>Öğrenme Serisi</p>
              </div>
            </div>
            <div className="card stat-card" onClick={() => setActiveTab('profile')} style={{ cursor: 'pointer' }}>
              <div className="stat-icon icon-blue">🤖</div>
              <div className="stat-text">
                <h3>{playerData?.unlockedGolems?.length || 0} Golem</h3>
                <p>Keşfedilen Golem</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="card live-event-card">
            <div className="event-header">
              <h3>Sıradaki Etkinlik</h3>
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                CANLI
              </div>
            </div>
            <div className="event-image-placeholder">
              Eğitmen Görsel Alanı
              <div className="time-tag">15:00'da Başlıyor</div>
            </div>
            <div className="event-details">
              <h4>Çoklu LED ve Döngüler</h4>
              <p>👨‍🏫 Eğitmen: Elifnur Bağcı</p>
              <button className="btn-danger">Derse Katıl</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardView;
