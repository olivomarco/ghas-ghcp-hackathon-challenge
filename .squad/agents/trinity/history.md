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
