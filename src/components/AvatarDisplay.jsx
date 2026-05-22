import React from 'react';
import { RARITY_CONFIG, SHOP_ITEMS } from '../data/shopItems';
import { ITEM_VISUALS } from '../data/itemVisuals';

// Avatar'ı 16x32 grid'e çeviren yardımcı fonksiyon
const getAvatarGrid = (avatar) => {
  return Array(32).fill().map((_, y) => 
    Array(16).fill().map((_, x) => {
      // Baş (8x8) -> x:4-11, y:0-7
      if (x >= 4 && x < 12 && y >= 0 && y < 8) {
        if (y < 2) return avatar.hairColor; // Saç
        if (y === 4 && (x === 6 || x === 9)) return avatar.eyeColor; // Göz
        if (y === 6 && x >= 6 && x < 10) return avatar.hairColor; // Ağız
        return avatar.skinColor; // Ten
      }
      // Gövde (8x12) -> x:4-11, y:8-19
      if (x >= 4 && x < 12 && y >= 8 && y < 20) {
        return avatar.shirtColor;
      }
      // Kollar (4x12) -> x:0-3 (Sol), x:12-15 (Sağ), y:8-19
      if ((x < 4 || x >= 12) && y >= 8 && y < 20) {
        return (y < 12) ? avatar.shirtColor : avatar.skinColor;
      }
      // Bacaklar (4x12) -> x:4-7 (Sol), x:8-11 (Sağ), y:20-31
      if (x >= 4 && x < 12 && y >= 20 && y < 32) {
        return (y > 28) ? '#3d2b1f' : avatar.pantsColor;
      }
      return null;
    })
  );
};

const AvatarDisplay = ({ avatar, customSkin, equippedItems, onSelectAvatar, availableAvatars, playerLevel, profileMode = false, hideInventory = false }) => {
  if (!avatar) return null;

  const skinGrid = customSkin || getAvatarGrid(avatar);

  // Giyilen eşyaları slot'a göre bul
  const getEquipped = (slot) => {
    const itemId = equippedItems?.[slot];
    if (!itemId) return null;
    return SHOP_ITEMS.find(i => i.id === itemId) || null;
  };

  const headItem = getEquipped('head');
  const bodyItem = getEquipped('body');
  const handItem = getEquipped('hand');
  const feetItem = getEquipped('feet');

  // Görsel katmanları render etme yardımcı fonksiyonu
  const renderItemVisual = (item, startX, startY) => {
    if (!item) return null;
    const visual = ITEM_VISUALS[item.id];
    if (!visual || !visual.pixels) return null;

    return visual.pixels.map((row, y) =>
      row.map((color, x) => {
        if (color === 'transparent') return null;
        return (
          <rect
            key={`${item.id}-${x}-${y}`}
            x={startX + x}
            y={startY + y}
            width="1"
            height="1"
            fill={color}
          />
        );
      })
    );
  };

  // Profil fotoğrafı modu: Sadece yüz kısmını gösterecek şekilde ölçeklenmiş SVG döndürür
  if (profileMode) {
    return (
      <svg
        viewBox="2.5 -1.5 11 11" // Sadece başın etrafını odakla
        width="100%"
        height="100%"
        style={{ imageRendering: 'pixelated', display: 'block', borderRadius: '50%' }}
      >
        <g>
          {/* Skin Katmanı */}
          {skinGrid.map((row, y) =>
            row.map((color, x) => {
              if (!color) return null;
              return <rect key={`skin-${x}-${y}`} x={x} y={y} width="1" height="1" fill={color} />;
            })
          )}
        </g>
        <g>
          {renderItemVisual(headItem, 4, 0)}
        </g>
      </svg>
    );
  }

  return (
    <div className="avatar-section">
      {/* === KARAKTER RENDER ALANI === */}
      <div className="avatar-render-area">
        {/* Arkaplan parçacıkları */}
        <div className="avatar-bg-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`} />
          ))}
        </div>

        {/* Ana karakter: piksel-art SVG */}
        <div className="mc-character">
          <svg
            viewBox="0 0 32 36" // Kılıç taşmasını önlemek için biraz daha geniş
            width="160"
            height="180"
            style={{ imageRendering: 'pixelated' }}
            className="mc-svg"
          >
            {/* Skin Katmanı */}
            <g transform="translate(8, 2)">
              {skinGrid.map((row, y) =>
                row.map((color, x) => {
                  if (!color) return null;
                  return (
                    <rect key={`skin-${x}-${y}`} x={x} y={y} width="1" height="1" fill={color} />
                  );
                })
              )}
            </g>

            {/* Zırh ve Eşya Katmanları */}
            <g transform="translate(8, 2)">
              {/* Göğüs Zırhı */}
              {renderItemVisual(bodyItem, 0, 8)}

              {/* Botlar */}
              {feetItem && (
                <>
                  <rect x="4" y="28" width="8" height="4" fill={RARITY_CONFIG[feetItem.rarity]?.color || '#4b5563'} />
                  <rect x="4" y="27" width="8" height="1" fill="#111827" opacity="0.3" />
                </>
              )}

              {/* Kask */}
              {renderItemVisual(headItem, 4, 0)}

              {/* Elde Eşya (Kılıç/Alet) */}
              {renderItemVisual(handItem, 10, 4)}
              
              {/* Elytra Özel Kontrolü */}
              {bodyItem?.id === 'elytra' && renderItemVisual(bodyItem, 0, 8)}
            </g>
          </svg>

        </div>

        {/* Karakter adı */}
        <div className="avatar-name-tag">
          <span className="avatar-name-text">{customSkin ? 'Özel Karakter' : avatar.name}</span>
        </div>

        {/* Zemin gölgesi */}
        <div className="avatar-shadow" />
      </div>

      {/* Giyili eşya bilgileri */}
      {!hideInventory && (
        <div className="equipped-slots">
          <div className="equipped-slot-title">🎽 Giyilen Eşyalar</div>
        <div className="equipped-slots-grid">
          {[
            { slot: 'head', label: '⛑️ Kask', item: headItem },
            { slot: 'body', label: '🛡️ Zırh', item: bodyItem },
            { slot: 'hand', label: '🤚 El', item: handItem },
            { slot: 'feet', label: '👢 Bot', item: feetItem },
          ].map(({ slot, label, item }) => (
            <div
              key={slot}
              className={`equipped-slot-card ${item ? 'has-item' : 'empty'}`}
              style={item ? { '--rarity-color': RARITY_CONFIG[item.rarity]?.color, '--rarity-glow': RARITY_CONFIG[item.rarity]?.glow } : {}}
            >
              <div className="slot-label">{label}</div>
              {item ? (
                <>
                  <div className="slot-item-emoji">{item.emoji}</div>
                  <div className="slot-item-name">{item.name}</div>
                </>
              ) : (
                <div className="slot-empty-text">Boş</div>
              )}
            </div>
          ))}
        </div>
        </div>
      )}

      {/* === AVATAR SEÇİM ALANI === */}
      {availableAvatars && (
        <div className="avatar-selector">
          <div className="avatar-selector-title">🎭 Karakter Seç</div>
          <div className="avatar-grid">
            {availableAvatars.map(av => {
              const isLocked = av.unlockLevel > playerLevel;
              const isSelected = av.id === avatar.id && !customSkin;
              return (
                <button
                  key={av.id}
                  className={`avatar-card ${isSelected ? 'selected' : ''} ${isLocked ? 'locked' : ''}`}
                  onClick={() => !isLocked && onSelectAvatar && onSelectAvatar(av)}
                  title={isLocked ? `Seviye ${av.unlockLevel}'de açılır` : av.name}
                  disabled={isLocked}
                >
                  {isLocked && <div className="avatar-lock-overlay">🔒<span>Lv.{av.unlockLevel}</span></div>}
                  <div className="avatar-card-emoji">{av.emoji}</div>
                  <div className="avatar-card-name">{av.name}</div>
                  {isSelected && <div className="avatar-selected-dot" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarDisplay;
