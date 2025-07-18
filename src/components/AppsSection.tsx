import { useNavigate } from 'react-router-dom'
import AppCard from './AppCard'
import { AppData, AppsSectionProps } from '../types'
import '../styles/AppsSection.css'

export default function AppsSection({ title, subtitle, apps: propApps }: AppsSectionProps) {
  const navigate = useNavigate()

  const defaultApps: AppData[] = [
    {
      id: 'authmeister',
      name: "Authmeister",
      category: "Security & Authentication",
      description: "A modern OTP authenticator supporting both TOTP and HOTP standards. Seamlessly migrate from other authenticators including Google Authenticator with otpauth-migration support.",
      image: "/media/authmeister_512x512.png",
      platforms: [
        { name: 'Android', icon: '/media/googleplay.svg', available: true },
        { name: 'iOS', icon: '/media/appstore.svg', available: true }
      ],
      links: {
        googlePlay: "https://play.google.com/store/apps/details?id=com.kopylovis.authmeister",
        appStore: "https://apps.apple.com/app/id6742833866",
        ruStore: "https://www.rustore.ru/catalog/app/com.kopylovis.authmeister"
      },
      features: [
        "TOTP & HOTP support",
        "Google Authenticator migration",
        "Secure encrypted storage",
        "Clean, intuitive interface",
        "Backup & restore functionality"
      ]
    },
    {
      id: 'sympee',
      name: "Sympee",
      category: "Gifting & Services",
      description: "A compliments platform where you can surprise friends with services and goods from partner businesses. Send coffee, haircuts, or other treats to loved ones in any city through QR codes.",
      image: "/media/sympee_512x512.png",
      platforms: [
        { name: 'Android', icon: '/media/googleplay.svg', available: true },
        { name: 'iOS', icon: '/media/appstore.svg', available: true }
      ],
      links: {
        googlePlay: "https://play.google.com/store/apps/details?id=ru.sympee.mobile",
        appStore: "https://apps.apple.com/app/id6742376781",
        ruStore: "https://www.rustore.ru/catalog/app/ru.sympee.mobile",
        website: "https://sympee.ru"
      },
      features: [
        "Gift services to friends remotely",
        "QR code redemption system",
        "Partner business network",
        "Cross-city gifting",
        "Surprise & delight experience"
      ]
    }
  ]

  const apps = propApps || defaultApps

  const handleAppClick = (appId: string) => {
    if (appId === 'authmeister') {
      navigate('/authmeister')
    }
  }

  return (
    <section id="applications-section" className="apps-section">
      <h2 className="section-title">{title || "Featured Applications"}</h2>
      <p className="section-subtitle">{subtitle || "Innovative solutions that make a difference"}</p>

      <div className="apps-grid">
        {apps.map((app) => (
          <AppCard
            key={app.id}
            app={app}
            onClick={() => handleAppClick(app.id)}
          />
        ))}
      </div>
    </section>
  )
}