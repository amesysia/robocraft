import React, { useState, useEffect, useRef } from 'react';

// Varsayılan skin renkleri (Steve bazlı)
const defaultSkin = Array(32).fill().map((_, y) => 
  Array(16).fill().map((_, x) => {
    // Baş (8x8) -> x:4-11, y:0-7
    if (x >= 4 && x < 12 && y >= 0 && y < 8) {
      if (y < 2) return '#5b3c1a'; // Saç
      if (y === 4 && (x === 6 || x === 9)) return '#3d85c8'; // Göz
      if (y === 6 && x >= 6 && x < 10) return '#5b3c1a'; // Ağız
      return '#c68642'; // Ten
    }
    // Gövde (8x12) -> x:4-11, y:8-19
    if (x >= 4 && x < 12 && y >= 8 && y < 20) {
      return '#3d85c8'; // Tişört
    }
    // Kollar (4x12) -> x:0-3 (Sol), x:12-15 (Sağ), y:8-19
    if ((x < 4 || x >= 12) && y >= 8 && y < 20) {
      return (y < 12) ? '#3d85c8' : '#c68642'; // Kısa kol + Ten
    }
    // Bacaklar (4x12) -> x:4-7 (Sol), x:8-11 (Sağ), y:20-31
    if (x >= 4 && x < 12 && y >= 20 && y < 32) {
      return (y > 28) ? '#3d2b1f' : '#5b3c1a'; // Ayakkabı + Pantolon
    }
    return null; // Boşluk
  })
);

const PALETTE = [
  '#c68642', '#e8b890', '#5b3c1a', '#3d85c8', '#3d8b3d', '#4a7c4a', 
  '#fbbf24', '#ef4444', '#10b981', '#8b5cf6', '#111827', '#ffffff'
];

const SkinEditor = ({ currentSkin, onSave, onClose }) => {
  const [grid, setGrid] = useState(currentSkin || defaultSkin);
  const [activeColor, setActiveColor] = useState(PALETTE[0]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('brush'); // 'brush' | 'eraser'

  const handlePaint = (x, y) => {
    // Sadece karakterin olduğu pikselleri boyamaya izin ver (null olanları değil)
    if (grid[y][x] === null) return;
    
    const newGrid = [...grid];
    newGrid[y] = [...newGrid[y]];
    newGrid[y][x] = tool === 'eraser' ? defaultSkin[y][x] : activeColor;
    setGrid(newGrid);
  };

  const handleMouseDown = (x, y) => {
    setIsDrawing(true);
    handlePaint(x, y);
  };

  const handleMouseEnter = (x, y) => {
    if (isDrawing) {
      handlePaint(x, y);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div className="skin-editor-overlay">
      <div className="skin-editor-modal">
        <div className="se-header">
          <h3>🖌️ Skin Düzenleyici</h3>
          <button className="se-close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="se-body">
          {/* Sol Panel: Renkler ve Araçlar */}
          <div className="se-tools">
            <div className="se-tool-group">
              <h4>Araçlar</h4>
              <div className="se-tool-btns">
                <button 
                  className={`se-tool-btn ${tool === 'brush' ? 'active' : ''}`}
                  onClick={() => setTool('brush')}
                >
                  🖌️ Fırça
                </button>
                <button 
                  className={`se-tool-btn ${tool === 'eraser' ? 'active' : ''}`}
                  onClick={() => setTool('eraser')}
                >
                  🧹 Silgi
                </button>
              </div>
            </div>

            <div className="se-tool-group">
              <h4>Renk Paleti</h4>
              <div className="se-palette">
                {PALETTE.map(color => (
                  <button
                    key={color}
                    className={`se-color-swatch ${activeColor === color && tool === 'brush' ? 'active' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setActiveColor(color);
                      setTool('brush');
                    }}
                  />
                ))}
              </div>
              <div className="se-custom-color">
                <input 
                  type="color" 
                  value={activeColor}
                  onChange={(e) => {
                    setActiveColor(e.target.value);
                    setTool('brush');
                  }}
                />
                <span>Özel Renk</span>
              </div>
            </div>
          </div>

          {/* Orta Panel: Piksel Grid (Canvas) */}
          <div className="se-canvas-container">
            <div 
              className="se-grid" 
              onMouseLeave={handleMouseUp}
            >
              {grid.map((row, y) => (
                <div key={y} className="se-row">
                  {row.map((color, x) => (
                    <div
                      key={`${x}-${y}`}
                      className={`se-pixel ${color === null ? 'empty' : ''}`}
                      style={{ backgroundColor: color || 'transparent' }}
                      onMouseDown={() => handlePaint(x, y)}
                      onMouseEnter={() => handleMouseEnter(x, y)}
                      // Mobil için basit dokunma desteği
                      onTouchStart={() => handlePaint(x, y)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="se-footer" style={{ justifyContent: 'space-between' }}>
          <button 
            className="se-btn secondary" 
            onClick={() => setGrid(defaultSkin)}
            style={{ color: 'var(--accent-red)' }}
          >
            🔄 Sıfırla
          </button>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="se-btn secondary" onClick={onClose}>İptal</button>
            <button className="se-btn primary" onClick={() => onSave(grid)}>✅ Tamamlandı ve Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinEditor;
