// SEO and Meta Types
export interface SEOData {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  siteName?: string
  locale?: string
  twitterHandle?: string
  keywords?: string
  author?: string
  canonical?: string
}

// App Card Types
export interface AppData {
  id: string
  name: string
  description: string
  image: string
  platforms: Platform[]
  links: AppLinks
  features?: string[]
  category?: string
  version?: string
  lastUpdated?: string
}

export interface Platform {
  name: 'iOS' | 'Android' | 'Web' | 'Desktop'
  icon: string
  available: boolean
}

export interface AppLinks {
  appStore?: string
  googlePlay?: string
  ruStore?: string
  github?: string
  website?: string
}

// Component Props Types
export interface LayoutProps {
  children?: React.ReactNode
}

export interface HeroSectionProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
}

export interface AppsSectionProps {
  title?: string
  subtitle?: string
  apps?: AppData[]
}

export interface AppCardProps {
  app: AppData
  className?: string
  onClick?: () => void
}

export interface FooterProps {
  socialLinks?: SocialLink[]
  copyright?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

// Page Props Types
export interface PageProps {
  seoData?: SEOData
  className?: string
  children?: React.ReactNode
}

// Navigation Types
export interface NavigationItem {
  name: string
  href: string
  external?: boolean
}

// Contact Types
export interface ContactInfo {
  email?: string
  telegram?: string
  github?: string
  linkedin?: string
}

// Error Types
export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

// Loading States
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

// Theme Types
export type Theme = 'light' | 'dark' | 'system'

// Analytics Types
export interface AnalyticsEvent {
  name: string
  category: string
  action: string
  label?: string
  value?: number
}