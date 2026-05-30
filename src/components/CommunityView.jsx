import React, { useState, useEffect, useRef } from 'react';
import { db, isFirebaseConfigured } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, limit } from 'firebase/firestore';

const CommunityView = ({ isDarkMode, toggleTheme, playerData, currentUser, currentUserObj }) => {
  const leaderboardData = [
    { rank: 1, name: "Ali Kaya", xp: 5200 },
    { rank: 2, name: "Zeynep Aslan", xp: 4850 },
    { rank: 3, name: "Ahmet Yılmaz", xp: 4600 },
    { rank: 4, name: "Elifnur Bağcı", xp: 4100 },
    { rank: 5, name: "Caner Ekinci", xp: 3950 },
    { rank: 6, name: "Ayşe Çelik", xp: 3800 },
    { rank: 7, name: "Burak Demir", xp: 3720 },
    { rank: 8, name: "Deniz Yıldız", xp: 3650 },
    { rank: 9, name: "Emre Şahin", xp: 3500 },
    { rank: 10, name: "Fatma Öztürk", xp: 3400 },
    { rank: 11, name: "Gökhan Aydın", xp: 3250 },
    { rank: 12, name: "Hande Polat", xp: 3100 },
    { rank: 13, name: "İbrahim Koç", xp: 2950 },
    { rank: 14, name: "Kemal Aksoy", xp: 2800 },
    { rank: 15, name: "Leyla Kılıç", xp: 2600 },
  ];

  const activitiesData = [
    { id: 1, user: "Ahmet Yılmaz", text: "Arduino'ya Giriş dersini tamamladı.", time: "10 dk önce", icon: "📚" },
    { id: 2, user: "Ayşe Çelik", text: "LDR ile Karanlıkta Yanan Lamba testinden tam puan aldı!", time: "45 dk önce", icon: "⭐" },
    { id: 3, user: "Caner Ekinci", text: "Robot tasarımını paylaştı.", time: "2 saat önce", icon: "🤖" },
    { id: 4, user: "Zeynep Aslan", text: "Değişkenler modülünü %100 tamamladı.", time: "3 saat önce", icon: "🏆" },
  ];

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const chatBottomRef = useRef(null);

  // displayName: Firestore → Firebase Auth → 'Anonim'
  const displayName =
    playerData?.displayName?.trim() ||
    currentUserObj?.displayName?.trim() ||
    'Anonim';

  // Firestore'dan mesajları gerçek zamanlı çek
  useEffect(() => {
    if (!isFirebaseConfigured || !db) {
      // Offline fallback
      setMessages([
        { id: 'f1', username: 'Kemal Aksoy', text: 'Arkadaşlar merhaba, döngüler ödevini bitiren var mı?', createdAt: new Date(Date.now() - 300000).toISOString() },
        { id: 'f2', username: 'Ayşe Çelik', text: 'Ben bitirdim Kemal, for döngüsünü kullanırsan çok daha kısa sürüyor.', createdAt: new Date(Date.now() - 240000).toISOString() },
        { id: 'f3', username: 'Ali Kaya', text: 'Aynen, while yerine for çok daha pratik oldu bu projede.', createdAt: new Date(Date.now() - 180000).toISOString() },
      ]);
      return;
    }

    const q = query(
      collection(db, 'community_chat'),
      orderBy('createdAt', 'asc'),
      limit(100)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => {
        const data = doc.data();
        let dateStr = new Date().toISOString();
        if (data.createdAt) {
          if (typeof data.createdAt.toDate === 'function') {
            dateStr = data.createdAt.toDate().toISOString();
          } else if (data.createdAt.seconds) {
            dateStr = new Date(data.createdAt.seconds * 1000).toISOString();
          }
        }
        return { id: doc.id, ...data, createdAt: dateStr };
      });
      setMessages(msgs);
    }, (err) => {
      console.warn('Chat sync error:', err);
    });

    return () => unsubscribe();
  }, []);

  // Yeni mesaj gelince en alta kaydır
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    const text = inputText.trim();
    if (!text || isSending) return;

    setIsSending(true);
    setInputText('');

    const newMsg = {
      username: displayName,
      userId: currentUser || 'misafir',
      text,
      createdAt: isFirebaseConfigured ? serverTimestamp() : new Date().toISOString(),
    };

    try {
      if (isFirebaseConfigured && db) {
        await addDoc(collection(db, 'community_chat'), newMsg);
      } else {
        // Offline: sadece local state'e ekle
        setMessages(prev => [...prev, { ...newMsg, id: 'local_' + Date.now(), createdAt: new Date().toISOString() }]);
      }
    } catch (err) {
      console.error('Mesaj gönderilemedi:', err);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  const formatTime = (dateStr) => {
    try {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMin = Math.floor((now - date) / 60000);
      if (diffMin < 1) return 'Şimdi';
      if (diffMin < 60) return `${diffMin}d önce`;
      const diffHr = Math.floor(diffMin / 60);
      if (diffHr < 24) return `${diffHr}sa önce`;
      return `${Math.floor(diffHr / 24)}g önce`;
    } catch {
      return '';
    }
  };

  return (
    <>
      <header className="top-header">
        <div className="greeting-area">
          <h1>Topluluk ve Liderlik 👥</h1>
          <p>Diğer öğrencilerle etkileşime geçin ve sıralamanızı görün.</p>
        </div>
        <div className="header-actions">
          <div className="icon-btn theme-toggle" onClick={toggleTheme} style={{ cursor: 'pointer' }} title="Tema Değiştir">
            {isDarkMode ? '☀️' : '🌙'}
          </div>
          <div className="user-avatar-placeholder"></div>
        </div>
      </header>

      <div className="community-container">
        {/* Sol: Liderlik Tablosu */}
        <div className="community-left">
          <div className="card h-full flex-col">
            <h2 className="section-title">Liderlik Tablosu</h2>
            <div className="leaderboard-list">
              {leaderboardData.map((user) => (
                <div key={user.rank} className={`leaderboard-item ${user.rank <= 3 ? 'top-three' : ''}`}>
                  <div className="lb-rank">
                    {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}
                  </div>
                  <div className="lb-name">{user.name}</div>
                  <div className="lb-xp">{user.xp} XP</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sağ: Etkinlikler ve Sohbet */}
        <div className="community-right">
          {/* Üst: Son Etkinlikler */}
          <div className="card activity-card">
            <h2 className="section-title">Son Etkinlikler</h2>
            <div className="activity-feed">
              {activitiesData.map((act) => (
                <div key={act.id} className="activity-item">
                  <div className="act-icon">{act.icon}</div>
                  <div className="act-content">
                    <span className="act-user">{act.user}</span> {act.text}
                    <div className="act-time">{act.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alt: Gerçek Zamanlı Sohbet */}
          <div className="card chat-card">
            <div className="chat-header">
              Topluluk Sohbeti
              <span style={{ fontSize: '0.7rem', marginLeft: '0.5rem', color: isFirebaseConfigured ? '#10b981' : '#f59e0b', fontWeight: 400 }}>
                {isFirebaseConfigured ? '🟢 Canlı' : '🟡 Yerel Mod'}
              </span>
            </div>
            <div className="chat-messages">
              {messages.length === 0 && (
                <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', padding: '1rem' }}>
                  Henüz mesaj yok. İlk mesajı sen gönder! 👋
                </div>
              )}
              {messages.map((msg) => {
                const isMe = msg.userId === currentUser;
                return (
                  <div key={msg.id} className="chat-message" style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.35rem', lineHeight: 1.5 }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', flexShrink: 0, minWidth: '36px' }}>
                      {formatTime(msg.createdAt)}
                    </span>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: isMe ? 'var(--accent-cyan)' : '#c678dd', flexShrink: 0 }}>
                      {msg.username}:
                    </span>
                    <span className="chat-text" style={{ fontSize: '0.88rem', color: 'var(--text-primary)', wordBreak: 'break-word' }}>
                      {msg.text}
                    </span>
                  </div>
                );
              })}
              <div ref={chatBottomRef} />
            </div>
            <form className="chat-input-area" onSubmit={handleSend}>
              <input
                type="text"
                className="chat-input"
                placeholder={`${displayName} olarak mesaj gönder...`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isSending}
                maxLength={300}
              />
              <button
                type="submit"
                className="chat-send-btn"
                disabled={isSending || !inputText.trim()}
                title="Gönder (Enter)"
              >
                ➤
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityView;
