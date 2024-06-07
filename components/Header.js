import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">BAK-ONE</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;