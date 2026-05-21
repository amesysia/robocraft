import React, { useState } from 'react';
import { BookOpen, CheckCircle, Lock, PlayCircle, Puzzle, Upload, ChevronDown, ChevronUp } from 'lucide-react';
import '../courses.css';

const CoursesView = ({ tasks, updateTaskProgress, setActiveTab, setActiveVideoWeek }) => {
  const [expandedWeek, setExpandedWeek] = useState('week1');

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

                  </div>

                  <div className="week-progress" style={{ marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                      <span>Haftalık İlerleme</span>
                      <span>{week.progress}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${week.progress}%`, backgroundColor: 'var(--accent-cyan)', transition: 'width 0.3s' }} />
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesView;
