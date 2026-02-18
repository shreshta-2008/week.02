import React from 'react';

// ES6 Named Export & Arrow Function
export const Header = ({ missionName, status }) => {
  return (
    <header className="mission-header">
      <div className="orbit-icon"></div>
      <h1 className="glitch-text" data-text={missionName}>
        {missionName}
      </h1>
      <div className="status-indicator">
        <span className="pulse-dot"></span>
        <p>SYSTEM STATUS: <span className="status-val">{status}</span></p>
      </div>
      <div className="header-line"></div>
    </header>
  );
};