/**
 * Espacio Nórdico — Main JavaScript
 * Handles: Nav scroll, Mobile menu, Scroll reveal, Smooth interactions
 */

'use strict';

/* ============================================
   DOM Ready
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileMenu();
  initScrollReveal();
  initProductCards();
  initParallaxHero();
});

/* ============================================
   Nav: Scrolled State
   ============================================ */
function initNavScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================
   Mobile Menu Toggle
   ============================================ */
function initMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ============================================
   Scroll Reveal
   ============================================ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    elements.forEach(el => el.classList.add('visible'));
  }
}

/* ============================================
   Product Cards: WhatsApp Inquiry
   ============================================ */
function initProductCards() {
  const WHATSAPP_NUMBER = '5491112345678'; // ← Reemplaza con tu número real

  document.querySelectorAll('[data-product-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.getAttribute('data-product-btn');
      const message = encodeURIComponent(
        `¡Hola! Me interesa el producto: *${productName}*. ¿Podrías darme más información?`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
    });
  });
}

/* ============================================
   Subtle Parallax on Hero Image
   ============================================ */
function initParallaxHero() {
  const heroImg = document.querySelector('.hero-image-wrapper img');
  if (!heroImg || window.innerWidth < 768) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const offset = scrollY * 0.15;
    heroImg.style.transform = `scale(1.02) translateY(${offset}px)`;
  }, { passive: true });
}

/* ============================================
   WhatsApp CTA Helper
   ============================================ */
window.openWhatsApp = function(message) {
  const WHATSAPP_NUMBER = '5491112345678'; // ← Reemplaza con tu número real
  const encoded = encodeURIComponent(message || '¡Hola! Me gustaría recibir más información sobre Espacio Nórdico.');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
};
