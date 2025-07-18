import { render } from '@testing-library/react'
import LazyImage from '../LazyImage'

describe('LazyImage Component', () => {
  it('renders with correct attributes', () => {
    render(
      <LazyImage
        src="/test-image.jpg"
        alt="Test image"
        className="test-class"
      />
    )

    const img = document.querySelector('img')
    expect(img).toHaveAttribute('alt', 'Test image')
    expect(img).toHaveClass('lazy-image', 'test-class')
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('starts with placeholder image', () => {
    render(
      <LazyImage
        src="/test-image.jpg"
        alt="Test image"
        placeholder="/placeholder.jpg"
      />
    )

    const img = document.querySelector('img')
    expect(img).toHaveAttribute('src', '/placeholder.jpg')
  })

  it('applies correct styles', () => {
    render(
      <LazyImage
        src="/test-image.jpg"
        alt="Test image"
      />
    )

    const img = document.querySelector('img')
    expect(img).toHaveStyle({ opacity: '0.7', transition: 'opacity 0.3s ease-in-out' })
  })
})