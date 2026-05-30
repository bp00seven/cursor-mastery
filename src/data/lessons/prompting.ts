import type { Lesson } from '../../types'

export const promptingLesson: Lesson = {
  id: 'prompting-basics',
  sectionId: 'prompting',
  title: 'Prompting Best Practices in Cursor',
  description:
    'Agents respond to what you give them. These patterns turn vague requests into work you can review and ship — in the Agents Window or inline edit.',
  duration: '11 min read',
  objectives: [
    'Write agent prompts with specific goals and @ context',
    'Configure .cursorrules so agents follow project conventions',
    'Break large tasks into step-by-step agent sessions',
    'Recognize and fix weak prompts quickly',
  ],
  blocks: [
    {
      type: 'paragraph',
      content:
        'In the Agents Window, your prompt is the spec. A vague spec produces vague code. A clear spec — with attached files, constraints, and a definition of done — produces diffs you can actually merge. These patterns work whether you are in Agent, Plan, or Ask mode.',
    },
    { type: 'heading', content: 'Be Specific and Give Context', level: 2 },
    {
      type: 'paragraph',
      content:
        'Before you hit Send, ask: "Could a new teammate finish this with only my prompt?" If not, add @ mentions, paste errors verbatim, and state what success looks like.',
    },
    {
      type: 'screenshot',
      description:
        'Capture the Agents Window prompt box mid-typing: an @ mention chip for a specific file (e.g. @src/auth/login.ts) attached, the full prompt text visible ("Fix 401 after login — see @Terminal"), and the @ dropdown open showing Files, Git, Terminal options.',
    },
    {
      type: 'list',
      items: [
        'Name exact files, routes, or functions — not "the auth stuff"',
        'Use @Files / @Folders instead of pasting large code blocks',
        'Paste terminal errors exactly when debugging',
        'Define done: "npm test passes", "no public API changes", "matches @src/components/Card.tsx style"',
      ],
    },
    {
      type: 'comparison',
      label: 'Debugging',
      bad: 'Login is broken, fix it.',
      good: `@src/auth/login.ts @Terminal

Valid credentials return 401. Terminal shows:
"Token refresh failed: invalid signature"

Trace the refresh flow. Minimal fix only.`,
    },
    {
      type: 'comparison',
      label: 'UI work',
      bad: 'Make the dashboard look better.',
      good: `@src/pages/Dashboard.tsx @src/styles/tokens.css

Stack stat cards vertically below 768px.
Use existing spacing tokens. Do not change data fetching.`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Use .cursorrules Effectively', level: 2 },
    {
      type: 'paragraph',
      content:
        'Agents read .cursorrules (project root) and .cursor/rules/*.mdc (scoped) automatically. Set conventions once — stop repeating "use strict TypeScript" in every prompt.',
    },
    {
      type: 'screenshot',
      description:
        'Capture split view in Editor Window: .cursorrules file open in the editor with bullet-point rules visible, and Cursor Settings → Rules panel open showing the same rules loaded (or the rules file path listed).',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Create .cursorrules',
          content: 'At project root: stack, style, scope limits ("do not refactor unrelated code"), test expectations.',
        },
        {
          title: 'Add scoped rules (optional)',
          content: '.cursor/rules/ with globs for monorepos — e.g. packages/web/**/* for frontend-only rules.',
        },
        {
          title: 'Keep it short',
          content: 'Under ~50 lines of bullets. Update when the team agrees on new standards.',
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
- Match existing patterns in src/ before adding new abstractions`,
    },
    {
      type: 'tip',
      content: 'Grab copy-ready templates from the Library section — start with "Beginner-Friendly Defaults".',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Break Big Tasks Into Steps', level: 2 },
    {
      type: 'paragraph',
      content:
        '"Build the entire app" fails in one agent session. Use Plan mode or explicit steps. One milestone per prompt — review diffs — then continue.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Step 1 — Plan (Plan mode)',
          content: '"Outline steps to add OAuth. Do not edit files." Review the plan.',
        },
        {
          title: 'Step 2 — Scaffold (Agent mode)',
          content: '"Create routes and empty components from the plan." Verify structure.',
        },
        {
          title: 'Step 3 — Implement (Agent mode)',
          content: '"Wire up Google provider using @src/lib/auth.ts patterns."',
        },
        {
          title: 'Step 4 — Verify',
          content: '"Run npm test. Fix failures. Do not add features."',
        },
      ],
    },
    {
      type: 'code',
      title: 'Step 1 of 3 — planning prompt',
      language: 'text',
      content: `Plan mode — no file edits.

Add email notifications when an order ships.
@src/features/orders/

List files to create/modify, data flow, and open questions.`,
    },
    {
      type: 'comparison',
      label: 'Task size',
      bad: 'Build a complete e-commerce site with payments, auth, admin, and emails.',
      good: 'Step 1: Scaffold product listing with mock data matching @src/pages/Home.tsx. No API yet.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Good vs Bad Prompts', level: 2 },
    {
      type: 'comparison',
      label: 'Exploration (use Ask mode)',
      bad: 'Tell me about this codebase.',
      good: 'Ask mode + @src/ — Map top 5 modules, API-to-UI flow, and where tests live. Under 300 words.',
    },
    {
      type: 'comparison',
      label: 'Refactoring',
      bad: 'Clean up this file.',
      good: '@src/utils/date.ts — extract parseISO helper, keep exports compatible, add unit tests.',
    },
    {
      type: 'comparison',
      label: 'Scope control',
      bad: 'Fix the bug and improve everything you notice.',
      good: 'Fix the null in handleSubmit only. No refactors, renames, or new features.',
    },
    { type: 'heading', content: 'Universal Prompt Template', level: 2 },
    {
      type: 'code',
      title: 'Copy-paste template',
      language: 'text',
      content: `Goal: [one sentence — what done looks like]

Context: @[files, folders, git, terminal]

Constraints:
- [files or areas to leave alone]
- [style / stack notes]

Verify: [npm test / manual check / etc.]`,
    },
    {
      type: 'tip',
      content:
        'Iterate in the same agent session when refining. Start a new agent when switching to a completely unrelated task.',
    },
  ],
}
