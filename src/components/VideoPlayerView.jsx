import React, { useState } from 'react';
import { ArrowLeft, PlayCircle, Lock, CheckCircle2, Play, Check } from 'lucide-react';
import { WEEK_VIDEOS } from '../data/videoData';
import { DEFAULT_QUIZ } from '../data/quizData';

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
    setShowQuiz(false);
    setQuizCompleted(false);
    setQuizPassed(false);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  // Sınav Durumları (State)
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const startVideo = () => {
    if (currentWeekInfo.progress < 50) {
      updateTaskProgress(currentWeekInfo.id, 50);
    }
  };

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption === DEFAULT_QUIZ[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    
    if (currentQuestionIndex + 1 < DEFAULT_QUIZ.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      // Sınav Bitti
      const finalScore = selectedOption === DEFAULT_QUIZ[currentQuestionIndex].answer ? score + 1 : score;
      setScore(finalScore);
      setQuizCompleted(true);
      
      if (finalScore >= 8) {
        setQuizPassed(true);
        if (currentWeekInfo.progress < 100) {
          updateTaskProgress(currentWeekInfo.id, 50); // %50 videodan gelmişti, kalan %50 testten
        }
      } else {
        setQuizPassed(false);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setQuizPassed(false);
    setSelectedOption(null);
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
          {/* Test/Durum Butonu */}
          {currentWeekInfo.progress >= 100 ? (
            <div style={{
              fontSize: '0.85rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '20px',
              color: '#10b981',
              fontWeight: '700',
              cursor: 'default',
            }}>
              ✓ Görev Tamamlandı
            </div>
          ) : currentWeekInfo.progress >= 50 ? (
            <button 
              onClick={() => setShowQuiz(true)}
              style={{
                fontSize: '0.85rem',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--accent-yellow)',
                border: '1px solid var(--accent-yellow)',
                borderRadius: '20px',
                color: '#000',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(250, 204, 21, 0.3)'
              }}
            >
              📝 Değerlendirme Testine Başla
            </button>
          ) : (
            <div style={{
              fontSize: '0.85rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              color: 'var(--text-secondary)',
            }}>
              Önce Videoyu İzle
            </div>
          )}
        </div>

        {/* QUIZ VEYA VIDEO ALANI */}
        {showQuiz && currentWeekInfo.progress < 100 && !quizPassed ? (
          <div style={{
            width: '100%',
            maxWidth: '1000px',
            backgroundColor: 'var(--bg-card)',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            border: '1px solid var(--border-color)',
            position: 'relative'
          }}>
            {!quizCompleted ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                  <span>Soru {currentQuestionIndex + 1} / {DEFAULT_QUIZ.length}</span>
                  <span>Geçme Notu: 8/10</span>
                </div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
                  {DEFAULT_QUIZ[currentQuestionIndex].question}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {DEFAULT_QUIZ[currentQuestionIndex].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      style={{
                        padding: '1rem 1.5rem',
                        backgroundColor: selectedOption === idx ? 'rgba(0, 240, 255, 0.1)' : 'var(--bg-dark)',
                        border: `1px solid ${selectedOption === idx ? 'var(--accent-cyan)' : 'var(--border-color)'}`,
                        borderRadius: '12px',
                        color: selectedOption === idx ? 'var(--accent-cyan)' : 'var(--text-primary)',
                        textAlign: 'left',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedOption === null}
                  className="btn-cyber"
                  style={{ marginTop: '2rem', width: '100%', opacity: selectedOption === null ? 0.5 : 1 }}
                >
                  {currentQuestionIndex + 1 === DEFAULT_QUIZ.length ? 'Testi Bitir' : 'Sonraki Soru'}
                </button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: quizPassed ? 'var(--accent-cyan)' : 'var(--accent-red)' }}>
                  {quizPassed ? 'Tebrikler, Geçtiniz! 🎉' : 'Başarısız Oldunuz 😢'}
                </h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                  Puanınız: <strong>{score} / {DEFAULT_QUIZ.length}</strong>
                </p>
                {!quizPassed && (
                  <button onClick={resetQuiz} className="btn-cyber" style={{ background: 'var(--accent-red)' }}>
                    Tekrar Dene
                  </button>
                )}
              </div>
            )}
            <button onClick={() => setShowQuiz(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>Kapat</button>
          </div>
        ) : (
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
            {/* Video Oynatma Katmanı (İzleme Algılayıcı) */}
            {currentWeekInfo.progress < 50 && (
              <div 
                onClick={startVideo}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  zIndex: 10,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{ 
                  background: 'var(--accent-cyan)', 
                  borderRadius: '50%', 
                  padding: '1.5rem', 
                  marginBottom: '1rem',
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)'
                }}>
                  <Play size={40} color="#000" style={{ marginLeft: '5px' }} />
                </div>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Videoyu Başlat</span>
              </div>
            )}
            
            <div 
              style={{ width: '100%', height: '100%' }}
              dangerouslySetInnerHTML={{ __html: activeVideo.embedCode }}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default VideoPlayerView;
