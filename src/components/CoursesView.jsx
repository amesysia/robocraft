import React, { useState } from 'react';
import { BookOpen, CheckCircle, Lock, PlayCircle, Puzzle, Upload, ChevronDown, ChevronUp } from 'lucide-react';
import '../courses.css';

const CoursesView = ({ tasks, updateTaskProgress, setActiveTab, setActiveVideoWeek }) => {
  const [expandedWeek, setExpandedWeek] = useState('week1');
  const [isDetectiveModalOpen, setIsDetectiveModalOpen] = useState(false);
  const [tinkercadUrl, setTinkercadUrl] = useState('');
  const [validationError, setValidationError] = useState('');

  const week6Task = tasks.find(t => t.id === 'week6');
  const week6SavedLink = week6Task?.tinkercadLink || '';

  const totalTasks = tasks.filter(t => t.targetTab === 'courses').length;
  const completedTasks = tasks.filter(t => t.targetTab === 'courses' && t.done).length;
  const courseProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const toggleWeek = (weekId, isUnlocked) => {
    if (!isUnlocked) return;
    setExpandedWeek(prev => prev === weekId ? null : weekId);
  };

  const handleAction = (taskId, amount = 100) => {
    updateTaskProgress(taskId, amount);
  };

  const openDetectiveModal = () => {
    setTinkercadUrl(week6SavedLink);
    setValidationError('');
    setIsDetectiveModalOpen(true);
  };

  const handleDetectiveSubmit = (e) => {
    e.preventDefault();
    if (!tinkercadUrl.trim()) {
      setValidationError('Lütfen Tinkercad proje bağlantınızı girin.');
      return;
    }
    if (!tinkercadUrl.includes('tinkercad.com')) {
      setValidationError('Lütfen geçerli bir Tinkercad bağlantısı girin.');
      return;
    }
    
    updateTaskProgress('week6', 50, { tinkercadLink: tinkercadUrl });
    setIsDetectiveModalOpen(false);
  };

  return (
    <div className="courses-view">
      <div className="courses-header">
        <div className="ch-title-area">
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen size={28} className="text-cyan" /> Derslerim ve Görevlerim
          </h1>
          <p>Öğretmeninin senin için tanımladığı içerikleri tamamla ve bir sonraki haftanın kilidini aç!</p>
        </div>
        <div className="ch-progress-area">
          <div className="ch-progress-text">Genel İlerleme <span>%{courseProgress}</span></div>
          <div className="ch-progress-bar">
            <div className="ch-progress-fill" style={{ width: `${courseProgress}%` }} />
          </div>
        </div>
      </div>

      <div className="weeks-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        {tasks.filter(t => t.id.startsWith('week')).map((week, index) => {
          const isExpanded = expandedWeek === week.id;
          const isUnlocked = week.unlocked;

          return (
            <div 
              key={week.id} 
              className={`week-card ${!isUnlocked ? 'locked' : ''} ${week.done ? 'completed' : ''}`}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--border-radius-md)',
                border: `1px solid ${isUnlocked ? 'var(--border-color)' : 'rgba(255,255,255,0.02)'}`,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                opacity: isUnlocked ? 1 : 0.6
              }}
            >
              {/* HEADER */}
              <div 
                className="week-header"
                onClick={() => toggleWeek(week.id, isUnlocked)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  backgroundColor: isExpanded ? 'rgba(255,255,255,0.03)' : 'transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {week.done ? (
                    <CheckCircle className="text-cyan" size={24} />
                  ) : !isUnlocked ? (
                    <Lock size={24} color="#666" />
                  ) : (
                    <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--accent-cyan)' }} />
                  )}
                  <h3 style={{ margin: 0, fontSize: '1.2rem', color: isUnlocked ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                    {week.title}
                  </h3>
                </div>
                
                {isUnlocked && (
                  <div>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                )}
              </div>

              {/* CONTENT (ACCORDION) */}
              {isUnlocked && isExpanded && (
                <div className="week-content" style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                  
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Bu haftanın görevlerini tamamlayarak {week.xp} XP kazanabilir ve bir sonraki haftanın kilidini açabilirsin.
                  </p>

                  <div className="task-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    
                    {/* VIDEO TASK */}
                    <div className="task-box" style={{ padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <PlayCircle size={18} /> Konu Anlatımı
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Asenkron ders videosunu izle.</p>
                      <button 
                        className="btn-primary" 
                        style={{ width: '100%', justifyContent: 'center', padding: '0.6rem', fontSize: '0.85rem' }}
                        onClick={() => {
                          if (setActiveVideoWeek) setActiveVideoWeek(week.id);
                          if (setActiveTab) setActiveTab('video-player');
                        }}
                      >
                        {week.progress >= 50 ? 'Videoyu Tekrar İzle' : 'Videoyu İzle (+%50)'}
                      </button>
                    </div>

                    {/* INTERACTIVE TASK */}
                    {week.id === 'week6' ? (
                      <div className="task-box" style={{ padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <Puzzle size={18} /> Görev: Kod Dedektifi
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Çöken güvenlik sistemini onar!</p>
                        <button 
                          className="btn-primary" 
                          style={{ width: '100%', justifyContent: 'center', padding: '0.6rem', fontSize: '0.85rem', backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-primary)' }}
                          onClick={openDetectiveModal}
                          disabled={week.progress < 50}
                        >
                          {week.done ? 'Görev Tamamlandı' : (week.progress < 50 ? 'Önce Videoyu İzle' : 'Görevi Çöz')}
                        </button>
                      </div>
                    ) : (
                      <div className="task-box" style={{ padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <Puzzle size={18} /> Sürükle Bırak Testi
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Öğrendiklerini etkileşimli test ile pekiştir.</p>
                        <button 
                          className="btn-primary" 
                          style={{ width: '100%', justifyContent: 'center', padding: '0.6rem', fontSize: '0.85rem', backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-primary)' }}
                          onClick={() => handleAction(week.id, 50)}
                          disabled={week.done || week.progress < 50}
                        >
                          {week.done ? 'Tamamlandı' : (week.progress < 50 ? 'Önce Videoyu İzle' : 'Testi Çöz (+%50)')}
                        </button>
                      </div>
                    )}

                  </div>

                  <div className="week-progress" style={{ marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                      <span>Haftalık İlerleme</span>
                      <span>{week.progress}%</span>
                    </div>
                    <div className="week-progress-bar-bg" style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${week.progress}%`, backgroundColor: 'var(--accent-cyan)', transition: 'width 0.3s' }} />
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

      {isDetectiveModalOpen && (
        <div 
          className="detective-modal-overlay" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(7, 10, 18, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem',
            boxSizing: 'border-box'
          }}
          onClick={() => setIsDetectiveModalOpen(false)}
        >
          <style>{`
            @keyframes modalSlideIn {
              from {
                transform: translateY(-20px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}</style>
          <div 
            className="detective-modal-card" 
            style={{
              background: '#151d2a',
              width: '100%',
              maxWidth: '520px',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(59, 130, 246, 0.15)',
              overflow: 'hidden',
              position: 'relative',
              animation: 'modalSlideIn 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div 
              style={{
                background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)',
                padding: '1.75rem 2rem',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem'
              }}
            >
              {/* Detective Icon Badge */}
              <div 
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2)'
                }}
              >
                🕵️‍♂️
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: 0, color: '#fff', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Görev: Kod Dedektifi
                </h2>
                <p style={{ margin: '4px 0 0 0', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', fontWeight: 500 }}>
                  Çöken güvenlik sistemini onar!
                </p>
              </div>
              {/* Hafta Pill */}
              <div 
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  letterSpacing: '0.05em'
                }}
              >
                HAFTA 6
              </div>
              {/* Close button */}
              <button 
                onClick={() => setIsDetectiveModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: '2rem' }}>
              {/* Alert box */}
              <div 
                className="detective-alert-box"
                style={{
                  background: 'rgba(251, 146, 60, 0.05)',
                  borderLeft: '4px solid #f97316',
                  padding: '1.25rem',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                <div style={{ fontWeight: 800, color: '#f97316', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  🚨 ACİL DURUM!
                </div>
                Kötü niyetli bir hacker grubu laboratuvarımızın girişindeki alarmın kodlarını ve kablolarını karıştırdı. Simülasyonu başlattığımızda LED patlıyor!
                <br /><br />
                Tinkercad'e git, donanım hatasını <strong>(eksik direnç)</strong> bul ve kodun içindeki matematiksel hatayı <strong>(= yerine == olmalı)</strong> düzelt. Kurtardığın devrenin linkini aşağıya yapıştır.
              </div>

              {/* Rewards Box */}
              <div 
                className="detective-rewards-box"
                style={{
                  border: '1.5px dashed rgba(16, 185, 129, 0.4)',
                  background: 'rgba(16, 185, 129, 0.03)',
                  borderRadius: '12px',
                  padding: '1.05rem 1.25rem',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <span className="detective-rewards-label" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                  Görevi Tamamlarsan:
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span 
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34d399',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}
                  >
                    ⚡ +150 XP
                  </span>
                  <span className="detective-rewards-sublabel" style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: 500 }}>
                    Deneyim Puanı
                  </span>
                </div>
              </div>

              {/* Input */}
              <form onSubmit={handleDetectiveSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    className="detective-input-label"
                    style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '0.6rem'
                    }}
                  >
                    Tinkercad Proje Bağlantın
                  </label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <span 
                      className="detective-link-icon"
                      style={{
                        position: 'absolute',
                        left: '12px',
                        color: 'rgba(255, 255, 255, 0.4)',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      🔗
                    </span>
                    <input 
                      type="text" 
                      placeholder="https://www.tinkercad.com/things/..."
                      value={tinkercadUrl}
                      onChange={(e) => {
                        setTinkercadUrl(e.target.value);
                        if (validationError) setValidationError('');
                      }}
                      disabled={week6Task?.done}
                      className="detective-input"
                      style={{
                        width: '100%',
                        background: '#0d1520',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        padding: '12px 12px 12px 38px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                  </div>
                  {validationError && (
                    <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '6px', fontWeight: 500 }}>
                      ⚠️ {validationError}
                    </div>
                  )}
                  <div 
                    className="detective-footnote"
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.4)',
                      marginTop: '8px',
                      lineHeight: '1.4'
                    }}
                  >
                    * Projenin gizlilik ayarını "Herkese Açık" yapmayı unutma!
                  </div>
                </div>

                {/* Action Button */}
                {week6Task?.done ? (
                  <button 
                    type="button"
                    onClick={() => setIsDetectiveModalOpen(false)}
                    style={{
                      width: '100%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34d399',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      padding: '14px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    ✓ Görev Tamamlandı (Kapat)
                  </button>
                ) : (
                  <button 
                    type="submit"
                    style={{
                      width: '100%',
                      background: '#3b82f6',
                      color: '#fff',
                      border: 'none',
                      padding: '14px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
                  >
                    🚀 Görevi Tamamla ve Ödülleri Al
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesView;
