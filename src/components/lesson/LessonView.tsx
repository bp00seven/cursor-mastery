import type { Lesson } from '../../types'
import { ContentBlockRenderer } from './ContentBlockRenderer'

interface LessonViewProps {
  lesson: Lesson
}

export function LessonView({ lesson }: LessonViewProps) {
  const headings = lesson.blocks.filter(
    (block): block is Extract<typeof block, { type: 'heading' }> =>
      block.type === 'heading' && block.level !== 3,
  )

  return (
    <article className="lesson">
      <div className="lesson__layout">
        <div className="lesson__content">
          <header className="lesson__header">
            <div className="lesson__meta">
              <span className="lesson__duration">{lesson.duration}</span>
            </div>
            <h2 className="lesson__title">{lesson.title}</h2>
            <p className="lesson__description">{lesson.description}</p>

            {lesson.objectives.length > 0 && (
              <div className="lesson__objectives">
                <p className="lesson__objectives-label">What you&apos;ll learn</p>
                <ul className="lesson__objectives-list">
                  {lesson.objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </div>
            )}
          </header>

          <div className="lesson__body">
            {lesson.blocks.map((block, index) => {
              const id =
                block.type === 'heading' && block.level !== 3
                  ? slugify(block.content)
                  : undefined

              return (
                <div
                  key={`${block.type}-${index}`}
                  id={id}
                  className={
                    block.type === 'heading' && block.level !== 3
                      ? 'lesson__section'
                      : undefined
                  }
                >
                  <ContentBlockRenderer block={block} />
                </div>
              )
            })}
          </div>
        </div>

        {headings.length >= 2 && (
          <aside className="lesson__sidebar" aria-label="Table of contents">
            <nav className="lesson__toc">
              <p className="lesson__toc-label">On this page</p>
              <ul className="lesson__toc-list">
                {headings.map((heading) => (
                  <li key={heading.content}>
                    <a href={`#${slugify(heading.content)}`}>{heading.content}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </article>
  )
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
