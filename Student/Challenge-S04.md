# Challenge S-04: Secret Scanning & Push Protection

## Description

Secrets in source code are one of the most common — and most preventable — security failures. An API key, a database password, a cloud credential committed to a repo can be found by attackers in minutes. And once a secret hits the git history, just deleting the file doesn't help. It's in the commits forever.

GitHub's secret scanning detects secrets that have already been committed. Push protection goes a step further: it blocks the commit *before* it lands in the repository. In this challenge, you'll enable both features, test push protection by attempting to push a commit containing a fake secret, and then implement a proper secrets management pattern so the application handles credentials correctly.

## Objectives

- Enable secret scanning on your repository
- Enable push protection
- Attempt to push a commit containing a test/fake secret and observe push protection blocking it
- Implement a proper secrets management pattern (environment variables, GitHub Secrets, or a secrets manager)

## Success Criteria

- [ ] Secret scanning enabled in repository settings
- [ ] Push protection enabled
- [ ] Push protection successfully blocked a commit containing a secret (screenshot or documented evidence)
- [ ] Proper secrets management pattern implemented — no hardcoded secrets in source code

## Learning Resources

- [About secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning)
- [About push protection](https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection)
- [Working with push protection](https://docs.github.com/en/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection)
- [Using secrets in GitHub Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)
