# Challenge S-02: Fix Vulnerabilities with Copilot + Autofix

## Description

Finding vulnerabilities is step one. Fixing them without breaking the application — that's where it gets interesting.

In this challenge, you'll pick at least 3 vulnerabilities from the code scanning alerts you documented in S-01 and fix them. You've got two powerful tools at your disposal: GitHub Copilot in your editor (ask it to explain the vulnerability, suggest a fix, or review your patch) and Copilot Autofix in the Security tab on github.com (hit "Generate fix" on an alert and let it propose a complete remediation).

Each fix should go into its own pull request with a clear description of what was wrong and how you addressed it. The goal isn't just to make the alert disappear — it's to understand why the code was vulnerable and why your fix actually solves the problem.

**Power move:** If you've done Challenge C-00, consider creating a security-focused custom agent (`.github/agents/`) that knows about OWASP patterns and the Juice Shop's vulnerability surface. A well-instructed agent can speed up both diagnosis and remediation.

## Objectives

- Select at least 3 vulnerabilities from the code scanning alerts
- Use GitHub Copilot in your editor to understand and remediate each vulnerability
- Try Copilot Autofix from the Security tab (click "Generate fix" on an alert) for at least one vulnerability
- Create pull requests for each fix with descriptive commit messages

## Success Criteria

- [ ] At least 3 code scanning vulnerabilities addressed
- [ ] GitHub Copilot used to assist with understanding and fixing vulnerabilities
- [ ] Copilot Autofix tried on at least one alert from the Security tab
- [ ] Pull requests created for each fix with clear descriptions of the vulnerability and the remediation
- [ ] Fixed alerts show as resolved in the Security tab

## Learning Resources

- [About Copilot Autofix for code scanning](https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning)
- [Using GitHub Copilot to fix code scanning alerts](https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning)
- [Managing code scanning alerts](https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)
