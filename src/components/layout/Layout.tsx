import type { ReactNode } from 'react'
import type { SectionId } from '../../types'
import { Hero } from './Hero'

interface LayoutProps {
  sidebar: ReactNode
  activeSection: SectionId
  onNavigate: (sectionId: SectionId) => void
  children: ReactNode
}

export function Layout({ sidebar, activeSection, onNavigate, children }: LayoutProps) {
  return (
    <div className="layout">
      {sidebar}
      <div className="main-wrapper">
        <Hero activeSection={activeSection} onNavigate={onNavigate} />
        <main className="main">{children}</main>
      </div>
    </div>
  )
}
