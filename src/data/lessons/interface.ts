import type { Lesson } from '../../types'

export const interfaceLesson: Lesson = {
  id: 'interface-overview',
  sectionId: 'interface',
  title: 'Understanding the Cursor Interface',
  description:
    'Cursor has two main views — the Agents Window (where you work with AI) and the Editor (where you read and edit code). This lesson shows you how to switch between them and find your way around.',
  duration: '12 min read',
  objectives: [
    'Open the Agents Window and understand what it is for',
    'Switch to the Editor to browse files and review code',
    'Use the File Explorer, terminal, and Command Palette confidently',
    'Know when to stay in Agents vs open the Editor',
  ],
  blocks: [
    {
      type: 'paragraph',
      content:
        'Modern Cursor (version 3+) is agent-first. The Agents Window is the main place you talk to AI, run tasks, and review changes. The Editor is the classic VS Code-style view for reading code, using extensions, and splitting files. Most beginners get stuck because they expect one screen to do everything — in practice, you move between both.',
    },
    {
      type: 'screenshot',
      src: '/screenshots/cursor-interface-overview.png',
      alt: 'Cursor workspace showing the tutorial app in the editor, file explorer, Composer panel with Agent mode, and the Vite dev server terminal',
      description:
        'Full Cursor layout: Editor with your project, File Explorer on the left, Composer (Agents) on the right with the prompt box and mode selector, and the integrated terminal at the bottom.',
    },
    { type: 'heading', content: 'Two Views: Agents Window vs Editor', level: 2 },
    {
      type: 'list',
      items: [
        'Agents Window — Primary AI workspace. Start agents, manage parallel tasks, review diffs, work across repos. Best when AI is doing most of the work.',
        'Editor Window — Classic IDE. File tree, tabs, extensions, Outline, Timeline. Best when you want to read many files at once or edit by hand.',
        'You can use both — many developers keep Agents open for tasks and switch to Editor to inspect results.',
      ],
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Open the Agents Window',
          content: 'Press ⌘Shift+P (Ctrl+Shift+P on Windows/Linux), type "Open Agents Window", and press Enter. Or use File → New Agent Window.',
        },
        {
          title: 'Open the Editor',
          content: 'Press ⌘Shift+P → "Open Editor Window". This opens your project in the familiar VS Code-style layout.',
        },
        {
          title: 'Switch anytime',
          content: 'Neither view replaces the other. Use Command Palette to jump back and forth as your task changes.',
        },
      ],
    },
    {
      type: 'screenshot',
      src: '/screenshots/cursor-actions-menu.png',
      alt: 'Agents Window with the Actions menu open, showing Open Editor Window and other agent shortcuts',
      description:
        'Agents Window Actions menu: search or pick commands like Open Editor Window (⇧⌘N), New Agent, and tile controls — another way to switch views besides the Command Palette.',
    },
    {
      type: 'tip',
      content:
        'If you do not see "Open Agents Window", update Cursor (Cursor → Check for Updates) and ensure your team has Agents Window enabled in settings.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'The Agents Window (Main AI Interface)', level: 2 },
    {
      type: 'paragraph',
      content:
        'Think of the Agents Window as mission control. You describe what you want, the agent reads your project, edits files, runs commands, and shows you diffs to accept or reject.',
    },
    {
      type: 'list',
      items: [
        'Agent sessions — Each task gets its own conversation. You can run multiple agents in parallel (local or cloud).',
        'Prompt input — Where you type instructions and attach context with @ (files, folders, git, terminal).',
        'Diffs view — See every file the agent changed before accepting. Review is always your job.',
        'Multi-workspace — Work with agents across different repos from one place (Cursor 3+).',
        'Worktrees — Agents can work in isolated git checkouts so parallel tasks do not collide.',
      ],
    },
    {
      type: 'screenshot',
      src: '/screenshots/cursor-agent-session.png',
      alt: 'Active Agents Window session with chat history, follow-up prompt, live app preview, and pending review changes',
      description:
        'Active agent session: conversation and task history on the left, your prompt at the bottom, the running app preview in the center, and a Review badge when the agent has edits ready to accept.',
    },
    {
      type: 'comparison',
      label: 'Where to work',
      bad: 'Try to read ten files at once inside the Agents Window.',
      good: 'Run the agent in Agents Window → switch to Editor (⌘Shift+P → Open Editor Window) to inspect files in tabs.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'The Editor: Files & Code', level: 2 },
    {
      type: 'paragraph',
      content:
        'The Editor is where you see your project structure and code. If you have used VS Code, this will feel familiar.',
    },
    {
      type: 'screenshot',
      description:
        'Capture the Editor Window with these areas labeled: (1) Activity Bar on the far left, (2) File Explorer sidebar showing a project tree, (3) open file tabs in the center editor, (4) optional Outline panel showing symbols in the current file.',
    },
    {
      type: 'heading', content: 'Activity Bar & File Explorer', level: 3 },
    {
      type: 'paragraph',
      content:
        'The Activity Bar is the narrow vertical strip on the far left. The top icon (files icon) opens the Explorer — your file tree.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Show the Explorer',
          content: 'Click the top Activity Bar icon or press ⌘Shift+E. Your project folders and files appear in the sidebar.',
        },
        {
          title: 'Open a file',
          content: 'Click any file in the tree — it opens in a tab in the center. Or press ⌘P and type the filename (Quick Open).',
        },
        {
          title: 'Open a folder',
          content: 'File → Open Folder… Choose your project root. Cursor needs an open folder for agents to access your code.',
        },
      ],
    },
    {
      type: 'list',
      items: [
        'Explorer (⌘Shift+E) — Browse, create, rename files and folders.',
        'Search (⌘Shift+F) — Find text across the whole project.',
        'Source Control (⌘Shift+G) — Git changes, diffs, commit.',
        'Extensions — Add language support, themes, linters (same as VS Code).',
      ],
    },
    {
      type: 'screenshot',
      description:
        'Capture the Activity Bar with callouts on Explorer, Search, Source Control, and Extensions icons. The Explorer sidebar should be open showing a realistic src/ folder tree.',
    },
    { type: 'heading', content: 'Outline & Timeline Panels', level: 3 },
    {
      type: 'paragraph',
      content:
        'These optional panels live in the sidebar below the Explorer. They help you navigate without scrolling huge files.',
    },
    {
      type: 'list',
      items: [
        'Outline — Lists functions, classes, and symbols in the current file. Open via View → Open View → Outline, or the "..." menu in the Explorer sidebar.',
        'Timeline — Shows local file history and git commits for the active file. Useful to see recent changes.',
        'If you do not see them: right-click the Explorer sidebar title bar → add Outline or Timeline from the panel list.',
      ],
    },
    {
      type: 'screenshot',
      description:
        'Capture the Editor with the Outline panel expanded below the file tree, showing functions/classes listed for an open .tsx or .ts file.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Inline Edit in the Editor (⌘K)', level: 2 },
    {
      type: 'paragraph',
      content:
        'Even with the Agents Window as the main AI surface, inline edit remains the fastest way to change a small block of code. Select code in the Editor, press ⌘K, describe the change, and review the inline diff.',
    },
    {
      type: 'screenshot',
      description:
        'Capture the Editor with a code selection highlighted, the inline edit prompt box open (⌘K), and ghost-text autocomplete visible on another line.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Terminal', level: 2 },
    {
      type: 'paragraph',
      content:
        'The terminal runs at the bottom of the Editor (and is available in agent workflows). Use it for npm, git, tests, and dev servers.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Open terminal',
          content: 'In the Editor: Ctrl+` (backtick) or View → Terminal. Opens in your project root.',
        },
        {
          title: 'Run commands',
          content: 'npm test, npm run dev, git status — same as any terminal.',
        },
        {
          title: 'Share with agents',
          content: 'In the Agents Window, type @Terminal in your prompt so the agent reads recent output without copy-paste.',
        },
      ],
    },
    {
      type: 'screenshot',
      description:
        'Capture the Editor with the terminal panel open at the bottom showing a failed npm test command, red error text, and a file path in the stack trace visible.',
    },
    {
      type: 'code',
      title: 'Debug prompt with terminal context',
      language: 'text',
      content: `@Terminal @src/auth/login.ts

npm test failed on the login suite. Find the root cause and propose a minimal fix.`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Search & Command Palette', level: 2 },
    {
      type: 'paragraph',
      content:
        'Two different tools — beginners confuse them constantly.',
    },
    {
      type: 'list',
      items: [
        'Quick Open (⌘P) — Jump to a file by name. Type "Button.tsx" and open it instantly.',
        'Search in Files (⌘Shift+F) — Find text across the project. Great before refactors.',
        'Command Palette (⌘Shift+P) — Run any action: open Agents Window, format document, git commit, toggle panels.',
      ],
    },
    {
      type: 'screenshot',
      description:
        'Capture two side-by-side crops: (left) Quick Open (⌘P) with a filename typed and results listed; (right) Command Palette (⌘Shift+P) with "Agents" typed showing agent-related commands.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Context with @ Mentions', level: 2 },
    {
      type: 'paragraph',
      content:
        'In the Agents Window prompt (and inline edit), @ attaches context. This is the single most important habit for good results.',
    },
    {
      type: 'list',
      items: [
        '@Files / @Folders — Point at specific paths',
        '@Code — Reference a symbol by name',
        '@Docs — Library documentation',
        '@Web — Live web search',
        '@Git — Current diff or recent commits',
        '@Terminal — Recent command output',
      ],
    },
    {
      type: 'screenshot',
      description:
        'Capture the Agents Window prompt input with the @ menu dropdown open, showing options: Files, Folders, Code, Git, Terminal, Docs, and Web.',
    },
    { type: 'heading', content: 'Essential Shortcuts', level: 2 },
    {
      type: 'paragraph',
      content: 'Windows/Linux: use Ctrl instead of ⌘.',
    },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'P'], description: 'Command Palette — open Agents Window, Editor, any action' },
    { type: 'shortcut', keys: ['⌘', 'P'], description: 'Quick Open — jump to a file (works in both views)' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'E'], description: 'Show File Explorer (Editor)' },
    { type: 'shortcut', keys: ['⌘', 'K'], description: 'Inline edit on selected code (Editor)' },
    { type: 'shortcut', keys: ['Ctrl', '`'], description: 'Toggle terminal (Editor)' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'F'], description: 'Search across all files' },
    { type: 'shortcut', keys: ['Tab'], description: 'Accept autocomplete suggestion' },
    {
      type: 'tip',
      content:
        'Navigation cheat sheet: Agents Window for doing work with AI → Editor for reading code → Terminal for running commands → ⌘Shift+P to switch views.',
    },
  ],
}
