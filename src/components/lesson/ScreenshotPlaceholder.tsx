interface ScreenshotPlaceholderProps {
  description: string
}

export function ScreenshotPlaceholder({ description }: ScreenshotPlaceholderProps) {
  return (
    <figure className="screenshot-ph" aria-label={`Screenshot placeholder: ${description}`}>
      <div className="screenshot-ph__frame">
        <div className="screenshot-ph__chrome" aria-hidden="true">
          <span className="screenshot-ph__dot screenshot-ph__dot--red" />
          <span className="screenshot-ph__dot screenshot-ph__dot--yellow" />
          <span className="screenshot-ph__dot screenshot-ph__dot--green" />
          <span className="screenshot-ph__chrome-bar" />
        </div>
        <div className="screenshot-ph__body">
          <div className="screenshot-ph__icon-wrap" aria-hidden="true">
            <span className="screenshot-ph__emoji">🖥️</span>
            <ScreenIcon />
          </div>
          <p className="screenshot-ph__title">Screenshot Placeholder</p>
          <p className="screenshot-ph__capture-label">What to capture</p>
          <p className="screenshot-ph__description">{description}</p>
          <span className="screenshot-ph__badge">
            <span aria-hidden="true">📸</span>
            Image coming soon
          </span>
        </div>
      </div>
    </figure>
  )
}

function ScreenIcon() {
  return (
    <svg
      className="screenshot-ph__svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
