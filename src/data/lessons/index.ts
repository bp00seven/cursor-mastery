import { interfaceLesson } from './interface'
import { composerLesson } from './composer'
import { promptingLesson } from './prompting'
import { workflowsLesson } from './workflows'
import { tipsLesson } from './tips'
import type { Lesson, SectionId } from '../../types'
import { sections } from '../sections'

export const lessons: Lesson[] = [
  interfaceLesson,
  composerLesson,
  promptingLesson,
  workflowsLesson,
  tipsLesson,
]

export function getLessonBySection(sectionId: SectionId): Lesson | undefined {
  return lessons.find((lesson) => lesson.sectionId === sectionId)
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id)
}

export function getAdjacentSections(sectionId: SectionId): {
  prev: SectionId | null
  next: SectionId | null
} {
  const lessonSections = sections.filter((s) => s.id !== 'resources').map((s) => s.id)
  const index = lessonSections.indexOf(sectionId)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? lessonSections[index - 1]! : null,
    next: index < lessonSections.length - 1 ? lessonSections[index + 1]! : null,
  }
}

export function getSectionTitle(sectionId: SectionId): string {
  return sections.find((s) => s.id === sectionId)?.title ?? sectionId
}
