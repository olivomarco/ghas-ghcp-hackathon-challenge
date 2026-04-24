# Squad Decisions

## Active Decisions

### 2026-04-23T00:01:00Z: User directive
**By:** Marco Olivo (via Copilot)
**What:** Challenge duration must be 8-10 hours with multiple steps divided by security, frontend, and backend.
**Why:** User request — captured for team memory

### 2026-04-23T00:01:01Z: User directive
**By:** Marco Olivo (via Copilot)
**What:** Do NOT include solutions in the repo. No coach guide. Challenge is for final users only.
**Why:** User request — captured for team memory

### 2026-04-23T00:01:02Z: User directive
**By:** Marco Olivo (via Copilot)
**What:** Do NOT give tips or suggestions to participants — with AI it's easy enough. Just describe what needs to be done.
**Why:** User request — captured for team memory

### 2026-04-23T00:01:03Z: User directive
**By:** Marco Olivo (via Copilot)
**What:** GitHub Advanced Security features (code scanning, Dependabot, secret scanning) should be used on github.com — guide participants to use the platform UI, not just CLI.
**Why:** User request — captured for team memory

### 2026-04-23T00:01:04Z: User directive
**By:** Marco Olivo (via Copilot)
**What:** Explore whether security campaigns on GitHub Advanced Security can be set up (either automatically or by instructing participants). Verify feasibility.
**Why:** User request — captured for team memory

### 2026-04-23T00:01:05Z: User directive
**By:** Marco Olivo (via Copilot)
**What:** All team members must use claude-opus-4.6 model.
**Why:** User request — captured for team memory

### 2026-04-23T00:02:00Z: Application choice
**By:** Neo + Trinity (research-backed)
**What:** Use OWASP Juice Shop as the hackathon vulnerable application. Node.js + Express + Angular, Docker-native, OWASP Flagship, 12k+ stars, covers entire OWASP Top 10.
**Why:** Best fit for all three tracks — has security vulns, Angular frontend to redesign, Express backend to extend.

### 2026-04-23T00:02:01Z: Challenge structure
**By:** Neo (architecture decision)
**What:** 13 challenges across 3 tracks: Security (S-00 to S-05, ~4hr), Frontend (F-00 to F-03, ~3hr), Backend (B-00 to B-03, ~3hr). Total 8-10 hours.
**Why:** Fits Marco's time requirement, covers GHAS, Copilot, frontend-design skill, backend evolution.

### 2026-04-23T00:02:02Z: Security campaigns feasible
**By:** Trinity (research)
**What:** Security campaigns ARE feasible on GHAS. Require GitHub Team plan + Code Security license. UI and REST API support. Max 10 active campaigns, max 1000 alerts per campaign. Include as Challenge S-05.
**Why:** Marco asked to verify — confirmed feasible. Added as bonus/advanced challenge.

### 2026-04-23T00:02:03Z: Public repos for free GHAS
**By:** Trinity (recommendation)
**What:** Participants should use public repos to get free GHAS (code scanning, secret scanning, Dependabot, autofix all free on public repos).
**Why:** Avoids licensing costs for hackathon participants.

### 2026-04-23T00:02:04Z: Repo structure
**By:** Neo (architecture)
**What:** /Student/ folder for challenge markdown files, Juice Shop source at repo root (cloned), .devcontainer/ for dev environment, .github/workflows/ for CodeQL.
**Why:** Clean WTH-inspired structure, no solutions, no coach guide.

### 2026-04-23T00:03:00Z: User directive
**By:** Marco Olivo (via Copilot)
**What:** Move the Juice Shop application into a subfolder (e.g., `app/`) to clean up the repo root. Currently it's a mess with app files mixed with hackathon files.
**Why:** User request — better repo organization for hackathon participants.

### 2026-04-23T00:03:01Z: User directive
**By:** Marco Olivo (via Copilot)
**What:** Add challenges that instruct participants to create custom agents (.agent.md), custom prompt files (.prompt.md), and custom skills (SKILL.md) during the hackathon. Participants should learn to customize their Copilot experience.
**Why:** User request — teaches advanced Copilot customization features.

### 2026-04-24T00:00:00Z: GitHub Pages site design direction
**By:** Switch (Frontend Dev)
**What:** Chose a "CIPHER" cyberpunk-terminal aesthetic for the docs site — dark backgrounds (#050810/#0a0f1a), neon accents per track (security=green, frontend=cyan, backend=pink, copilot=amber). Chakra Petch / Lexend / JetBrains Mono font stack. Pure static HTML/CSS/JS with JS-injected navigation (single `main.js` generates nav, footer, breadcrumbs, sidebar from `data-*` attributes). 22 pages total, zero build step.
**Why:** Security/hacking hackathon demands edgy technical aesthetic, not corporate docs. JS-injected nav avoids duplicating 200+ lines of HTML across 22 files.

### 2026-04-24T00:00:01Z: Placeholder secret patterns for push protection bypass
**By:** Trinity (Security Engineer)
**What:** Replaced two secrets flagged by GitHub Push Protection: Stripe `sk_live_` key → `sk_live_REPLACEME...` (breaks checksum), Twilio SID → `ACXX...` (all-X won't match regex). Replaced in `app/.env.example` and `app/config/secrets.example.js`.
**Why:** Push protection was blocking pushes. Replacements preserve educational format while breaking scanner match.

### 2026-04-24T12:00:00Z: User directive
**By:** Marco Olivo (via Copilot)
**What:** Always use premium icons in the website — never cheap-looking emoji icons. Use a proper SVG icon library (Lucide, Phosphor, Heroicons, etc.) instead of Unicode emoji.
**Why:** User request — captured for team memory

### 2026-04-24T12:00:01Z: Lucide Icons for documentation site
**By:** Switch (Frontend Dev)
**What:** Replace all emoji icons across 20 HTML files with Lucide Icons (https://lucide.dev) via CDN. MIT-licensed, stroke-based SVGs controllable via CSS, ~60KB gzipped. 13 icon mappings (e.g. 🔍→scan-search, 🧠→brain, 🛠️→wrench, ✅→circle-check, 🔒→shield-check, 🎨→palette, ⚙️→server, 🤖→bot). Added icon CSS with glow/hover effects, `lucide.createIcons()` in main.js.
**Why:** Emoji rendered inconsistently across platforms and looked unprofessional. Lucide SVGs match the CIPHER cyberpunk aesthetic with neon stroke colors.

### 2026-04-24T14:00:00Z: User directive
**By:** Marco Olivo (via Copilot)
**What:** Always keep markdown (.md) and HTML (.html) files aligned. When content exists in both formats (e.g., Student/Challenge-S00.md and docs/challenges/s00.html, or docs/LEARNING-OBJECTIVES.md and docs/learning-objectives.html), changes to one must be reflected in the other. Neither format should drift out of sync.
**Why:** User request — captured for team memory

### 2026-04-24T16:00:00Z: Exclude app/build/ from CodeQL scanning
**By:** Trinity (Security Engineer)
**What:** Created `.github/codeql/codeql-config.yml` with `paths-ignore` for `app/build`, `**/*.js.map`, `**/node_modules`, and `app/frontend/dist`. Updated CodeQL workflow to reference the config file.
**Why:** CodeQL reported ~89 parse errors from scanning compiled JS output in `app/build/`. Excluding build artifacts eliminates noise and ensures findings reference actionable source `.ts` files.

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
