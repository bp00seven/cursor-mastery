import type { Section } from '../types'

/** Ordered for a natural learning path: layout → agents → prompts → workflows → power tips */
export const sections: Section[] = [
  {
    id: 'interface',
    title: 'Cursor Interface',
    icon: '◫',
    description: 'Agents Window, Editor, panels, and navigation',
  },
  {
    id: 'composer',
    title: 'Agents Window',
    icon: '⬡',
    description: 'Run agents, review diffs, parallel workflows',
  },
  {
    id: 'prompting',
    title: 'Prompting',
    icon: '✦',
    description: 'Context, rules, and step-by-step agent prompts',
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
    description: 'Shortcuts, Command Palette, Git, workspaces',
  },
  {
    id: 'resources',
    title: 'Library',
    icon: '▤',
    description: 'Copy-ready prompts and .cursorrules templates',
  },
]
