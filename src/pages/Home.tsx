import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'
import AppsSection from '../components/AppsSection'
import AboutSection from '../components/AboutSection'
import { useI18n } from '../hooks/useI18n'
import { useScrollToSection } from '../hooks/useScrollToSection'

export default function Home() {
  useScrollToSection('scroll', { behavior: 'smooth', block: 'start' })
  const { t, locale } = useI18n()

  return (
    <>
      <SEO
        title={`${t.meta.siteName} — Mobile App Developer`}
        description={t.meta.description}
        keywords={t.meta.keywords}
        url="/"
        type="website"
        locale={locale}
      />
      <HeroSection />
      <AppsSection />
      <AboutSection />
    </>
  )
}
