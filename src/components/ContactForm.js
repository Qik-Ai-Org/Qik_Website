import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-header">
          <h3>Send us a message</h3>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="demo">Request a Demo</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership</option>
              <option value="pricing">Pricing Information</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about your project, requirements, or any questions you have..."
            className="form-textarea"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
        >
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z"/>
              </svg>
            </>
          )}
        </button>

        {submitStatus === "success" && (
          <div className="status-message success">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
            </svg>
            <span>Message sent successfully! We'll get back to you soon.</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="status-message error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
            </svg>
            <span>Failed to send message. Please try again.</span>
          </div>
        )}
      </form>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .contact-form-container {
              animation: slideInFromRight 1s ease-out;
            }

            .contact-form {
              background: rgba(255, 255, 255, 0.7);
              backdrop-filter: blur(10px);
              border-radius: 20px;
              padding: 2.5rem;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .form-header {
              text-align: center;
              margin-bottom: 2rem;
            }

            .form-header h3 {
              font-size: 1.75rem;
              font-weight: 700;
              color: var(--text-primary, #1e293b);
              margin-bottom: 0.5rem;
            }

            .form-header p {
              color: var(--text-secondary, #64748b);
              font-size: 0.95rem;
            }

            .form-row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1.5rem;
              margin-bottom: 1.5rem;
            }

            @media (max-width: 768px) {
              .form-row {
                grid-template-columns: 1fr;
                gap: 1rem;
                margin-bottom: 1rem;
              }

              .contact-form {
                padding: 1.5rem;
              }
            }

            .form-group {
              margin-bottom: 1.5rem;
            }

            .form-group:last-of-type {
              margin-bottom: 2rem;
            }

            .contact-form label {
              display: block;
              margin-bottom: 0.5rem;
              font-weight: 600;
              color: var(--text-primary, #1e293b);
              font-size: 0.9rem;
            }

            .form-input,
            .form-select,
            .form-textarea {
              width: 100%;
              padding: 0.875rem 1rem;
              border: 2px solid rgba(203, 213, 225, 0.5);
              border-radius: 12px;
              font-size: 0.95rem;
              transition: all 0.3s ease;
              background: rgba(255, 255, 255, 0.8);
              backdrop-filter: blur(5px);
              box-sizing: border-box;
            }

            .form-input:focus,
            .form-select:focus,
            .form-textarea:focus {
              outline: none;
              border-color: #00D4E6;
              box-shadow: 0 0 0 3px rgba(0, 212, 230, 0.1);
              background: rgba(255, 255, 255, 0.95);
            }

            .form-textarea {
              resize: vertical;
              min-height: 120px;
              font-family: inherit;
            }

            .submit-btn {
              width: 100%;
              padding: 1rem 2rem;
              background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
              color: white;
              border: none;
              border-radius: 12px;
              font-size: 1rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              min-height: 50px;
            }

            .submit-btn:hover:not(:disabled) {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(0, 212, 230, 0.3);
            }

            .submit-btn:disabled {
              opacity: 0.8;
              cursor: not-allowed;
              transform: none;
            }

            .submit-btn.submitting {
              background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
              opacity: 0.9;
            }

            .spinner {
              width: 18px;
              height: 18px;
              border: 2px solid rgba(255, 255, 255, 0.3);
              border-top: 2px solid white;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            .status-message {
              margin-top: 1rem;
              padding: 0.875rem 1rem;
              border-radius: 10px;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              font-size: 0.9rem;
              font-weight: 500;
            }

            .status-message.success {
              background: rgba(34, 197, 94, 0.1);
              color: #16a34a;
              border: 1px solid rgba(34, 197, 94, 0.2);
            }

            .status-message.error {
              background: rgba(239, 68, 68, 0.1);
              color: #dc2626;
              border: 1px solid rgba(239, 68, 68, 0.2);
            }

            @keyframes slideInFromRight {
              0% { opacity: 0; transform: translateX(30px); }
              100% { opacity: 1; transform: translateX(0); }
            }
          `
        }}
      />
    </div>
  );
};

export default ContactForm;
