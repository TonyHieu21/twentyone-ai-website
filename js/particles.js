/* ── Particle Canvas ── */
(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], mouse = { x: -9999, y: -9999 };
  const GOLD = 'rgba(196,152,56,';
  const COUNT = window.innerWidth < 768 ? 40 : 80;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.r  = Math.random() * 1.5 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.5 + 0.1);
      this.alpha = Math.random() * 0.5 + 0.1;
      this.life  = 0;
      this.maxLife = Math.random() * 300 + 200;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;

      // Mouse repel
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 100) {
        const force = (100 - dist) / 100 * 0.8;
        this.x += dx / dist * force;
        this.y += dy / dist * force;
      }

      if (this.y < -10 || this.life > this.maxLife) this.reset(false);
    }
    draw() {
      const fade = Math.min(this.life / 40, 1) * Math.min((this.maxLife - this.life) / 40, 1);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = GOLD + (this.alpha * fade) + ')';
      ctx.fill();
    }
  }

  function init() {
    particles = Array.from({ length: COUNT }, () => new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = GOLD + (0.08 * (1 - d/120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  let raf;
  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    raf = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => { resize(); });
  document.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  resize(); init(); loop();
})();
