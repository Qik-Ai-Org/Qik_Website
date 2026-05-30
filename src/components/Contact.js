import React from "react";
import Header from "./home/Header";
import Footer from "./home/Footer";
import ContactForm from "./ContactForm";
import "../contact.css";

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
      
      <Footer />
    </div>
  );
};

export default Contact;
