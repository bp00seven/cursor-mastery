import type { Lesson } from '../../types'

export const composerLesson: Lesson = {
  id: 'using-composer',
  sectionId: 'composer',
  title: 'How to Use Composer Effectively',
  description:
    'Composer is Cursor\'s agent mode — built for tasks that span files, terminal commands, and multiple steps. Learn to drive it without losing control.',
  duration: '12 min read',
  objectives: [
    'Know when Composer beats Chat or inline edit',
    'Write prompts that guide the agent clearly',
    'Review, accept, and reject diffs confidently',
    'Run multi-file edits safely',
  ],
  blocks: [
    {
      type: 'paragraph',
      content:
        'Open Composer with ⌘I when a task is too big for Chat but too structural for a single ⌘K edit. Composer can explore your repo, edit multiple files, run commands, and iterate — but you stay in the loop reviewing every change.',
    },
    {
      type: 'screenshot',
      description:
        'The Composer panel with a prompt written, a list of files being edited, and the diff view visible.',
    },
    { type: 'heading', content: 'When to Use Composer vs Chat', level: 2 },
    {
      type: 'list',
      items: [
        'Chat — Questions, explanations, single-file edits, quick iterations.',
        'Composer — New features, cross-file refactors, scaffolding, debugging across layers.',
        '⌘K — One selection, one file, fastest path for tiny changes.',
      ],
    },
    {
      type: 'comparison',
      label: 'Right tool for the job',
      bad: 'Composer: "Fix the typo on line 3 of README.md"',
      good: '⌘K on the typo, or Chat with the file attached.',
    },
    {
      type: 'comparison',
      label: 'Multi-file feature',
      bad: 'Chat: paste five files and ask for a new API + UI + tests.',
      good: 'Composer: @src/features/products/ — add duplicate-product flow matching existing patterns.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Writing Good Composer Prompts', level: 2 },
    {
      type: 'paragraph',
      content:
        'Treat Composer prompts like a brief for a teammate: outcome, context, constraints, and definition of done.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'State the outcome',
          content: 'One sentence: what does "done" look like? Example: "Users can reset their password via email."',
        },
        {
          title: 'Attach context',
          content: 'Use @Folders or @Files pointing at similar features the agent should mimic.',
        },
        {
          title: 'Set constraints',
          content: 'Stack, files to avoid, "do not change public APIs", "match existing test style".',
        },
        {
          title: 'Define verification',
          content: 'Say "run npm test and fix failures" or "ensure npm run dev starts without errors".',
        },
      ],
    },
    {
      type: 'code',
      title: 'Strong Composer prompt',
      language: 'text',
      content: `@src/features/auth/

Add password reset:
- POST /auth/forgot-password and POST /auth/reset-password
- Email template stub in @src/emails/
- Reset form page matching LoginPage.tsx style
- Unit tests for both handlers

Use @src/lib/validate.ts for validation. Do not change unrelated routes.`,
    },
    { type: 'heading', content: 'Plan Before You Build', level: 2 },
    {
      type: 'paragraph',
      content:
        'For complex work, ask for a plan first. Switch to Plan mode in Composer, or add "Plan only — do not edit files yet" to your prompt.',
    },
    {
      type: 'screenshot',
      description:
        'Composer Plan mode showing a proposed step-by-step plan before any files are edited.',
    },
    {
      type: 'code',
      title: 'Planning prompt',
      language: 'text',
      content: `@src/

I need to add Stripe checkout. Plan only — no file edits.

Outline: files to create/modify, order of work, risks, and open questions.`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Accepting & Rejecting Changes', level: 2 },
    {
      type: 'paragraph',
      content:
        'Composer shows a diff per file. You are the reviewer — never accept blindly.',
    },
    {
      type: 'screenshot',
      description:
        'The Composer diff view with Accept and Reject controls for each changed file.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Scan the file list',
          content: 'Did it touch files outside your intended scope? Reject unexpected paths immediately.',
        },
        {
          title: 'Read each diff',
          content: 'Look for deleted tests, debug logs, changed APIs, or "helpful" refactors you did not ask for.',
        },
        {
          title: 'Accept per file',
          content: 'Accept good files individually. Reject bad ones and give feedback in a follow-up prompt.',
        },
        {
          title: 'Verify in terminal',
          content: 'Run tests and dev server. Ask Composer to fix failures before you commit.',
        },
      ],
    },
    {
      type: 'code',
      title: 'Recovery prompt',
      language: 'text',
      content: `Stop. Revert changes to @src/lib/api.ts only.
Keep the component changes. Do not refactor anything else.`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Multi-File Editing', level: 2 },
    {
      type: 'list',
      items: [
        'Point at a reference feature — "Match @src/features/checkout/"',
        'One feature per Composer session — fresh context avoids confusion',
        'Use .cursorrules so conventions are automatic',
        'Ask for a file list before applying large refactors',
      ],
    },
    {
      type: 'code',
      title: 'Cross-file rename',
      language: 'text',
      content: `@src/components/

Rename prop "variant" to "appearance" everywhere:
- Update TypeScript types and all usages
- Update tests
- List files you will modify before applying`,
    },
    {
      type: 'tip',
      content:
        'Start a new Composer chat when switching to an unrelated task. Stale context causes confused edits.',
    },
  ],
}
