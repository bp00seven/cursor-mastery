import type { PromptTemplate } from '../types'

export const promptTemplates: PromptTemplate[] = [
  {
    id: 'map-codebase',
    title: 'Map the Codebase',
    category: 'Onboarding',
    description: 'Get oriented in an unfamiliar repo in one prompt.',
    tags: ['onboarding', 'explore', 'architecture'],
    prompt: `@src/

I'm new to this project. Give me:
1. A one-paragraph overview of what this app does
2. The top 5 most important directories and what each contains
3. How data flows from API/backend to UI
4. Where tests live and how to run them`,
  },
  {
    id: 'explain-code',
    title: 'Explain This Code',
    category: 'Learning',
    description: 'Clear walkthrough of a file or function for onboarding.',
    tags: ['explain', 'onboarding', 'docs'],
    prompt: `@[file-path]

Explain this code as if I'm a new team member:
1. What is the main purpose?
2. Key functions and data flow
3. Non-obvious behavior or edge cases
4. What I should read next to go deeper`,
  },
  {
    id: 'fix-bug',
    title: 'Debug & Fix',
    category: 'Debugging',
    description: 'Trace an error and apply a minimal fix.',
    tags: ['bug', 'debug', 'fix', 'terminal'],
    prompt: `@Terminal @[relevant-files]

Error: [paste error message and stack trace]

1. Explain the root cause
2. Propose the smallest fix
3. Do not refactor unrelated code`,
  },
  {
    id: 'scaffold-web-app',
    title: 'Scaffold Web App',
    category: 'New Project',
    description: 'Step 1 of building a new React + TypeScript app with Vite.',
    tags: ['scaffold', 'vite', 'react', 'composer'],
    prompt: `Create a React + TypeScript app with Vite in this folder.

Include:
- src/components, src/pages, src/hooks, src/lib
- React Router with placeholder Home page
- Dark theme CSS variables
- npm run dev working with no errors

Match modern best practices. Add a brief README.`,
  },
  {
    id: 'add-feature-from-reference',
    title: 'Add Feature from Reference',
    category: 'Feature',
    description: 'Model a new feature after an existing one in the codebase.',
    tags: ['feature', 'existing-project', 'composer'],
    prompt: `@src/features/[similar-feature]/

Add [new feature name] modeled after [similar feature]:
- Same folder structure and naming patterns
- Same API style and error handling
- List/detail pages if the reference has them
- Tests matching the reference feature's test file

Wire routes into the app router. Do not change unrelated features.`,
  },
  {
    id: 'refactor-safe',
    title: 'Safe Refactor',
    category: 'Refactoring',
    description: 'Improve structure without changing behavior.',
    tags: ['refactor', 'clean-code', 'extract'],
    prompt: `@src/path/to/file.ts

Refactor [specific area]:
- [e.g. extract hook, rename symbol, split component]
- Keep behavior and public APIs identical
- Update or add tests
- Do not touch unrelated files`,
  },
  {
    id: 'add-tests',
    title: 'Add Unit Tests',
    category: 'Testing',
    description: 'Generate tests matching existing patterns in the repo.',
    tags: ['test', 'coverage', 'jest', 'vitest'],
    prompt: `@src/path/to/module.ts @src/path/to/module.test.ts

Add unit tests for [function or feature]:
- Happy path, edge cases, and error handling
- Match existing test style and naming
- Do not modify production code unless you find a bug`,
  },
  {
    id: 'code-review',
    title: 'Pre-PR Review',
    category: 'Review',
    description: 'Review changes before opening a pull request.',
    tags: ['review', 'pr', 'git', 'quality'],
    prompt: `@Git @src/

Review my changes for:
- Bugs and missing edge cases
- Security issues
- Consistency with existing patterns
- Missing tests

List findings by severity. Do not apply fixes yet.`,
  },
  {
    id: 'commit-message',
    title: 'Commit Message Helper',
    category: 'Git',
    description: 'Generate a conventional commit message from staged changes.',
    tags: ['git', 'commit', 'conventional'],
    prompt: `@Git

Suggest a concise conventional commit message for my staged changes.
Format: type(scope): description
Include body bullets only if the change is complex.`,
  },
  {
    id: 'plan-only',
    title: 'Plan Before Building',
    category: 'Planning',
    description: 'Get an implementation plan without any file edits.',
    tags: ['plan', 'composer', 'architecture'],
    prompt: `@src/

I want to [describe feature or change]. Plan only — do not edit files.

Include:
- Files to create or modify
- Implementation order
- Risks and open questions
- Estimated scope (small / medium / large)`,
  },
  {
    id: 'step-prompt',
    title: 'Step-by-Step Task',
    category: 'Workflow',
    description: 'Break a large task into a single focused step.',
    tags: ['steps', 'scope', 'workflow'],
    prompt: `Step [N] of [total]: [step name only]

Context: @[relevant files]

Do only this step:
- [specific deliverable]
- Do not start the next step
- Run tests if applicable and report results`,
  },
  {
    id: 'scope-limit',
    title: 'Limit Scope',
    category: 'Workflow',
    description: 'Recover when the agent edits too many files.',
    tags: ['scope', 'recovery', 'composer'],
    prompt: `Stop. You changed files outside the intended scope.

Revert changes to: [list files or folders]
Keep changes to: [list files or folders]
Do not refactor anything else.`,
  },
  {
    id: 'api-endpoint',
    title: 'Create API Endpoint',
    category: 'Backend',
    description: 'Add a REST endpoint following project conventions.',
    tags: ['api', 'backend', 'rest'],
    prompt: `@src/routes/ @src/middleware/

Add [METHOD] /api/[resource] endpoint:
- Request validation matching existing routes
- Consistent error responses
- Handler unit test
- Do not change unrelated routes`,
  },
  {
    id: 'ui-from-reference',
    title: 'Build UI from Reference',
    category: 'Frontend',
    description: 'Create a new page matching an existing component\'s style.',
    tags: ['ui', 'react', 'frontend'],
    prompt: `@src/pages/[ReferencePage].tsx @src/components/

Create [NewPage] at route /[path]:
- Match layout and styling from ReferencePage
- Use existing components from @src/components/ where possible
- Responsive down to 375px
- No new dependencies unless necessary`,
  },
  {
    id: 'write-docs',
    title: 'Generate Module Docs',
    category: 'Documentation',
    description: 'Create a README for a module from its source code.',
    tags: ['docs', 'readme', 'api'],
    prompt: `@src/features/[module]/

Write a README for this module:
- Overview and purpose
- Public API for exported functions/components
- Usage examples
- Dependencies on other modules`,
  },
]
