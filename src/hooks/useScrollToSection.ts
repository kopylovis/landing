import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollToSectionOptions {
  behavior?: 'smooth' | 'auto'
  block?: 'start' | 'center' | 'end' | 'nearest'
  delay?: number
}

export function useScrollToSection(
  paramName: string = 'scroll',
  options: ScrollToSectionOptions = {}
) {
  const location = useLocation()
  const { behavior = 'smooth', block = 'start', delay = 100 } = options

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const scrollTarget = searchParams.get(paramName)
    
    if (scrollTarget) {
      const timer = setTimeout(() => {
        const element = document.getElementById(`${scrollTarget}-section`)
        if (element) {
          element.scrollIntoView({ behavior, block })
        }
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [location, paramName, behavior, block, delay])
}

export default useScrollToSection