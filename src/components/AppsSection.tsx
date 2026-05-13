import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import { useI18n } from '../hooks/useI18n'
import { useReveal } from '../hooks/useReveal'
import AppCard from './AppCard'
import { AppsSectionProps } from '../types'
import '../styles/AppsSection.css'

export default function AppsSection({ apps: propApps }: AppsSectionProps) {
  const apps = propApps || projects
  const navigate = useNavigate()
  const header = useReveal<HTMLDivElement>()
  const { t } = useI18n()

  const handleAppClick = (appId: string) => {
    if (appId === 'authmeister') navigate('/authmeister')
  }

  return (
    <section id="work" className="apps section" aria-labelledby="apps-title">
      <div className="container">
        <div ref={header.ref} className="reveal apps__header" data-visible={header.visible}>
          <div>
            <span className="eyebrow">{t.apps.eyebrowPrefix} · {apps.length.toString().padStart(2, '0')}</span>
            <h2 id="apps-title" className="apps__title">{t.apps.title}</h2>
          </div>
          <p className="apps__subtitle">{t.apps.subtitle}</p>
        </div>

        <div className="apps__grid">
          {apps.map((app, index) => (
            <AppCard
              key={app.id}
              app={app}
              variant="featured"
              onClick={() => handleAppClick(app.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
