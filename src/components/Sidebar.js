import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-header">
        <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle sidebar">
          {isOpen ? '⟨' : '⟩'}
        </button>
        <div className="brand">
          <span className="brand-icon">🌟</span>
          {isOpen && <span className="brand-text">TechNova</span>}
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink end to="/" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span className="link-icon">🏠</span>
          {isOpen && <span className="link-text">Home</span>}
        </NavLink>
        <NavLink to="/temperature" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span className="link-icon">🌡️</span>
          {isOpen && <span className="link-text">Temperature</span>}
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span className="link-icon">📘</span>
          {isOpen && <span className="link-text">About</span>}
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span className="link-icon">✉️</span>
          {isOpen && <span className="link-text">Contact</span>}
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        {isOpen && (
          <div className="footer-note">
            <div className="note-title">Status</div>
            <div className="note-badge">Online</div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
