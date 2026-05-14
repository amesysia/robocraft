import React from 'react';

const PlaceholderView = ({ title }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-secondary)' }}>
    <h2>{title} Modülü Yapım Aşamasında</h2>
  </div>
);

export default PlaceholderView;
