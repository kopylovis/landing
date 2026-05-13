import { useEffect, useState } from 'react'
import { useI18n } from '../hooks/useI18n'
import { useReveal } from '../hooks/useReveal'
import { AppCardProps } from '../types'
import '../styles/AppCard.css'

type DetectedOS = 'android' | 'ios' | 'desktop'

function detectOS(): DetectedOS {
  if (typeof navigator === 'undefined') return 'desktop'
  const ua = navigator.userAgent || ''
  if (/android/i.test(ua)) return 'android'
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios'
  return 'desktop'
}

interface ExtendedAppCardProps extends AppCardProps {
  variant?: 'featured' | 'default'
  index?: number
}

export default function AppCard({ app, className, onClick, variant = 'default', index = 0 }: ExtendedAppCardProps) {
  const [os, setOs] = useState<DetectedOS>('desktop')
  const { ref, visible } = useReveal<HTMLElement>()
  const { t } = useI18n()

  const copy = t.projects[app.id as keyof typeof t.projects]

  useEffect(() => {
    setOs(detectOS())
  }, [])

  const stores: Array<{ key: 'googlePlay' | 'appStore' | 'ruStore'; href: string; label: string; src: string }> = []
  if (app.links.googlePlay) {
    stores.push({ key: 'googlePlay', href: app.links.googlePlay, label: 'Get it on Google Play', src: '/media/googleplay.svg' })
  }
  if (app.links.appStore) {
    stores.push({ key: 'appStore', href: app.links.appStore, label: 'Download on the App Store', src: '/media/appstore.svg' })
  }
  if (app.links.ruStore) {
    stores.push({ key: 'ruStore', href: app.links.ruStore, label: 'Download on RuStore', src: '/media/rustore.svg' })
  }

  const visibleStores = stores.filter(({ key }) => {
    if (os === 'desktop') return true
    if (os === 'android') return key === 'googlePlay' || key === 'ruStore'
    if (os === 'ios') return key === 'appStore'
    return true
  })

  // Fallback CTAs for projects that have no mobile-store presence (e.g. OSS plugins).
  const sourceCtas: Array<{ key: string; href: string; label: string; icon: JSX.Element }> = []
  if (visibleStores.length === 0) {
    if (app.links.github) {
      sourceCtas.push({
        key: 'github',
        href: app.links.github,
        label: 'GitHub',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.42c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.5 11.5 0 0 0 12 .5Z"/>
          </svg>
        ),
      })
    }
    if (app.links.rubygems) {
      sourceCtas.push({
        key: 'rubygems',
        href: app.links.rubygems,
        label: 'RubyGems',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 1.5 3 8.25l2.4 13.05L12 22.5l6.6-1.2L21 8.25 12 1.5Zm0 2.7 6.8 5.1-1.85 9.95L12 20.4l-4.95-1.15L5.2 9.3 12 4.2Zm0 2.85L7.7 10.2 9.55 18l2.45.6 2.45-.6 1.85-7.8L12 7.05Z"/>
          </svg>
        ),
      })
    }
  }

  const handleCardClick = () => {
    if (app.links.website) {
      window.open(app.links.website, '_blank', 'noopener,noreferrer')
    } else if (app.links.github && visibleStores.length === 0) {
      window.open(app.links.github, '_blank', 'noopener,noreferrer')
    } else if (onClick) {
      onClick()
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCardClick()
    }
  }

  const ctaLabel = app.links.website
    ? t.card.visitSite
    : visibleStores.length === 0
      ? t.card.viewSource
      : t.card.viewCase

  return (
    <article
      ref={ref}
      className={`app-card app-card--${variant} reveal ${className || ''}`}
      data-visible={visible}
      style={{ ['--reveal-delay' as string]: `${index * 80}ms` }}
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleKey}
    >
      <div className="app-card__bg" aria-hidden="true" />

      <div className="app-card__head">
        <div className="app-card__icon-wrap">
          <img
            src={app.image}
            alt=""
            className="app-card__icon"
            width={64}
            height={64}
            loading={variant === 'featured' ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>

        <div className="app-card__head-text">
          <span className="app-card__category">{copy?.category}</span>
          <h3 className="app-card__name">{app.name}</h3>
        </div>

        <span className="app-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <p className="app-card__description">{copy?.description}</p>

      {copy?.features && copy.features.length > 0 && (
        <ul className="app-card__features" role="list">
          {copy.features.slice(0, variant === 'featured' ? 5 : 3).map((feature) => (
            <li key={feature}>
              <span className="app-card__feature-dot" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="app-card__footer">
        {visibleStores.length > 0 ? (
          <div className="app-card__stores">
            {visibleStores.map((store) => (
              <a
                key={store.key}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={store.label}
                className="app-card__store"
              >
                <img src={store.src} alt={store.label} height={36} />
              </a>
            ))}
          </div>
        ) : (
          <div className="app-card__source">
            {sourceCtas.map((cta) => (
              <a
                key={cta.key}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="app-card__source-link"
              >
                {cta.icon}
                <span>{cta.label}</span>
              </a>
            ))}
          </div>
        )}

        <span className="app-card__cta" aria-hidden="true">
          {ctaLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </article>
  )
}
