import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useI18n } from '../hooks/useI18n'
import { useTheme } from '../hooks/useTheme'
import { LayoutProps } from '../types'
import Footer from './Footer'
import '../styles/Layout.css'

function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme()
  const { t } = useI18n()
  const next = resolvedTheme === 'light' ? 'dark' : 'light'
  const label = next === 'light' ? t.controls.toLight : t.controls.toDark

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true" className="theme-toggle__icon">
        {resolvedTheme === 'light' ? (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        )}
      </span>
    </button>
  )
}

function LangToggle() {
  const { locale, toggleLocale, t } = useI18n()
  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="lang-toggle"
      aria-label={t.controls.switchLanguage}
      title={t.controls.switchLanguage}
    >
      <span className={`lang-toggle__item${locale === 'en' ? ' is-active' : ''}`} aria-hidden="true">
        EN
      </span>
      <span className="lang-toggle__divider" aria-hidden="true" />
      <span className={`lang-toggle__item${locale === 'ru' ? ' is-active' : ''}`} aria-hidden="true">
        RU
      </span>
    </button>
  )
}

type ActiveSection = 'top' | 'work' | 'about' | 'contact' | null

function useActiveSection(isHome: boolean): ActiveSection {
  const [active, setActive] = useState<ActiveSection>('top')

  useEffect(() => {
    if (!isHome) {
      setActive(null)
      return
    }

    const ids: Array<Exclude<ActiveSection, 'top' | null>> = ['work', 'about', 'contact']
    const compute = () => {
      const probe = 96 + window.innerHeight * 0.3 // a bit below the sticky header
      let current: ActiveSection = 'top'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= probe) current = id
      }
      // Footer is short — force "contact" when reader hits the bottom of the page.
      const doc = document.documentElement
      const nearBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 80
      if (nearBottom && document.getElementById('contact')) current = 'contact'
      setActive(current)
    }

    compute()
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute)
    return () => {
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [isHome])

  return active
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(pathname)

  useEffect(() => {
    const routeChanged = prevPath.current !== pathname
    prevPath.current = pathname

    if (hash) {
      const id = hash.slice(1)
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (!el) return false
        const top = el.getBoundingClientRect().top + window.scrollY - 64
        window.scrollTo({ top, behavior: 'instant' as ScrollBehavior })
        return true
      }
      if (!tryScroll()) {
        requestAnimationFrame(() => requestAnimationFrame(tryScroll))
      }
    } else if (routeChanged) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [pathname, hash])

  return null
}

function SiteHeader() {
  const { t } = useI18n()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const active = useActiveSection(isHome)

  const handleIndex = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    } else {
      navigate('/')
      // Defer to next frame so the route mounts before we scroll.
      requestAnimationFrame(() => window.scrollTo({ top: 0 }))
    }
  }

  const handleAnchor = (id: 'work' | 'about') => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return // let the default `/` + hash navigation happen
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior: 'smooth' })
    history.replaceState(null, '', `#${id}`)
  }

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior: 'smooth' })
    history.replaceState(null, '', '#contact')
  }

  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (isHome) {
      scrollToContact()
    } else {
      navigate('/')
      requestAnimationFrame(() => requestAnimationFrame(scrollToContact))
    }
  }

  const cls = (key: ActiveSection) =>
    `site-nav__link${active === key ? ' is-active' : ''}`

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-logo" aria-label="Monoroh — home">
          <img
            src="/media/develop_logo_512x512.png"
            alt=""
            width={22}
            height={22}
            className="site-logo__mark"
            decoding="async"
          />
          <span className="site-logo__text">monoroh</span>
        </Link>

        {isHome && (
          <nav className="site-nav" aria-label="Primary">
            <a href="/" onClick={handleIndex} className={cls('top')}>
              {t.nav.index}
            </a>
            <a href="/#work" onClick={handleAnchor('work')} className={cls('work')}>
              {t.nav.work}
            </a>
            <a href="/#about" onClick={handleAnchor('about')} className={cls('about')}>
              {t.nav.about}
            </a>
            <a href="#contact" onClick={handleContact} className={cls('contact')}>
              {t.nav.contact}
            </a>
          </nav>
        )}

        <div className="site-header__tools">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site">
      <ScrollManager />
      <SiteHeader />
      <main className="site-main">{children || <Outlet />}</main>
      <Footer />
    </div>
  )
}
