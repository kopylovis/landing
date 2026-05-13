import { render, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import NotFound from '../../pages/NotFound'
import { I18nProvider } from '../../contexts/I18nContext'

describe('NotFound page', () => {
  const renderWithProviders = (ui: React.ReactElement) =>
    render(
      <HelmetProvider>
        <I18nProvider>
          <BrowserRouter>{ui}</BrowserRouter>
        </I18nProvider>
      </HelmetProvider>
    )

  it('renders 404 page with primary content', () => {
    renderWithProviders(<NotFound />)

    const badge = document.querySelector('.not-found__badge')
    expect(badge).toHaveTextContent('404')

    const title = document.querySelector('.not-found__title')
    expect(title).toBeInTheDocument()

    const homeLink = document.querySelector('a.btn-primary[href="/"]')
    expect(homeLink).toHaveTextContent(/back to home/i)
  })

  it('sets proper SEO meta tags', async () => {
    renderWithProviders(<NotFound />)

    await waitFor(() => {
      expect(document.title).toBe('Page Not Found - Monoroh')
    })

    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute(
      'content',
      "The page you're looking for doesn't exist. Head back home to explore our work."
    )
  })

  it('shows navigation suggestions', () => {
    renderWithProviders(<NotFound />)

    const suggestions = document.querySelector('.not-found__hint')
    expect(suggestions).toBeInTheDocument()

    const items = document.querySelectorAll('.not-found__hint ul li')
    expect(items).toHaveLength(3)

    expect(document.querySelector('a[href="/#work"]')).toBeInTheDocument()
    expect(document.querySelector('a[href="/authmeister"]')).toBeInTheDocument()
    expect(document.querySelector('a[href="https://sympee.ru"]')).toBeInTheDocument()
  })
})
