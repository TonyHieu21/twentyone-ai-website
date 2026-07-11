/* Shared nav/footer HTML injected via JS for DRY multi-page */
const NAV_HTML = `
<nav class="nav">
  <div class="container">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 56" class="nav__logo-svg" role="img" aria-label="Twentyone AI">
          <defs>
            <linearGradient id="navLogoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ECD988"/>
              <stop offset="100%" stop-color="#C49838"/>
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="54" height="54" rx="10" fill="#1A1A22"/>
          <rect x="1" y="1" width="54" height="54" rx="10" fill="none" stroke="url(#navLogoGrad)" stroke-width="0.7" opacity="0.45"/>
          <text x="28" y="36" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="27" font-weight="700" fill="white" letter-spacing="-1">21</text>
          <line x1="10" y1="43" x2="46" y2="43" stroke="#C49838" stroke-width="1" opacity="0.7"/>
          <text x="70" y="27" font-family="Space Grotesk,sans-serif" font-size="15" font-weight="300" fill="rgba(255,255,255,0.5)" letter-spacing="3">TWENTY</text>
          <text x="152" y="27" font-family="Space Grotesk,sans-serif" font-size="15" font-weight="700" fill="white" letter-spacing="3">ONE</text>
          <text x="71" y="42" font-family="Space Grotesk,sans-serif" font-size="7" font-weight="400" fill="#C49838" letter-spacing="5">FLY TO DREAM</text>
        </svg>
      </a>
      <ul class="nav__links">
        <li><a href="san-pham.html">Sản phẩm</a></li>
        <li><a href="giai-phap.html">Giải pháp</a></li>
        <li><a href="khach-hang.html">Khách hàng</a></li>
        <li><a href="ve-chung-toi.html">Về chúng tôi</a></li>
      </ul>
      <div class="nav__cta">
        <a href="#" class="btn-ghost">Đăng nhập</a>
        <a href="#contact" class="btn btn-gold">Dùng thử miễn phí</a>
      </div>
      <button class="nav__hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="mobile-menu">
  <a href="index.html">Trang chủ</a>
  <a href="san-pham.html">Sản phẩm</a>
  <a href="giai-phap.html">Giải pháp</a>
  <a href="khach-hang.html">Khách hàng</a>
  <a href="ve-chung-toi.html">Về chúng tôi</a>
  <a href="#contact" class="btn btn-gold btn-lg" style="margin-top:16px">Dùng thử miễn phí</a>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <a href="index.html" class="nav__logo" style="display:inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 56" class="nav__logo-svg" role="img" aria-label="Twentyone AI">
            <defs>
              <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ECD988"/>
                <stop offset="100%" stop-color="#C49838"/>
              </linearGradient>
            </defs>
            <rect x="1" y="1" width="54" height="54" rx="10" fill="#1A1A22"/>
            <rect x="1" y="1" width="54" height="54" rx="10" fill="none" stroke="url(#footerLogoGrad)" stroke-width="0.7" opacity="0.45"/>
            <text x="28" y="36" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="27" font-weight="700" fill="white" letter-spacing="-1">21</text>
            <line x1="10" y1="43" x2="46" y2="43" stroke="#C49838" stroke-width="1" opacity="0.7"/>
            <text x="70" y="27" font-family="Space Grotesk,sans-serif" font-size="15" font-weight="300" fill="rgba(255,255,255,0.5)" letter-spacing="3">TWENTY</text>
            <text x="152" y="27" font-family="Space Grotesk,sans-serif" font-size="15" font-weight="700" fill="white" letter-spacing="3">ONE</text>
            <text x="71" y="42" font-family="Space Grotesk,sans-serif" font-size="7" font-weight="400" fill="#C49838" letter-spacing="5">FLY TO DREAM</text>
          </svg>
        </a>
        <p class="footer__brand-desc">Nền tảng AI hàng đầu cho doanh nghiệp bất động sản Việt Nam. Tự động hóa — Phân tích — Tăng trưởng.</p>
        <p style="font-size:10px;letter-spacing:0.36em;color:rgba(196,152,56,0.35);text-transform:uppercase;margin-top:20px">FLY TO DREAM</p>
      </div>
      <div>
        <div class="footer__col-title">Sản phẩm</div>
        <ul class="footer__links">
          <li><a href="san-pham.html">AI CRM</a></li>
          <li><a href="san-pham.html">Market Intelligence</a></li>
          <li><a href="san-pham.html">Auto Marketing</a></li>
          <li><a href="san-pham.html">Deal Predictor</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__col-title">Giải pháp</div>
        <ul class="footer__links">
          <li><a href="giai-phap.html">Cho Sàn môi giới</a></li>
          <li><a href="giai-phap.html">Cho Developer</a></li>
          <li><a href="giai-phap.html">Cho Doanh nghiệp</a></li>
          <li><a href="khach-hang.html">Case Studies</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__col-title">Công ty</div>
        <ul class="footer__links">
          <li><a href="ve-chung-toi.html">Về chúng tôi</a></li>
          <li><a href="ve-chung-toi.html#team">Đội ngũ</a></li>
          <li><a href="mailto:hieu@twentyonevietnam.com">Liên hệ</a></li>
          <li><a href="#">Tuyển dụng</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">© 2025 Twentyone AI · Ho Chi Minh City, Viet Nam</p>
      <p class="footer__tagline">FLY TO DREAM</p>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
});
