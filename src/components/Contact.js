import React from "react";
import Header from "./home/Header";
import Footer from "./home/Footer";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Header />
      <section id="qik-contact" className="qik-contact hero-enhanced">
        <div className="hero-background">
          <div className="hero-gradient-orb hero-orb-1"></div>
          <div className="hero-gradient-orb hero-orb-2"></div>
          <div className="hero-gradient-orb hero-orb-3"></div>
          <div className="hero-gradient-orb hero-orb-4"></div>
          <div className="hero-gradient-orb hero-orb-5"></div>
          <div className="hero-particles"></div>
          <div className="hero-particles-secondary"></div>
        </div>
        
        <div className="container hero-content">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10 col-md-12">
              {/* Contact Header */}
              <div className="contact-header text-center mb-5">
                <h1 className="contact-title">Get In Touch</h1>
                <p className="contact-subtitle">
                  Ready to transform your business with AI-powered solutions? 
                  We'd love to hear from you and discuss how Qik.ai can help you achieve your goals.
                </p>
              </div>

              {/* Contact Content */}
              <div className="row">
                {/* Contact Information */}
                <div className="col-lg-5 col-md-6 mb-4">
                  <div className="contact-info">
                    <div className="contact-info-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                        </svg>
                      </div>
                      <div className="contact-details">
                        <h4>Email Us</h4>
                        <p>hello@qik.ai</p>
                        <p>We typically respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                        </svg>
                      </div>
                      <div className="contact-details">
                        <h4>Office</h4>
                        <p>Remote-first company</p>
                        <p>Serving clients globally</p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                        </svg>
                      </div>
                      <div className="contact-details">
                        <h4>Support</h4>
                        <p>24/7 Customer Support</p>
                        <p>Technical assistance available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-7 col-md-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Modern Header Styles */
            .modern-header {
              background: rgba(248, 250, 252, 0.95);
              backdrop-filter: blur(20px);
              border-bottom: 1px solid rgba(139, 92, 246, 0.1);
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 10003;
              transition: all 0.3s ease;
              height: 60px;
              padding: 0;
              overflow: hidden;
            }

            .modern-header.scrolled {
              background: rgba(248, 250, 252, 0.98);
              box-shadow: 0 8px 32px rgba(139, 92, 246, 0.1);
              border-bottom-color: rgba(139, 92, 246, 0.2);
            }

            .navbar-modern {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 8px 0;
              position: relative;
              max-width: 100%;
              overflow: hidden;
            }

            /* Logo Section */
            .navbar-brand {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              z-index: 1001;
              flex: 0 0 auto;
            }

            .logo-link {
              display: flex;
              align-items: center;
              gap: 12px;
              text-decoration: none;
              transition: all 0.3s ease;
              padding: 8px 0;
            }

            .logo-link:hover {
              transform: translateY(-1px);
            }

            .logo-img {
              height: 50px;
              width: auto;
              transition: all 0.3s ease;
              display: block;
              vertical-align: middle;
              max-width: 100%;
            }

            .logo-text {
              font-size: 1.8rem;
              font-weight: 800;
              line-height: 1;
            }

            .logo-qik {
              color: var(--text-primary);
            }

            .logo-ai {
              background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }

            /* Desktop Navigation */
            .desktop-nav {
              display: flex;
              align-items: center;
              gap: 40px;
            }

            .nav-links {
              display: flex;
              align-items: center;
              gap: 30px;
            }

            .nav-link {
              color: var(--text-primary);
              text-decoration: none;
              font-weight: 500;
              font-size: 1rem;
              padding: 8px 0;
              position: relative;
              transition: all 0.3s ease;
            }

            .nav-link::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 2px;
              background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
              transition: width 0.3s ease;
            }

            .nav-link:hover {
              color: var(--qik-purple);
            }

            .nav-link:hover::after {
              width: 100%;
            }

            /* Navigation CTA Buttons */
            .nav-cta {
              display: flex;
              align-items: center;
              gap: 12px;
            }

            .nav-btn {
              padding: 10px 20px;
              font-size: 0.9rem;
              font-weight: 600;
              border-radius: 10px;
              transition: all 0.3s ease;
              display: inline-flex;
              align-items: center;
              gap: 6px;
              text-decoration: none;
              border: none;
              cursor: pointer;
            }

            .nav-btn.btn-primary {
              background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
              color: white;
              box-shadow: 0 4px 15px rgba(0, 212, 230, 0.3);
              border-radius: 10px;
            }

            .nav-btn.btn-primary:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(0, 212, 230, 0.4);
              color: white;
            }

            .nav-btn.btn-outline-primary {
              background: rgba(0, 212, 230, 0.05);
              border: 1.5px solid rgba(0, 212, 230, 0.3);
              color: var(--qik-cyan);
              backdrop-filter: blur(10px);
              border-radius: 10px;
            }

            .nav-btn.btn-outline-primary:hover {
              background: rgba(0, 212, 230, 0.1);
              border-color: var(--qik-cyan);
              color: var(--qik-cyan);
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(0, 212, 230, 0.2);
            }

            /* Modern Mobile Menu Styles */
            .mobile-menu-button {
              display: none;
              background: none;
              border: none;
              padding: 8px;
              cursor: pointer;
              z-index: 99998;
              transition: all 0.3s ease;
              border-radius: 8px;
            }

            .mobile-menu-button:hover {
              background: rgba(139, 92, 246, 0.1);
            }

            @media (max-width: 768px) {
              .mobile-menu-button {
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }

            /* Modern Hamburger Icon */
            .hamburger-icon {
              width: 28px;
              height: 20px;
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            .hamburger-icon span {
              display: block;
              height: 3px;
              width: 100%;
              background: var(--text-primary);
              border-radius: 2px;
              transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
              transform-origin: center;
            }

            .hamburger-icon span:nth-child(1) {
              transform: translateY(0) rotate(0deg);
            }

            .hamburger-icon span:nth-child(2) {
              opacity: 1;
              transform: scaleX(1);
            }

            .hamburger-icon span:nth-child(3) {
              transform: translateY(0) rotate(0deg);
            }

            /* Active Hamburger Animation */
            .hamburger-icon.active span:nth-child(1) {
              transform: translateY(8.5px) rotate(45deg);
            }

            .hamburger-icon.active span:nth-child(2) {
              opacity: 0;
              transform: scaleX(0);
            }

            .hamburger-icon.active span:nth-child(3) {
              transform: translateY(-8.5px) rotate(-45deg);
            }

            /* Mobile Navigation Overlay */
            .mobile-nav-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.6);
              backdrop-filter: blur(8px);
              z-index: 99999;
              display: flex;
              align-items: center;
              justify-content: center;
              animation: fadeInOverlay 0.3s ease-out;
            }

            @keyframes fadeInOverlay {
              from {
                opacity: 0;
                backdrop-filter: blur(0px);
              }
              to {
                opacity: 1;
                backdrop-filter: blur(8px);
              }
            }

            /* Mobile Navigation Menu */
            .mobile-nav-menu {
              background: rgba(248, 250, 252, 0.98);
              backdrop-filter: blur(20px);
              border: 1px solid rgba(139, 92, 246, 0.2);
              border-radius: 24px;
              padding: 0;
              margin: 20px;
              max-width: 400px;
              width: calc(100vw - 40px);
              box-shadow: 
                0 20px 60px rgba(139, 92, 246, 0.15),
                0 8px 32px rgba(0, 0, 0, 0.1);
              animation: slideInMenu 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
              overflow: hidden;
            }

            @keyframes slideInMenu {
              from {
                transform: translateY(-30px) scale(0.95);
                opacity: 0;
              }
              to {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
            }

            /* Mobile Navigation Header */
            .mobile-nav-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 24px 28px 20px;
              border-bottom: 1px solid rgba(139, 92, 246, 0.1);
            }

            .mobile-nav-logo {
              height: 40px;
              width: auto;
            }

            .mobile-nav-close {
              background: rgba(139, 92, 246, 0.1);
              border: none;
              border-radius: 12px;
              padding: 8px;
              cursor: pointer;
              color: var(--text-primary);
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .mobile-nav-close:hover {
              background: rgba(139, 92, 246, 0.2);
              transform: rotate(90deg);
            }

            /* Mobile Navigation Links */
            .mobile-nav-links {
              padding: 24px 28px;
              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            .mobile-nav-link {
              display: flex;
              align-items: center;
              gap: 16px;
              padding: 16px 20px;
              color: var(--text-primary);
              text-decoration: none;
              border-radius: 16px;
              transition: all 0.3s ease;
              font-weight: 600;
              font-size: 1.1rem;
              position: relative;
              overflow: hidden;
            }

            .mobile-nav-link::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, 
                rgba(139, 92, 246, 0.1) 0%, 
                rgba(0, 212, 230, 0.1) 100%);
              transition: left 0.3s ease;
              z-index: 0;
            }

            .mobile-nav-link:hover::before {
              left: 0;
            }

            .mobile-nav-link:hover {
              color: var(--qik-purple);
              transform: translateX(8px);
              box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
            }

            .nav-link-icon {
              font-size: 1.4rem;
              z-index: 1;
              position: relative;
            }

            .nav-link-text {
              z-index: 1;
              position: relative;
            }

            /* Mobile Navigation Footer */
            .mobile-nav-footer {
              padding: 20px 28px 28px;
              border-top: 1px solid rgba(139, 92, 246, 0.1);
            }

            .mobile-contact-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px;
              width: 100%;
              padding: 16px 20px;
              background: linear-gradient(135deg, #8B5CF6 0%, #00D4E6 100%);
              color: white;
              text-decoration: none;
              border-radius: 16px;
              font-weight: 600;
              font-size: 1rem;
              transition: all 0.3s ease;
              box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
            }

            .mobile-contact-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
              color: white;
            }

            /* Contact Info */
            .header-contact {
              display: none;
              position: absolute;
              top: -35px;
              right: 0;
            }

            .contact-link {
              display: flex;
              align-items: center;
              gap: 8px;
              color: var(--text-secondary);
              text-decoration: none;
              font-size: 0.85rem;
              font-weight: 500;
              padding: 6px 12px;
              border-radius: 6px;
              background: rgba(139, 92, 246, 0.05);
              transition: all 0.3s ease;
            }

            .contact-link:hover {
              color: var(--qik-purple);
              background: rgba(139, 92, 246, 0.1);
            }

            /* Responsive Design */
            @media (max-width: 768px) {
              .desktop-nav {
                display: none !important;
              }
              
              .mobile-menu-button {
                display: flex !important;
              }
              
              .header-contact {
                display: none !important;
              }
            }

            @media (min-width: 1200px) {
              .header-contact {
                display: block;
              }
            }

            /* Contact Page Styles */
            .qik-contact {
              min-height: 100vh;
              position: relative;
              overflow: hidden;
              background: linear-gradient(135deg, 
                rgba(248, 250, 252, 0.95) 0%,
                rgba(248, 250, 252, 0.8) 50%,
                rgba(239, 246, 255, 0.9) 100%);
              display: flex;
              align-items: center;
              padding: 140px 0 80px;
            }

            @media (max-width: 600px) {
              .qik-contact {
                padding-top: 170px;
              }
            }

            .contact-header {
              animation: slideInFromTop 1s ease-out;
            }

            .contact-title {
              font-size: 3.5rem;
              font-weight: 800;
              background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              margin-bottom: 1rem;
              line-height: 1.2;
            }

            @media (max-width: 768px) {
              .contact-title {
                font-size: 2.5rem;
              }
            }

            .contact-subtitle {
              font-size: 1.25rem;
              color: var(--text-secondary, #64748b);
              max-width: 600px;
              margin: 0 auto 2rem;
              line-height: 1.6;
            }

            .contact-info {
              background: rgba(255, 255, 255, 0.7);
              backdrop-filter: blur(10px);
              border-radius: 20px;
              padding: 2rem;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
              animation: slideInFromLeft 1s ease-out;
            }

            .contact-info-item {
              display: flex;
              align-items: flex-start;
              gap: 1.5rem;
              margin-bottom: 2rem;
            }

            .contact-info-item:last-child {
              margin-bottom: 0;
            }

            .contact-icon {
              flex-shrink: 0;
              width: 50px;
              height: 50px;
              background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
            }

            .contact-details h4 {
              font-size: 1.25rem;
              font-weight: 700;
              color: var(--text-primary, #1e293b);
              margin-bottom: 0.5rem;
            }

            .contact-details p {
              font-size: 0.95rem;
              color: var(--text-secondary, #64748b);
              margin-bottom: 0.25rem;
              line-height: 1.5;
            }

            .contact-details p:last-child {
              margin-bottom: 0;
            }

            /* Animations */
            @keyframes slideInFromTop {
              0% { opacity: 0; transform: translateY(-30px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            @keyframes slideInFromLeft {
              0% { opacity: 0; transform: translateX(-30px); }
              100% { opacity: 1; transform: translateX(0); }
            }

            /* Reuse existing hero background styles */
            .hero-background {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 0;
            }

            .hero-content {
              position: relative;
              z-index: 3;
            }

            /* Floating gradient orbs */
            .hero-gradient-orb {
              position: absolute;
              border-radius: 50%;
              filter: blur(80px);
              opacity: 0.6;
              animation: float 8s ease-in-out infinite;
            }

            .hero-orb-1 {
              width: 400px;
              height: 400px;
              background: radial-gradient(circle, rgba(0, 212, 230, 0.3) 0%, transparent 70%);
              top: -200px;
              left: -200px;
              animation-delay: 0s;
            }

            .hero-orb-2 {
              width: 300px;
              height: 300px;
              background: radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, transparent 70%);
              top: 60%;
              right: -150px;
              animation-delay: -3s;
            }

            .hero-orb-3 {
              width: 250px;
              height: 250px;
              background: radial-gradient(circle, rgba(232, 121, 249, 0.2) 0%, transparent 70%);
              top: 30%;
              left: 70%;
              animation-delay: -6s;
            }

            .hero-orb-4 {
              width: 180px;
              height: 180px;
              background: radial-gradient(circle, rgba(0, 212, 230, 0.15) 0%, transparent 70%);
              top: 70%;
              left: 10%;
              animation-delay: -2s;
            }

            .hero-orb-5 {
              width: 200px;
              height: 200px;
              background: radial-gradient(circle, rgba(79, 70, 229, 0.18) 0%, transparent 70%);
              top: 10%;
              left: 40%;
              animation-delay: -8s;
            }

            @keyframes float {
              0%, 100% { transform: translateY(0px) scale(1); }
              33% { transform: translateY(-30px) scale(1.1); }
              66% { transform: translateY(20px) scale(0.9); }
            }

            /* Floating particles */
            .hero-particles {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: 
                radial-gradient(2px 2px at 20px 30px, rgba(0, 212, 230, 0.4), transparent),
                radial-gradient(2px 2px at 40px 70px, rgba(79, 70, 229, 0.3), transparent),
                radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(1px 1px at 130px 80px, rgba(0, 212, 230, 0.3), transparent),
                radial-gradient(2px 2px at 160px 30px, rgba(79, 70, 229, 0.2), transparent),
                radial-gradient(1px 1px at 50px 10px, rgba(232, 121, 249, 0.3), transparent),
                radial-gradient(1px 1px at 110px 60px, rgba(0, 212, 230, 0.2), transparent),
                radial-gradient(2px 2px at 80px 90px, rgba(79, 70, 229, 0.15), transparent),
                radial-gradient(1px 1px at 170px 50px, rgba(255, 255, 255, 0.3), transparent),
                radial-gradient(1px 1px at 30px 85px, rgba(232, 121, 249, 0.2), transparent);
              background-repeat: repeat;
              background-size: 120px 80px;
              animation: sparkle 12s linear infinite;
            }

            @keyframes sparkle {
              0% { transform: translateY(0px); }
              100% { transform: translateY(-160px); }
            }

            /* Secondary particle layer for more density */
            .hero-particles-secondary {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: 
                radial-gradient(1px 1px at 35px 15px, rgba(0, 212, 230, 0.25), transparent),
                radial-gradient(1px 1px at 75px 45px, rgba(232, 121, 249, 0.2), transparent),
                radial-gradient(1px 1px at 15px 75px, rgba(79, 70, 229, 0.18), transparent),
                radial-gradient(1px 1px at 145px 25px, rgba(255, 255, 255, 0.3), transparent),
                radial-gradient(1px 1px at 65px 85px, rgba(0, 212, 230, 0.15), transparent),
                radial-gradient(1px 1px at 105px 35px, rgba(232, 121, 249, 0.15), transparent);
              background-repeat: repeat;
              background-size: 100px 60px;
              animation: sparkle-reverse 10s linear infinite;
            }

            @keyframes sparkle-reverse {
              0% { transform: translateY(-100px) rotate(0deg); }
              100% { transform: translateY(-260px) rotate(360deg); }
            }
          `
        }}
      />
      <Footer />
    </div>
  );
};

export default Contact;
