import React, { createContext, ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Theme } from '../types'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  React.useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    
    // Also set a class for easier CSS targeting
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}