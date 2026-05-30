import React, { useState } from 'react';
import AvatarDisplay from './AvatarDisplay';
import { AVATARS } from '../data/avatarData';
import { Trophy, Star, Sparkles } from 'lucide-react';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', padding: '2rem', overflowY: 'auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', fontSize: '2.5rem', color: 'var(--text-primary)' }}>
          <Trophy size={40} className="text-cyan" /> 
          Profil ve Vitrin
          <Star size={40} className="text-cyan" />
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}>Karakterini ve Golemlerini Sergile!</p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px',
        justifyContent: 'center',
        paddingBottom: '2rem'
      }}>
        
        {/* KARAKTERİM BÖLÜMÜ */}
        <div style={{ 
          flex: '1',
          minWidth: '320px',
          padding: '3rem',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: '-50px', left: '20%', width: '300px', height: '300px', background: 'var(--accent-cyan)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%' }}></div>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.8rem', color: 'var(--accent-cyan)', zIndex: 10 }}>Karakterim</h2>
          
          {/* Avatar'ın taşmaması için yeterli margin bırakıyoruz (scale 1.5 olduğu için ekstra alan gerekiyor) */}
          <div style={{ transform: 'scale(1.5)', transformOrigin: 'top center', marginTop: '1rem', marginBottom: '6rem', zIndex: 10 }}>
            <AvatarDisplay
              avatar={currentAvatar}
              customSkin={playerData.customSkin}
              equippedItems={playerData.equippedItems}
              hideInventory={true}
            />
          </div>
          
          <div style={{ background: 'var(--bg-card)', padding: '0.8rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 10 }}>
            <Sparkles size={20} className="text-cyan" />
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Seviye {playerData.level} Usta</span>
          </div>
        </div>

        {/* VİTRİNİM BÖLÜMÜ (GOLEMLER) */}
        <div style={{ 
          flex: '2',
          minWidth: '400px',
          padding: '3rem',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', bottom: '-50px', right: '20%', width: '300px', height: '300px', background: 'var(--accent-red)', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%' }}></div>
          <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: 'var(--accent-cyan)', zIndex: 10 }}>Vitrinim</h2>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
            marginTop: '1rem',
            zIndex: 10
          }}>
            {ALL_GOLEMS.map(g => {
              if (!hasResource(g.res)) return null;
              
              const gId = g.id;
              const currentVariationId = golemVariations?.[gId] || GOLEM_VARIATIONS[gId][0].id;
              const golemAvatar = GOLEM_VARIATIONS[gId].find(v => v.id === currentVariationId);
              const golemEquips = golemEquipment?.[gId] || {};

              return (
                <div key={gId} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Golemler scale(1.2) olduğu için alt kısımdan biraz daha boşluk bırakıyoruz */}
                  <div style={{ transform: 'scale(1.2)', transformOrigin: 'top center', marginBottom: '2.5rem' }}>
                    <AvatarDisplay
                      avatar={golemAvatar}
                      equippedItems={golemEquips}
                      hideInventory={true}
                    />
                  </div>
                </div>
              );
            })}

            {ALL_GOLEMS.every(g => !hasResource(g.res)) && (
              <div style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '2rem' }}>
                <p>Keşif Madeninde kazı yaparak Golemleri bul ve vitrinine ekle!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseView;
