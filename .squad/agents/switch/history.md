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
