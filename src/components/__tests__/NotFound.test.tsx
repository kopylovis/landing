import { render, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import NotFound from '../../pages/NotFound'

describe('NotFound Component', () => {
  const renderWithProviders = (ui: React.ReactElement) => {
    return render(
      <HelmetProvider>
        <BrowserRouter>
          {ui}
        </BrowserRouter>
      </HelmetProvider>
    )
  }

  it('renders 404 page with correct content', async () => {
    renderWithProviders(<NotFound />)

    // Check if main content is rendered
    const title = document.querySelector('.error-title')
    expect(title).toHaveTextContent('404')

    const subtitle = document.querySelector('.error-subtitle')
    expect(subtitle).toHaveTextContent('Page Not Found')

    // Check if navigation links are present
    const homeLink = document.querySelector('a[href="/"]')
    expect(homeLink).toHaveTextContent('Go Home')
  })

  it('sets proper SEO meta tags', async () => {
    renderWithProviders(<NotFound />)

    // Wait for Helmet to update the DOM
    await waitFor(() => {
      expect(document.title).toBe('Page Not Found - 404 - Monoroh')
    })

    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute('content', "The page you're looking for doesn't exist. Return to the homepage to explore our mobile applications.")
  })

  it('displays navigation suggestions', () => {
    renderWithProviders(<NotFound />)

    const suggestions = document.querySelector('.error-suggestions')
    expect(suggestions).toBeInTheDocument()

    const suggestionsList = document.querySelectorAll('.error-suggestions ul li')
    expect(suggestionsList).toHaveLength(3)

    // Check if all suggested links are present
    expect(document.querySelector('a[href="/?scroll=applications"]')).toBeInTheDocument()
    expect(document.querySelector('a[href="/authmeister"]')).toBeInTheDocument()
    expect(document.querySelector('a[href="https://sympee.ru"]')).toBeInTheDocument()
  })
})