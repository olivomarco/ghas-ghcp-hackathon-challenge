# Security Policy

## ⚠️ Important: Intentionally Vulnerable Application

**This repository contains [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/), an intentionally vulnerable web application used for security training and education.**

### 🚫 DO NOT deploy this application to production

This application is designed with known security vulnerabilities for educational purposes. It includes:

- SQL injection vulnerabilities
- Cross-site scripting (XSS) flaws
- Broken authentication mechanisms
- Known vulnerable dependencies
- Hardcoded secrets and credentials (fake/example only)
- And many more OWASP Top 10 issues

**Running this application on a public network or production environment poses serious security risks.**

## 🎓 Hackathon Context

This repository is part of a **GitHub Advanced Security (GHAS) + GitHub Copilot Hackathon**. Participants use this intentionally vulnerable application to learn about:

- **Code scanning** with CodeQL to detect vulnerabilities in source code
- **Dependabot** to identify vulnerable dependencies
- **Secret scanning** to find exposed credentials
- **Security campaigns** to organize and track remediation efforts
- **Copilot Autofix** to get AI-suggested fixes for security alerts
- **GitHub Copilot** for writing more secure code

## Responsible Disclosure (Educational Guidelines)

Since this is an intentionally vulnerable training application, standard vulnerability disclosure doesn't apply in the traditional sense. However, learning responsible disclosure practices is valuable:

### If you find a vulnerability in Juice Shop itself:
- Report it to the [upstream OWASP Juice Shop project](https://github.com/juice-shop/juice-shop/issues)
- Follow their contribution guidelines

### If you find a vulnerability in the hackathon infrastructure:
- **Do not** publicly disclose it before reporting
- Contact the hackathon organizers directly
- Provide a clear description of the issue and steps to reproduce
- Allow reasonable time for a fix before any disclosure

### Responsible Disclosure Best Practices (for learning):
1. **Report privately first** — Use GitHub's private vulnerability reporting feature (Security tab > "Report a vulnerability")
2. **Provide details** — Include reproduction steps, impact assessment, and suggested fix
3. **Be patient** — Give maintainers time to respond and fix
4. **Don't exploit** — Reporting ≠ permission to exploit for personal gain
5. **Coordinate disclosure** — Agree on a timeline for public disclosure

## Supported Versions

This is a training/hackathon repository. There are no "supported versions" in the traditional sense. The vulnerable state is intentional and maintained for educational purposes.

| Version | Status |
| ------- | ------ |
| main    | 🎓 Intentionally vulnerable — for training only |

