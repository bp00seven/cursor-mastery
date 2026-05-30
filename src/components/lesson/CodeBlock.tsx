import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export function CodeBlock({ code, language = 'text', title }: CodeBlockProps) {
  const { copy, copied } = useCopyToClipboard()

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span className="code-block__meta">
          {title && <span className="code-block__title">{title}</span>}
          <span className="code-block__lang">{language}</span>
        </span>
        <button
          type="button"
          className={`code-block__copy${copied ? ' code-block__copy--copied' : ''}`}
          onClick={() => copy(code)}
          aria-label={copied ? 'Copied' : 'Copy to clipboard'}
        >
          {copied ? (
            <>
              <CheckIcon />
              Copied
            </>
          ) : (
            <>
              <CopyIcon />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="code-block__pre">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
