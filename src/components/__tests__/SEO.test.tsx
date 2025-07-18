import { render, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import SEO from '../SEO'

describe('SEO Component', () => {
  const renderWithHelmet = (ui: React.ReactElement) => {
    return render(
      <HelmetProvider>
        {ui}
      </HelmetProvider>
    )
  }

  it('renders basic SEO tags', async () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
      url: '/test'
    }

    renderWithHelmet(<SEO {...props} />)

    // Wait for Helmet to update the DOM
    await waitFor(() => {
      expect(document.title).toBe('Test Title - Monoroh')
    })
    
    // Check if meta description is set
    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute('content', 'Test Description')
    
    // Check if Open Graph tags are set
    const ogTitle = document.querySelector('meta[property="og:title"]')
    expect(ogTitle).toHaveAttribute('content', 'Test Title - Monoroh')
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    expect(ogDescription).toHaveAttribute('content', 'Test Description')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    expect(ogUrl).toHaveAttribute('content', 'https://monoroh.com/test')
  })

  it('handles custom image and siteName', async () => {
    const props = {
      title: 'Custom Title',
      description: 'Custom Description',
      image: 'https://example.com/image.jpg',
      siteName: 'Custom Site'
    }

    renderWithHelmet(<SEO {...props} />)

    await waitFor(() => {
      const ogImage = document.querySelector('meta[property="og:image"]')
      expect(ogImage).toHaveAttribute('content', 'https://example.com/image.jpg')
    })
    
    const ogSiteName = document.querySelector('meta[property="og:site_name"]')
    expect(ogSiteName).toHaveAttribute('content', 'Custom Site')
  })

  it('sets proper Twitter meta tags', async () => {
    const props = {
      title: 'Twitter Test',
      description: 'Twitter Description',
      twitterHandle: '@testhandle'
    }

    renderWithHelmet(<SEO {...props} />)

    await waitFor(() => {
      const twitterCard = document.querySelector('meta[name="twitter:card"]')
      expect(twitterCard).toHaveAttribute('content', 'summary_large_image')
    })
    
    const twitterCreator = document.querySelector('meta[name="twitter:creator"]')
    expect(twitterCreator).toHaveAttribute('content', '@testhandle')
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    expect(twitterTitle).toHaveAttribute('content', 'Twitter Test - Monoroh')
  })

  it('handles canonical URL correctly', async () => {
    const props = {
      title: 'Canonical Test',
      description: 'Canonical Description',
      canonical: 'https://custom.com/canonical'
    }

    renderWithHelmet(<SEO {...props} />)

    await waitFor(() => {
      const canonicalLink = document.querySelector('link[rel="canonical"]')
      expect(canonicalLink).toHaveAttribute('href', 'https://custom.com/canonical')
    })
  })
})