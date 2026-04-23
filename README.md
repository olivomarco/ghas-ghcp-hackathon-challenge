# GHAS & GitHub Copilot Hackathon Challenge

A hands-on hackathon where you use **GitHub Advanced Security** (GHAS) and **GitHub Copilot** to find and fix real security vulnerabilities in [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) — an intentionally insecure web application.

## Repository Structure

| Folder | Contents |
|--------|----------|
| `app/` | OWASP Juice Shop application (all source code, configs, tests) |
| `Student/` | Hackathon challenge instructions |
| `docs/` | Documentation |
| `.github/` | GitHub Actions workflows and Dependabot config |

> **Note:** The Juice Shop app lives in the `app/` directory. Run `cd app && npm start` to launch it.

## What You'll Do

1. **Scan** — Enable CodeQL, Dependabot, and secret scanning to discover vulnerabilities
2. **Understand** — Use GitHub Copilot to explain what each vulnerability means
3. **Fix** — Write secure code to remediate the findings, guided by Copilot
4. **Verify** — Confirm your fixes pass security analysis

## Prerequisites

- A **GitHub account** (free tier works)
- **GitHub Copilot** access (free tier or subscription)
- One of:
  - [GitHub Codespaces](https://github.com/features/codespaces) (recommended — nothing to install)
  - [VS Code](https://code.visualstudio.com/) + [Docker Desktop](https://www.docker.com/products/docker-desktop/) for local dev containers
- Basic familiarity with JavaScript/TypeScript and web applications

> **Note:** To use GitHub Advanced Security features for free, make sure your repository is **public**.

## Getting Started

### Option A: GitHub Codespaces (Recommended)

1. **Fork** this repository to your own GitHub account
2. Click the green **Code** button → **Codespaces** → **Create codespace on main**
3. Wait for the dev container to build and dependencies to install
4. Open a terminal and run `cd app && npm start` — Juice Shop will be available at port 3000

### Option B: Local Dev Container

1. **Fork** and **clone** this repository
2. Open the folder in VS Code
3. When prompted, click **Reopen in Container** (requires Docker Desktop running)
4. Once the container is built, open a terminal and run `cd app && npm start`

## Hackathon Challenges

Head to the [**Student/**](Student/) folder for the challenge instructions.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Angular, TypeScript |
| Backend | Express.js, Node.js |
| Database | SQLite (embedded) |
| Security Tools | CodeQL, Dependabot, Secret Scanning, GitHub Copilot |

## Resources

- [OWASP Juice Shop Documentation](https://pwning.owasp-juice.shop/)
- [GitHub Advanced Security Docs](https://docs.github.com/en/code-security)
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
