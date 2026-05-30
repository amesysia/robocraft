import React from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';

const TeacherTasksView = ({ playerData }) => {
  // Use the tasks from playerData as the template
  const tasks = playerData?.tasks || [];

  return (
    <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '2.5rem', color: 'var(--text-primary)' }}>
          <BookOpen size={36} className="text-cyan" /> 
          Görev Yönetimi
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Öğrencilerin eğitim müfredatını ve haftalık görevlerini buradan takip et.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
        {tasks.map(task => (
          <div 
            key={task.id}
            style={{ 
              background: 'var(--bg-card)', 
              border: `1px solid ${task.unlocked ? 'var(--accent-cyan)' : 'var(--border-color)'}`, 
              borderRadius: '12px', 
              padding: '1.5rem',
              position: 'relative',
              opacity: task.unlocked ? 1 : 0.6
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: task.unlocked ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{task.title}</h3>
              {task.unlocked ? (
                <CheckCircle size={20} className="text-cyan" />
              ) : (
                <Clock size={20} className="text-secondary" />
              )}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <span>Ödül: {task.xp} XP</span>
              <span>Hedef: {task.requiredProgress} Adım</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                className="btn-cyber" 
                style={{ flex: 1, padding: '0.5rem', fontSize: '0.9rem' }}
                disabled={!task.unlocked}
              >
                {task.unlocked ? 'Görevi Düzenle' : 'Kilitli'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherTasksView;
