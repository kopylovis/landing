import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'
import AppsSection from '../components/AppsSection'
import { useScrollToSection } from '../hooks/useScrollToSection'

export default function Home() {
  useScrollToSection('scroll', { behavior: 'smooth', block: 'start' })

  return (
    <>
      <SEO
        title="Monoroh - Mobile App Developer"
        description="Crafting seamless multiplatform experiences with elegant code. Specialized in Kotlin Multiplatform and native iOS/Android development."
        keywords="Mobile App Developer, Kotlin Multiplatform, iOS, Android, App Development"
        url="/"
        type="website"
      />
      <HeroSection />
      <AppsSection />
    </>
  )
}