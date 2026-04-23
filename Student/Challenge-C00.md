# Challenge C-00: Customize Your Copilot Experience

## Description

GitHub Copilot is powerful out of the box. But out of the box is generic — it doesn't know your project's architecture, your team's conventions, or what "good" looks like in your specific codebase. That changes when you teach it.

In this challenge, you'll create three types of customizations that make Copilot genuinely smarter about the Juice Shop application: a **custom agent** that specializes in a domain you care about, **reusable prompt files** that capture your best questions, and a **custom skill** that encodes knowledge Copilot can't figure out on its own.

This is a cross-cutting challenge. You can tackle it at any point during the hackathon — before you start a track, in the middle of one, or after you've finished. The customizations you build here will make every other challenge easier, so earlier is better. But there's no wrong time.

## Part 1: Create a Custom Agent

Agents are specialized AI personas with specific instructions, domain knowledge, and a defined role. They live in `.github/agents/` as markdown files with an `.agent.md` extension, and you invoke them by name in Copilot Chat.

**Pick one of these directions (or invent your own):**

- **A security-focused agent** — Knows about OWASP Top 10, understands the Juice Shop's vulnerability patterns, helps you find and fix security issues in `app/` source code
- **A frontend design agent** — Understands the design system, knows the Angular component structure under `app/frontend/src/`, guides UI modernization decisions
- **A backend architecture agent** — Knows the Express/Sequelize patterns in `app/routes/` and `app/models/`, helps design new API endpoints that fit the existing codebase

Your agent file should include:

- A clear description of what the agent does and when to use it
- Specific instructions that shape how it responds
- Context about the Juice Shop application relevant to the agent's domain

Test it. Open Copilot Chat, invoke your agent, and give it a real task from one of the other tracks. Does it actually help? If the responses feel generic, your instructions need more specificity.

## Part 2: Create Custom Prompt Files

Prompt files are reusable templates that live in `.github/prompts/` with a `.prompt.md` extension. Think of them as saved questions — the prompts you'd type over and over, packaged up so you can fire them with a click.

**Create at least 2 prompt files.** Some directions worth exploring:

- A code review prompt that checks for security anti-patterns
- A test generation prompt tailored to the Juice Shop's testing setup
- A component redesign prompt that feeds in your design system
- An API design prompt that enforces the project's REST conventions
- A documentation prompt that generates consistent endpoint docs

Good prompt files are specific enough to produce useful output but generic enough that you'll actually reuse them across different files and contexts.

## Part 3: Create or Extend a Custom Skill

Skills teach Copilot domain knowledge it can't infer from code alone. They live in `.github/skills/{skill-name}/SKILL.md` and get picked up automatically when relevant to a conversation.

**Pick one:**

- **Create a new skill** — Encode something you've learned during the hackathon. Maybe it's a skill about the Juice Shop's data model, its authentication flow, its challenge verification system, or the patterns you've discovered while working on your track.
- **Extend the existing `frontend-design` skill** — Add your design system decisions, component patterns, or UI conventions to `.github/skills/frontend-design/SKILL.md` so Copilot can reference them in future design work.

A good skill captures knowledge that would otherwise live only in your head — the kind of thing you'd explain to a new teammate on their first day.

## Success Criteria

- [ ] At least 1 custom agent created in `.github/agents/` and tested in Copilot Chat
- [ ] At least 2 custom prompt files created in `.github/prompts/` and used on real tasks
- [ ] At least 1 custom skill created or meaningfully extended in `.github/skills/`
- [ ] Evidence that the customizations improved Copilot's responses (before/after comparison, screenshots, or notes on what changed)

## Learning Resources

- [Adding custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
- [Using reusable prompts](https://docs.github.com/en/copilot/customizing-copilot/using-reusable-prompts)
- [Copilot customization in VS Code](https://code.visualstudio.com/docs/copilot/copilot-customization)
