import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import { Locale, translations, Translations } from '../i18n/translations'

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined)

const STORAGE_KEY = 'monoroh:locale'

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored === 'en' || stored === 'ru') return stored
  } catch {
    // ignore
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('ru')) {
    return 'ru'
  }
  return 'en'
}

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale())

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === 'en' ? 'ru' : 'en'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // ignore
      }
      return next
    })
  }, [])

  return (
    <I18nContext.Provider
      value={{ locale, t: translations[locale], setLocale, toggleLocale }}
    >
      {children}
    </I18nContext.Provider>
  )
}
