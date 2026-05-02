# Trinity — History

## Project Context
- **Project:** ghas-ghcp-challenge
- **Tech Stack:** OWASP vulnerable web application, dev containers, GitHub Advanced Security, GitHub Copilot
- **User:** Marco Olivo
- **Purpose:** Create hackathon challenges in "What The Hack" format focusing on GHAS and GitHub Copilot
- **Challenge Flow:** Clone vulnerable app → fix security issues with GHAS + Copilot → enhance frontend → evolve backend

## Learnings

### 2026-04-24: Push Protection — Secret Placeholder Patterns
- Stripe test keys trigger push protection when they have a valid-looking suffix. Breaking the checksum pattern with obvious placeholder text avoids detection.
- Twilio Account SIDs match on `AC` + 32 hex chars. Using all-X placeholders breaks the hex pattern.
- AWS example keys, GitHub PATs with obvious placeholder text, and SendGrid example patterns are already on GitHub's allowlist and don't trigger push protection.
- Key files: `app/.env.example`, `app/config/secrets.example.js`

### 2026-04-24: CodeQL Parse Errors — Build Artifact Exclusion
- `app/build/` contains 234 compiled JS files + 234 source maps (transpiled from TypeScript via tsc). These are build artifacts, not source code.
- CodeQL was scanning these compiled files, producing ~89 parse errors ("';' expected") because the transpiler output contains patterns CodeQL's JS/TS parser doesn't fully handle.
- Scanning compiled output also duplicates any vulnerability findings from the source `.ts` files.
- Fix: Created `.github/codeql/codeql-config.yml` with `paths-ignore` for `app/build`, `**/*.js.map`, `**/node_modules`, and `app/frontend/dist`.
- Updated `.github/workflows/codeql.yml` to reference the config via `config-file: ./.github/codeql/codeql-config.yml`.
- Key files: `.github/workflows/codeql.yml`, `.github/codeql/codeql-config.yml`

### 2026-05-02: S-04 Shared Repo Branch Scenario
- In one shared organization repository, secret scanning alerts are repo-level/shared and Dependabot alerts/security update PRs are default-branch oriented.
- S-04 now frames participant work around reviewing shared alerts and validating branch changes through PR checks, annotations, and push protection instead of requiring every team to merge the same Dependabot PRs.
- Key files: `Student/Challenge-S04.md`, `docs/challenges/s04.html`
