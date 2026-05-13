import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useI18n } from '../hooks/useI18n'
import { projects } from '../data/projects'
import '../styles/AuthmeisterPage.css'

type DetectedOS = 'android' | 'ios' | 'desktop'

function detectOS(): DetectedOS {
  if (typeof navigator === 'undefined') return 'desktop'
  const ua = navigator.userAgent || ''
  if (/android/i.test(ua)) return 'android'
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios'
  return 'desktop'
}

const authmeister = projects.find((p) => p.id === 'authmeister')!

export default function Authmeister() {
  const [os, setOs] = useState<DetectedOS>('desktop')
  const { t, locale } = useI18n()

  useEffect(() => {
    setOs(detectOS())
  }, [])

  const stores = [
    { key: 'googlePlay', href: authmeister.links.googlePlay, src: '/media/googleplay.svg', alt: 'Google Play' },
    { key: 'appStore', href: authmeister.links.appStore, src: '/media/appstore.svg', alt: 'App Store' },
    { key: 'ruStore', href: authmeister.links.ruStore, src: '/media/rustore.svg', alt: 'RuStore' },
  ].filter((s) => s.href) as Array<{ key: string; href: string; src: string; alt: string }>

  const visibleStores = stores.filter(({ key }) => {
    if (os === 'desktop') return true
    if (os === 'android') return key === 'googlePlay' || key === 'ruStore'
    if (os === 'ios') return key === 'appStore'
    return true
  })

  return (
    <>
      <SEO
        title="Authmeister — Modern OTP Authenticator"
        description={t.projects.authmeister.description}
        url="/authmeister"
        type="website"
        locale={locale}
      />

      <div className="product">
        <div className="container">
          <Link to="/" className="product__back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t.authmeisterPage.back}
          </Link>

          <header className="product__hero">
            <div className="product__hero-text">
              <span className="eyebrow">{t.projects.authmeister.category}</span>
              <h1 className="product__title">Authmeister</h1>
              <p className="product__tagline">{t.authmeisterPage.tagline}</p>

              <div className="product__cta-row">
                {visibleStores.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product__store"
                    aria-label={`Download on ${s.alt}`}
                  >
                    <img src={s.src} alt={s.alt} height={44} />
                  </a>
                ))}
              </div>
            </div>

            <figure className="product__hero-art" aria-hidden="true">
              <div className="product__hero-glow" />
              <img
                src={authmeister.image}
                alt=""
                width={220}
                height={220}
                className="product__hero-icon"
              />
            </figure>
          </header>

          <dl className="product__specs">
            {t.authmeisterPage.specs.map((s) => (
              <div key={s.label} className="product__specs-item">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <section className="product__section" aria-labelledby="features-title">
            <span className="eyebrow">{t.authmeisterPage.featuresEyebrow}</span>
            <h2 id="features-title" className="product__section-title">
              {t.authmeisterPage.featuresTitle}
            </h2>

            <div className="product__highlights">
              {t.authmeisterPage.highlights.map((h, i) => (
                <article key={h.title} className="product__highlight">
                  <span className="product__highlight-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="product__final" aria-labelledby="final-title">
            <h2 id="final-title">{t.authmeisterPage.finalTitle}</h2>
            <p>{t.authmeisterPage.finalBody}</p>
            <div className="product__cta-row">
              {visibleStores.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product__store"
                  aria-label={`Download on ${s.alt}`}
                >
                  <img src={s.src} alt={s.alt} height={44} />
                </a>
              ))}
            </div>

            <nav className="product__legal" aria-label="Authmeister legal">
              <Link to="/authmeister/privacy">{t.authmeisterPage.legalPrivacy}</Link>
              <span aria-hidden="true">·</span>
              <Link to="/authmeister/terms">{t.authmeisterPage.legalTerms}</Link>
            </nav>
          </section>
        </div>
      </div>
    </>
  )
}
