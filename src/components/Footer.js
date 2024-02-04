// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h6 className="footer-title">SMARTNAILS</h6>
        <p className="footer-text">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
