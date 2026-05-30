import type { SectionId } from '../../types'
import { getSectionTitle } from '../../data/lessons'

interface LessonNavigationProps {
  prev: SectionId | null
  next: SectionId | null
  onNavigate: (sectionId: SectionId) => void
}

export function LessonNavigation({ prev, next, onNavigate }: LessonNavigationProps) {
  if (!prev && !next) return null

  return (
    <nav className="lesson-nav" aria-label="Lesson navigation">
      {prev ? (
        <button
          type="button"
          className="lesson-nav__btn lesson-nav__btn--prev"
          onClick={() => onNavigate(prev)}
        >
          <span className="lesson-nav__direction">Previous</span>
          <span className="lesson-nav__title">{getSectionTitle(prev)}</span>
        </button>
      ) : (
        <div />
      )}
      {next ? (
        <button
          type="button"
          className="lesson-nav__btn lesson-nav__btn--next"
          onClick={() => onNavigate(next)}
        >
          <span className="lesson-nav__direction">Next</span>
          <span className="lesson-nav__title">{getSectionTitle(next)}</span>
        </button>
      ) : (
        <div />
      )}
    </nav>
  )
}
