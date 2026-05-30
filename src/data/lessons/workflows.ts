import type { Lesson } from '../../types'

export const workflowsLesson: Lesson = {
  id: 'common-workflows',
  sectionId: 'workflows',
  title: 'Common Workflows',
  description:
    'End-to-end playbooks for real work — new projects, refactors, debugging, and features — using the Agents Window and Editor together.',
  duration: '14 min read',
  objectives: [
    'Scaffold a new app in the Agents Window step by step',
    'Refactor safely with Plan mode and diff review',
    'Debug using @Terminal in agent prompts',
    'Add features by pointing agents at reference code',
  ],
  blocks: [
    {
      type: 'paragraph',
      content:
        'These workflows assume Cursor 3\'s agent-first layout: do work in the Agents Window, inspect code in the Editor, run commands in the terminal. Copy the prompts, swap in your paths, and commit after each successful step.',
    },
    { type: 'heading', content: 'Building a New Web App from Scratch', level: 2 },
    {
      type: 'paragraph',
      content:
        'Layer the work: open folder → .cursorrules → scaffold → layout → one feature at a time. Never ask for the whole app in one prompt.',
    },
    {
      type: 'screenshot',
      description:
        'Capture the Agents Window with a brand-new empty folder as workspace: first agent prompt visible ("Create React + TypeScript Vite app…"), no files in any diff list yet, and File Explorer (in Editor Window, second screenshot or inset) showing an empty or nearly empty folder.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Open folder & rules',
          content: 'File → Open Folder in Editor. Add .cursorrules describing stack and conventions.',
        },
        {
          title: 'Open Agents Window',
          content: '⌘Shift+P → Open Agents Window. Confirm the correct folder is active.',
        },
        {
          title: 'Scaffold (Agent mode)',
          content: 'Run Step 1 prompt below. Review diffs. Accept. Run npm run dev in Editor terminal.',
        },
        {
          title: 'Features one at a time',
          content: 'New agent session per feature. Commit after each green test run.',
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

Run npm install && npm run dev. Fix any errors.`,
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
      content: 'Commit after each step. git reset beats untangling a giant agent diff.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Refactoring Existing Code', level: 2 },
    {
      type: 'steps',
      items: [
        {
          title: 'Green tests first',
          content: 'Editor terminal: npm test. Attach @Terminal if already failing.',
        },
        {
          title: 'Map impact (Ask mode)',
          content: '"What files import @src/legacy/parser.ts?" Understand blast radius.',
        },
        {
          title: 'Mechanical change (Agent mode)',
          content: 'One transformation. Reject drive-by refactors in diffs view.',
        },
        {
          title: 'Verify & commit',
          content: 'Tests pass. Commit describes only the refactor.',
        },
      ],
    },
    {
      type: 'screenshot',
      description:
        'Capture the Agents Window diffs view after a refactor: 3–5 files listed as changed, one file\'s diff open showing a rename or extract (green/red lines), Accept button visible but not yet clicked.',
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
        'Reproduce in Editor terminal → prompt in Agents Window with @Terminal + suspect @Files → ask for root cause before fix.',
    },
    {
      type: 'screenshot',
      description:
        'Capture the Agents Window with an agent conversation showing @Terminal and @src/... attached as chips, the user prompt quoting an error message, and the agent\'s response explaining root cause (above any diff). Optionally include Editor terminal with the same error visible.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Reproduce',
          content: 'Run failing command in Editor terminal. Copy exact error if needed.',
        },
        {
          title: 'Diagnose (Ask or Agent mode)',
          content: '@Terminal + @Files — "Explain root cause before proposing a fix."',
        },
        {
          title: 'Fix & verify',
          content: 'Review diff. Re-run command. Iterate in same agent session.',
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
        'Attach a similar feature as reference. Describe your feature as differences from that pattern.',
    },
    {
      type: 'screenshot',
      description:
        'Capture the Agents Window prompt before sending: @src/features/products/ folder attached, prompt text "Add categories feature modeled after products…", Agent mode selected.',
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
        'Before merging: new agent in Ask mode — "@Git @src/ — review my changes for bugs and missing edge cases."',
    },
  ],
}
