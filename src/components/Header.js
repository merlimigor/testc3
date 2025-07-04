import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>
        <span>WAVE</span>
        <span className="cast">CAST</span>
      </h1>
      <p className="location">Saquarema</p>
    </header>
  );
}

export default Header;
