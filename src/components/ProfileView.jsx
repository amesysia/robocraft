import React, { useState } from 'react';
import '../profile.css';
import AvatarDisplay from './AvatarDisplay';
import ItemShop from './ItemShop';
import SkinEditor from './SkinEditor';
import GolemsView from './GolemsView';
import { AVATARS } from '../data/avatarData';

const ProfileView = ({ playerData, setPlayerData, setActiveTab, exchangeResource, handleGolemEquip, buyGolemItem, currentUserObj }) => {
  const [activeSection, setActiveSection] = useState('shop'); // 'shop' | 'tasks' | 'golems'
  const [isSkinEditorOpen, setIsSkinEditorOpen] = useState(false);

  const displayName = playerData?.displayName?.trim() || currentUserObj?.displayName?.trim() || 'Kahraman';
  const currentAvatar = AVATARS.find(a => a.id === playerData.avatarId) || AVATARS[0];

  const handleSaveSkin = (grid) => {
    setPlayerData(prev => ({ ...prev, customSkin: grid }));
    setIsSkinEditorOpen(false);
  };

  const handleBuy = (item) => {
    if (playerData.xp < item.price || playerData.inventory.includes(item.id)) return;
    setPlayerData(prev => ({
      ...prev,
      xp: prev.xp - item.price,
      inventory: [...prev.inventory, item.id],
    }));
  };

  const handleEquip = (item) => {
    setPlayerData(prev => ({
      ...prev,
      equippedItems: { ...prev.equippedItems, [item.slot]: item.id },
    }));
  };

  const handleUnequip = (slot) => {
    setPlayerData(prev => {
      const newEquipped = { ...prev.equippedItems };
      delete newEquipped[slot];
      return { ...prev, equippedItems: newEquipped };
    });
  };

  const handleSelectAvatar = (avatar) => {
    setPlayerData(prev => ({ ...prev, avatarId: avatar.id }));
  };

  const xpForNextLevel = (playerData.level + 1) * 500;
  const xpProgress = ((playerData.xp % 500) / 500) * 100;
  const tasks = playerData.tasks || [];
  const completedTasks = tasks.filter(t => t.done).length;

  return (
    <div className="profile-view">
      {/* ========== ÜSTBILGI ========== */}
      <div className="profile-header">
        <div className="profile-header-left">
          <div className="profile-title-area">
            <h1 className="profile-title">
              <span className="mc-title-icon">👤</span>
              {displayName}
            </h1>
            <p className="profile-subtitle">Profil & Envanter • Görevleri tamamla, XP kazan, eşyaları satın al ve avatarını özelleştir!</p>
          </div>
        </div>

        {/* XP Bar + Seviye */}
        <div className="profile-xp-widget">
          <div className="xp-level-badge">
            <span className="xp-level-num">{playerData.level}</span>
            <span className="xp-level-label">SEVİYE</span>
          </div>
          <div className="xp-bar-area">
            <div className="xp-bar-labels">
              <span>⚡ {playerData.xp.toLocaleString()} XP</span>
              <span className="xp-next">Sonraki: {xpForNextLevel.toLocaleString()}</span>
            </div>
            <div className="xp-bar-bg">
              <div className="xp-bar-fill" style={{ width: `${xpProgress}%` }}>
                <div className="xp-bar-shine" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== ANA LAYOUT ========== */}
      <div className="profile-main-layout">
        {/* === SOL PANEL: Avatar === */}
        <div className="profile-left-panel">
          <AvatarDisplay
            avatar={currentAvatar}
            customSkin={playerData.customSkin}
            equippedItems={playerData.equippedItems}
            onSelectAvatar={handleSelectAvatar}
            availableAvatars={AVATARS}
            playerLevel={playerData.level}
          />
          <button
            className="edit-skin-btn"
            onClick={() => setIsSkinEditorOpen(true)}
          >
            🖌️ Karakterini Düzenle
          </button>
        </div>

        {/* === SAĞ PANEL: Mağaza + Görevler === */}
        <div className="profile-right-panel">
          {/* Sağ panel sekmeleri */}
          <div className="right-panel-tabs">
            <button
              className={`rp-tab ${activeSection === 'shop' ? 'active' : ''}`}
              onClick={() => setActiveSection('shop')}
            >
              🛒 Mağaza & Envanter
            </button>
            <button
              className={`rp-tab ${activeSection === 'tasks' ? 'active' : ''}`}
              onClick={() => setActiveSection('tasks')}
            >
              📋 Görevler
              {tasks.filter(t => !t.done).length > 0 && (
                <span className="task-badge">{tasks.filter(t => !t.done).length}</span>
              )}
            </button>
            <button
              className={`rp-tab ${activeSection === 'golems' ? 'active' : ''}`}
              onClick={() => setActiveSection('golems')}
            >
              🤖 Golemlerim
            </button>
          </div>

          {/* Mağaza & Envanter */}
          {activeSection === 'shop' && (
            <ItemShop
              playerXP={playerData.xp}
              inventory={playerData.inventory}
              equippedItems={playerData.equippedItems}
              onBuy={handleBuy}
              onEquip={handleEquip}
              onUnequip={handleUnequip}
            />
          )}

          {/* Görevler Listesi */}
          {activeSection === 'tasks' && (
            <div className="tasks-panel">
              <div className="tasks-header-info">
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>🎯 Günlük Görevler</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Puan (XP) kazanmak için sana tanımlanan aşağıdaki görevleri tamamla. Görevin üstüne tıklayarak ilgili sekmeye (Derslerim, Keşif Madeni vb.) gidebilirsin.
                  </p>
                </div>
                <div className="tasks-progress-text">
                  {completedTasks}/{tasks.length} görev tamamlandı
                </div>
                <div className="tasks-progress-bar">
                  <div
                    className="tasks-progress-fill"
                    style={{ width: `${(completedTasks / tasks.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="tasks-list">
                {tasks.map(task => (
                  <div
                    key={task.id}
                    className={`task-item ${task.done ? 'done' : ''}`}
                    id={`task-${task.id}`}
                  >
                    <div className="task-icon">{task.icon || '🚀'}</div>
                    <div className="task-content">
                      <div className="task-title">{task.title}</div>
                      <div className="task-reward">
                        <span className="task-xp-badge">⚡ {task.xp} XP</span>
                        <span className="task-xp-badge" style={{ background: 'var(--accent-cyan)', color: '#000', marginLeft: '0.5rem' }}>+50 Kazma</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        className={`task-btn ${task.done ? 'task-done-btn' : ''}`}
                        onClick={() => {
                          if (!task.done && setActiveTab) {
                            setActiveTab(task.targetTab);
                          }
                        }}
                        disabled={task.done}
                        title={task.done ? "Tamamlandı" : "Öğretmenin tanımladığı göreve git"}
                      >
                        {task.done ? '✅ Tamamlandı' : '🚀 Göreve Git'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tüm görevler tamamlandıysa */}
              {completedTasks === tasks.length && (
                <div className="all-done-message">
                  <div className="all-done-icon">🏆</div>
                  <div className="all-done-title">Tüm görevler tamamlandı!</div>
                  <div className="all-done-desc">Harika iş çıkardın! Yeni görevler yakında geliyor.</div>
                </div>
              )}
            </div>
          )}

          {/* Golemlerim */}
          {activeSection === 'golems' && (
            <GolemsView
              playerData={playerData}
              setPlayerData={setPlayerData}
              exchangeResource={exchangeResource}
              handleGolemEquip={handleGolemEquip}
              buyGolemItem={buyGolemItem}
            />
          )}
        </div>
      </div>

      {/* Skin Düzenleyici Modalı */}
      {isSkinEditorOpen && (
        <SkinEditor
          currentSkin={playerData.customSkin}
          onSave={handleSaveSkin}
          onClose={() => setIsSkinEditorOpen(false)}
        />
      )}
    </div>
  );
};

export default ProfileView;
