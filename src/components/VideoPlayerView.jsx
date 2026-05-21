import React from 'react';
import { ArrowLeft, PlayCircle, Lock, CheckCircle2 } from 'lucide-react';
import { WEEK_VIDEOS } from '../data/videoData';

const VideoPlayerView = ({ 
  tasks, 
  activeVideoWeek, 
  setActiveVideoWeek, 
  setActiveTab,
  updateTaskProgress 
}) => {
  // Haftaları ders sıralamasına göre listele
  const weekTasks = tasks.filter(t => t.id.startsWith('week'));
  
  // Seçili haftanın detayları
  const currentWeekInfo = weekTasks.find(t => t.id === activeVideoWeek) || weekTasks[0];
  const activeVideo = WEEK_VIDEOS[currentWeekInfo.id] || {
    title: currentWeekInfo.title,
    embedCode: '<div style="color:var(--text-secondary); text-align:center; padding: 2rem;">Bu hafta için video bulunamadı.</div>'
  };

  const handleWeekSelect = (weekId, isUnlocked) => {
    if (!isUnlocked) return;
    setActiveVideoWeek(weekId);
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: 'var(--bg-app)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-primary, "Inter", sans-serif)'
    }}>
      {/* 1. SOL PANEL: Video Sekmeleri */}
      <aside style={{
        width: '320px',
        borderRight: '1px solid var(--border-color)',
        backgroundColor: 'rgba(10, 15, 26, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0
      }}>
        {/* Panel Başlığı ve Geri Dön Butonu */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <button 
            onClick={() => setActiveTab('courses')}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all 0.2s ease'
            }}
            title="Derslerime Dön"
            className="back-to-courses-btn"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h2 style={{ fontSize: '1.1rem', margin: 0, fontWeight: '700', letterSpacing: '0.5px' }}>Ders Videoları</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Haftalık Eğitimler</span>
          </div>
        </div>

        {/* Hafta Sekmeleri Listesi */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem 0.75rem'
        }} className="custom-scrollbar">
          {weekTasks.map((week) => {
            const isSelected = week.id === activeVideoWeek;
            const isUnlocked = week.unlocked;
            const isDone = week.progress >= 50; // Video tamamlandı mı?

            return (
              <div
                key={week.id}
                onClick={() => handleWeekSelect(week.id, isUnlocked)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: '10px',
                  marginBottom: '0.5rem',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  backgroundColor: isSelected 
                    ? 'rgba(0, 240, 255, 0.1)' 
                    : 'transparent',
                  border: isSelected 
                    ? '1px solid rgba(0, 240, 255, 0.25)' 
                    : '1px solid transparent',
                  opacity: isUnlocked ? 1 : 0.45,
                  transition: 'all 0.25s ease'
                }}
                className={`video-week-tab ${isSelected ? 'active' : ''} ${isUnlocked ? 'unlocked' : 'locked'}`}
              >
                {/* Durum İkonu */}
                <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  {!isUnlocked ? (
                    <Lock size={16} color="#666" />
                  ) : isDone ? (
                    <CheckCircle2 size={18} color="var(--accent-cyan)" />
                  ) : (
                    <PlayCircle size={18} color="#aaa" />
                  )}
                </div>

                {/* Hafta Bilgisi */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: isSelected ? '700' : '500',
                    color: isSelected ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {week.title}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    marginTop: '0.2rem'
                  }}>
                    {isUnlocked ? (isDone ? 'İzlendi' : 'İzlenmedi') : 'Kilitli'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* 2. ANA PANEL: Video Oynatıcı Alanı */}
      <main style={{
        flex: 1,
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        position: 'relative'
      }}>
        {/* Üst Kısım: Seçili Video Başlığı */}
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            margin: 0,
            color: 'var(--text-primary)',
            background: 'linear-gradient(90deg, #fff, var(--text-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {activeVideo.title}
          </h1>
          <button 
            onClick={() => {
              if (currentWeekInfo.progress < 50) {
                updateTaskProgress(currentWeekInfo.id, 50);
              }
            }}
            style={{
              fontSize: '0.85rem',
              padding: '0.5rem 1rem',
              backgroundColor: currentWeekInfo.progress >= 50 ? 'rgba(16, 185, 129, 0.15)' : 'var(--accent-cyan)',
              border: currentWeekInfo.progress >= 50 ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--accent-cyan)',
              borderRadius: '20px',
              color: currentWeekInfo.progress >= 50 ? '#10b981' : '#000',
              fontWeight: '700',
              cursor: currentWeekInfo.progress >= 50 ? 'default' : 'pointer',
              borderStyle: 'solid',
              outline: 'none',
              transition: 'all 0.2s ease',
              boxShadow: currentWeekInfo.progress >= 50 ? 'none' : '0 4px 12px rgba(0, 240, 255, 0.2)'
            }}
            disabled={currentWeekInfo.progress >= 50}
          >
            {currentWeekInfo.progress >= 50 ? '✓ Görev Tamamlandı' : '⚡ Görevi Tamamla'}
          </button>
        </div>

        {/* Video Konteyneri */}
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          aspectRatio: '16/9',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 240, 255, 0.08), 0 0 0 1px rgba(0, 240, 255, 0.15)',
          backgroundColor: '#000',
          position: 'relative'
        }}>
          <div 
            style={{ width: '100%', height: '100%' }}
            dangerouslySetInnerHTML={{ __html: activeVideo.embedCode }}
          />
        </div>
      </main>
    </div>
  );
};

export default VideoPlayerView;
