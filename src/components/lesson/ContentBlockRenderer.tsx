import type { ContentBlock } from '../../types'
import { CodeBlock } from './CodeBlock'
import { ScreenshotPlaceholder } from './ScreenshotPlaceholder'

interface ContentBlockRendererProps {
  block: ContentBlock
}

export function ContentBlockRenderer({ block }: ContentBlockRendererProps) {
  switch (block.type) {
    case 'paragraph':
      return <p className="lesson__paragraph">{block.content}</p>

    case 'heading': {
      const Tag = block.level === 3 ? 'h3' : 'h2'
      return <Tag className="lesson__heading">{block.content}</Tag>
    }

    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul'
      return (
        <ListTag className="lesson__list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ListTag>
      )
    }

    case 'code':
      return (
        <CodeBlock
          code={block.content}
          language={block.language}
          title={block.title}
        />
      )

    case 'tip':
      return (
        <aside className="lesson__tip">
          <span className="lesson__tip-icon" aria-hidden="true">💡</span>
          <div>
            <span className="lesson__tip-label">Pro tip</span>
            <p>{block.content}</p>
          </div>
        </aside>
      )

    case 'comparison':
      return (
        <div className="lesson__comparison">
          <p className="lesson__comparison-label">{block.label}</p>
          <div className="lesson__comparison-grid">
            <div className="lesson__comparison-item lesson__comparison-item--bad">
              <span className="lesson__comparison-tag">Avoid</span>
              <p>{block.bad}</p>
            </div>
            <div className="lesson__comparison-item lesson__comparison-item--good">
              <span className="lesson__comparison-tag">Better</span>
              <p>{block.good}</p>
            </div>
          </div>
        </div>
      )

    case 'shortcut':
      return (
        <div className="lesson__shortcut">
          <div className="lesson__shortcut-keys">
            {block.keys.map((key) => (
              <kbd key={key}>{key}</kbd>
            ))}
          </div>
          <span className="lesson__shortcut-desc">{block.description}</span>
        </div>
      )

    case 'screenshot':
      return <ScreenshotPlaceholder description={block.description} />

    case 'steps':
      return (
        <ol className="lesson__steps">
          {block.items.map((step, index) => (
            <li key={step.title} className="lesson__step-card">
              <span className="lesson__step-number">{index + 1}</span>
              <div>
                <h4 className="lesson__step-title">{step.title}</h4>
                <p className="lesson__step-content">{step.content}</p>
              </div>
            </li>
          ))}
        </ol>
      )

    case 'divider':
      return <hr className="lesson__divider" />

    default:
      return null
  }
}
