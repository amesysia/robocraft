import React, { useState, useEffect } from 'react';
import { getAllStudents } from '../firebase';
import { Users, Search, Star, Sparkles, X, AlertTriangle } from 'lucide-react';
import AvatarDisplay from './AvatarDisplay';
import { AVATARS } from '../data/avatarData';
import '../golems.css'; // For golem modal styles if needed

const TeacherStudentsView = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const data = await getAllStudents();
      setStudents(data);
      setLoading(false);
    };
    fetchStudents();
  }, []);

  const filteredStudents = students.filter(s => 
    (s.displayName || 'İsimsiz Öğrenci').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '2.5rem', color: 'var(--text-primary)' }}>
            <Users size={36} className="text-cyan" /> 
            Öğrencilerim
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Platforma kayıtlı tüm öğrencilerin durumunu ve ilerlemesini takip et.</p>
        </div>
        <div style={{ position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Öğrenci Ara..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="cyber-input"
            style={{ paddingLeft: '3rem', width: '300px' }}
          />
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-secondary)' }}>
          <div className="spinner-small" style={{ margin: '0 auto 1rem', width: '40px', height: '40px' }}></div>
          <p>Öğrenciler yükleniyor...</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {filteredStudents.length > 0 ? filteredStudents.map(student => {
            const avatarDef = AVATARS.find(a => a.id === student.avatarId) || AVATARS[0];
            
            // Mock Attendance Data Calculation (Stable based on student ID)
            const totalClasses = 12;
            const hash = (student.id || 'abc').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const missedClasses = hash % 5; // 0 to 4 missed classes
            const attendedClasses = totalClasses - missedClasses;
            const attendancePercentage = (attendedClasses / totalClasses) * 100;
            const needsWarning = missedClasses >= 3;

            return (
              <div 
                key={student.id} 
                style={{ 
                  background: 'var(--bg-card)', 
                  border: `1px solid ${needsWarning ? 'var(--accent-red)' : 'var(--border-color)'}`, 
                  borderRadius: '16px', 
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
                className="hover-glow"
                onClick={() => setSelectedStudent(student)}
              >
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  marginBottom: '1.5rem', 
                  color: '#ffffff',
                  fontWeight: '900',
                  textShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4)',
                  letterSpacing: '1px',
                  position: 'relative',
                  zIndex: 10,
                  textAlign: 'center',
                  width: '100%'
                }}>
                  {student.displayName || 'İsimsiz Öğrenci'}
                </h3>
                
                <div style={{ transform: 'scale(1.2)', transformOrigin: 'top center', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                  <AvatarDisplay 
                    avatar={avatarDef}
                    customSkin={student.customSkin}
                    equippedItems={student.equippedItems || {}}
                    hideInventory={true}
                  />
                </div>
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Star size={16} className="text-yellow" /> Seviye {student.level || 0}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Sparkles size={16} className="text-cyan" /> {student.xp || 0} XP</span>
                </div>

                {/* Katılım Barı */}
                <div style={{ width: '100%', marginTop: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>
                    <span>Canlı Ders Katılımı</span>
                    <span style={{ color: needsWarning ? 'var(--accent-red)' : 'var(--accent-cyan)' }}>{attendedClasses}/{totalClasses}</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ 
                      width: `${attendancePercentage}%`, 
                      height: '100%', 
                      background: needsWarning ? 'var(--accent-red)' : 'var(--accent-cyan)',
                      borderRadius: '4px',
                      transition: 'width 1s ease-in-out'
                    }}></div>
                  </div>
                  
                  {needsWarning && (
                    <div style={{ marginTop: '0.8rem', fontSize: '0.75rem', color: 'var(--accent-red)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', padding: '0.6rem', borderRadius: '6px' }}>
                      <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: '0.1rem' }} /> 
                      <span><strong>Uyarı:</strong> {missedClasses} canlı derse katılmadı. Lütfen veli ile iletişime geçin.</span>
                    </div>
                  )}
                </div>
              </div>
            );
          }) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
              Eşleşen öğrenci bulunamadı.
            </div>
          )}
        </div>
      )}

      {/* STUDENT DETAIL MODAL */}
      {selectedStudent && (
        <div className="golem-modal-overlay" onClick={() => setSelectedStudent(null)}>
          <div className="golem-modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '800px', width: '90%' }}>
            <button className="golem-modal-close" onClick={() => setSelectedStudent(null)}><X size={24} /></button>
            <div className="gm-header" style={{ marginBottom: '2rem' }}>
              <h2>{selectedStudent.displayName || 'Öğrenci'} Detayları</h2>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', minWidth: '300px', background: 'var(--bg-dark)', padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AvatarDisplay 
                  avatar={AVATARS.find(a => a.id === selectedStudent.avatarId) || AVATARS[0]}
                  customSkin={selectedStudent.customSkin}
                  equippedItems={selectedStudent.equippedItems || {}}
                  hideInventory={false} // Envanteri göster
                />
              </div>

              <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: '16px' }}>
                  <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Genel İlerleme</h3>
                  <p><strong>Seviye:</strong> {selectedStudent.level || 0}</p>
                  <p><strong>XP:</strong> {selectedStudent.xp || 0}</p>
                  <p><strong>Enerji (Kazma Hakkı):</strong> {selectedStudent.energy || 0}</p>
                  <p><strong>Açılan Golemler:</strong> {(selectedStudent.unlockedGolems || []).length} / 4</p>
                </div>

                <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: '16px' }}>
                  <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Madenler</h3>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span className="res-badge">⬛ Kömür: {selectedStudent.resources?.coal || 0}</span>
                    <span className="res-badge">⚪ Demir: {selectedStudent.resources?.iron || 0}</span>
                    <span className="res-badge">🟠 Bakır: {selectedStudent.resources?.copper || 0}</span>
                    <span className="res-badge">🟡 Altın: {selectedStudent.resources?.gold || 0}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherStudentsView;
