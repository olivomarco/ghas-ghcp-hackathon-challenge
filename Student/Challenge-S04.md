# Challenge S-04: Secure Secrets & Dependencies

## Description

Two different attack surfaces. Same urgency.

**Hardcoded secrets:** API keys, database passwords, JWT signing keys, and credentials committed to source code are one of the most common and most preventable security failures. Secret scanning has already found any that were committed. Your job is to remove them from the code, move them to environment variables, and make sure the application still works.

**Vulnerable dependencies:** Every package in `package.json` is a potential attack vector. Dependabot has been scanning your dependency tree against known CVE databases and flagging packages with published vulnerabilities. Some of these have trivial exploits. Your job is to review the high and critical severity Dependabot alerts, understand what the vulnerability in each package actually is, and merge the security update PRs that fix them.

Both issues have the same root cause: trusting something external without vetting it. Treating secrets as code. Treating dependencies as permanent. This challenge is about building the habit of not doing that.

## Objectives

- Review **Security → Secret scanning alerts** for any secrets found in the codebase history
- Find hardcoded secrets or credentials in the source code (check config files, `app.ts`, and route handlers)
- Replace hardcoded values with `process.env` references and document the required environment variables
- Review **Security → Dependabot alerts** filtered to critical and high severity
- For at least 2 Dependabot alerts, open the alert detail, read the CVE description, and understand what the vulnerability actually is before merging the fix PR
- Merge at least 2 Dependabot security update pull requests

## Success Criteria

- [ ] No hardcoded secrets, passwords, or credentials remain in source code files
- [ ] Secrets replaced with environment variable references (`process.env.VARIABLE_NAME`)
- [ ] At least 2 Dependabot security update PRs reviewed, understood, and merged
- [ ] Secret scanning alerts addressed or explained (false positives dismissed with notes)
- [ ] Application still starts and authenticates correctly after secrets migration

## Copilot Tips

- Ask Copilot to scan a file: *"Are there any hardcoded credentials, API keys, or secrets in this file? Show me every suspicious value."*
- Ask: *"Help me refactor this to use environment variables. What should I name each variable and how should I document them?"*
- Open a Dependabot alert CVE description and paste it to Copilot: *"Explain this CVE in plain English. What attack does it enable and what's the impact?"*

**Push protection test:** Try pushing a commit that contains a test secret (e.g., a fake AWS key format). Push protection should block it before it lands. This demonstrates the prevention layer on top of detection.

## Learning Resources

- [About secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning)
- [Viewing and updating Dependabot alerts](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [Managing Dependabot pull requests](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates)
