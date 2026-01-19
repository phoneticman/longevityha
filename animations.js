// Longevity Health Analytics - Animation Effects

// Smooth scroll reveal animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all app sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.app-section, .philosophy-section');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });

  // Nav blur effect on scroll
  const nav = document.querySelector('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      nav.style.background = 'rgba(10, 10, 11, 0.85)';
    } else {
      nav.style.background = 'rgba(20, 20, 22, 0.7)';
    }

    lastScroll = currentScroll;
  });

  // Parallax effect for gradient orbs
  const orbs = document.querySelectorAll('.gradient-orb');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    orbs.forEach((orb, index) => {
      const speed = 0.3 + (index * 0.1);
      orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Add hover effect to feature items
  const featureItems = document.querySelectorAll('.feature-item');
  featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.borderColor = 'rgba(255, 255, 255, 0.25)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
