# Tank — History

## Project Context

- **Project:** ghas-ghcp-challenge
- **Tech Stack:** OWASP vulnerable web application, dev containers, GitHub Advanced Security, GitHub Copilot
- **User:** Marco Olivo
- **Purpose:** Create hackathon challenges in "What The Hack" format focusing on GHAS and GitHub Copilot
- **Challenge Flow:** Clone vulnerable app → fix security issues with GHAS + Copilot → enhance frontend → evolve backend

## Learnings

- Set up GitHub Pages deployment workflow at `.github/workflows/pages.yml`. Triggers on push to `main` when `docs/**` changes, plus manual `workflow_dispatch`. Uses `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, and `actions/deploy-pages@v4`. Deploys the `docs/` directory as a static site. No Jekyll processing (`.nojekyll` file added to `docs/`). No existing Pages config conflicts found.
- Adapted `.github/workflows/codeql.yml` for the shared-repo hackathon flow: CodeQL still scans `main` and PRs into `main`, now also scans pushes to `team-*/challenge-work` and `participant/**`, and supports manual organizer runs via `workflow_dispatch`.

### GitHub Pages Session Logged (2026-04-24T00:00:00Z)

- Orchestration log written by Scribe at `.squad/orchestration-log/2026-04-24-github-pages-tank.md`
