# GitHub Advanced Security (GHAS) Features Reference

> **Note:** This is a reference guide listing available GHAS features on github.com. It explains what each feature does and where to find it — not how to solve specific challenges.

## Overview

GitHub Advanced Security provides a suite of tools to find and fix security vulnerabilities in your code. On **public repositories**, most of these features are **free**. On private repositories, a GitHub Advanced Security license is required.

---

## 1. Code Scanning (CodeQL)

**What it does:**
Analyzes your source code to find security vulnerabilities and coding errors. CodeQL treats code as data — it builds a database of your codebase and runs queries against it to find patterns that indicate vulnerabilities (SQL injection, XSS, path traversal, etc.).

**Where to find it:**

- **Settings** → **Code security** → **Code scanning**
- **Security** tab → **Code scanning alerts**
- Pull request **Checks** tab (inline annotations on PRs)

**Key concepts:**

- **Alerts**: Individual findings with severity, description, and affected code location
- **Query suites**: Collections of security queries (`default`, `security-extended`, `security-and-quality`)
- **SARIF**: The standard format CodeQL uses to report results
- **Custom queries**: You can write your own CodeQL queries for project-specific patterns

**How it's configured in this repo:**
The `.github/workflows/codeql.yml` workflow runs CodeQL automatically on push, PR, and weekly schedule.

---

## 2. Copilot Autofix

**What it does:**
Uses AI to automatically generate fix suggestions for code scanning alerts. When CodeQL finds a vulnerability, Copilot Autofix analyzes the alert and proposes a code change to fix it — often with an explanation of why the fix works.

**Where to find it:**

- **Security** tab → **Code scanning alerts** → Click any alert → Look for the **"Autofix"** suggestion
- Pull request **code scanning** annotations may include autofix suggestions

**Key details:**

- **Free on public repositories** ✅
- Suggestions are AI-generated — always review before applying
- Works for many common vulnerability patterns (injection, XSS, path traversal, etc.)
- Can generate fixes across multiple files when needed
- Available for JavaScript/TypeScript, Python, Java, C#, Go, Ruby, and more

---

## 3. Secret Scanning

**What it does:**
Scans your repository for accidentally committed secrets like API keys, tokens, passwords, and connection strings. GitHub partners with service providers (AWS, Azure, Stripe, etc.) to detect their specific secret formats.

**Where to find it:**

- **Settings** → **Code security** → **Secret scanning**
- **Security** tab → **Secret scanning alerts**

**Key concepts:**

- **Partner patterns**: Secrets matching known provider formats (GitHub tokens, AWS keys, etc.)
- **Custom patterns**: Define your own regex patterns to match organization-specific secrets
- **Push protection**: Blocks pushes that contain detected secrets BEFORE they reach the repo
- **Validity checks**: Some secrets are checked against the provider to confirm they're active/valid
- **Non-provider patterns**: Generic patterns like passwords, private keys, and connection strings

---

## 4. Push Protection

**What it does:**
Prevents secrets from being pushed to the repository in the first place. When you `git push`, GitHub scans the content and blocks the push if it detects a secret — showing you exactly what was found and where.

**Where to find it:**

- **Settings** → **Code security** → **Push protection**
- You'll see it in action when you try to push code containing a secret

**Key details:**

- Runs on every `git push` — no workflow needed
- Authors can bypass with a reason (but the bypass is logged)
- Organization admins can enforce that bypasses are not allowed
- Covers the same patterns as secret scanning

---

## 5. Dependabot

### 5a. Dependabot Alerts

**What it does:**
Monitors your dependency manifests (package.json, requirements.txt, etc.) and alerts you when a dependency has a known vulnerability listed in the GitHub Advisory Database.

**Where to find it:**

- **Security** tab → **Dependabot alerts**
- **Insights** tab → **Dependency graph**

### 5b. Dependabot Security Updates

**What it does:**
Automatically creates pull requests to update vulnerable dependencies to the minimum non-vulnerable version.

**Where to find it:**

- **Settings** → **Code security** → **Dependabot security updates**
- **Pull Requests** tab (PRs opened by @dependabot)

### 5c. Dependabot Version Updates

**What it does:**
Proactively creates pull requests to keep dependencies up to date, even if there's no known vulnerability. Helps you stay current and reduces the risk window.

**Where to find it:**

- Configured via `.github/dependabot.yml` (already set up in this repo)
- **Pull Requests** tab (PRs opened by @dependabot)
- **Insights** tab → **Dependency graph** → **Dependabot** tab

---

## 6. Dependency Graph & Dependency Review

### Dependency Graph

**What it does:**
Shows a complete picture of all your project's dependencies — direct and transitive. Useful for understanding your software supply chain.

**Where to find it:**

- **Insights** tab → **Dependency graph**

### Dependency Review

**What it does:**
Shows dependency changes introduced in a pull request, including any new vulnerabilities. Helps reviewers understand the security impact of dependency changes before merging.

**Where to find it:**

- Pull request **Files changed** tab → Rich diff for `package.json` / lock files
- Can be enforced via the `dependency-review-action` GitHub Action

---

## 7. Security Overview (Organization-level)

**What it does:**
Provides a bird's-eye view of security findings across all repositories in an organization. Shows trends, alert counts, and coverage metrics.

**Where to find it:**

- **Organization** → **Security** tab → **Overview**

**Key views:**

- Risk view: Repositories sorted by number of open alerts
- Coverage view: Which repos have security features enabled
- Trends: Alert open/close rates over time

---

## 8. Security Campaigns

**What it does:**
Allows security teams to organize code scanning alerts into focused remediation campaigns. A campaign groups related alerts across repositories, sets a target deadline, assigns developer ownership, and tracks progress — turning a backlog of alerts into actionable, time-boxed work.

**Where to find it:**

- **Organization** → **Security** tab → **Campaigns**

**Key concepts:**

- **Campaign creation**: Select alerts by filter criteria (severity, rule, repository) and group them into a campaign
- **Developer assignment**: Alert remediation is assigned to developers who own the relevant code
- **Progress tracking**: Dashboard shows alerts fixed vs. remaining, with burndown visibility
- **Copilot Autofix integration**: Developers can use Autofix suggestions directly within campaign alerts
- **Notifications**: Assigned developers receive notifications about their campaign alerts
- **Target dates**: Set deadlines to drive timely remediation

**Requirements:**

- GitHub Team plan or higher
- GitHub Code Security license (covers GHAS features)
- Security campaigns work across repositories within an organization

---

## 9. Security Advisories

**What it does:**
Lets maintainers privately discuss, fix, and publish information about security vulnerabilities in their repository. Supports the responsible disclosure workflow.

**Where to find it:**

- **Security** tab → **Advisories**
- **Security** tab → **Report a vulnerability** (for reporters)

**Key concepts:**

- **Private vulnerability reporting**: External researchers can report vulnerabilities privately
- **Temporary private forks**: Fix vulnerabilities in private before disclosing
- **CVE assignment**: Request a CVE identifier directly from GitHub

---

## Quick Access Cheat Sheet

| Feature | Navigation Path |
|---------|----------------|
| Code scanning alerts | Security tab → Code scanning |
| Copilot Autofix | Security tab → Code scanning → Click alert → Autofix |
| Secret scanning alerts | Security tab → Secret scanning |
| Dependabot alerts | Security tab → Dependabot |
| Dependency graph | Insights tab → Dependency graph |
| Enable features | Settings → Code security |
| Push protection | Settings → Code security → Push protection |
| Security advisories | Security tab → Advisories |
| Report vulnerability | Security tab → Report a vulnerability |
| Security campaigns | Organization → Security tab → Campaigns |

---

## Useful Links

- [GitHub Advanced Security documentation](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security)
- [CodeQL documentation](https://codeql.github.com/docs/)
- [Dependabot documentation](https://docs.github.com/en/code-security/dependabot)
- [Secret scanning documentation](https://docs.github.com/en/code-security/secret-scanning)
- [Security campaigns documentation](https://docs.github.com/en/code-security/security-campaigns)
- [About Copilot Autofix for code scanning](https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning)
- [OWASP Juice Shop project](https://owasp.org/www-project-juice-shop/)
