import type { Lesson } from '../../types'

export const interfaceLesson: Lesson = {
  id: 'interface-overview',
  sectionId: 'interface',
  title: 'Understanding the Cursor Interface',
  description:
    'A practical tour of Cursor\'s layout — where to chat, where to run agents, and how to attach context so the AI actually helps.',
  duration: '10 min read',
  objectives: [
    'Choose between Chat, Composer, and inline edit for any task',
    'Navigate the Activity Bar, sidebars, and editor confidently',
    'Use the terminal and @ mentions to give Cursor real context',
    'Memorize the handful of shortcuts that matter most',
  ],
  blocks: [
    {
      type: 'paragraph',
      content:
        'Cursor is built on VS Code, so the editor will feel familiar. What is new is the AI woven into every layer — autocomplete as you type, a chat panel for questions, and Composer for multi-file agent work. This lesson maps the interface so you always know which tool to reach for.',
    },
    {
      type: 'screenshot',
      description:
        'The full Cursor window with the Chat panel, editor, sidebar, Activity Bar, and terminal labeled.',
    },
    { type: 'heading', content: 'Chat vs Composer vs Inline Edit', level: 2 },
    {
      type: 'paragraph',
      content:
        'These three modes are the foundation of Cursor. Picking the right one saves time and keeps changes reviewable.',
    },
    {
      type: 'list',
      items: [
        'Chat (⌘L) — Ask questions, get explanations, and make focused edits. You review each change. Best for learning and single-file work.',
        'Composer / Agent (⌘I) — Autonomous multi-step mode. Reads many files, creates new ones, runs terminal commands. Best for features and refactors.',
        'Inline Edit (⌘K) — Select code in the editor, describe a change, and see a diff inline. Best for small, local edits.',
      ],
    },
    {
      type: 'screenshot',
      description:
        'Chat panel on the right compared with the Composer view, showing how each mode looks side by side.',
    },
    {
      type: 'comparison',
      label: 'Quick decision guide',
      bad: 'Open Composer to ask "What does this function do?"',
      good: 'Chat + @file: "Explain formatCurrency and list edge cases."',
    },
    {
      type: 'tip',
      content:
        'When in doubt: Chat to understand, Composer to build, ⌘K to tweak a selection.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Activity Bar & Sidebars', level: 2 },
    {
      type: 'paragraph',
      content:
        'The Activity Bar is the vertical icon strip on the far left. Each icon opens a sidebar panel.',
    },
    {
      type: 'screenshot',
      description:
        'The Activity Bar on the left with Explorer, Search, Source Control, and Extensions icons highlighted.',
    },
    {
      type: 'list',
      items: [
        'Explorer — Browse files. Right-click → "Add to Chat" to attach a file as context instantly.',
        'Search — Find text project-wide. Great before refactors; pair results with @ mentions.',
        'Source Control — Git status, diffs, staging. Use with @Git in prompts for AI code review.',
        'Extensions — Same as VS Code. Add language support, themes, and linters.',
      ],
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Open the Explorer',
          content: 'Click the top icon on the Activity Bar (or press ⌘Shift+E). This is your home base for navigating the project.',
        },
        {
          title: 'Attach a file to Chat',
          content: 'Right-click any file → "Add to Chat". The file appears as an @ mention in your prompt automatically.',
        },
        {
          title: 'Review git changes',
          content: 'Open Source Control (⌘Shift+G), click a changed file to see the diff, then use @Git in Chat to ask for a review.',
        },
      ],
    },
    { type: 'divider' },
    { type: 'heading', content: 'The Editor (Center Panel)', level: 2 },
    {
      type: 'list',
      items: [
        'Tabs — Keep related files open when using Composer so you can jump between diffs quickly.',
        'Ghost text — AI autocomplete suggestions. Tab to accept, Esc to dismiss.',
        'Diff view — Green = added, red = removed. Always read diffs before accepting.',
        'Breadcrumbs — Navigate nested symbols. Reference line numbers in prompts for precision.',
      ],
    },
    {
      type: 'screenshot',
      description:
        'Inline autocomplete (ghost text) in the editor, plus a diff view showing accepted AI changes.',
    },
    { type: 'heading', content: 'Terminal Integration', level: 2 },
    {
      type: 'paragraph',
      content:
        'The integrated terminal runs real commands in your project folder — npm, git, docker, tests. Cursor can read its output when you use @Terminal in a prompt.',
    },
    {
      type: 'screenshot',
      description:
        'The integrated terminal at the bottom showing a failed test command and error output.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Open the terminal',
          content: 'Press Ctrl+` (backtick) or View → Terminal. It opens in your project root by default.',
        },
        {
          title: 'Run your command',
          content: 'Execute npm test, npm run dev, or any shell command as you normally would.',
        },
        {
          title: 'Share output with AI',
          content: 'In Chat, type @Terminal and ask Cursor to diagnose the error. No need to copy-paste manually.',
        },
      ],
    },
    {
      type: 'code',
      title: 'Example: debug with terminal context',
      language: 'text',
      content: `@Terminal @src/auth/login.ts

npm test failed on the login suite. Find the root cause and propose a minimal fix.`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Context with @ Mentions', level: 2 },
    {
      type: 'paragraph',
      content:
        '@ mentions are how you attach context. Without them, Cursor guesses. With them, it reads exactly what you point at.',
    },
    {
      type: 'list',
      items: [
        '@Files / @Folders — Specific paths in your project',
        '@Code — Jump to a function, class, or symbol by name',
        '@Docs — Indexed library documentation',
        '@Web — Live web search for up-to-date answers',
        '@Git — Your current diff or recent commits',
        '@Terminal — Recent command output',
      ],
    },
    {
      type: 'code',
      title: 'Example: file reference in Chat',
      language: 'text',
      content: `@src/components/Button.tsx

How does disabled state work? Suggest one improvement without changing the public API.`,
    },
    { type: 'heading', content: 'Keyboard Shortcuts Overview', level: 2 },
    {
      type: 'paragraph',
      content: 'On Windows/Linux, use Ctrl instead of ⌘. Learn these five first:',
    },
    { type: 'shortcut', keys: ['⌘', 'L'], description: 'Open / focus Chat' },
    { type: 'shortcut', keys: ['⌘', 'I'], description: 'Open Composer (Agent)' },
    { type: 'shortcut', keys: ['⌘', 'K'], description: 'Inline edit on selected code' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'L'], description: 'Add selection to Chat context' },
    { type: 'shortcut', keys: ['⌘', 'P'], description: 'Quick Open — jump to any file by name' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'P'], description: 'Command Palette — search any action' },
    { type: 'shortcut', keys: ['Ctrl', '`'], description: 'Toggle integrated terminal' },
    { type: 'shortcut', keys: ['Tab'], description: 'Accept autocomplete suggestion' },
    {
      type: 'tip',
      content:
        'Press ⌘Shift+P, type "keyboard shortcuts", and search "cursor" to see every AI binding. Customize any shortcut to match your workflow.',
    },
  ],
}
