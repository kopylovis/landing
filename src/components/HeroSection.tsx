import { useI18n } from '../hooks/useI18n'
import { useReveal } from '../hooks/useReveal'
import '../styles/HeroSection.css'

export default function HeroSection() {
  const headline = useReveal<HTMLDivElement>()
  const { t } = useI18n()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__mesh" aria-hidden="true">
        <span className="hero__orb hero__orb--a" />
        <span className="hero__orb hero__orb--b" />
        <span className="hero__orb hero__orb--c" />
      </div>

      <div className="container hero__inner">
        <div ref={headline.ref} className="reveal" data-visible={headline.visible}>
          <div className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            <span>{t.hero.statusPrefix} · {new Date().getFullYear()}</span>
          </div>

          <h1 id="hero-title" className="hero__display">
            {t.hero.headline.l1 && <span>{t.hero.headline.l1}</span>}
            <span className="hero__display-line">
              {t.hero.headline.l2Before && (
                <>
                  {t.hero.headline.l2Before}{' '}
                </>
              )}
              <em className="hero__display-em">{t.hero.headline.em}</em>
            </span>
            {t.hero.headline.l3 && <span>{t.hero.headline.l3}</span>}
          </h1>

          <p className="hero__lede">
            {t.hero.lede.before}
            <span className="hero__lede-strong">{t.hero.lede.strong}</span>
            {t.hero.lede.trailing}
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn-primary">
              {t.hero.ctaWork}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="mailto:mnrhwow@gmail.com" className="btn btn-ghost">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
