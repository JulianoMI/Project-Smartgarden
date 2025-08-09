import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-brand">
              <span className="brand-icon">🌟</span>
              <span className="brand-text">TechNova</span>
            </div>
            <p className="footer-description">
              Pioneering the future of intelligent living spaces through innovative IoT solutions and sustainable technology integration.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                📘
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                🐦
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                📷
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/temperature" className="footer-link">Temperature Monitor</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="footer-section">
            <h3 className="footer-title">Solutions</h3>
            <div className="footer-links">
              <button className="footer-link">Climate Control Systems</button>
              <button className="footer-link">Energy Management</button>
              <button className="footer-link">Security Integration</button>
              <button className="footer-link">Custom Automation</button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>456 Innovation Plaza, Silicon Valley, CA 94025</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>hello@technova.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (650) 789-0123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} TechNova. All rights reserved.</p>
            <div className="footer-bottom-links">
              <button className="footer-bottom-link">Privacy Policy</button>
              <button className="footer-bottom-link">Terms of Service</button>
              <button className="footer-bottom-link">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
