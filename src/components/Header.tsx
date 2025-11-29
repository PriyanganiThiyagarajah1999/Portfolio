// src/components/Header.tsx

import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <h1 className="logo">Priyangani Thiyagarajah <span className="logo-title">| Full-Stack Dev</span></h1>
        <nav className="navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="btn btn-nav">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;