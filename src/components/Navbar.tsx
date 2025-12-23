import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Cornell CSSA Logo" className="logo-img" />
        </Link>

        {/* Hamburger Icon */}
        <div 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About CSSA
          </Link>
          <Link 
            to="/events" 
            className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Events
          </Link>
          <Link 
            to="/guide" 
            className={`nav-link ${location.pathname === '/guide' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Guide
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;