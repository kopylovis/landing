import { Link } from 'react-router-dom'
import { personalInfo } from '../data/projects'
import { useI18n } from '../hooks/useI18n'
import '../styles/Footer.css'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  const channels = [
    { key: 'email', label: t.footer.channels.email, href: `mailto:${personalInfo.email}`, value: personalInfo.email },
    { key: 'github', label: t.footer.channels.github, href: personalInfo.github, value: 'github.com/kopylovis' },
    { key: 'telegram', label: t.footer.channels.telegram, href: personalInfo.telegram, value: '@monoroh' },
  ]

  return (
    <footer id="contact" className="footer" aria-labelledby="footer-title">
      <div className="container footer__inner">
        <div className="footer__lead">
          <span className="eyebrow">{t.footer.eyebrow}</span>
          <h2 id="footer-title" className="footer__title">
            {t.footer.title} <br />
            {t.footer.titleBreak}
          </h2>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary footer__cta">
            {t.footer.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <ul className="footer__channels" role="list">
          {channels.map((c) => (
            <li key={c.key}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="footer__channel"
              >
                <span className="footer__channel-label">{c.label}</span>
                <span className="footer__channel-value">
                  {c.value}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">© {year} {personalInfo.fullName}{t.footer.copyrightSuffix}</p>
        <nav className="footer__legal" aria-label="Legal">
          <Link to="/privacy">{t.footer.privacy}</Link>
          <span aria-hidden="true">·</span>
          <Link to="/terms">{t.footer.terms}</Link>
        </nav>
      </div>
    </footer>
  )
}
