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

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Close menu on escape key press
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
    <>
      <header id="header" className={`modern-header ${isScrolled ? 'scrolled' : ''}`}> 
        <div className="container"> 
          <nav className="navbar-modern" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap' }}> 
            {/* Logo Section */} 
            <div className="navbar-brand" style={{ flex: '0 0 auto' }}> 
              <Link to="/" className="logo-link"> 
                <img 
                  src="./images/logo.png" 
                  alt="Qik.ai Logo" 
                  className="logo-img" 
                /> 
              </Link> 
            </div> 

            {/* Desktop Navigation */} 
            <div className="navbar-nav desktop-nav" style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'center' }}> 
              <div className="nav-links" style={{ display: 'flex', gap: '30px' }}> 
                <Link to="/" className="nav-link">Home</Link> 
                <Link to="/about" className="nav-link">About</Link> 
                <Link to="/contact" className="nav-link">Contact</Link> 
              </div> 
            </div> 

            {/* Contact Info */} 
            <div className="header-contact" style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}> 
              <a href="mailto:hello@qik.ai" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}> 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> 
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/> 
                </svg> 
                <span>hello@qik.ai</span> 
              </a> 
            </div>

            {/* Modern Mobile Menu Button */}
            <button 
              className="mobile-menu-button" 
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className={`hamburger-icon ${isMobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </nav> 
        </div> 
      </header>

      {/* Modern Mobile Navigation Overlay - Outside Header */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMobileMenu}>
          <div className="mobile-nav-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <img src="./images/logo.png" alt="Qik.ai" className="mobile-nav-logo" />
              <button 
                className="mobile-nav-close" 
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <nav className="mobile-nav-links">
              <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="nav-link-icon">🏠</span>
                <span className="nav-link-text">Home</span>
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="nav-link-icon">ℹ️</span>
                <span className="nav-link-text">About</span>
              </Link>
              <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="nav-link-icon">📧</span>
                <span className="nav-link-text">Contact</span>
              </Link>
            </nav>

            <div className="mobile-nav-footer">
              <a href="mailto:hello@qik.ai" className="mobile-contact-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
                hello@qik.ai
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
