import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/AuthmeisterPage.css'

export default function Authmeister() {
  useEffect(() => {
    document.title = 'Authmeister - OTP Authenticator'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A modern OTP authenticator supporting both TOTP and HOTP standards. Seamlessly migrate from other authenticators including Google Authenticator with otpauth-migration support.')
    }

    const showAppropriateStoreButtons = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || ''
      let os = 'desktop'
      
      if (/android/i.test(userAgent)) {
        os = 'android'
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        os = 'ios'
      }
      
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

  return (
    <div className="authmeister-page">
      <Link to="/" className="back-link">← Back to Portfolio</Link>
      
      <div className="hero-section">
        <div className="app-card">
          <div className="app-header">
            <img src="/media/authmeister_512x512.png" alt="Authmeister Icon" className="app-icon" />
            <div className="app-info">
              <h1>Authmeister</h1>
              <p className="app-category">Security & Authentication</p>
            </div>
          </div>
          
          <p className="app-description">
            A modern OTP authenticator supporting both TOTP and HOTP standards. 
            Seamlessly migrate from other authenticators including Google Authenticator 
            with otpauth-migration support.
          </p>
          
          <ul className="app-features">
            <li>TOTP & HOTP Support</li>
            <li>Google Authenticator Migration</li>
            <li>Secure Encrypted Storage</li>
            <li>Clean, Intuitive Interface</li>
            <li>Backup & Restore</li>
            <li>Dark & Light Themes</li>
          </ul>
          
          <div className="store-buttons">
            <a href="https://play.google.com/store/apps/details?id=com.kopylovis.authmeister" target="_blank" rel="noopener noreferrer">
              <img src="/media/googleplay.svg" alt="Get it on Google Play" />
            </a>
            <a href="https://apps.apple.com/app/id6742833866" target="_blank" rel="noopener noreferrer">
              <img src="/media/appstore.svg" alt="Download on the App Store" />
            </a>
            <a href="https://www.rustore.ru/catalog/app/com.kopylovis.authmeister" target="_blank" rel="noopener noreferrer">
              <img src="/media/rustore.svg" alt="Download on the Ru Store" />
            </a>
          </div>
          
          <div className="links">
            <Link to="/authmeister/privacy">Privacy Policy</Link>
            <Link to="/authmeister/terms">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  )
}