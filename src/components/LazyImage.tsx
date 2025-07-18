import React, { useState, useRef, useEffect } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  threshold?: number
  rootMargin?: string
  onLoad?: () => void
  onError?: () => void
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2NjYyIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNnB4Ij5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==',
  threshold = 0.1,
  rootMargin = '50px',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  return (
    <img
      ref={imgRef}
      src={isInView ? src : placeholder}
      alt={alt}
      className={`lazy-image ${className || ''} ${isLoaded ? 'loaded' : ''} ${hasError ? 'error' : ''}`}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      style={{
        opacity: isLoaded ? 1 : 0.7,
        transition: 'opacity 0.3s ease-in-out'
      }}
    />
  )
}

export default LazyImage