/* ── Twentyone AI — Main JS ── */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll effect ── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Active nav link ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Mobile menu ── */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  }

  /* ── Counter animation ── */
  function animateCount(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const isFloat = target % 1 !== 0;
    const duration = 1800;
    const start = performance.now();
    (function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = target * ease;
      el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.floor(val)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    })(start);
  }

  const counters = document.querySelectorAll('[data-target]');
  if (counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(el => cio.observe(el));
  }

  /* ── Accordion ── */
  document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion__item');
      const body = item.querySelector('.accordion__body');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion__item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accordion__body').classList.remove('open');
      });
      if (!isOpen) { item.classList.add('open'); body.classList.add('open'); }
    });
  });

  /* ── Smooth anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

});
