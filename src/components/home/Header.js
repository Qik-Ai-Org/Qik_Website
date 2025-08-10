import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToApps = () => {
    const appsSection = document.getElementById('business-solutions');
    if (appsSection) {
      appsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header id="header" className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar-modern">
          {/* Logo Section */}
          <div className="navbar-brand">
            <Link to="/" className="logo-link">
              <img
                src="./images/logo.png"
                alt="Qik.ai Logo"
                className="logo-img"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-nav desktop-nav">
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-nav-content">
              <div className="mobile-nav-links">
                <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="header-contact">
            <a href="mailto:hello@qik.ai" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
              </svg>
              <span>hello@qik.ai</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
