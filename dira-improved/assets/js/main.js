/* ============================================
   PT. Dira Baraka Mulia - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky Header with glassmorphism ---
  const header = document.getElementById('header');
  const scrollThreshold = 60;
  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > scrollThreshold);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile Navigation ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const spans = hamburger.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // --- Scroll reveal animations ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));

  // --- Counter animation ---
  const counters = document.querySelectorAll('[data-target]');
  let counterAnimated = false;
  const animateCounters = () => {
    if (counterAnimated) return;
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (target < 10 ? '+' : '');
        }
      };
      updateCounter();
    });
    counterAnimated = true;
  };
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObserver.observe(heroStats);

  // --- Form submission ---
  const form = document.getElementById('inquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nama = document.getElementById('nama').value;
      const perusahaan = document.getElementById('perusahaan').value;
      const wa = document.getElementById('whatsapp').value;
      const email = document.getElementById('email').value;
      const layanan = document.getElementById('layanan_select').value;
      const pesan = document.getElementById('pesan').value;

      const waMessage = `Halo PT. Dira Baraka Mulia,%0A%0A` +
        `Saya *${nama}*` +
        (perusahaan ? ` dari *${perusahaan}*` : '') +
        `%0A%0ALayanan: ${layanan}` +
        (email ? `%0AEmail: ${email}` : '') +
        `%0A%0APesan:%0A${pesan}` +
        `%0A%0ATerima kasih.`;

      window.open(`https://wa.me/6281260078245?text=${waMessage}`, '_blank');
      
      const btn = document.getElementById('submit-btn');
      const originalText = btn.textContent;
      btn.textContent = '✓ Pesan Terkirim!';
      btn.style.background = '#14594B';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
        form.reset();
      }, 3000);
    });
  }
});
