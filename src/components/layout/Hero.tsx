import type { SectionId } from '../../types'
import { getSectionTitle } from '../../data/lessons'
import { sections } from '../../data/sections'

interface HeroProps {
  activeSection: SectionId
  onNavigate: (sectionId: SectionId) => void
}

const lessonSections = sections.filter((s) => s.id !== 'resources')
const totalLessons = lessonSections.length

export function Hero({ activeSection, onNavigate }: HeroProps) {
  const lessonIndex = lessonSections.findIndex((s) => s.id === activeSection)
  const isLibrary = activeSection === 'resources'
  const currentTitle = getSectionTitle(activeSection)

  return (
    <header className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Interactive guide · {totalLessons} lessons
        </div>

        {isLibrary ? (
          <>
            <h1 className="hero__title">Prompt & Rules Library</h1>
            <p className="hero__subtitle">
              Copy-ready prompts and .cursorrules templates. Search, copy, and paste
              directly into Cursor.
            </p>
          </>
        ) : lessonIndex >= 0 ? (
          <>
            <p className="hero__eyebrow">
              Lesson {lessonIndex + 1} of {totalLessons}
            </p>
            <h1 className="hero__title">{currentTitle}</h1>
            <p className="hero__subtitle">
              Part of the Cursor Mastery learning path — practical skills you can
              apply in your editor today.
            </p>
          </>
        ) : (
          <>
            <h1 className="hero__title">Cursor Mastery</h1>
            <p className="hero__subtitle">
              Learn Cursor the practical way — clear lessons, real prompts, and
              workflows you can use immediately.
            </p>
          </>
        )}

        <div className="hero__actions">
          {lessonIndex > 0 && !isLibrary && (
            <button
              type="button"
              className="hero__btn hero__btn--ghost"
              onClick={() => onNavigate(lessonSections[lessonIndex - 1]!.id)}
            >
              ← Previous lesson
            </button>
          )}
          {!isLibrary && lessonIndex < totalLessons - 1 && (
            <button
              type="button"
              className="hero__btn hero__btn--primary"
              onClick={() => onNavigate(lessonSections[lessonIndex + 1]!.id)}
            >
              Next lesson →
            </button>
          )}
          {!isLibrary && (
            <button
              type="button"
              className="hero__btn hero__btn--ghost"
              onClick={() => onNavigate('resources')}
            >
              Browse library
            </button>
          )}
        </div>

        {!isLibrary && lessonIndex >= 0 && (
          <div className="hero__progress" aria-label="Course progress">
            <div className="hero__progress-track">
              <div
                className="hero__progress-fill"
                style={{ width: `${((lessonIndex + 1) / totalLessons) * 100}%` }}
              />
            </div>
            <span className="hero__progress-label">
              {Math.round(((lessonIndex + 1) / totalLessons) * 100)}% complete
            </span>
          </div>
        )}
      </div>
    </header>
  )
}
