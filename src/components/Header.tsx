import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile side navigation
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1 className="header-title">My Portfolio</h1>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul className="nav-list" style={{listStyle: 'none !important'}}>
          <li className="nav-item">
            <a href="#about" className="nav-link" style={{color: 'white'}}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" style={{color: 'white'}}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" style={{color: 'white'}}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" style={{color: 'white'}}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu Button (visible on mobile) */}
      <button className="menu-button" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* Mobile Side Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#projects" className="mobile-nav-link" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#skills" className="mobile-nav-link" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
