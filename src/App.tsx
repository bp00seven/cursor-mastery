import { useState } from 'react'
import { Layout } from './components/layout/Layout'
import { Sidebar } from './components/layout/Sidebar'
import { LessonView } from './components/lesson/LessonView'
import { LessonNavigation } from './components/lesson/LessonNavigation'
import { ResourceLibrary } from './components/resources/ResourceLibrary'
import { getAdjacentSections, getLessonBySection } from './data/lessons'
import type { SectionId } from './types'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('interface')

  const lesson = getLessonBySection(activeSection)
  const { prev, next } = getAdjacentSections(activeSection)

  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId)
    document.querySelector('.main-wrapper')?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Layout
      activeSection={activeSection}
      onNavigate={handleNavigate}
      sidebar={
        <Sidebar activeSection={activeSection} onSelect={handleNavigate} />
      }
    >
      {activeSection === 'resources' ? (
        <ResourceLibrary />
      ) : lesson ? (
        <div className="lesson-page">
          <LessonView lesson={lesson} />
          <LessonNavigation prev={prev} next={next} onNavigate={handleNavigate} />
        </div>
      ) : (
        <div className="main__empty">
          <h1>Coming soon</h1>
          <p>This section is under development.</p>
        </div>
      )}
    </Layout>
  )
}

export default App
