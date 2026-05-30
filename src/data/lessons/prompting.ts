import type { Lesson } from '../../types'

export const promptingLesson: Lesson = {
  id: 'prompting-basics',
  sectionId: 'prompting',
  title: 'Prompting Best Practices in Cursor',
  description:
    'Better prompts mean better code. Learn the patterns that turn vague requests into results you can actually ship.',
  duration: '11 min read',
  objectives: [
    'Write specific prompts with the right @ context attached',
    'Configure .cursorrules and scoped rules for your project',
    'Break large tasks into reliable step-by-step prompts',
    'Spot weak prompts and rewrite them quickly',
  ],
  blocks: [
    {
      type: 'paragraph',
      content:
        'Cursor responds to what you give it. A vague prompt produces vague code. A specific prompt with attached files, clear constraints, and a definition of done produces work you can review and merge. Prompting is a skill — and this lesson gives you the patterns.',
    },
    { type: 'heading', content: 'Be Specific and Give Context', level: 2 },
    {
      type: 'paragraph',
      content:
        'Before you send a prompt, ask: "Could a new teammate complete this task with only what I wrote?" If not, add @ mentions, error messages, and constraints.',
    },
    {
      type: 'screenshot',
      description:
        'The Chat input with the @ mention menu open, showing Files, Folders, Git, Terminal, and Docs options.',
    },
    {
      type: 'list',
      items: [
        'Name exact files, functions, or routes — not "the auth stuff"',
        'Attach with @ instead of pasting huge code blocks',
        'Paste errors verbatim when debugging',
        'State what success looks like: "tests pass", "no API changes", "matches existing style"',
      ],
    },
    {
      type: 'comparison',
      label: 'Debugging',
      bad: 'Login is broken, fix it.',
      good: `@src/auth/login.ts @Terminal

Valid credentials return 401. Terminal shows: "Token refresh failed: invalid signature"
Trace the refresh flow. Minimal fix only.`,
    },
    {
      type: 'comparison',
      label: 'UI change',
      bad: 'Make the dashboard look better.',
      good: `@src/pages/Dashboard.tsx

Improve mobile layout below 768px: stack stat cards vertically.
Use spacing from @src/styles/tokens.css. Do not change data fetching.`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Use .cursorrules Effectively', level: 2 },
    {
      type: 'paragraph',
      content:
        'Project rules live in .cursorrules (repo root) or .cursor/rules/*.mdc (scoped). Cursor reads them automatically — you stop repeating "use TypeScript strict" in every prompt.',
    },
    {
      type: 'screenshot',
      description:
        'A .cursorrules file in the editor alongside Cursor Settings → Rules for project conventions.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Create .cursorrules at project root',
          content: 'Add bullet-point conventions: stack, style, scope limits, testing expectations.',
        },
        {
          title: 'Add scoped rules if needed',
          content: 'In monorepos, use .cursor/rules/ with globs like packages/web/**/* for frontend-only rules.',
        },
        {
          title: 'Keep rules short',
          content: 'Under ~50 lines. Update when the team agrees on new standards — rules are living docs.',
        },
      ],
    },
    {
      type: 'code',
      title: 'Starter .cursorrules',
      language: 'text',
      content: `# Project conventions

- TypeScript strict; no \`any\`
- React functional components + hooks
- Tests colocated as *.test.ts
- Minimize scope — do not refactor unrelated code
- Match existing patterns in src/ before inventing new ones`,
    },
    {
      type: 'tip',
      content:
        'Copy templates from the Library section of this app — start with "Beginner-Friendly Defaults" and add stack-specific rules.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Break Big Tasks Into Steps', level: 2 },
    {
      type: 'paragraph',
      content:
        '"Build the whole app" fails. Milestones succeed. Treat Cursor like a pair programmer: assign one step, review, then continue.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Plan',
          content: '"Outline steps to add OAuth. Do not write code yet." Review the plan before proceeding.',
        },
        {
          title: 'Scaffold',
          content: '"Create routes and empty components from the plan." Verify structure before logic.',
        },
        {
          title: 'Implement',
          content: '"Wire up Google provider using @src/lib/auth.ts patterns." One integration at a time.',
        },
        {
          title: 'Test & polish',
          content: '"Add tests. Run npm test. Fix failures. Then add loading states only."',
        },
      ],
    },
    {
      type: 'code',
      title: 'Step 1 of 3',
      language: 'text',
      content: `Step 1 of 3 — planning only.

Add email notifications when an order ships.
@src/features/orders/

List files to create/modify and data flow. No edits yet.`,
    },
    {
      type: 'comparison',
      label: 'Task size',
      bad: 'Build a complete e-commerce site with payments, auth, admin, and emails.',
      good: 'Step 1: Scaffold product listing with mock data, matching @src/pages/Home.tsx. No API yet.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Good vs Bad Prompts', level: 2 },
    {
      type: 'comparison',
      label: 'Exploration',
      bad: 'Tell me about this codebase.',
      good: '@src/ — Map the top 5 modules, API-to-UI data flow, and where tests live. Keep it under 300 words.',
    },
    {
      type: 'comparison',
      label: 'Refactoring',
      bad: 'Clean up this file.',
      good: '@src/utils/date.ts — extract parseISO helper, keep exports compatible, add unit tests.',
    },
    {
      type: 'comparison',
      label: 'Scope',
      bad: 'Fix the bug and improve anything you notice.',
      good: 'Fix the null in handleSubmit only. No refactors, renames, or new features.',
    },
    { type: 'heading', content: 'Copy-Paste Prompt Template', level: 2 },
    {
      type: 'code',
      title: 'Universal template',
      language: 'text',
      content: `Goal: [one sentence]

Context: @[files or folders]

Constraints:
- [what not to change]
- [style / stack notes]

Done when: [how you will verify — tests, manual check, etc.]`,
    },
    {
      type: 'tip',
      content:
        'Refine in the same chat when tweaking output. Start a new chat only when switching to a completely different task.',
    },
  ],
}
