import { sections as allSections } from '../../data/sections'
import type { SectionId } from '../../types'

interface SidebarProps {
  activeSection: SectionId
  onSelect: (sectionId: SectionId) => void
}

const lessonSections = allSections.filter((s) => s.id !== 'resources')
const librarySection = allSections.find((s) => s.id === 'resources')!

export function Sidebar({ activeSection, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h1 className="sidebar__title">Cursor Mastery</h1>
          <p className="sidebar__subtitle">Your AI coding companion guide</p>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label="Learning sections">
        <p className="sidebar__nav-label">Learn</p>
        <ul className="sidebar__list">
          {lessonSections.map((section, index) => (
            <li key={section.id}>
              <button
                type="button"
                className={`sidebar__item${activeSection === section.id ? ' sidebar__item--active' : ''}`}
                onClick={() => onSelect(section.id)}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                <span className="sidebar__step" aria-hidden="true">
                  {index + 1}
                </span>
                <span className="sidebar__item-text">
                  <span className="sidebar__item-title">{section.title}</span>
                  <span className="sidebar__item-desc">{section.description}</span>
                </span>
                {activeSection === section.id && (
                  <span className="sidebar__active-indicator" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <p className="sidebar__nav-label sidebar__nav-label--spaced">Resources</p>
        <ul className="sidebar__list">
          <li>
            <button
              type="button"
              className={`sidebar__item sidebar__item--library${activeSection === librarySection.id ? ' sidebar__item--active' : ''}`}
              onClick={() => onSelect(librarySection.id)}
              aria-current={activeSection === librarySection.id ? 'page' : undefined}
            >
              <span className="sidebar__step sidebar__step--library" aria-hidden="true">
                <LibraryIcon />
              </span>
              <span className="sidebar__item-text">
                <span className="sidebar__item-title">{librarySection.title}</span>
                <span className="sidebar__item-desc">{librarySection.description}</span>
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <footer className="sidebar__footer">
        <p className="sidebar__footer-tip">
          <strong>Tip:</strong> Work through lessons in order, then grab prompts from
          the Library.
        </p>
      </footer>
    </aside>
  )
}

function LibraryIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}
