import type { Lesson } from '../../types'

export const tipsLesson: Lesson = {
  id: 'tips-shortcuts',
  sectionId: 'tips',
  title: 'Pro Tips & Navigation',
  description:
    'Shortcuts, Command Palette, switching between Agents Window and Editor, Git integration, and habits that make beginners productive fast.',
  duration: '10 min read',
  objectives: [
    'Switch between Agents Window and Editor without getting lost',
    'Use Command Palette, Quick Open, and search effectively',
    'Integrate Git and @Git into agent workflows',
    'Work across multiple projects and workspaces',
  ],
  blocks: [
    {
      type: 'paragraph',
      content:
        'Cursor 3 adds a new navigation layer: two windows, multiple agents, optional cloud sessions. You do not need every shortcut — learn the switching commands first, then add power-user habits.',
    },
    { type: 'heading', content: 'Switching Views (Most Important)', level: 2 },
    {
      type: 'list',
      items: [
        '⌘Shift+P → "Open Agents Window" — AI mission control',
        '⌘Shift+P → "Open Editor Window" — classic IDE for reading code',
        'File → New Agent Window — additional agent workspace',
        'Both can run simultaneously on macOS/Windows as separate windows',
      ],
    },
    {
      type: 'screenshot',
      description:
        'Capture your desktop with both Cursor windows visible side by side: Agents Window on the left (agent conversation active) and Editor Window on the right (file tree + code tabs open on the same project).',
    },
    {
      type: 'tip',
      content:
        'Beginner loop: Agents Window to task → Editor to read results → Terminal in Editor to test → back to Agents Window for fixes.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Essential Shortcuts', level: 2 },
    {
      type: 'screenshot',
      description:
        'Capture Keyboard Shortcuts editor (⌘K then ⌘S) with search box containing "agents" or "cursor", showing bindings for Open Agents Window and Open Editor Window.',
    },
    {
      type: 'paragraph',
      content: 'Windows/Linux: Ctrl instead of ⌘.',
    },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'P'], description: 'Command Palette — switch views, run any action' },
    { type: 'shortcut', keys: ['⌘', 'P'], description: 'Quick Open file (Agents Window & Editor)' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'E'], description: 'File Explorer (Editor)' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'F'], description: 'Search all files' },
    { type: 'shortcut', keys: ['⌘', 'Shift', 'G'], description: 'Source Control / Git panel' },
    { type: 'shortcut', keys: ['⌘', 'K'], description: 'Inline edit (Editor, selection required)' },
    { type: 'shortcut', keys: ['Ctrl', '`'], description: 'Toggle terminal (Editor)' },
    { type: 'shortcut', keys: ['⌘', 'B'], description: 'Toggle sidebar (Editor)' },
    { type: 'shortcut', keys: ['Tab'], description: 'Accept autocomplete' },
    { type: 'divider' },
    { type: 'heading', content: 'Command Palette Power Uses', level: 2 },
    {
      type: 'paragraph',
      content:
        '⌘Shift+P is the universal "find anything" command. When the UI moves between Cursor versions, the palette stays consistent.',
    },
    {
      type: 'screenshot',
      description:
        'Capture Command Palette open with "Open Agents" typed — results show "Open Agents Window" and "Open Editor Window" at the top of the filtered list.',
    },
    {
      type: 'code',
      title: 'High-value palette searches',
      language: 'text',
      content: `Open Agents Window
Open Editor Window
View: Toggle Terminal
Git: Commit
Preferences: Open Keyboard Shortcuts
Outline: Focus on Outline View`,
    },
    { type: 'divider' },
    { type: 'heading', content: 'Multi-Workspace & Agents Window', level: 2 },
    {
      type: 'paragraph',
      content:
        'The Agents Window supports multi-workspace (Cursor 3+): manage agents across different repos from one place. The Editor still opens one folder (or multi-root workspace) at a time.',
    },
    {
      type: 'list',
      items: [
        'Agents Window — See and switch between agent sessions tied to different repos.',
        'Editor — File → Open Folder for one project; File → Add Folder to Workspace for monorepos.',
        'One .cursorrules per project root — agents pick up rules for the active workspace.',
        'New agent session per task — avoids context bleed between unrelated work.',
      ],
    },
    {
      type: 'screenshot',
      description:
        'Capture the Agents Window session list showing two entries with different repo or folder names (e.g. "frontend-app" and "api-service"), demonstrating multi-workspace agent management.',
    },
    {
      type: 'tip',
      content:
        'Monorepos: .cursor/rules/ with globs (packages/web/**/*) so frontend rules do not apply to backend agents.',
    },
    { type: 'divider' },
    { type: 'heading', content: 'Git Integration', level: 2 },
    {
      type: 'paragraph',
      content:
        'Review visually in Editor Source Control. Review with AI via @Git in the Agents Window. Cursor 3\'s Agents Window also improves diff and commit flows — use whichever surface you prefer.',
    },
    {
      type: 'screenshot',
      description:
        'Capture Editor Source Control panel (⌘Shift+G): staged files listed, one file selected showing inline diff with green/red changes, commit message box at top.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Stage changes',
          content: 'Editor → ⌘Shift+G → review diffs → stage files for one logical commit.',
        },
        {
          title: 'AI review',
          content: 'Agents Window, Ask mode: "@Git @src/ — review for bugs, security, missing tests."',
        },
        {
          title: 'Commit message',
          content: 'Agent prompt: "@Git — suggest conventional commit message for staged changes."',
        },
        {
          title: 'Commit',
          content: 'Source Control UI or Command Palette → "Git: Commit".',
        },
      ],
    },
    {
      type: 'code',
      title: 'Pre-PR review',
      language: 'text',
      content: `Ask mode — do not edit files.

@Git @src/

Review my branch before I open a PR:
- Bugs and edge cases
- Security concerns
- Pattern consistency
- Missing tests

List by severity.`,
    },
    { type: 'heading', content: 'Features Worth Knowing', level: 2 },
    {
      type: 'list',
      items: [
        'Ask mode — Read-only agent for learning code (no diffs to reject).',
        'Plan mode — Architecture and step lists before any edits.',
        'Worktrees — Parallel agents on isolated git checkouts.',
        'Cloud agents — Long tasks run without keeping your machine open.',
        'Right-click → Add to Chat — Attach files from Explorer (Editor) to your next agent prompt.',
        'Paste screenshots — Drop UI bug screenshots into the Agents Window prompt.',
        'Docs indexing — Cursor Settings → index library docs for accurate @Docs answers.',
      ],
    },
    {
      type: 'tip',
      content:
        'First hour on a new repo: .cursorrules + Ask mode prompt "@src/ — map the codebase in 5 bullets." Saves hours of confused agent sessions.',
    },
  ],
}
