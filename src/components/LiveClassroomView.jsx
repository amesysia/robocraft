import React from 'react';

const LiveClassroomView = () => {
  return (
    <div className="live-classroom">
      {/* Custom Live Header */}
      <header className="live-header-bar">
        <div className="live-header-left">
          <span className="badge-live">CANLI YAYIN</span>
          <span className="live-title">Arduino Döngüleri (For & While)</span>
        </div>
        <div className="live-header-right">
          <button className="btn-secondary">✋ Söz İste</button>
          <button className="btn-outline-danger">Dersten Ayrıl</button>
        </div>
      </header>

      {/* Main Content Split */}
      <div className="live-main">
        {/* Left Panel: Video & Chat */}
        <div className="live-left-panel">
          <div className="video-container">
            <div className="video-placeholder">Eğitmen Kamera Görseli (Selin Yılmaz)</div>
            <div className="video-overlay-name">🎥 Selin Yılmaz</div>
          </div>
          <div className="chat-container">
            <div className="chat-header">Sınıf Sohbeti (24 Kişi)</div>
            <div className="chat-messages">
              <div className="chat-message">
                <span className="chat-name-instructor">Eğitmen:</span>
                <span className="chat-text">Herkes breadboard kurulumunu bitirdi mi?</span>
              </div>
              <div className="chat-message">
                <span className="chat-name-student">Ahmet K.:</span>
                <span className="chat-text">Evet hocam, LED'leri bağladım.</span>
              </div>
              <div className="chat-message">
                <span className="chat-name-student">Zeynep A.:</span>
                <span className="chat-text">Direnç yönü fark etmiyor değil mi?</span>
              </div>
              <div className="chat-message">
                <span className="chat-name-instructor">Eğitmen:</span>
                <span className="chat-text">Hayır Zeynep, dirençlerin yönü (polaritesi) yoktur, istediğin yönde takabilirsin. 👍</span>
              </div>
            </div>
            <div className="chat-input-area">
              <input type="text" className="chat-input" placeholder="Bir mesaj yazın..." />
              <button className="chat-send-btn">➤</button>
            </div>
          </div>
        </div>

        {/* Right Panel: Workspace */}
        <div className="live-workspace">
          <div className="workspace-header">
            <div className="workspace-tabs">
              <div className="workspace-tab active">
                ⚙️ Tinkercad Simülatörü
              </div>
              <div className="workspace-tab">
                🔌 Şema Görünümü
              </div>
            </div>
            <button className="btn-success">▶ Simülasyonu Başlat</button>
          </div>

          <div className="workspace-content">
            <div className="simulator-pane">
              <div className="simulator-placeholder">
                <div className="drag-drop-badge">✥ Sürükle ve Bırak</div>
                Breadboard Simülasyon Görseli
              </div>
            </div>
            <div className="code-pane">
              <div className="code-title">SKETCH.INO</div>
              <div className="code-line"><span className="syntax-keyword">void</span> <span className="syntax-function">setup</span>() {'{'}</div>
              <div className="code-line">  <span className="syntax-comment">// 4. Pini çıkış olarak ayarla</span></div>
              <div className="code-line">  <span className="syntax-function">pinMode</span>(<span className="syntax-number">4</span>, <span className="syntax-text">OUTPUT</span>);</div>
              <div className="code-line">{'}'}</div>
              <div className="code-line"><br /></div>
              <div className="code-line"><span className="syntax-keyword">void</span> <span className="syntax-function">loop</span>() {'{'}</div>
              <div className="code-line">  <span className="syntax-comment">// LED'i yak ve 1 sn bekle</span></div>
              <div className="code-line">  <span className="syntax-function">digitalWrite</span>(<span className="syntax-number">4</span>, <span className="syntax-text">HIGH</span>);</div>
              <div className="code-line">  <span className="syntax-function">delay</span>(<span className="syntax-number">1000</span>);</div>
              <div className="code-line"><br /></div>
              <div className="code-line">  <span className="syntax-comment">// LED'i söndür ve 1 sn bekle</span></div>
              <div className="code-line">  <span className="syntax-function">digitalWrite</span>(<span className="syntax-number">4</span>, <span className="syntax-text">LOW</span>);</div>
              <div className="code-line">  <span className="syntax-function">delay</span>(<span className="syntax-number">1000</span>);</div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClassroomView;
