import React, { useState } from 'react';
import AvatarDisplay from './AvatarDisplay';
import { AVATARS } from '../data/avatarData';
import { Trophy, Star, Sparkles } from 'lucide-react';

const GOLEM_VARIATIONS = {
  m1: [
    { id: 'golem_m1', name: 'Kömür Golemi', emoji: '⬛' },
    { id: 'golem_m1_magma', name: 'Magma Kömür Golemi', emoji: '🌋' },
  ],
  m4: [
    { id: 'golem_m4', name: 'Demir Golemi', emoji: '⚪' },
    { id: 'golem_m4_rust', name: 'Paslı Demir Golemi', emoji: '⛓️' }
  ],
  m2: [
    { id: 'golem_m2', name: 'Bakır Golemi', emoji: '🟠' },
    { id: 'golem_m2_ox', name: 'Oksitli Bakır Golemi', emoji: '🗽' },
  ],
  m3: [
    { id: 'golem_m3', name: 'Altın Golemi', emoji: '🟡' },
    { id: 'golem_m3_rose', name: 'Rose Gold Golem', emoji: '🌸' },
  ]
};

const ShowcaseView = ({ playerData }) => {
  const currentAvatar = AVATARS.find(a => a.id === playerData.avatarId) || AVATARS[0];
  const { golemVariations, unlockedGolems, golemEquipment } = playerData;
  
  const hasResource = (res) => (unlockedGolems || []).includes(res);

  const ALL_GOLEMS = [
    { id: 'm1', res: 'coal' },
    { id: 'm4', res: 'iron' },
    { id: 'm2', res: 'copper' },
    { id: 'm3', res: 'gold' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', fontSize: '2.5rem', color: 'var(--text-primary)' }}>
          <Trophy size={40} className="text-cyan" /> 
          Benim Vitrinim
          <Star size={40} className="text-cyan" />
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}>Seni ve bulduğun tüm Golemleri arkadaşlarına göster!</p>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-end', 
        justifyContent: 'center', 
        gap: '4rem', 
        width: '100%', 
        maxWidth: '1200px',
        padding: '3rem',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        border: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Dekoratif Arkaplan Işıltıları */}
        <div style={{ position: 'absolute', top: '-50px', left: '20%', width: '300px', height: '300px', background: 'var(--accent-cyan)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-50px', right: '20%', width: '300px', height: '300px', background: 'var(--accent-red)', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%' }}></div>

        {/* ANA OYUNCU */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          <div style={{ transform: 'scale(1.5)', transformOrigin: 'bottom center', marginBottom: '2rem' }}>
            <AvatarDisplay
              avatar={currentAvatar}
              customSkin={playerData.customSkin}
              equippedItems={playerData.equippedItems}
            />
          </div>
          <div style={{ background: 'var(--bg-card)', padding: '0.8rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={20} className="text-cyan" />
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Seviye {playerData.level} Usta</span>
          </div>
        </div>

        {/* UNLOCKED GOLEMS */}
        {ALL_GOLEMS.map(g => {
          if (!hasResource(g.res)) return null;
          
          const gId = g.id;
          const currentVariationId = golemVariations?.[gId] || GOLEM_VARIATIONS[gId][0].id;
          const golemAvatar = GOLEM_VARIATIONS[gId].find(v => v.id === currentVariationId);
          const golemEquips = golemEquipment?.[gId] || {};

          return (
            <div key={gId} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
              <div style={{ transform: 'scale(1.2)', transformOrigin: 'bottom center', marginBottom: '1.5rem' }}>
                <AvatarDisplay
                  avatar={golemAvatar}
                  equippedItems={golemEquips}
                />
              </div>
              <div style={{ background: 'rgba(0,0,0,0.5)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {golemAvatar.name}
              </div>
            </div>
          );
        })}

        {/* EĞER HİÇ GOLEM YOKSA BİLGİ */}
        {ALL_GOLEMS.every(g => !hasResource(g.res)) && (
          <div style={{ position: 'absolute', right: '10%', top: '40%', maxWidth: '250px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <p>Keşif Madeninde kazı yaparak Golemleri bul ve vitrinine ekle!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowcaseView;
