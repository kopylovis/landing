import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Prose, { ProseBlock } from '../components/Prose'
import { useI18n } from '../hooks/useI18n'
import '../styles/ContentPage.css'

export default function AuthmeisterPrivacy() {
  const { t, locale } = useI18n()

  return (
    <>
      <SEO
        title={`Authmeister — ${t.legal.authmeisterPrivacy.title}`}
        description={t.legal.authmeisterPrivacy.title}
        url="/authmeister/privacy"
        type="article"
        locale={locale}
      />
      <div className="legal">
        <div className="container container-narrow">
          <Link to="/authmeister" className="legal__back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t.legal.backAuthmeister}
          </Link>

          <header className="legal__header">
            <span className="legal__meta">
              <span>Authmeister</span>
              <span className="legal__meta-dot" aria-hidden="true" />
              <span>{t.legal.updated}</span>
            </span>
            <h1 className="legal__title">{t.legal.authmeisterPrivacy.title}</h1>
          </header>

          <Prose blocks={t.legal.authmeisterPrivacy.body as readonly ProseBlock[]} />
        </div>
      </div>
    </>
  )
}
