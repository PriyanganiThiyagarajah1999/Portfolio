import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Brand */}
        <div>
          <h2>Priyangani Thiyagarajah</h2>
          <p>Full-Stack Developer</p>
        </div>

        {/* Center Section - Links */}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Section - Social Media */}
        <div className="social-icons">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:priyanganithiyagarajah1999@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Priyangani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
