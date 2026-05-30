import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, ScreenShare, MessageSquare, PlayCircle, Settings, Users } from 'lucide-react';
import '../live.css';

const TeacherLiveClassView = () => {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, user: 'Ahmet Y.', text: 'Hocam sesiniz net geliyor.', time: '10:02' },
    { id: 2, user: 'Ayşe K.', text: 'Bugün hangi konuyu işleyeceğiz?', time: '10:03' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages([...messages, { id: Date.now(), user: 'Öğretmen (Sen)', text: chatInput, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setChatInput('');
  };

  return (
    <div className="teacher-live-container">
      <div className="teacher-live-main">
        {/* VİDEO ALANI */}
        <div className="video-area">
          <div className="video-header">
            <div>
              <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Video className="text-cyan" /> Canlı Ders Yönetimi
              </h2>
              <span className={`live-badge ${isLive ? 'active' : ''}`}>
                {isLive ? '🔴 CANLI YAYINDA' : '⚪ YAYIN DIŞI'}
              </span>
            </div>
            <div className="viewer-count">
              <Users size={16} />
              <span>{isLive ? '24 Öğrenci' : '0 Öğrenci'}</span>
            </div>
          </div>

          <div className="video-player-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#000', border: isLive ? '2px solid var(--accent-red)' : '2px solid var(--border-color)' }}>
            {!isLive ? (
              <div style={{ textAlign: 'center' }}>
                <Video size={64} style={{ color: 'var(--text-secondary)', marginBottom: '1rem', opacity: 0.5 }} />
                <h3 style={{ color: 'var(--text-secondary)' }}>Kamera ve Mikrofon Hazır</h3>
                <p style={{ color: 'var(--text-secondary)', opacity: 0.7, marginTop: '0.5rem' }}>Yayını başlatmak için aşağıdaki butona tıklayın.</p>
              </div>
            ) : (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Teacher Feed" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: videoOn ? 1 : 0.2 }} />
                {!videoOn && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--text-secondary)' }}>Kamera Kapalı</div>}
              </div>
            )}
          </div>

          <div className="video-controls">
            <button className={`control-btn ${!micOn ? 'danger' : ''}`} onClick={() => setMicOn(!micOn)}>
              {micOn ? <Mic /> : <MicOff />}
            </button>
            <button className={`control-btn ${!videoOn ? 'danger' : ''}`} onClick={() => setVideoOn(!videoOn)}>
              {videoOn ? <Video /> : <VideoOff />}
            </button>
            <button className="control-btn" title="Ekran Paylaş">
              <ScreenShare />
            </button>
            <button className="control-btn" title="Ayarlar">
              <Settings />
            </button>
            
            <button 
              className={`control-btn ${isLive ? 'danger' : 'success'}`} 
              style={{ marginLeft: 'auto', padding: '0 2rem', width: 'auto', borderRadius: '24px' }}
              onClick={() => setIsLive(!isLive)}
            >
              {isLive ? 'Yayını Bitir' : <><PlayCircle size={20} style={{ marginRight: '0.5rem' }} /> Yayını Başlat</>}
            </button>
          </div>
        </div>
      </div>

      {/* SOHBET ALANI */}
      <div className="chat-sidebar">
        <div className="chat-header">
          <h3><MessageSquare size={18} /> Sınıf Sohbeti</h3>
        </div>
        
        <div className="chat-messages">
          {messages.map(msg => (
            <div key={msg.id} className="chat-msg">
              <div className="chat-msg-header">
                <span className="chat-msg-user" style={{ color: msg.user.includes('Öğretmen') ? 'var(--accent-red)' : 'var(--accent-cyan)' }}>{msg.user}</span>
                <span className="chat-msg-time">{msg.time}</span>
              </div>
              <div className="chat-msg-text">{msg.text}</div>
            </div>
          ))}
        </div>

        <form className="chat-input-area" onSubmit={handleSendMessage}>
          <input 
            type="text" 
            className="cyber-input" 
            placeholder="Sınıfa mesaj gönder..." 
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <button type="submit" className="btn-primary" style={{ padding: '0.8rem' }}>Gönder</button>
        </form>
      </div>

      {/* TINKERCAD WORKSPACE ALANI */}
      <div className="live-workspace" style={{ flex: 2, display: 'flex', flexDirection: 'column', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', overflow: 'hidden' }}>
        <div className="workspace-header" style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)' }}>
          <div className="workspace-tabs" style={{ display: 'flex', gap: '1rem' }}>
            <div className="workspace-tab active" style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>
              ⚙️ Tinkercad Simülatörü
            </div>
            <div className="workspace-tab" style={{ color: 'var(--text-secondary)' }}>
              🔌 Şema Görünümü
            </div>
          </div>
          <button className="btn-success" style={{ padding: '0.5rem 1rem', background: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            ▶ Öğrencilere Göster
          </button>
        </div>

        <div className="workspace-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="simulator-pane" style={{ flex: 1, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-color)' }}>
            <div className="simulator-placeholder" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
              <div className="drag-drop-badge" style={{ marginBottom: '1rem', display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '20px' }}>✥ Sürükle ve Bırak</div>
              <div>Breadboard Simülasyon Görseli</div>
            </div>
          </div>
          <div className="code-pane" style={{ height: '30%', background: '#0f0f1a', padding: '1rem', fontFamily: 'monospace', overflowY: 'auto', color: '#a5b4fc' }}>
            <div className="code-title" style={{ color: '#fff', marginBottom: '1rem', fontSize: '0.9rem' }}>SKETCH.INO</div>
            <div className="code-line"><span style={{ color: '#ec4899' }}>void</span> <span style={{ color: '#3b82f6' }}>setup</span>() {'{'}</div>
            <div className="code-line">  <span style={{ color: '#6b7280' }}>// 4. Pini çıkış olarak ayarla</span></div>
            <div className="code-line">  <span style={{ color: '#3b82f6' }}>pinMode</span>(<span style={{ color: '#f59e0b' }}>4</span>, <span style={{ color: '#10b981' }}>OUTPUT</span>);</div>
            <div className="code-line">{'}'}</div>
            <div className="code-line"><br /></div>
            <div className="code-line"><span style={{ color: '#ec4899' }}>void</span> <span style={{ color: '#3b82f6' }}>loop</span>() {'{'}</div>
            <div className="code-line">  <span style={{ color: '#6b7280' }}>// LED'i yak ve 1 sn bekle</span></div>
            <div className="code-line">  <span style={{ color: '#3b82f6' }}>digitalWrite</span>(<span style={{ color: '#f59e0b' }}>4</span>, <span style={{ color: '#10b981' }}>HIGH</span>);</div>
            <div className="code-line">  <span style={{ color: '#3b82f6' }}>delay</span>(<span style={{ color: '#f59e0b' }}>1000</span>);</div>
            <div className="code-line">{'}'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLiveClassView;
