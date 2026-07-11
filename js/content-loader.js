/* ── Load editable content from content/site.json and inject into [data-cms] elements ── */
(function () {
  fetch('content/site.json', { cache: 'no-store' })
    .then(res => res.json())
    .then(data => {
      const get = (path) => path.split('.').reduce((o, k) => (o ? o[k] : undefined), data);

      document.querySelectorAll('[data-cms]').forEach(el => {
        const key = el.getAttribute('data-cms');
        const val = get(key);
        if (val === undefined) return;

        if (el.hasAttribute('data-cms-mailto')) {
          el.setAttribute('href', 'mailto:' + val);
          el.textContent = val;
        } else if (el.hasAttribute('data-target')) {
          // counter elements: update the animation target, text updates on scroll-reveal
          el.setAttribute('data-target', val);
        } else {
          el.textContent = val;
        }
      });

      // Repeating lists (trusted_by logos, testimonials) — only apply if containers exist
      const logosWrap = document.querySelector('[data-cms-list="trusted_by"]');
      if (logosWrap && Array.isArray(data.trusted_by)) {
        logosWrap.innerHTML = data.trusted_by
          .map(name => `<span style="font-size:15px;font-weight:700;letter-spacing:0.1em;color:#fff">${name}</span>`)
          .join('');
      }

      document.dispatchEvent(new CustomEvent('cms-content-loaded'));
    })
    .catch(() => { /* fall back silently to static HTML content */ });
})();
