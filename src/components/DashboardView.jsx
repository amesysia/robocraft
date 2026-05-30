import React from 'react';
import AvatarDisplay from './AvatarDisplay';
import { AVATARS } from '../data/avatarData';

const DashboardView = ({ isDarkMode, toggleTheme, playerData, setActiveTab, currentUserObj }) => {
  const currentAvatar = AVATARS.find(a => a.id === playerData?.avatarId) || AVATARS[0];
  const displayName = playerData?.displayName?.trim() || currentUserObj?.displayName?.trim() || 'Kahraman';
  const firstName = displayName.split(' ')[0];

  // Aktif kurs: kilit açık, henüz tamamlanmamış ilk hafta
  const courseTasks = playerData?.tasks?.filter(t => t.targetTab === 'courses') || [];
  const activeCourse = courseTasks.find(t => t.unlocked && !t.done) || courseTasks[courseTasks.length - 1];
  const courseStage = activeCourse
    ? activeCourse.progress >= 50
      ? '📝 Teste devam et'
      : '▶ Video izlemeye devam et'
    : null;
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
          <div 
            className="user-avatar-placeholder" 
            style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', border: '2px solid var(--accent-cyan)', background: 'var(--bg-sidebar)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setActiveTab('showcase')}
            title="Vitrinine Git!"
          >
            <AvatarDisplay
              avatar={currentAvatar}
              customSkin={playerData?.customSkin}
              equippedItems={playerData?.equippedItems}
              profileMode={true}
            />
          </div>
        </div>
      </header>

      <div className="dashboard-grid">
        <div className="left-column">
          <div className="card icebreaker-banner-card">
            <div className="icebreaker-banner-info">
              <span className="badge badge-icebreaker">ÖZEL ETKİNLİK</span>
              <h2>Giriş: Buz Kırma Etkinliği</h2>
              <p>Tasarladığın robotu sınıfla paylaş, diğer öğrencilerin robot tasarımlarını keşfet! 🤖✨</p>
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
            <div className="course-info" style={{ width: '100%' }}>
              <span className="badge">Aktif Kursun</span>
              <h2 style={{ marginTop: '0.5rem', marginBottom: '0.4rem' }}>
                {activeCourse ? activeCourse.title : 'Henüz bir kurs yok'}
              </h2>
              {courseStage && (
                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {courseStage}
                </p>
              )}
              <button className="btn-primary" onClick={() => setActiveTab('courses')}>
                <span>▶</span> Derse Git
              </button>
            </div>
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
