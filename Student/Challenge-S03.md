# Challenge S-03: Dependabot & Supply Chain Security

## Description

Your own code isn't the only attack surface. Every dependency you pull in — and every dependency *those* dependencies pull in — is a potential entry point. A single compromised npm package can cascade through thousands of projects overnight. This isn't theoretical; it happens regularly.

Dependabot monitors your dependency tree against known vulnerability databases and opens pull requests to update vulnerable packages automatically. In this challenge, you'll enable Dependabot alerts and security updates, review the vulnerabilities it surfaces, and merge real security update PRs.

This is the kind of work that separates apps that get breached from apps that don't. Supply chain security is boring right up until the moment it isn't.

## Objectives

- Enable Dependabot alerts on your repository
- Enable Dependabot security updates
- Review the dependency vulnerabilities Dependabot identifies
- Merge at least 2 Dependabot security update pull requests

## Success Criteria

- [ ] Dependabot alerts enabled in repository settings
- [ ] Dependabot security updates enabled
- [ ] Dependency vulnerabilities reviewed in the Security > Dependabot alerts tab
- [ ] At least 2 Dependabot security update PRs merged

## Learning Resources

- [About Dependabot alerts](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)
- [Configuring Dependabot security updates](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)
- [Managing pull requests for dependency updates](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates)
- [About supply chain security](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)
