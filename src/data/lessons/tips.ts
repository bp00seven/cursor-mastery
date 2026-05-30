import type { Lesson } from '../../types'

export const tipsLesson: Lesson = {
  id: 'tips-shortcuts',
  sectionId: 'tips',
  title: 'Pro Tips & Hidden Features',
  description:
    'Shortcuts, Command Palette tricks, workspace habits, and Git integration — the details that make power users fast.',
  duration: '9 min read',
  objectives: [
    'Use essential keyboard shortcuts fluently',
    'Find any Cursor action via the Command Palette',
    'Work efficiently across projects and monorepos',
    'Use Git and @Git for reviews and commit messages',
  ],
  blocks: [
    {
      type: 'paragraph',
      content:
        'You do not need fifty shortcuts memorized. Learn the core set below, use the Command Palette for everything else, and adopt a few habits that compound over every session.',
    },
    { type: 'heading', content: 'Essential Keyboard Shortcuts', level: 2 },
    {
      type: 'screenshot',
      description:
        'Keyboard shortcuts reference (⌘K ⌘S) filtered to show Cursor-specific bindings.',
    },
    {
      type: 'paragraph',
      content: 'AI shortcuts (Ctrl on Windows/Linux):',
    },
    { type: 'shortcut', keys: ['⌘', 'L'], description: 'Open Chat' },
    { type: 'shortcut', keys: ['⌘', 'I'], description: 'Open Composer' },
    { type: 'shortcut', keys: ['⌘', 'K'], description: 'Inline edit (select code first)' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'L'], description: 'Add selection to Chat' },
    { type: 'shortcut', keys: ['Tab'], description: 'Accept autocomplete' },
    { type: 'shortcut', keys: ['Esc'], description: 'Dismiss suggestion or inline prompt' },
    { type: 'heading', content: 'Navigation Shortcuts', level: 3 },
    { type: 'shortcut', keys: ['⌘', 'P'], description: 'Quick Open file' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'P'], description: 'Command Palette' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'F'], description: 'Search in files' },
    { type: 'shortcut', keys: ['⌘', 'B'], description: 'Toggle sidebar' },
    { type: 'shortcut', keys: ['Ctrl', '`'], description: 'Toggle terminal' },
    { type: 'shortcut', keys: ['⌘', '\\'], description: 'Split editor' },
    { type: 'divider' },
    { type: 'heading', content: 'Using the Command Palette', level: 2 },
    {
      type: 'paragraph',
      content:
        '⌘Shift+P opens every action in Cursor. Type to filter — no menu hunting.',
    },
    {
      type: 'screenshot',
      description:
        'The Command Palette open with "Cursor" typed in the search box to filter AI actions.',
    },
    {
      type: 'list',
      items: [
        'Type "Cursor" — filter AI commands (Chat, Composer, rules)',
        'Type "Format Document" — format current file',
        'Type "Git: Commit" — commit from keyboard',
        'Type "Reload Window" — fix odd extension or AI behavior',
      ],
    },
    {
      type: 'code',
      title: 'Useful Command Palette searches',
      language: 'text',
      content: `Cursor: Open Chat
Cursor: Open Composer
Git: View History
Preferences: Open Keyboard Shortcuts
File: Compare Active File With...`,
    },
    {
      type: 'tip',
      content: 'Press ⌘K then ⌘S to open Keyboard Shortcuts. Search "cursor" and click any binding to reassign it.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Working with Multiple Workspaces', level: 2 },
    {
      type: 'list',
      items: [
        '⌘Shift+N — New window for a second project side by side',
        'File → Open Recent — jump between repos quickly',
        'Add Folder to Workspace — monorepos with multiple packages in one window',
        'One .cursorrules per project root — conventions differ per repo',
        'Separate Chat threads per task; separate windows per project',
      ],
    },
    {
      type: 'screenshot',
      description:
        'File → Add Folder to Workspace with a monorepo packages/ folder structure visible.',
    },
    {
      type: 'tip',
      content:
        'Monorepo: use .cursor/rules/ with globs (e.g. packages/web/**/*) so frontend rules do not leak into backend.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Integrating with Git', level: 2 },
    {
      type: 'paragraph',
      content:
        'Use the Source Control panel for visual diffs. Use @Git in Chat for AI-assisted review and commit messages.',
    },
    {
      type: 'screenshot',
      description:
        'The Source Control panel with staged changes and a side-by-side diff open.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Stage your changes',
          content: '⌘Shift+G → review each file diff → stage what belongs in this commit.',
        },
        {
          title: 'AI pre-PR review',
          content: 'Chat: "@Git @src/ — review for bugs, security, missing tests. List by severity."',
        },
        {
          title: 'Commit message help',
          content: '"@Git — suggest a conventional commit message for staged changes."',
        },
        {
          title: 'Commit and push',
          content: 'Use the Source Control UI or Command Palette → "Git: Commit".',
        },
      ],
    },
    {
      type: 'code',
      title: 'Pre-PR review',
      language: 'text',
      content: `@Git @src/

Review my branch before I open a PR:
- Bugs and edge cases
- Security concerns
- Pattern consistency
- Missing tests

By severity. Do not fix yet.`,
    },
    { type: 'heading', content: 'Hidden Features Worth Knowing', level: 2 },
    {
      type: 'list',
      items: [
        'Ask mode — Chat without edits. Perfect for learning unfamiliar code.',
        'Notepads — Reusable prompt snippets (search "Notepad" in Command Palette).',
        'Docs indexing — Cursor Settings → add library docs for accurate @Docs answers.',
        'Right-click → Add to Chat — instant @ context from any file or selection.',
        'Pin chats — keep long-running feature work at the top of history.',
        'Paste screenshots — UI bugs and error dialogs work as image context in Chat.',
      ],
    },
    {
      type: 'tip',
      content:
        'Every new project: add .cursorrules + one "map the codebase" Chat prompt. Five minutes upfront saves hours of misprompted edits.',
    },
  ],
}
