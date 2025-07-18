import { useEffect } from 'react'
import { AppCardProps } from '../types'
import '../styles/AppCard.css'

type DetectedOS = 'android' | 'ios' | 'desktop'

function detectOS(): DetectedOS {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || ''
  
  if (/android/i.test(userAgent)) {
    return 'android'
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'ios'
  }
  
  return 'desktop'
}

export default function AppCard({ app, className, onClick }: AppCardProps) {
  
  useEffect(() => {
    const showAppropriateStoreButtons = () => {
      const os = detectOS()
      const storeButtons = document.querySelectorAll('.store-buttons')
      
      storeButtons.forEach(storeButtonsContainer => {
        const googlePlayLink = storeButtonsContainer.querySelector('a[href*="play.google.com"]')
        const appStoreLink = storeButtonsContainer.querySelector('a[href*="apps.apple.com"]')
        const ruStoreLink = storeButtonsContainer.querySelector('a[href*="rustore.ru"]')
        
        if (os === 'android') {
          if (googlePlayLink) (googlePlayLink as HTMLElement).style.display = 'block'
          if (appStoreLink) (appStoreLink as HTMLElement).style.display = 'none'
          if (ruStoreLink) (ruStoreLink as HTMLElement).style.display = 'block'
        } else if (os === 'ios') {
          if (googlePlayLink) (googlePlayLink as HTMLElement).style.display = 'none'
          if (appStoreLink) (appStoreLink as HTMLElement).style.display = 'block'
          if (ruStoreLink) (ruStoreLink as HTMLElement).style.display = 'none'
        } else {
          if (googlePlayLink) (googlePlayLink as HTMLElement).style.display = 'block'
          if (appStoreLink) (appStoreLink as HTMLElement).style.display = 'block'
          if (ruStoreLink) (ruStoreLink as HTMLElement).style.display = 'block'
        }
      })
    }
    
    showAppropriateStoreButtons()
  }, [])

  const handleCardClick = () => {
    if (app.links.website) {
      window.open(app.links.website, '_blank')
    } else if (onClick) {
      onClick()
    }
  }

  const handleStoreClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, '_blank')
  }

  return (
    <div className={`app-card ${className || ''}`} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="app-header">
        <img src={app.image} alt={`${app.name} Icon`} className="app-icon" />
        <div className="app-info">
          <h3>{app.name}</h3>
          <p className="app-category">{app.category}</p>
        </div>
      </div>

      <p className="app-description">{app.description}</p>

      {app.features && (
        <ul className="app-features">
          {app.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}

      <div className="store-buttons">
        {app.links.googlePlay && (
          <a href={app.links.googlePlay} target="_blank" rel="noopener noreferrer" onClick={(e) => handleStoreClick(e, app.links.googlePlay!)}>
            <img src="/media/googleplay.svg" alt="Get it on Google Play" />
          </a>
        )}
        {app.links.appStore && (
          <a href={app.links.appStore} target="_blank" rel="noopener noreferrer" onClick={(e) => handleStoreClick(e, app.links.appStore!)}>
            <img src="/media/appstore.svg" alt="Download on the App Store" />
          </a>
        )}
        {app.links.ruStore && (
          <a href={app.links.ruStore} target="_blank" rel="noopener noreferrer" onClick={(e) => handleStoreClick(e, app.links.ruStore!)}>
            <img src="/media/rustore.svg" alt="Download on the Ru Store" />
          </a>
        )}
      </div>
    </div>
  )
}