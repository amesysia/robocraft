import React, { useState, useEffect } from 'react';
import { Pickaxe, X } from 'lucide-react';
import AvatarDisplay from './AvatarDisplay';
import '../adventure.css';

const generateGrid = (level) => {
  const size = Math.min(6 + Math.floor(level / 2), 12); // Grid gets bigger with level, max 12x12
  const totalTiles = size * size;
  const newTiles = [];
  
  for (let i = 0; i < totalTiles; i++) {
    const rand = Math.random();
    let type = 'stone';
    if (rand > 0.95) type = 'gold';
    else if (rand > 0.85) type = 'iron';
    else if (rand > 0.70) type = 'copper';
    else if (rand > 0.45) type = 'coal';
    
    newTiles.push({ id: i, type, revealed: false });
  }
  return { newTiles, size };
};

const GOLEM_INFO = {
  coal: { name: 'Kömür Golemi', emoji: '⬛', id: 'm1' },
  copper: { name: 'Bakır Golemi', emoji: '🟠', id: 'm2' },
  iron: { name: 'Demir Golemi', emoji: '⚪', id: 'm4' },
  gold: { name: 'Altın Golemi', emoji: '🟡', id: 'm3' }
};

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

const AdventureMap = ({ playerData, collectResource, useEnergy, unlockGolem }) => {
  const [tiles, setTiles] = useState([]);
  const [gridWidth, setGridWidth] = useState(8);
  const [floatingTexts, setFloatingTexts] = useState([]);
  const [newGolemPopup, setNewGolemPopup] = useState(null);

  useEffect(() => {
    const { newTiles, size } = generateGrid(playerData.level || 1);
    setTiles(newTiles);
    setGridWidth(size);
  }, [playerData.level]);

  const handleTileClick = (e, index) => {
    const tile = tiles[index];
    if (tile.revealed) return; // Zaten kazılmış

    // Enerji kontrolü
    if (!useEnergy(1)) return; // Enerji yoksa kazamaz

    // Tile'ı aç
    const newTiles = [...tiles];
    newTiles[index].revealed = true;
    setTiles(newTiles);

    // Maden varsa envantere ekle ve efekt çıkar
    if (tile.type !== 'stone') {
      collectResource(tile.type, 1);
      
      // İlk buluş kontrolü
      if (!playerData.unlockedGolems.includes(tile.type)) {
        unlockGolem(tile.type);
        setNewGolemPopup(tile.type);
      }
      
      const id = Date.now();
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setFloatingTexts(prev => [...prev, { id, x, y, text: `+1 ${tile.type.toUpperCase()}` }]);
      setTimeout(() => {
        setFloatingTexts(prev => prev.filter(t => t.id !== id));
      }, 1000);
    } else {
      // Boş taş efekti
      const id = Date.now();
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setFloatingTexts(prev => [...prev, { id, x, y, text: `BOŞ` }]);
      setTimeout(() => {
        setFloatingTexts(prev => prev.filter(t => t.id !== id));
      }, 1000);
    }
  };

  const handleRefreshGrid = () => {
    const { newTiles, size } = generateGrid(playerData.level || 1);
    setTiles(newTiles);
    setGridWidth(size);
  };

  // Helper function to render a mini golem
  const renderMiniGolem = (resType, positionObj) => {
    const gId = GOLEM_INFO[resType].id;
    const { golemVariations, golemEquipment } = playerData;
    const currentVariationId = golemVariations?.[gId] || GOLEM_VARIATIONS[gId][0].id;
    const golemAvatar = GOLEM_VARIATIONS[gId].find(v => v.id === currentVariationId);
    const golemEquips = golemEquipment?.[gId] || {};

    return (
      <div 
        key={resType}
        style={{ 
          position: 'absolute', 
          ...positionObj,
          transform: 'scale(0.5)', // Minik (chibi) boyut
          transformOrigin: 'bottom center',
          zIndex: 5,
          pointerEvents: 'none',
          filter: 'drop-shadow(0px 10px 10px rgba(0,0,0,0.5))'
        }}
      >
        <AvatarDisplay avatar={golemAvatar} equippedItems={golemEquips} />
        <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.7)', padding: '5px 10px', borderRadius: '10px', fontSize: '1.2rem', whiteSpace: 'nowrap' }}>
          Maden bekçisi ⛏️
        </div>
      </div>
    );
  };

  // Predefined positions for the 4 golems around the grid
  const golemPositions = {
    coal: { top: '10%', left: '5%' },
    iron: { top: '30%', right: '5%' },
    copper: { bottom: '20%', left: '10%' },
    gold: { bottom: '10%', right: '10%' }
  };

  return (
    <div className="adventure-view" style={{ position: 'relative' }}>
      
      {/* MİNİK GOLEMLERİ EKRANDA GEZDİR (Sadece kilitleri açıldıysa) */}
      {playerData.unlockedGolems?.map(resType => {
        if (!golemPositions[resType]) return null;
        return renderMiniGolem(resType, golemPositions[resType]);
      })}

      {/* ÜST BAR: Kaynaklar ve Enerji */}
      <div className="adventure-header">
        <div className="ah-title">
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Pickaxe size={28} className="text-cyan" /> Keşif Madeni</h1>
          <p>Şansını dene! Her kazı 1 enerji harcar. Karanlık taşların altında ne olduğunu bul. Seviyen arttıkça maden büyür!</p>
        </div>
        <div className="ah-stats-container" style={{ zIndex: 10 }}>
          <div className="energy-badge">
            <span className="energy-icon">⚡</span>
            <div className="energy-info">
              <span className="energy-label">Kazma Hakkı</span>
              <div className="energy-bar-container">
                <div 
                  className="energy-bar-fill" 
                  style={{ width: `${Math.min((playerData?.energy || 0), 100)}%` }}
                ></div>
                <span className="energy-count">{playerData?.energy || 0}</span>
              </div>
            </div>
          </div>
          <div className="ah-resources">
            <div className="resource-item">
              <span className="res-icon">⬛</span>
              <span className="res-count">{playerData?.resources?.coal || 0}</span>
              <span className="res-name">Kömür</span>
            </div>
            <div className="resource-item">
              <span className="res-icon">⚪</span>
              <span className="res-count">{playerData?.resources?.iron || 0}</span>
              <span className="res-name">Demir</span>
            </div>
            <div className="resource-item">
              <span className="res-icon">🟠</span>
              <span className="res-count">{playerData?.resources?.copper || 0}</span>
              <span className="res-name">Bakır</span>
            </div>
            <div className="resource-item">
              <span className="res-icon">🟡</span>
              <span className="res-count">{playerData?.resources?.gold || 0}</span>
              <span className="res-name">Altın</span>
            </div>
          </div>
        </div>
      </div>

      {/* MADEN ALANI (GRID) */}
      <div className="mine-grid-container" style={{ zIndex: 10 }}>
        <div className="mine-grid-header">
          <button className="refresh-grid-btn" onClick={handleRefreshGrid}>🔄 Haritayı Yenile</button>
        </div>
        <div className="mine-grid" style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }}>
          {tiles.map((tile, index) => (
            <div 
              key={tile.id} 
              className={`grid-tile ${tile.revealed ? 'revealed' : 'hidden'} ${tile.revealed ? tile.type : ''}`}
              onClick={(e) => handleTileClick(e, index)}
            >
            </div>
          ))}
          {floatingTexts.map(ft => (
            <div key={ft.id} className="floating-text" style={{ left: ft.x, top: ft.y, zIndex: 20 }}>{ft.text}</div>
          ))}
        </div>
      </div>

      {/* İLK BULUŞ POPUP EKRANI */}
      {newGolemPopup && (
        <div className="golem-modal-overlay" style={{ zIndex: 1000 }} onClick={() => setNewGolemPopup(null)}>
          <div className="golem-modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '400px', textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              {GOLEM_INFO[newGolemPopup]?.emoji}
            </div>
            <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>YENİ GOLEM BULUNDU!</h2>
            <h3 style={{ marginBottom: '1rem' }}>{GOLEM_INFO[newGolemPopup]?.name}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              "Beni buldun! Profilim sekmesindeki golemlerim kısmında beni giydirip bana güzel eşyalar alabilirsin. Artık madende de yanında olacağım!"
            </p>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setNewGolemPopup(null)}>
              Harika!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdventureMap;
