import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useI18n } from '../hooks/useI18n'
import '../styles/NotFound.css'

export default function NotFound() {
  const { t, locale } = useI18n()

  return (
    <>
      <SEO
        title={t.notFound.metaTitle}
        description={t.notFound.metaDescription}
        url="/404"
        type="website"
        locale={locale}
      />
      <div className="not-found">
        <div className="container container-narrow not-found__inner">
          <div className="not-found__badge">404</div>
          <h1 className="not-found__title">{t.notFound.title}</h1>
          <p className="not-found__lede">{t.notFound.lede}</p>

          <div className="not-found__actions">
            <Link to="/" className="btn btn-primary">
              {t.notFound.ctaHome}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="mailto:mnrhwow@gmail.com" className="btn btn-ghost">
              {t.notFound.ctaReport}
            </a>
          </div>

          <div className="not-found__hint">
            <span className="eyebrow">{t.notFound.hintLabel}</span>
            <ul>
              {t.notFound.hints.map((h) =>
                h.external ? (
                  <li key={h.to}>
                    <a href={h.to} target="_blank" rel="noopener noreferrer">
                      {h.label}
                    </a>
                  </li>
                ) : (
                  <li key={h.to}>
                    <Link to={h.to}>{h.label}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
