import React, { useState } from 'react';
import AvatarDisplay from './AvatarDisplay';
import { SHOP_ITEMS } from '../data/shopItems';
import '../golems.css';

const GOLEM_VARIATIONS = {
  m1: [
    { id: 'golem_m1', name: 'Kömür Golemi', skinColor: '#1f2937', hairColor: '#111827', shirtColor: '#374151', pantsColor: '#111827', eyeColor: '#ef4444', emoji: '⬛' },
    { id: 'golem_m1_magma', name: 'Magma Kömür Golemi', skinColor: '#450a0a', hairColor: '#7f1d1d', shirtColor: '#991b1b', pantsColor: '#450a0a', eyeColor: '#fde047', emoji: '🌋' },
  ],
  m4: [
    { id: 'golem_m4', name: 'Demir Golemi', skinColor: '#e5e7eb', hairColor: '#9ca3af', shirtColor: '#d1d5db', pantsColor: '#6b7280', eyeColor: '#3b82f6', emoji: '⚪' },
    { id: 'golem_m4_rust', name: 'Paslı Demir Golemi', skinColor: '#9a3412', hairColor: '#7c2d12', shirtColor: '#c2410c', pantsColor: '#431407', eyeColor: '#ea580c', emoji: '⛓️' }
  ],
  m2: [
    { id: 'golem_m2', name: 'Bakır Golemi', skinColor: '#d97706', hairColor: '#b45309', shirtColor: '#451a03', pantsColor: '#78350f', eyeColor: '#fde047', emoji: '🟠' },
    { id: 'golem_m2_ox', name: 'Oksitli Bakır Golemi', skinColor: '#14b8a6', hairColor: '#0f766e', shirtColor: '#042f2e', pantsColor: '#134e4a', eyeColor: '#ccfbf1', emoji: '🗽' },
  ],
  m3: [
    { id: 'golem_m3', name: 'Altın Golemi', skinColor: '#fde047', hairColor: '#eab308', shirtColor: '#ca8a04', pantsColor: '#a16207', eyeColor: '#ffffff', emoji: '🟡' },
    { id: 'golem_m3_rose', name: 'Rose Gold Golem', skinColor: '#fda4af', hairColor: '#fb7185', shirtColor: '#e11d48', pantsColor: '#9f1239', eyeColor: '#ffe4e6', emoji: '🌸' },
  ]
};

const GOLEM_MESSAGES = {
  m1: ["Kömür madenleri çok karanlık. Orada dikkatli ol!", "Daha fazla kömür, fırınlarımız için iyidir.", "Bana siyah ve havalı eşyalar al!"],
  m4: ["Demir gibi sağlamım!", "Kalkanlar ve zırhlar benden sorulur.", "Bana yeni bir zırh alırsan daha da güçlenirim."],
  m2: ["Bakır işlemek ustalık ister.", "Paslanmamaya dikkat etmeliyim.", "Biraz daha bakır bulursan bana zırh alabilirsin."],
  m3: ["Altın gibi parlıyorum!", "Zenginlik her şey değildir ama güzel görünmek harika.", "Madenlerde en derine in, altın orada!"],
};

const GOLEM_SHOP_ITEMS = [
  { id: 'leather_helmet', name: 'Deri Miğfer', emoji: '🪖', slot: 'head', cost: { coal: 5, iron: 0, copper: 0, gold: 0 } },
  { id: 'iron_helmet', name: 'Demir Miğfer', emoji: '⛑️', slot: 'head', cost: { coal: 10, iron: 5, copper: 0, gold: 0 } },
  { id: 'iron_chestplate', name: 'Demir Göğüs Zırhı', emoji: '🛡️', slot: 'body', cost: { coal: 15, iron: 8, copper: 5, gold: 0 } },
  { id: 'diamond_chestplate', name: 'Elmas Göğüs Zırhı', emoji: '🔷', slot: 'body', cost: { coal: 0, iron: 10, copper: 15, gold: 5 } },
  { id: 'diamond_pickaxe', name: 'Elmas Kazma', emoji: '💎', slot: 'hand', cost: { coal: 0, iron: 5, copper: 20, gold: 10 } },
  { id: 'iron_pickaxe', name: 'Demir Kazma', emoji: '🔨', slot: 'hand', cost: { coal: 12, iron: 8, copper: 5, gold: 0 } }
];

const GolemsView = ({ playerData, setPlayerData, handleGolemEquip, buyGolemItem }) => {
  const [modalGolemId, setModalGolemId] = useState(null);
  const [activeMessage, setActiveMessage] = useState(null);

  const { resources, golemEquipment, inventory, golemVariations, unlockedGolems } = playerData;
  
  const hasResource = (res) => (unlockedGolems || []).includes(res);

  const ALL_GOLEMS = [
    { id: 'm1', isUnlocked: hasResource('coal'), taskName: 'Kömür Bul!' },
    { id: 'm4', isUnlocked: hasResource('iron'), taskName: 'Demir Bul!' },
    { id: 'm2', isUnlocked: hasResource('copper'), taskName: 'Bakır Bul!' },
    { id: 'm3', isUnlocked: hasResource('gold'), taskName: 'Altın Bul!' },
  ];

  const handleGolemClick = (gId, isUnlocked) => {
    if (!isUnlocked) return;
    setModalGolemId(gId);
  };

  const handleShowMessage = (e, gId) => {
    e.stopPropagation();
    const msgs = GOLEM_MESSAGES[gId];
    setActiveMessage({ id: gId, text: msgs[Math.floor(Math.random() * msgs.length)] });
    setTimeout(() => setActiveMessage(null), 3000);
  };

  const handleBuyItem = (item) => {
    if (inventory.includes(item.id)) return;
    if (buyGolemItem) buyGolemItem(item.id, item.cost);
  };

  const handleSelectVariation = (gId, variId) => {
    setPlayerData(prev => ({
      ...prev,
      golemVariations: {
        ...prev.golemVariations,
        [gId]: variId
      }
    }));
  };

  const activeGolemVariationId = modalGolemId && (golemVariations?.[modalGolemId] || GOLEM_VARIATIONS[modalGolemId][0].id);
  const activeGolemAvatar = modalGolemId && GOLEM_VARIATIONS[modalGolemId].find(v => v.id === activeGolemVariationId);
  const activeGolemEquips = modalGolemId && (golemEquipment[modalGolemId] || {});
  const ownedItems = inventory.map(itemId => GOLEM_SHOP_ITEMS.find(i => i.id === itemId) || SHOP_ITEMS.find(i => i.id === itemId)).filter(Boolean);

  return (
    <div className="golems-view-container">
      {/* GOLEMLER LİSTESİ */}
      <div className="golems-showcase">
        
        <div className="golem-grid">
          {ALL_GOLEMS.map(g => {
            const gId = g.id;
            const currentVariationId = golemVariations?.[gId] || GOLEM_VARIATIONS[gId][0].id;
            const golemAvatar = GOLEM_VARIATIONS[gId].find(v => v.id === currentVariationId);
            const golemEquips = golemEquipment[gId] || {};

            return (
              <div key={gId} className={`golem-card ${!g.isUnlocked ? 'locked-card' : 'unlocked-card'}`} onClick={() => handleGolemClick(gId, g.isUnlocked)}>
                {!g.isUnlocked && (
                  <div className="golem-locked-overlay">
                    <div className="locked-icon">🔒</div>
                    <div className="locked-text">{g.taskName}</div>
                  </div>
                )}
                <div className="gc-display">
                  <AvatarDisplay
                    avatar={golemAvatar}
                    equippedItems={golemEquips}
                  />
                  {activeMessage && activeMessage.id === gId && g.isUnlocked && (
                    <div className="golem-chat-bubble">
                      {activeMessage.text}
                    </div>
                  )}
                </div>
                <div className="gc-info">
                  <h4>{golemAvatar.name}</h4>
                  {g.isUnlocked && (
                    <div className="gc-actions">
                      <button className="gc-talk-btn" onClick={(e) => handleShowMessage(e, gId)}>💬 Konuş</button>
                      <p className="gc-hint">Büyütmek için tıkla</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* GOLEM MAĞAZASI */}
      <div className="golem-shop" style={{ marginTop: '2rem' }}>
        <div className="tc-header">
          <h3>🛒 Golem Ekipman Mağazası</h3>
          <p>Keşif Madeninden bulduğun madenleri kullanarak Golemlerine kıyafet satın al.</p>
          <div className="shop-my-resources">
            <span>Senin Madenlerin: </span>
            <span className="res-badge">⬛ {resources?.coal || 0}</span>
            <span className="res-badge">⚪ {resources?.iron || 0}</span>
            <span className="res-badge">🟠 {resources?.copper || 0}</span>
            <span className="res-badge">🟡 {resources?.gold || 0}</span>
          </div>
        </div>
        <div className="golem-shop-grid">
          {GOLEM_SHOP_ITEMS.map(item => {
            const isOwned = inventory.includes(item.id);
            const canAfford = 
              (resources?.coal || 0) >= item.cost.coal &&
              (resources?.iron || 0) >= item.cost.iron &&
              (resources?.copper || 0) >= item.cost.copper &&
              (resources?.gold || 0) >= item.cost.gold;

            return (
              <div key={item.id} className={`golem-shop-item ${isOwned ? 'owned' : ''}`}>
                <div className="gs-icon">{item.emoji}</div>
                <div className="gs-info">
                  <h4>{item.name}</h4>
                  <div className="gs-cost">
                    {item.cost.coal > 0 && <span>⬛ {item.cost.coal}</span>}
                    {item.cost.iron > 0 && <span>⚪ {item.cost.iron}</span>}
                    {item.cost.copper > 0 && <span>🟠 {item.cost.copper}</span>}
                    {item.cost.gold > 0 && <span>🟡 {item.cost.gold}</span>}
                  </div>
                </div>
                <button 
                  className="gs-buy-btn"
                  onClick={() => handleBuyItem(item)}
                  disabled={isOwned || !canAfford}
                >
                  {isOwned ? 'Alındı' : 'Satın Al'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* BÜYÜTÜLMÜŞ GOLEM MODALI */}
      {modalGolemId && activeGolemAvatar && (
        <div className="golem-modal-overlay" onClick={() => setModalGolemId(null)}>
          <div className="golem-modal-content" onClick={e => e.stopPropagation()}>
            <button className="golem-modal-close" onClick={() => setModalGolemId(null)}>✕</button>
            
            <div className="gm-header">
              <h2>{activeGolemAvatar.name} Yönetimi</h2>
            </div>
            
            <div className="gm-body">
              <div className="gm-left">
                <AvatarDisplay
                  avatar={activeGolemAvatar}
                  equippedItems={activeGolemEquips}
                />
              </div>
              <div className="gm-right">
                {/* Karakter (Varyasyon) Seçimi */}
                <div className="gm-section">
                  <h3>🎭 Stil (Varyasyon) Seç</h3>
                  <div className="gm-variations">
                    {GOLEM_VARIATIONS[modalGolemId].map(vari => (
                      <button 
                        key={vari.id} 
                        className={`gm-vari-btn ${activeGolemVariationId === vari.id ? 'active' : ''}`}
                        onClick={() => handleSelectVariation(modalGolemId, vari.id)}
                      >
                        <span className="vari-emoji">{vari.emoji}</span>
                        {vari.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Envanter Giydirme */}
                <div className="gm-section gc-inventory">
                  <h3>🎒 Envanterinden Giydir</h3>
                  {ownedItems.length === 0 ? (
                    <p className="gc-empty-inv">Hiç eşyan yok. Aşağıdaki mağazadan al!</p>
                  ) : (
                    <div className="gc-items-grid">
                      {ownedItems.map(item => {
                        const isEquippedHere = activeGolemEquips[item.slot] === item.id;
                        return (
                          <div 
                            key={item.id} 
                            className={`gc-item-slot ${isEquippedHere ? 'equipped' : ''}`}
                            onClick={() => handleGolemEquip(modalGolemId, item)}
                            title={item.name}
                          >
                            <span className="gc-item-emoji">{item.emoji}</span>
                            {isEquippedHere && <div className="gc-equipped-dot" />}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GolemsView;
