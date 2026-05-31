export type SectionId =
  | 'interface'
  | 'prompting'
  | 'composer'
  | 'workflows'
  | 'tips'
  | 'resources'

export interface Section {
  id: SectionId
  title: string
  icon: string
  description: string
}

export type ContentBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string; level?: 2 | 3 }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'code'; language: string; content: string; title?: string }
  | { type: 'tip'; content: string }
  | { type: 'comparison'; label: string; bad: string; good: string }
  | { type: 'shortcut'; keys: string[]; description: string }
  | { type: 'screenshot'; description: string; src?: string; alt?: string }
  | { type: 'steps'; items: { title: string; content: string }[] }
  | { type: 'divider' }

export interface Lesson {
  id: string
  sectionId: SectionId
  title: string
  description: string
  duration: string
  objectives: string[]
  blocks: ContentBlock[]
}

export interface PromptTemplate {
  id: string
  title: string
  category: string
  description: string
  prompt: string
  tags: string[]
}

export interface RulesTemplate {
  id: string
  title: string
  category: string
  description: string
  content: string
  tags: string[]
}
