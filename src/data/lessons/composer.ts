import type { Lesson } from '../../types'

export const composerLesson: Lesson = {
  id: 'using-composer',
  sectionId: 'composer',
  title: 'Using the Agents Window Effectively',
  description:
    'The Agents Window is where Cursor\'s AI does real work — multi-file edits, terminal commands, parallel tasks. Learn to drive it without losing control.',
  duration: '13 min read',
  objectives: [
    'Start and manage agent sessions in the Agents Window',
    'Choose agent modes (Agent, Plan, Ask) for the right task',
    'Review diffs and accept or reject changes safely',
    'Use parallel agents and worktrees when appropriate',
  ],
  blocks: [
    {
      type: 'paragraph',
      content:
        'The Agents Window replaces the old "open Composer panel on the side" workflow. Instead of bolting AI onto the editor, Cursor 3+ puts agents front and center. You describe outcomes; agents explore your repo, edit files, run commands, and hand you diffs to review.',
    },
    {
      type: 'screenshot',
      description:
        'Capture the Agents Window on first launch: empty or welcome state, prominent prompt input, a "New agent" or "+" control visible, and the session list area where past agents would appear.',
    },
    { type: 'heading', content: 'Opening & Starting an Agent', level: 2 },
    {
      type: 'steps',
      items: [
        {
          title: 'Open the Agents Window',
          content: '⌘Shift+P → "Open Agents Window". Or File → New Agent Window.',
        },
        {
          title: 'Open your project',
          content: 'Make sure the correct folder/repo is selected. Agents only see files in the active workspace.',
        },
        {
          title: 'Start a new agent',
          content: 'Click New Agent or start typing in the prompt box. Each session is a separate conversation and task.',
        },
        {
          title: 'Attach context',
          content: 'Type @ and add files, folders, or git diff before you send the first message.',
        },
      ],
    },
    {
      type: 'screenshot',
      description:
        'Capture a new agent session with the first prompt typed (e.g. "Add a settings page"), @src/components/ attached in the input chip area, and the Send button visible.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Agent Modes: Agent, Plan, and Ask', level: 2 },
    {
      type: 'paragraph',
      content:
        'Before sending a prompt, check the mode selector near the input. The mode controls whether the agent can edit files.',
    },
    {
      type: 'list',
      items: [
        'Agent mode — Full power. Edits files, runs terminal commands, iterates until done. Default for building.',
        'Plan mode — Explores and proposes a plan without editing. Use for risky or unfamiliar work.',
        'Ask mode — Read-only. Explains code and answers questions. No file changes.',
      ],
    },
    {
      type: 'comparison',
      label: 'Pick the right mode',
      bad: 'Agent mode: "Explain how authentication works in this repo."',
      good: 'Ask mode + @src/auth/: "Walk through the login flow and list key files."',
    },
    {
      type: 'comparison',
      label: 'Large feature',
      bad: 'Agent mode immediately: "Migrate our entire API to GraphQL."',
      good: 'Plan mode first: "Outline migration steps and risks." Then Agent mode for step 1 only.',
    },
    {
      type: 'screenshot',
      description:
        'Capture the mode selector dropdown near the agent prompt input showing Agent, Plan, and Ask options, with Plan mode selected and a planning response visible above (bullet list of steps, no diffs yet).',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Agents Window vs Editor vs Inline Edit', level: 2 },
    {
      type: 'list',
      items: [
        'Agents Window — Multi-file features, refactors, scaffolding, debugging across layers, parallel tasks.',
        'Editor — Reading code, manual edits, extensions, comparing many files in split panes.',
        'Inline edit (⌘K in Editor) — Single selection, one file, fastest for tiny local changes.',
      ],
    },
    {
      type: 'tip',
      content:
        'Workflow loop: Agent makes changes in Agents Window → Open Editor Window to read the full files → back to Agents Window for follow-up prompts.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Writing Effective Agent Prompts', level: 2 },
    {
      type: 'steps',
      items: [
        {
          title: 'State the outcome',
          content: '"Users can reset password via email" — one clear sentence for done.',
        },
        {
          title: 'Attach exemplars',
          content: '@src/features/similar-feature/ — "Match patterns from here."',
        },
        {
          title: 'Set constraints',
          content: 'Files to avoid, "no API changes", "run npm test when finished".',
        },
        {
          title: 'Scope the session',
          content: 'One feature per agent. New agent = fresh context for unrelated work.',
        },
      ],
    },
    {
      type: 'code',
      title: 'Strong agent prompt',
      language: 'text',
      content: `@src/features/auth/

Add password reset:
- POST /auth/forgot-password and POST /auth/reset-password
- Reset form page matching LoginPage.tsx style
- Unit tests for both handlers

Use @src/lib/validate.ts. Do not change unrelated routes.
Run npm test when done.`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Reviewing Diffs: Accept & Reject', level: 2 },
    {
      type: 'paragraph',
      content:
        'Cursor 3\'s Agents Window includes an improved diffs view. Every file the agent touches gets a review step. You are always the final gate.',
    },
    {
      type: 'screenshot',
      description:
        'Capture the diffs review UI: a list of changed files on one side, side-by-side or inline diff for the selected file in the center, and Accept / Reject (or Keep / Undo) buttons clearly visible.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Scan the file list',
          content: 'Unexpected paths? Reject or tell the agent to revert those files only.',
        },
        {
          title: 'Read each diff',
          content: 'Watch for deleted tests, debug code, scope creep, changed public APIs.',
        },
        {
          title: 'Accept incrementally',
          content: 'Accept good files one at a time. Follow up in the same agent session for fixes.',
        },
        {
          title: 'Verify in terminal',
          content: 'Run tests in Editor terminal or ask the agent to run them and fix failures.',
        },
      ],
    },
    {
      type: 'code',
      title: 'Scope recovery prompt',
      language: 'text',
      content: `Stop. Revert changes to @src/lib/api.ts only.
Keep the component changes. Do not refactor anything else.`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Parallel Agents & Worktrees', level: 2 },
    {
      type: 'paragraph',
      content:
        'A major Agents Window advantage: run multiple agents at once — even across repos — without them stepping on each other.',
    },
    {
      type: 'list',
      items: [
        'Parallel agents — Start a second agent for an unrelated task while the first runs (local or cloud).',
        'Session list — See all active agents, their repos, and status in one sidebar.',
        'Worktrees — Each agent can use an isolated git checkout so parallel edits do not conflict.',
        'Cloud agents — Long tasks can run in the cloud while you close your laptop; check back in the Agents Window.',
      ],
    },
    {
      type: 'screenshot',
      description:
        'Capture the Agents Window session sidebar with two or more active agent sessions listed (different task names or repos), one selected showing its conversation, and a "New agent" button visible.',
    },
    {
      type: 'tip',
      content:
        'Parallel agents excel at independent tasks (frontend + backend, tests + docs). Do not run two agents on the same files simultaneously.',
    },
    { type: 'heading', content: 'Quick Reference', level: 2 },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'P'], description: 'Open Agents Window or Editor Window' },
    { type: 'shortcut', keys: ['⌘', 'P'], description: 'Quick Open file (inside Agents Window too)' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'F'], description: 'Search all files' },
    { type: 'shortcut', keys: ['⌘', 'K'], description: 'Inline edit (in Editor Window)' },
  ],
}
