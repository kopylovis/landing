import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { vi } from 'vitest'
import Home from '../../pages/Home'
import { ThemeProvider } from '../../contexts/ThemeContext'
import { I18nProvider } from '../../contexts/I18nContext'

const mockScrollIntoView = vi.fn()
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  value: mockScrollIntoView,
  writable: true,
})

describe('Home page sections', () => {
  const renderHome = () =>
    render(
      <HelmetProvider>
        <ThemeProvider>
          <I18nProvider>
            <BrowserRouter>
              <Home />
            </BrowserRouter>
          </I18nProvider>
        </ThemeProvider>
      </HelmetProvider>
    )

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('exposes the #work anchor for scroll targeting', () => {
    renderHome()
    const work = document.getElementById('work')
    expect(work).toBeInTheDocument()
    expect(work).toHaveClass('apps')
  })

  it('exposes the #about anchor for scroll targeting', () => {
    renderHome()
    const about = document.getElementById('about')
    expect(about).toBeInTheDocument()
    expect(about).toHaveClass('about')
  })
})
