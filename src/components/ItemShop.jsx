import React, { useState } from 'react';
import { SHOP_ITEMS, CATEGORIES, RARITY_CONFIG } from '../data/shopItems';

const ItemShop = ({ playerXP, inventory, equippedItems, onBuy, onEquip, onUnequip }) => {
  const [activeTab, setActiveTab] = useState('shop'); // 'shop' | 'inventory'
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [buySuccess, setBuySuccess] = useState(null);

  // Filtrelenmiş eşyalar
  const filteredItems = SHOP_ITEMS.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  const isOwned = (itemId) => inventory.includes(itemId);
  const isEquipped = (itemId) => Object.values(equippedItems).includes(itemId);
  const canAfford = (price) => playerXP >= price;

  // Satın alma işlemi
  const handleBuy = (item) => {
    if (!canAfford(item.price) || isOwned(item.id)) return;
    onBuy(item);
    setBuySuccess(item.id);
    setTimeout(() => setBuySuccess(null), 2000);
    setSelectedItem(null);
  };

  // Giydir / çıkar
  const handleEquipToggle = (item) => {
    if (item.slot === 'none') return;
    if (isEquipped(item.id)) {
      onUnequip(item.slot);
    } else {
      onEquip(item);
    }
  };

  // Envanterdeki eşyalar
  const inventoryItems = SHOP_ITEMS.filter(item => inventory.includes(item.id));

  return (
    <div className="item-shop">
      {/* Üst Tab Seçici */}
      <div className="shop-tabs">
        <button
          className={`shop-tab ${activeTab === 'shop' ? 'active' : ''}`}
          onClick={() => setActiveTab('shop')}
          id="tab-shop"
        >
          🛒 Mağaza
          <span className="shop-tab-count">{SHOP_ITEMS.length} eşya</span>
        </button>
        <button
          className={`shop-tab ${activeTab === 'inventory' ? 'active' : ''}`}
          onClick={() => setActiveTab('inventory')}
          id="tab-inventory"
        >
          🎒 Envanterim
          <span className="shop-tab-count">{inventoryItems.length} eşya</span>
        </button>
      </div>

      {/* ========== MAĞAZA TAB ========== */}
      {activeTab === 'shop' && (
        <div className="shop-content">
          {/* Kategori Filtresi */}
          <div className="category-filter">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                id={`cat-${cat.id}`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>

          {/* Eşya Izgarası */}
          <div className="items-grid">
            {filteredItems.map(item => {
              const owned = isOwned(item.id);
              const affordable = canAfford(item.price);
              const rarity = RARITY_CONFIG[item.rarity];
              const isSuccess = buySuccess === item.id;

              return (
                <div
                  key={item.id}
                  className={`item-card ${item.rarity} ${owned ? 'owned' : ''} ${!affordable && !owned ? 'locked' : ''} ${isSuccess ? 'buy-success' : ''}`}
                  style={{
                    '--rarity-color': rarity.color,
                    '--rarity-glow': rarity.glow,
                    '--rarity-border': rarity.border,
                  }}
                  onClick={() => setSelectedItem(selectedItem?.id === item.id ? null : item)}
                  id={`item-${item.id}`}
                >
                  {/* Kilitli overlay */}
                  {!owned && !affordable && (
                    <div className="item-lock-overlay">
                      <span className="lock-icon">🔒</span>
                      <span className="lock-xp">+{item.price - playerXP} XP gerek</span>
                    </div>
                  )}

                  {/* Sahip olunan rozet */}
                  {owned && (
                    <div className="owned-badge">✓</div>
                  )}

                  {/* Başarı animasyonu */}
                  {isSuccess && (
                    <div className="success-flash">✨ Alındı!</div>
                  )}

                  {/* Rarity şeridi */}
                  <div className="rarity-stripe" />

                  {/* Eşya ikonu */}
                  <div className="item-emoji">{item.emoji}</div>

                  {/* Eşya bilgisi */}
                  <div className="item-info">
                    <div className="item-name">{item.name}</div>
                    <div className="item-rarity-badge" style={{ color: rarity.color }}>
                      {rarity.label}
                    </div>
                  </div>

                  {/* Fiyat */}
                  <div className={`item-price ${owned ? 'owned-price' : affordable ? 'can-afford' : 'cant-afford'}`}>
                    {owned ? '✅ Sahipsin' : `⚡ ${item.price.toLocaleString()} XP`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========== ENVANTER TAB ========== */}
      {activeTab === 'inventory' && (
        <div className="inventory-content">
          {inventoryItems.length === 0 ? (
            <div className="empty-inventory">
              <div className="empty-inv-icon">📦</div>
              <div className="empty-inv-title">Envanterin Boş</div>
              <div className="empty-inv-desc">Mağazadan eşya satın al ve buraya ekle!</div>
            </div>
          ) : (
            <div className="items-grid inventory-grid">
              {inventoryItems.map(item => {
                const equipped = isEquipped(item.id);
                const rarity = RARITY_CONFIG[item.rarity];
                const canEquip = item.slot !== 'none';

                return (
                  <div
                    key={item.id}
                    className={`item-card ${item.rarity} owned ${equipped ? 'equipped-active' : ''}`}
                    style={{
                      '--rarity-color': rarity.color,
                      '--rarity-glow': rarity.glow,
                      '--rarity-border': rarity.border,
                    }}
                    onClick={() => setSelectedItem(selectedItem?.id === item.id ? null : item)}
                    id={`inv-item-${item.id}`}
                  >
                    {equipped && <div className="equipped-badge">🎽 Giyili</div>}
                    <div className="rarity-stripe" />
                    <div className="item-emoji">{item.emoji}</div>
                    <div className="item-info">
                      <div className="item-name">{item.name}</div>
                      <div className="item-rarity-badge" style={{ color: rarity.color }}>
                        {rarity.label}
                      </div>
                    </div>
                    {canEquip && (
                      <button
                        className={`equip-btn ${equipped ? 'unequip' : ''}`}
                        onClick={(e) => { e.stopPropagation(); handleEquipToggle(item); }}
                        id={`equip-${item.id}`}
                      >
                        {equipped ? '📤 Çıkar' : '📥 Giydir'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ========== DETAY PANELİ (Seçili Eşya) ========== */}
      {selectedItem && (
        <div className="item-detail-panel" id="item-detail-panel">
          <div className="detail-backdrop" onClick={() => setSelectedItem(null)} />
          <div
            className={`detail-card ${selectedItem.rarity}`}
            style={{
              '--rarity-color': RARITY_CONFIG[selectedItem.rarity].color,
              '--rarity-glow': RARITY_CONFIG[selectedItem.rarity].glow,
              '--rarity-border': RARITY_CONFIG[selectedItem.rarity].border,
            }}
          >
            <button className="detail-close" onClick={() => setSelectedItem(null)}>✕</button>

            <div className="detail-emoji">{selectedItem.emoji}</div>
            <div className="detail-name">{selectedItem.name}</div>
            <div className="detail-rarity" style={{ color: RARITY_CONFIG[selectedItem.rarity].color }}>
              ✦ {RARITY_CONFIG[selectedItem.rarity].label}
            </div>
            <div className="detail-description">{selectedItem.description}</div>

            {/* Eşya stats */}
            <div className="detail-stats">
              {selectedItem.power > 0 && (
                <div className="stat-pill">⚔️ Güç: {selectedItem.power}</div>
              )}
              {selectedItem.defense > 0 && (
                <div className="stat-pill">🛡️ Savunma: {selectedItem.defense}</div>
              )}
              {selectedItem.slot !== 'none' && (
                <div className="stat-pill">📍 Slot: {selectedItem.slot}</div>
              )}
            </div>

            {/* Satın alma / giydir butonu */}
            {isOwned(selectedItem.id) ? (
              selectedItem.slot !== 'none' ? (
                <button
                  className={`detail-action-btn ${isEquipped(selectedItem.id) ? 'unequip-btn' : 'equip-primary-btn'}`}
                  onClick={() => { handleEquipToggle(selectedItem); setSelectedItem(null); }}
                  id="detail-equip-btn"
                >
                  {isEquipped(selectedItem.id) ? '📤 Çıkar' : '📥 Avatara Giydir'}
                </button>
              ) : (
                <div className="detail-owned-msg">✅ Sahipsin</div>
              )
            ) : (
              <button
                className={`detail-action-btn buy-btn ${!canAfford(selectedItem.price) ? 'disabled' : ''}`}
                onClick={() => handleBuy(selectedItem)}
                disabled={!canAfford(selectedItem.price)}
                id="detail-buy-btn"
              >
                {canAfford(selectedItem.price)
                  ? `⚡ ${selectedItem.price.toLocaleString()} XP ile Satın Al`
                  : `🔒 Yetersiz XP (${(selectedItem.price - playerXP).toLocaleString()} XP eksik)`}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemShop;
