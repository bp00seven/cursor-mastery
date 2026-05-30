import type { Lesson } from '../../types'

export const workflowsLesson: Lesson = {
  id: 'common-workflows',
  sectionId: 'workflows',
  title: 'Common Workflows',
  description:
    'End-to-end playbooks for the situations you hit every week — new projects, refactors, bugs, and features.',
  duration: '14 min read',
  objectives: [
    'Scaffold a new web app in manageable layers',
    'Refactor existing code without breaking behavior',
    'Debug systematically with terminal and @ context',
    'Add features that match your codebase patterns',
  ],
  blocks: [
    {
      type: 'paragraph',
      content:
        'These workflows are copy-paste starting points. Swap in your paths, run them in Composer or Chat, and adapt as you learn what works in your repo.',
    },
    { type: 'heading', content: 'Building a New Web App from Scratch', level: 2 },
    {
      type: 'paragraph',
      content:
        'Never ask for the entire app in one prompt. Layer the work: setup → layout → features → polish. Commit after each successful layer.',
    },
    {
      type: 'screenshot',
      description:
        'An empty project folder in Cursor with Composer open, ready to scaffold a new app.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Open an empty folder',
          content: 'File → Open Folder. Create .cursorrules describing your stack (React, TypeScript, etc.).',
        },
        {
          title: 'Scaffold the project (Composer)',
          content: 'Run the Step 1 prompt below. Verify npm run dev works before continuing.',
        },
        {
          title: 'Add layout shell',
          content: 'Routing, nav, placeholder pages. Match patterns you want for the whole app.',
        },
        {
          title: 'Build one feature at a time',
          content: 'Each feature gets its own Composer session + commit. Run tests between steps.',
        },
      ],
    },
    {
      type: 'code',
      title: 'Step 1 — scaffold',
      language: 'text',
      content: `Create a React + TypeScript app with Vite in this folder.

Include: src/components, src/pages, src/hooks, src/lib
React Router with Home placeholder
Dark theme CSS variables
npm install && npm run dev — fix any errors`,
    },
    {
      type: 'code',
      title: 'Step 2 — first feature',
      language: 'text',
      content: `Add a task list at /tasks:
- Add, complete, delete tasks
- localStorage persistence
- Match styling from @src/pages/Home.tsx
- useTasks hook in src/hooks/

No backend yet.`,
    },
    {
      type: 'tip',
      content: 'Commit after each step. If Composer goes off track, git reset beats untangling a giant diff.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Refactoring Existing Code', level: 2 },
    {
      type: 'steps',
      items: [
        {
          title: 'Green tests first',
          content: 'Run the test suite. Attach failures with @Terminal if anything is already broken.',
        },
        {
          title: 'Map impact (Chat)',
          content: '"What files import @src/legacy/parser.ts?" Understand blast radius before editing.',
        },
        {
          title: 'Mechanical change (Composer)',
          content: 'One transformation: rename, extract, or move. Reject drive-by improvements.',
        },
        {
          title: 'Verify and commit',
          content: 'Tests pass. Commit message describes only the refactor.',
        },
      ],
    },
    {
      type: 'screenshot',
      description:
        'Source Control showing a refactor with multiple files changed and side-by-side diffs.',
    },
    {
      type: 'code',
      title: 'Extract hook refactor',
      language: 'text',
      content: `@src/features/reports/ReportTable.tsx

Extract sorting into src/hooks/useTableSort.ts:
- Generic for other tables
- ReportTable behavior unchanged
- Move tests; add hook unit tests
- No UI or unrelated file changes`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Debugging with Cursor', level: 2 },
    {
      type: 'paragraph',
      content:
        'Debugging works best when you give Cursor the error, the stack trace, and the suspect files — then ask it to explain before fixing.',
    },
    {
      type: 'screenshot',
      description:
        'Chat with @Terminal attached, displaying a stack trace and error output in the conversation.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Reproduce the bug',
          content: 'Run the failing command in terminal. Capture the exact error message.',
        },
        {
          title: 'Prompt for root cause',
          content: '@Terminal + @Files — "Explain root cause before proposing a fix."',
        },
        {
          title: 'Apply minimal fix',
          content: 'Review the diff. Re-run the command. Iterate in the same chat if needed.',
        },
      ],
    },
    {
      type: 'code',
      title: 'Debug prompt',
      language: 'text',
      content: `@Terminal @src/server/handlers/order.ts

POST /orders returns 500:
"TypeError: Cannot read properties of undefined (reading 'id')"

1. Root cause
2. Smallest fix
3. No surrounding refactors`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Adding Features to an Existing Project', level: 2 },
    {
      type: 'paragraph',
      content:
        'Always attach a similar feature as a reference. Describe your feature as differences from that reference.',
    },
    {
      type: 'screenshot',
      description:
        'Composer with @src/features/products/ attached as context while building a new feature.',
    },
    {
      type: 'code',
      title: 'Feature from reference',
      language: 'text',
      content: `@src/features/products/

Add "categories" modeled after products:
- Same CRUD API style
- CategoriesPage + CategoryForm
- Same list/detail pattern
- Tests like productHandlers.test.ts
- Wire route in @src/router.tsx`,
    },
    {
      type: 'comparison',
      label: 'Feature quality',
      bad: 'Add notifications to the app.',
      good: `@src/features/emails/ @src/features/orders/

On status → "shipped", send email via sendEmail utility.
Add OrderShipped template. Test trigger only — mock sendEmail.`,
    },
    {
      type: 'tip',
      content:
        'Before merging: "@Git — review my changes for bugs and missing edge cases." A fast second pair of eyes.',
    },
  ],
}
