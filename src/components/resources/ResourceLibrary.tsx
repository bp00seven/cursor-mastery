import { useMemo, useState } from 'react'
import { promptTemplates } from '../../data/prompts'
import { rulesTemplates } from '../../data/rulesTemplates'
import { CodeBlock } from '../lesson/CodeBlock'

type Tab = 'prompts' | 'rules'

function matchesSearch(query: string, ...fields: string[]) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return true
  return fields.some((field) => field.toLowerCase().includes(normalized))
}

export function ResourceLibrary() {
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState<Tab>('prompts')

  const filteredPrompts = useMemo(
    () =>
      promptTemplates.filter((item) =>
        matchesSearch(query, item.title, item.description, item.category, ...item.tags),
      ),
    [query],
  )

  const filteredRules = useMemo(
    () =>
      rulesTemplates.filter((item) =>
        matchesSearch(query, item.title, item.description, item.category, ...item.tags),
      ),
    [query],
  )

  const items = tab === 'prompts' ? filteredPrompts : filteredRules

  return (
    <div className="resources">
      <div className="resources__stats">
        <div className="resources__stat-card">
          <span className="resources__stat-value">{promptTemplates.length}</span>
          <span className="resources__stat-label">Prompts</span>
        </div>
        <div className="resources__stat-card">
          <span className="resources__stat-value">{rulesTemplates.length}</span>
          <span className="resources__stat-label">Rules templates</span>
        </div>
        <div className="resources__stat-card">
          <span className="resources__stat-value">{items.length}</span>
          <span className="resources__stat-label">Showing</span>
        </div>
      </div>

      <div className="resources__toolbar">
        <div className="resources__search">
          <SearchIcon />
          <input
            type="search"
            className="resources__search-input"
            placeholder="Search prompts, rules, tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search prompts and rules"
          />
          {query && (
            <button
              type="button"
              className="resources__clear"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className="resources__tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'prompts'}
            className={`resources__tab${tab === 'prompts' ? ' resources__tab--active' : ''}`}
            onClick={() => setTab('prompts')}
          >
            Prompts
            <span className="resources__tab-count">{filteredPrompts.length}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'rules'}
            className={`resources__tab${tab === 'rules' ? ' resources__tab--active' : ''}`}
            onClick={() => setTab('rules')}
          >
            .cursorrules
            <span className="resources__tab-count">{filteredRules.length}</span>
          </button>
        </div>
      </div>

      <div className="resources__grid" role="tabpanel">
        {items.length === 0 ? (
          <EmptyState query={query} />
        ) : tab === 'prompts' ? (
          filteredPrompts.map((item) => (
            <ResourceCard
              key={item.id}
              category={item.category}
              title={item.title}
              description={item.description}
              tags={item.tags}
              code={item.prompt}
              codeTitle="Prompt"
            />
          ))
        ) : (
          filteredRules.map((item) => (
            <ResourceCard
              key={item.id}
              category={item.category}
              title={item.title}
              description={item.description}
              tags={item.tags}
              code={item.content}
              codeTitle=".cursorrules"
            />
          ))
        )}
      </div>
    </div>
  )
}

interface ResourceCardProps {
  category: string
  title: string
  description: string
  tags: string[]
  code: string
  codeTitle: string
}

function ResourceCard({ category, title, description, tags, code, codeTitle }: ResourceCardProps) {
  return (
    <article className="resource-card">
      <div className="resource-card__top">
        <span className="resource-card__category">{category}</span>
        <h2 className="resource-card__title">{title}</h2>
        <p className="resource-card__description">{description}</p>
        <div className="resource-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="resource-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <CodeBlock code={code} language="text" title={codeTitle} />
    </article>
  )
}

function EmptyState({ query }: { query: string }) {
  return (
    <div className="resources__empty">
      <SearchIcon />
      <p>No results{query.trim() ? ` for "${query.trim()}"` : ''}.</p>
      <p>Try keywords like debug, react, git, or testing.</p>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
