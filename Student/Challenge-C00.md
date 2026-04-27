# Challenge C-00: Customize Your Copilot Experience

## Description

**Start here — before any other challenge.**

GitHub Copilot is powerful out of the box. But out of the box is generic — it doesn't know this repository's architecture, its vulnerability patterns, or what "good" looks like in Juice Shop's specific codebase. That changes when you teach it.

In this challenge, you'll set up four layers of Copilot customization that compound across every other challenge: **repository instructions** that give Copilot permanent context about this project, **custom agents** specialized for the tracks you'll work in, **reusable prompt files** that capture your best questions, and **skills** that encode domain knowledge Copilot can't infer from code alone.

The payoff is immediate: once these are in place, Copilot will give you better suggestions, more relevant explanations, and fewer generic responses for every challenge that follows.

## Part 0: Repository Instructions

Repository instructions live in `.github/copilot-instructions.md` and give Copilot persistent context about this project for every conversation — no need to re-explain the codebase each time.

Create `.github/copilot-instructions.md` and populate it with:

- **Project overview** — What is Juice Shop? What tech stack does it use? (Express, Sequelize, Angular, TypeScript)
- **Key paths** — Where is the backend (`app/routes/`, `app/models/`), frontend (`app/frontend/src/`), tests (`app/test/`), and security config (`.github/codeql/`)?
- **Coding conventions** — Any patterns Copilot should follow or avoid in this codebase
- **Security context** — This is an intentionally vulnerable application; Copilot should know this when suggesting fixes

This file is the foundation. Everything else in this challenge builds on top of it.

## Part 1: Create Custom Agents

Agents are specialized AI personas with specific instructions, domain knowledge, and a defined role. They live in `.github/agents/` as markdown files with an `.agent.md` extension, and you invoke them by name in Copilot Chat.

**Create at least 2 agents — a security agent plus one for the track you plan to focus on:**

- **A security-focused agent** — Knows about OWASP Top 10, understands the Juice Shop's vulnerability patterns, helps you find and fix security issues in `app/` source code. Reference the OWASP categories you'll encounter: SQL injection, XSS, broken authentication, insecure deserialization.
- **A frontend design agent** — Understands the Angular component structure under `app/frontend/src/`, knows the design system goals, guides UI modernization decisions
- **A backend architecture agent** — Knows the Express/Sequelize patterns in `app/routes/` and `app/models/`, helps design new API endpoints that fit the existing codebase

Your agent file should include:

- A clear description of what the agent does and when to use it
- Specific instructions that shape how it responds
- Context about the Juice Shop application relevant to the agent's domain

Test each agent before moving on. Open Copilot Chat, invoke your agent by name, and give it a real task from one of the upcoming challenges. If the responses feel generic, your instructions need more specificity — good agents require precise prompting.

## Part 2: Create Custom Prompt Files

Prompt files are reusable templates that live in `.github/prompts/` with a `.prompt.md` extension. Think of them as saved questions — the prompts you'd type over and over, packaged up so you can fire them with a click.

**Create at least 2 prompt files.** Build prompts you'll actually use in the upcoming challenges:

- A code review prompt that checks for security anti-patterns (useful for S-02)
- A vulnerability explanation prompt that gives OWASP context for a code snippet (useful for S-01)
- A test generation prompt tailored to the Juice Shop's testing setup (useful for B-03)
- A component redesign prompt that feeds in your design system (useful for F-02)
- An API design prompt that enforces the project's REST conventions (useful for B-01)

Good prompt files are specific enough to produce useful output but generic enough that you'll actually reuse them across different files and contexts.

## Part 3: Discover and Extend Skills

Skills teach Copilot domain knowledge it can't infer from code alone. Before creating your own, check what's already available — this repository ships with skills in `.github/skills/`.

**First, browse the existing skills:** Open `.github/skills/` and read what's there. Understand what each skill covers so you build on top of them rather than duplicating them.

**Then, pick one action:**

- **Create a new skill** — Encode something specific to this codebase: the authentication flow (`app/routes/login.ts`), the challenge verification system (`app/lib/challengeUtils.ts`), the Sequelize model patterns, or the frontend routing. The kind of thing that would take a new developer time to discover.
- **Extend the existing `frontend-design` skill** — Add your design system decisions, component patterns, or UI conventions to `.github/skills/frontend-design/SKILL.md` so Copilot can reference them in future design work.

A good skill captures knowledge that would otherwise live only in your head — the kind of thing you'd explain to a new teammate on their first day.

## Success Criteria

- [ ] `.github/copilot-instructions.md` created with project context, key paths, and Juice Shop background
- [ ] At least 2 custom agents created in `.github/agents/` and tested in Copilot Chat (security agent + one track-specific agent)
- [ ] At least 2 custom prompt files created in `.github/prompts/` with use cases tied to upcoming challenges
- [ ] Existing skills in `.github/skills/` reviewed and at least 1 skill created or meaningfully extended
- [ ] Evidence that the customizations improved Copilot's responses (before/after comparison, screenshots, or notes on what changed)

## Learning Resources

- [Adding custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
- [About copilot-instructions.md](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot#about-copilot-instructions-files)
- [Using reusable prompts](https://docs.github.com/en/copilot/customizing-copilot/using-reusable-prompts)
- [Copilot customization in VS Code](https://code.visualstudio.com/docs/copilot/copilot-customization)
