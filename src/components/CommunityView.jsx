import React from 'react';

const CommunityView = ({ isDarkMode, toggleTheme }) => {
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
    { id: 1, user: "Ahmet Yılmaz", text: "Arduino: LED Yakıp Söndürme dersini tamamladı.", time: "10 dk önce", icon: "📚" },
    { id: 2, user: "Ayşe Çelik", text: "C++ Pointers testinden 100 tam puan aldı!", time: "45 dk önce", icon: "⭐" },
    { id: 3, user: "Caner Ekinci", text: "Tinkercad Breadboard görevini paylaştı.", time: "2 saat önce", icon: "🛠️" },
    { id: 4, user: "Zeynep Aslan", text: "Hafta 2 modüllerini %100 tamamladı.", time: "3 saat önce", icon: "🏆" },
  ];

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
          <div className="search-bar">
            <span>🔍</span>
            <input type="text" placeholder="Öğrenci veya konu ara..." />
          </div>
          <div className="icon-btn">
            <span>🔔</span>
            <div className="notification-dot"></div>
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

          {/* Alt: Sohbet */}
          <div className="card chat-card">
            <div className="chat-header">Topluluk Sohbeti</div>
            <div className="chat-messages">
              <div className="chat-message">
                <span className="chat-name-student" style={{ color: '#c678dd' }}>Kemal Aksoy:</span>
                <span className="chat-text">Arkadaşlar merhaba, döngüler ödevini bitiren var mı?</span>
              </div>
              <div className="chat-message">
                <span className="chat-name-student">Ayşe Çelik:</span>
                <span className="chat-text">Ben bitirdim Kemal, for döngüsünü kullanırsan çok daha kısa sürüyor.</span>
              </div>
              <div className="chat-message">
                <span className="chat-name-student" style={{ color: '#61afef' }}>Ali Kaya:</span>
                <span className="chat-text">Aynen, while yerine for çok daha pratik oldu bu projede.</span>
              </div>
            </div>
            <div className="chat-input-area">
              <input type="text" className="chat-input" placeholder="Topluluğa bir mesaj gönderin..." />
              <button className="chat-send-btn">➤</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityView;
