import type { Section } from '../types'

/** Ordered for a natural learning path: layout → agent → prompts → workflows → power tips */
export const sections: Section[] = [
  {
    id: 'interface',
    title: 'Cursor Interface',
    icon: '◫',
    description: 'Chat vs Composer, panels, terminal, shortcuts',
  },
  {
    id: 'composer',
    title: 'Composer',
    icon: '⬡',
    description: 'Multi-file agent mode, diffs, and when to use it',
  },
  {
    id: 'prompting',
    title: 'Prompting',
    icon: '✦',
    description: 'Context, .cursorrules, and step-by-step tasks',
  },
  {
    id: 'workflows',
    title: 'Workflows',
    icon: '↻',
    description: 'New apps, refactors, debugging, and features',
  },
  {
    id: 'tips',
    title: 'Pro Tips',
    icon: '⌘',
    description: 'Shortcuts, Command Palette, Git, and workspaces',
  },
  {
    id: 'resources',
    title: 'Library',
    icon: '▤',
    description: 'Copy-ready prompts and .cursorrules templates',
  },
]
