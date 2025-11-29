// src/components/Footer.tsx

import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <p className="footer-text">
        &copy; {currentYear} Priyangani Thiyagarajah. All rights reserved.
      </p>
      {/* <p className="footer-built">
        Built with React, TypeScript, and a focus on clean design.
      </p> */}
    </footer>
  );
};

export default Footer;