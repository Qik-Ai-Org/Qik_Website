// Modern Qik.ai Advanced Interactions and Animations
class QikAnimations {
  constructor() {
    this.initializeParticles();
    this.initializeScrollAnimations();
    this.initializeHeader();
    this.initializeMicroInteractions();
    this.initializeParallax();
    this.startAnimationLoop();
  }

  // Particle System
  initializeParticles() {
    this.particles = [];
    this.particleContainer = document.createElement('div');
    this.particleContainer.className = 'particles-bg';
    document.body.appendChild(this.particleContainer);

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      this.createParticle();
    }

    // Continuously spawn particles
    setInterval(() => {
      if (this.particles.length < 50) {
        this.createParticle();
      }
    }, 2000);
  }

  createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 10 + 15;
    const opacity = Math.random() * 0.5 + 0.1;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${animationDuration}s`;
    particle.style.opacity = opacity;
    
    // Random colors from gradient palette
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    this.particleContainer.appendChild(particle);
    this.particles.push(particle);
    
    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
        this.particles = this.particles.filter(p => p !== particle);
      }
    }, animationDuration * 1000);
  }

  // Scroll-triggered Animations
  initializeScrollAnimations() {
    this.observeElements();
    
    // Smooth parallax scrolling
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  observeElements() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Staggered animation for feature items
          if (entry.target.classList.contains('feature-item')) {
            const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
            setTimeout(() => {
              entry.target.style.transform = 'translateY(0) scale(1)';
              entry.target.style.opacity = '1';
            }, delay);
          }
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    const elements = document.querySelectorAll('.feature-item, .glass-card, h1, h2, h3');
    elements.forEach(el => {
      el.style.transform = 'translateY(30px) scale(0.95)';
      el.style.opacity = '0';
      el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      this.observer.observe(el);
    });
  }

  handleScroll() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax background elements
    const parallaxElements = document.querySelectorAll('.qik-intro::before');
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });
    
    // Header blur effect
    const header = document.getElementById('header');
    if (header) {
      if (scrolled > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

  // Header Effects
  initializeHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    // Add intersection observer for header visibility
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  // Micro-interactions
  initializeMicroInteractions() {
    this.addButtonRippleEffect();
    this.addCardHoverEffects();
    this.addLogoInteraction();
  }

  addButtonRippleEffect() {
    const buttons = document.querySelectorAll('.btn-modern, .tab-button, .feature-item');
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    // Add ripple CSS
    const style = document.createElement('style');
    style.textContent = `
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  addCardHoverEffects() {
    const cards = document.querySelectorAll('.feature-item, .glass-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
        
        // Add glow effect
        card.style.boxShadow = `
          0 0 20px rgba(102, 126, 234, 0.3),
          0 20px 40px rgba(0, 0, 0, 0.2),
          ${x}px ${y}px 30px rgba(255, 255, 255, 0.1) inset
        `;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
      });
      
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const rotateX = (y / rect.height) * 10;
        const rotateY = (x / rect.width) * -10;
        
        card.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          translateZ(0)
        `;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  addLogoInteraction() {
    const logo = document.querySelector('.img-logovs');
    if (!logo) return;

    logo.addEventListener('mouseenter', () => {
      logo.style.animation = 'logoHover 0.6s ease-out';
    });

    logo.addEventListener('animationend', () => {
      logo.style.animation = '';
    });

    // Add logo hover animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes logoHover {
        0% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(-5deg); }
        50% { transform: scale(1.15) rotate(5deg); }
        75% { transform: scale(1.1) rotate(-2deg); }
        100% { transform: scale(1.05) rotate(0deg); }
      }
    `;
    document.head.appendChild(style);
  }

  // Parallax Effects
  initializeParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const rate = scrolled * (element.dataset.parallax || 0.5);
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  }

  // Animation Loop for continuous effects
  startAnimationLoop() {
    const animateGradients = () => {
      // Animate gradient positions
      const time = Date.now() * 0.001;
      const gradientElements = document.querySelectorAll('[style*="gradient"]');
      
      // This would be expanded for more complex gradient animations
      requestAnimationFrame(animateGradients);
    };
    
    animateGradients();
  }

  // Loading Animation
  static showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'qik-loader';
    loader.innerHTML = `
      <div class="loader-spinner"></div>
      <div class="loader-text">Loading Qik.ai</div>
    `;
    
    document.body.appendChild(loader);
    
    const style = document.createElement('style');
    style.textContent = `
      .qik-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 1;
        transition: opacity 0.5s ease;
      }
      
      .loader-spinner {
        width: 60px;
        height: 60px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top: 3px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
      }
      
      .loader-text {
        color: white;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    
    // Hide loader after content loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.remove();
        }, 500);
      }, 1000);
    });
  }

  // Utility method to create floating icons
  static createFloatingIcon(iconType, container) {
    const icon = document.createElement('div');
    icon.className = `floating-icon floating-icon-${iconType}`;
    icon.innerHTML = `<img src="./images/icon-${iconType}.svg" alt="${iconType} icon">`;
    
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    
    icon.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: 30px;
      height: 30px;
      opacity: 0.6;
      animation: float ${duration}s ease-in-out infinite;
      pointer-events: none;
    `;
    
    container.appendChild(icon);
    
    // Remove after animation cycle
    setTimeout(() => {
      icon.remove();
    }, duration * 1000);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Show loading animation
  QikAnimations.showLoadingAnimation();
  
  // Initialize main animations after a short delay
  setTimeout(() => {
    window.qikAnimations = new QikAnimations();
  }, 500);
  
  // Add floating icons periodically
  setInterval(() => {
    const container = document.querySelector('.qik-intro');
    if (container) {
      const iconTypes = ['compliance', 'hr', 'marketing'];
      const randomIcon = iconTypes[Math.floor(Math.random() * iconTypes.length)];
      QikAnimations.createFloatingIcon(randomIcon, container);
    }
  }, 5000);
});

// Performance optimization - throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Export for use in React components
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QikAnimations;
}