# Hackathon Challenges

You're about to spend 8–10 hours breaking, fixing, and building a real-world web application — with GitHub Copilot as your AI pair programmer and GitHub Advanced Security watching your back.

The challenges are organized into three tracks. Each one hits a different part of the stack, and they're designed to work together: the security fixes protect the app, the frontend gives it a fresh face, and the backend extends what it can do.

## Before You Begin

**If you're a participant:** Your organizer provides one shared repository in a GitHub organization with GHAS already enabled. Do not fork it. Create your own branch from `main`, do your work there, push it to the org repo, and open pull requests back to `main` so CodeQL/code scanning can validate your changes. Use `team-{your-team-name}/challenge-work` for teams, or `participant/{your-name-or-team}` if you're working individually.

**If you're running the event:** Complete the Organizer Setup steps in the Prerequisites before the hackathon starts: create the shared org repo from the upstream hackathon repo, protect `main`, enable GHAS, and trigger the first CodeQL scan.

## Tracks at a Glance

| Track | Challenge | Title | Est. Time |
| ------- | ----------- | ------- | ----------- |
| **Copilot Customization** | C-00 | Customize Your Copilot Experience | 60 min |
| **Security** | S-00 | Explore the Attack Surface | 30 min |
| | S-01 | Fix Injection Vulnerabilities | 60 min |
| | S-02 | Fix XSS & Unsafe Output | 60 min |
| | S-03 | Fix Broken Access Control | 45 min |
| | S-04 | Secure Secrets & Dependencies | 45 min |
| | S-05 | Security Campaigns (Advanced) | 45 min |
| **Frontend** | F-00 | Project Setup & UI Analysis | 30 min |
| | F-01 | Design System & Component Planning | 45 min |
| | F-02 | Build Modern UI Components | 60 min |
| | F-03 | Integration & Polish | 45 min |
| **Backend** | B-00 | API Discovery & Documentation | 30 min |
| | B-01 | Feature Design | 45 min |
| | B-02 | Implementation with Copilot | 60 min |
| | B-03 | Testing & Documentation | 45 min |

## Recommended Order

Start with **C-00 (Copilot Customization)**. Setting up your repository instructions, agents, and prompt files first means Copilot will be genuinely smarter for every challenge that follows — better suggestions, better explanations, fewer generic responses.

Once your Copilot is tuned, complete the **Prerequisites** by joining the shared org repo and creating your branch from `main`. GHAS setup and the first scan are handled by the organizer. Then work through the **Security track** (S-00 through S-05): read the shared default-branch alerts, understand them with Copilot's help, write fixes on your branch, and validate the results through PR CodeQL checks and code scanning annotations. These are developer challenges, not admin tasks.

Once security is rolling, split into **Frontend** and **Backend** — these two tracks run in parallel. Pick the one that matches your strengths, or tackle both if you're feeling ambitious.

## Ground Rules

- **GitHub Copilot is your pair programmer.** Use it everywhere — in your editor, in the terminal, in chat. Ask it questions. Let it generate code. Challenge its suggestions. The more you use it, the more you'll get out of this.
- **Work on your own branch, not main.** Use `team-{your-team-name}/challenge-work` for teams, or `participant/{your-name-or-team}` for individual participants. Push your branch and open pull requests back to `main`. Main is protected; direct participant pushes are blocked.
- **Security alerts are shared at the repo level.** The Security tab shows repository alerts, mainly from `main` and the shared repo configuration. It is not a separate alert dashboard for each participant branch.
- **PR checks are your validation loop.** For branch fixes, open a pull request to `main` and review the CodeQL/code scanning check, annotations, and any alerts shown on the PR before you mark the challenge complete.
- **Each challenge has clear success criteria.** Check them off as you go. If you hit all the checkboxes, you nailed it.
