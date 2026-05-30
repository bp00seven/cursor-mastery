import type { RulesTemplate } from '../types'

export const rulesTemplates: RulesTemplate[] = [
  {
    id: 'beginner-defaults',
    title: 'Beginner-Friendly Defaults',
    category: 'General',
    description: 'Safe starting point for any new project — scope control and clarity.',
    tags: ['beginner', 'scope', 'general'],
    content: `# Cursor behavior

- Explain changes briefly before making large edits
- Minimize scope — only modify what the task requires
- Do not refactor unrelated code or rename things unprompted
- Match existing code style exactly
- Ask clarifying questions when requirements are ambiguous
- Prefer simple solutions over clever ones`,
  },
  {
    id: 'react-typescript',
    title: 'React + TypeScript',
    category: 'Frontend',
    description: 'Conventions for a modern React TypeScript project.',
    tags: ['react', 'typescript', 'frontend', 'vite'],
    content: `You are an expert React and TypeScript developer.

- Functional components with hooks; no class components
- Strict TypeScript — avoid \`any\`
- Named exports for components; colocate tests as *.test.tsx
- Use existing components and hooks before creating new ones
- CSS: match existing approach (Tailwind, CSS modules, or plain CSS)
- Keep components under ~150 lines; extract hooks for complex logic`,
  },
  {
    id: 'node-api',
    title: 'Node.js API',
    category: 'Backend',
    description: 'Standards for Express/Fastify-style API services.',
    tags: ['node', 'api', 'backend', 'express'],
    content: `You are an expert Node.js backend developer.

- Validate inputs at route boundaries with Zod or existing validators
- async/await with centralized error middleware
- Consistent JSON error shape: { error: string, code?: string }
- Never log secrets, tokens, or PII
- Integration tests for new endpoints
- Follow src/routes/ and src/services/ structure`,
  },
  {
    id: 'python-django',
    title: 'Python / Django',
    category: 'Backend',
    description: 'Django project conventions and best practices.',
    tags: ['python', 'django', 'backend'],
    content: `You are an expert Python and Django developer.

- PEP 8, type hints on public functions
- Business logic in services; thin views
- Avoid N+1 queries — use select_related / prefetch_related
- pytest for tests; factory_boy for fixtures
- All schema changes via migrations
- Document non-obvious model relationships in docstrings`,
  },
  {
    id: 'minimal-scope',
    title: 'Minimal Scope',
    category: 'Workflow',
    description: 'Prevent the AI from making drive-by refactors.',
    tags: ['scope', 'workflow', 'review'],
    content: `When making changes:

- Edit only files required for the task
- Do not rename, reformat, or "clean up" unrelated code
- Do not add comments unless logic is genuinely non-obvious
- Do not add dependencies without explicit approval
- If you notice other issues, mention them but do not fix them
- Prefer extending existing utilities over new abstractions`,
  },
  {
    id: 'testing-first',
    title: 'Testing Standards',
    category: 'Testing',
    description: 'Rules for writing and maintaining tests.',
    tags: ['testing', 'jest', 'vitest', 'quality'],
    content: `Testing conventions:

- New features and bug fixes include tests
- Test behavior and outcomes, not implementation details
- Name tests: "should [expected] when [condition]"
- Mock external services; do not mock code you own unless necessary
- No real network calls in unit tests
- Match patterns in existing *.test.ts files in the repo`,
  },
  {
    id: 'prompting-style',
    title: 'Prompting Assistant',
    category: 'Meta',
    description: 'Teach Cursor to help you write better prompts.',
    tags: ['prompting', 'meta', 'learning'],
    content: `When I ask for help with Cursor workflows:

- Give copy-pasteable prompt examples
- Show good vs bad prompt comparisons
- Recommend Chat vs Composer vs inline edit for each scenario
- Keep explanations beginner-friendly and practical
- Reference @ mentions and .cursorrules when relevant`,
  },
  {
    id: 'security',
    title: 'Security Focus',
    category: 'Security',
    description: 'Security-conscious development guidelines.',
    tags: ['security', 'auth', 'owasp'],
    content: `Security requirements:

- Never commit secrets, API keys, or .env values
- Validate and sanitize all user input
- Parameterized queries only — no SQL string concatenation
- Use established auth libraries; no custom crypto
- Flag XSS, CSRF, and injection risks in reviews
- Principle of least privilege for API permissions`,
  },
  {
    id: 'monorepo-scoped',
    title: 'Monorepo Frontend Rule',
    category: 'Monorepo',
    description: 'Example scoped rule for .cursor/rules/ in a monorepo.',
    tags: ['monorepo', 'scoped', 'frontend'],
    content: `---
description: Frontend package conventions
globs: packages/web/**/*
---

- This package uses Next.js App Router and Tailwind
- Shared UI components live in packages/ui — import from there
- Do not duplicate components that exist in packages/ui
- Run lint from packages/web: pnpm lint`,
  },
  {
    id: 'cursor-teaching',
    title: 'Cursor Tutorial Project',
    category: 'Meta',
    description: 'Rules for this Cursor Mastery tutorial app.',
    tags: ['cursor', 'tutorial', 'meta'],
    content: `You are an expert at teaching people how to use Cursor effectively.

When helping with this project:
- Explain Cursor features clearly and simply
- Focus on practical, real-world workflows
- Provide copy-pasteable examples whenever possible
- Keep explanations beginner-friendly but accurate
- When generating code, follow modern React + TypeScript best practices
- Structure content logically for someone learning Cursor`,
  },
]
