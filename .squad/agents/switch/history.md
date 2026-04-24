# Switch — History

## Project Context
- **Project:** ghas-ghcp-challenge
- **Tech Stack:** OWASP vulnerable web application, dev containers, GitHub Advanced Security, GitHub Copilot
- **User:** Marco Olivo
- **Purpose:** Create hackathon challenges in "What The Hack" format focusing on GHAS and GitHub Copilot
- **Challenge Flow:** Clone vulnerable app → fix security issues with GHAS + Copilot → enhance frontend → evolve backend
- **Key Skill:** .github/skills/frontend-design/SKILL.md — MUST read before any UI work

## Learnings

### GitHub Pages Documentation Site (2026-04-24)
- **Built:** Complete static documentation site in `/docs/` — 22 files total
- **Design:** "CIPHER" cyberpunk-terminal aesthetic — deep navy-black backgrounds (#050810/#0a0f1a), neon green (#00ff41) primary accent, electric cyan (#00d4ff), hot pink (#ff0080), amber (#fbbf24) for track-specific colors
- **Fonts:** Chakra Petch (headings — angular/tech feel), Lexend (body — readable), JetBrains Mono (code) via Google Fonts CDN
- **Effects:** Scanline overlay animation on hero, grid-line background pattern, glowing card borders on hover, gradient text, blinking cursor, scroll progress bar, pulse-dot animation
- **Architecture:** Single CSS file (`docs/css/styles.css`, ~700 lines), single JS file (`docs/js/main.js`, ~220 lines) handles all dynamic elements — nav injection, footer, breadcrumbs, challenge sidebar, prev/next navigation. Data attributes on `<html>` element drive page-specific behavior.
- **Pages:** index.html (hero landing), getting-started.html, challenges.html (full overview with track sections), learning-objectives.html, security-features.html (all 9 GHAS features), plus 15 individual challenge pages in `docs/challenges/`
- **Challenge pages:** Two-column layout (sticky sidebar + content), breadcrumbs, track-colored badges, checklist-style success criteria, resource links with arrow prefixes, prev/next navigation within tracks
- **Responsive:** Mobile breakpoints at 1024px (sidebar collapses to horizontal pills), 768px (hamburger menu, stacked layout), 480px (tighter spacing)
- **Key decision:** Pure HTML/CSS/JS, no build tools. JS dynamically generates nav/footer/sidebar to avoid HTML duplication across 22 files. Prism.js loaded from CDN only when code blocks are present.

### GitHub Pages Session Logged (2026-04-24T00:00:00Z)
- Orchestration log written by Scribe at `.squad/orchestration-log/2026-04-24-github-pages-switch.md`
- Design decision merged into `.squad/decisions.md`

### Lucide Icons Migration (2026-04-24)
- **Icon library:** Lucide Icons (https://lucide.dev) — MIT-licensed, stroke-based SVG icon set via CDN (`unpkg.com/lucide@latest/dist/umd/lucide.min.js`)
- **Pattern:** `<i data-lucide="icon-name"></i>` elements rendered by `lucide.createIcons()` call in `js/main.js` after all dynamic content injection (nav, footer, sidebar, breadcrumbs)
- **Files modified (22 total):**
  - `docs/css/styles.css` — Added Section 23: Lucide icon sizing, glow effects, track-colored strokes, hover animations
  - `docs/js/main.js` — Added `lucide.createIcons()` in `init()` after all dynamic builds
  - `docs/index.html` — Replaced 13 emojis (🔍→scan-search, 🧠→brain, 🛠️→wrench, ✅→circle-check, 🔒→shield-check, 🎨→palette, ⚙️→server, 🤖→bot ×2, 📖→book-open, 🔐→lock-keyhole, 🏆→trophy)
  - `docs/challenges.html` — Replaced 4 track-icon emojis (🔒→shield-check, 🎨→palette, ⚙️→server, 🤖→bot)
  - `docs/learning-objectives.html` — Replaced 3 section emojis (🔐→lock-keyhole, 🤖→bot, 🛡️→shield)
  - `docs/security-features.html` — Replaced 1 checkmark emoji (✅→circle-check)
  - `docs/getting-started.html` — Added CDN (no emojis present)
  - 15 challenge pages (`challenges/s00-s05.html`, `f00-f03.html`, `b00-b03.html`, `c00.html`) — Replaced ⏱→clock in badge-time spans + added CDN
- **Styling:** Icons inherit CIPHER theme neon accent colors via `stroke` property, glow `drop-shadow` filters, hover scale+pulse animations on feature cards, track-specific colors (green/cyan/pink/amber)
