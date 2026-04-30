/* =============================================
   GHAS & GitHub Copilot Hackathon — Site JS
   Navigation, sidebar, breadcrumbs, prev/next
   ============================================= */

(function () {
  'use strict';

  /* ----- Challenge Data ----- */
  const tracks = {
    copilot: {
      label: 'Copilot Customization',
      color: 'copilot',
      challenges: [
        { id: 'c00', title: 'Customize Your Copilot Experience', time: '60 min' },
      ]
    },
    security: {
      label: 'Security',
      color: 'security',
      challenges: [
        { id: 's00', title: 'Explore the Attack Surface', time: '30 min' },
        { id: 's01', title: 'Fix Injection Vulnerabilities', time: '60 min' },
        { id: 's02', title: 'Fix XSS & Unsafe Output', time: '60 min' },
        { id: 's03', title: 'Fix Broken Access Control', time: '45 min' },
        { id: 's04', title: 'Secure Secrets & Dependencies', time: '45 min' },
        { id: 's05', title: 'Security Campaigns (Advanced)', time: '45 min' },
      ]
    },
    frontend: {
      label: 'Frontend',
      color: 'frontend',
      challenges: [
        { id: 'f00', title: 'Project Setup & UI Analysis', time: '30 min' },
        { id: 'f01', title: 'Design System & Component Planning', time: '45 min' },
        { id: 'f02', title: 'Build Modern UI Components', time: '60 min' },
        { id: 'f03', title: 'Integration & Polish', time: '45 min' },
      ]
    },
    backend: {
      label: 'Backend',
      color: 'backend',
      challenges: [
        { id: 'b00', title: 'API Discovery & Documentation', time: '30 min' },
        { id: 'b01', title: 'Feature Design', time: '45 min' },
        { id: 'b02', title: 'Implementation with Copilot', time: '60 min' },
        { id: 'b03', title: 'Testing & Documentation', time: '45 min' },
      ]
    },
  };

  /* ----- Path Helpers ----- */
  const isInSubdir = window.location.pathname.includes('/challenges/');
  const base = isInSubdir ? '../' : '';

  function challengePath(id) {
    return isInSubdir ? id + '.html' : 'challenges/' + id + '.html';
  }

  /* ----- Build Navigation ----- */
  function buildNav() {
    const page = document.documentElement.dataset.page || '';
    const nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.id = 'site-nav';

    const trackDots = {
      security: 'var(--track-security)',
      frontend: 'var(--track-frontend)',
      backend: 'var(--track-backend)',
      copilot: 'var(--track-copilot)',
    };

    const dropdownItems = Object.entries(tracks).map(([key, t]) =>
      `<a href="${base}challenges.html#${key}"><span class="track-dot" style="background:${trackDots[key]}"></span>${t.label} Track</a>`
    ).join('');

    nav.innerHTML = `
      <div class="nav-inner">
        <a href="${base}index.html" class="nav-logo">
          <span class="logo-icon">&gt;_</span>
          <span>GHAS Hackathon</span>
        </a>
        <ul class="nav-links" id="nav-links">
          <li><a href="${base}index.html" class="${page === 'home' ? 'active' : ''}">Home</a></li>
          <li><a href="${base}getting-started.html" class="${page === 'getting-started' ? 'active' : ''}">Getting Started</a></li>
          <li><a href="${base}prerequisites.html" class="${page === 'prerequisites' ? 'active' : ''}">Prerequisites</a></li>
          <li class="nav-dropdown">
            <a href="${base}challenges.html" class="nav-dropdown-trigger ${page === 'challenges' || page === 'challenge' ? 'active' : ''}">Challenges</a>
            <div class="nav-dropdown-menu">
              <a href="${base}challenges.html">All Challenges</a>
              ${dropdownItems}
            </div>
          </li>
          <li><a href="${base}learning-objectives.html" class="${page === 'learning-objectives' ? 'active' : ''}">Learning Objectives</a></li>
          <li><a href="${base}security-features.html" class="${page === 'security-features' ? 'active' : ''}">Security Reference</a></li>
        </ul>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
      </div>
    `;

    document.body.prepend(nav);

    // Hamburger toggle
    const hamburger = document.getElementById('nav-hamburger');
    const links = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      links.classList.toggle('open');
    });

    // Close menu on link click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  /* ----- Build Footer ----- */
  function buildFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="footer-inner">
        <ul class="footer-links">
          <li><a href="${base}index.html">Home</a></li>
          <li><a href="${base}getting-started.html">Getting Started</a></li>
          <li><a href="${base}prerequisites.html">Prerequisites</a></li>
          <li><a href="${base}challenges.html">Challenges</a></li>
          <li><a href="${base}learning-objectives.html">Learning Objectives</a></li>
          <li><a href="${base}security-features.html">Security Reference</a></li>
        </ul>
        <p class="footer-copy">GHAS &amp; GitHub Copilot Hackathon Challenge &mdash; Built with 💚 for security-minded developers</p>
      </div>
    `;
    document.body.appendChild(footer);
  }

  /* ----- Build Scroll Progress ----- */
  function buildScrollProgress() {
    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.prepend(bar);

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      bar.style.width = scrolled + '%';
    }, { passive: true });
  }

  /* ----- Nav scroll effect ----- */
  function initNavScroll() {
    const nav = document.getElementById('site-nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ----- Build Breadcrumbs ----- */
  function buildBreadcrumbs() {
    const el = document.getElementById('breadcrumbs');
    if (!el) return;

    const page = document.documentElement.dataset.page;
    const trackKey = document.documentElement.dataset.track;
    const challengeId = document.documentElement.dataset.challenge;

    const crumbs = [{ label: 'Home', href: base + 'index.html' }];

    if (page === 'challenge' && trackKey && challengeId) {
      const track = tracks[trackKey];
      const ch = track ? track.challenges.find(c => c.id === challengeId) : null;
      crumbs.push({ label: 'Challenges', href: base + 'challenges.html' });
      crumbs.push({ label: track ? track.label + ' Track' : trackKey, href: base + 'challenges.html#' + trackKey });
      if (ch) {
        crumbs.push({ label: challengeId.toUpperCase() + ': ' + ch.title, current: true });
      }
    } else {
      const titles = {
        'getting-started': 'Getting Started',
        'prerequisites': 'Prerequisites',
        'challenges': 'Challenges',
        'learning-objectives': 'Learning Objectives',
        'security-features': 'Security Features Reference',
      };
      if (titles[page]) {
        crumbs.push({ label: titles[page], current: true });
      }
    }

    el.innerHTML = crumbs.map((c, i) => {
      if (c.current) return `<span class="current">${c.label}</span>`;
      const sep = i < crumbs.length - 1 ? '<span class="sep">/</span>' : '';
      return `<a href="${c.href}">${c.label}</a>${sep}`;
    }).join('');
  }

  /* ----- Build Challenge Sidebar ----- */
  function buildSidebar() {
    const el = document.getElementById('challenge-sidebar');
    if (!el) return;

    const trackKey = document.documentElement.dataset.track;
    const challengeId = document.documentElement.dataset.challenge;
    const track = tracks[trackKey];
    if (!track) return;

    const items = track.challenges.map(ch => {
      const active = ch.id === challengeId ? ' active' : '';
      const href = isInSubdir ? ch.id + '.html' : 'challenges/' + ch.id + '.html';
      return `<li><a href="${href}" class="${active}">
        <span class="challenge-id">${ch.id.toUpperCase()}</span>
        <span class="challenge-title">${ch.title}</span>
      </a></li>`;
    }).join('');

    el.innerHTML = `
      <p class="sidebar-title">${track.label} Track</p>
      <ul class="sidebar-nav" data-track="${trackKey}">
        ${items}
      </ul>
    `;
  }

  /* ----- Build Prev/Next Navigation ----- */
  function buildPrevNext() {
    const el = document.getElementById('prev-next');
    if (!el) return;

    const trackKey = document.documentElement.dataset.track;
    const challengeId = document.documentElement.dataset.challenge;
    const track = tracks[trackKey];
    if (!track) return;

    const idx = track.challenges.findIndex(c => c.id === challengeId);
    const prev = idx > 0 ? track.challenges[idx - 1] : null;
    const next = idx < track.challenges.length - 1 ? track.challenges[idx + 1] : null;

    const prevHtml = prev
      ? `<a href="${prev.id}.html" class="prev">
           <span class="label">← Previous</span>
           <span class="title">${prev.id.toUpperCase()}: ${prev.title}</span>
         </a>`
      : `<div class="placeholder"></div>`;

    const nextHtml = next
      ? `<a href="${next.id}.html" class="next">
           <span class="label">Next →</span>
           <span class="title">${next.id.toUpperCase()}: ${next.title}</span>
         </a>`
      : `<div class="placeholder"></div>`;

    el.innerHTML = prevHtml + nextHtml;
  }

  /* ----- Load Prism.js for syntax highlighting ----- */
  function loadPrism() {
    if (document.querySelector('pre code')) {
      const theme = document.createElement('link');
      theme.rel = 'stylesheet';
      theme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-okaidia.min.css';
      document.head.appendChild(theme);

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
      script.onload = () => {
        const auto = document.createElement('script');
        auto.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js';
        document.head.appendChild(auto);
      };
      document.head.appendChild(script);
    }
  }

  /* ----- Initialize ----- */
  function init() {
    buildScrollProgress();
    buildNav();
    initNavScroll();
    buildBreadcrumbs();
    buildSidebar();
    buildPrevNext();
    buildFooter();
    loadPrism();

    // Initialize Lucide icons after all dynamic content is injected
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
