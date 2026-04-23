# Challenge S-01: Enable Code Scanning & Discover Vulnerabilities

## Description

Your repository is set up — now it's time to see what's hiding in the code. Code scanning uses CodeQL, GitHub's semantic analysis engine, to find security vulnerabilities and coding errors that regular linters miss. We're talking SQL injection, cross-site scripting, insecure deserialization — the stuff that actually gets exploited in production.

In this challenge, you'll enable CodeQL with the default setup, trigger your first scan, and then dig into the results. The Juice Shop application is intentionally vulnerable, so you'll have plenty to find. Your job is to review the alerts, understand what they mean, and document what you discover.

Pay attention to severity levels and vulnerability categories. You'll need this context for the next challenge, where you actually fix these issues.

## Objectives

- Enable CodeQL analysis using the default setup on github.com
- Trigger the first code scanning analysis
- Review all code scanning alerts in the Security tab
- Identify and document at least 5 distinct vulnerabilities, including their severity and type

## Success Criteria

- [ ] CodeQL default setup is enabled on the repository
- [ ] Code scanning analysis has completed at least one run
- [ ] Security > Code scanning alerts page shows results
- [ ] At least 5 vulnerabilities documented with severity level (critical/high/medium/low) and vulnerability type (e.g., SQL injection, XSS)

## Learning Resources

- [About code scanning with CodeQL](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)
- [Configuring default setup for code scanning](https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)
- [Managing code scanning alerts](https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)
- [CodeQL query suites](https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites)
