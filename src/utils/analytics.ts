import { AnalyticsEvent } from '../types'

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

class Analytics {
  private isInitialized = false
  private isDevelopment = import.meta.env.DEV

  constructor() {
    this.init()
  }

  private init() {
    if (this.isDevelopment) {
      console.log('[Analytics] Running in development mode - events will be logged only')
      this.isInitialized = true
      return
    }

    if (typeof window !== 'undefined' && window.gtag) {
      this.isInitialized = true
    }
  }

  track(event: AnalyticsEvent) {
    if (!this.isInitialized) {
      console.warn('[Analytics] Not initialized')
      return
    }

    if (this.isDevelopment) {
      console.log('[Analytics] Event tracked:', event)
      return
    }

    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameter: event.name
      })
    }
  }

  trackPageView(page: string, title?: string) {
    if (!this.isInitialized) {
      console.warn('[Analytics] Not initialized')
      return
    }

    if (this.isDevelopment) {
      console.log('[Analytics] Page view tracked:', { page, title })
      return
    }

    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page,
        page_title: title
      })
    }
  }

  trackClick(elementName: string, category = 'UI') {
    this.track({
      name: `${elementName}_click`,
      category,
      action: 'click',
      label: elementName
    })
  }

  trackStoreClick(storeName: string, appName: string) {
    this.track({
      name: 'store_click',
      category: 'App Download',
      action: 'click',
      label: `${storeName} - ${appName}`
    })
  }

  trackExternalLink(url: string, linkText?: string) {
    this.track({
      name: 'external_link',
      category: 'External Link',
      action: 'click',
      label: linkText || url
    })
  }

  trackError(error: Error, context?: string) {
    this.track({
      name: 'error',
      category: 'Error',
      action: 'exception',
      label: `${context || 'Unknown'}: ${error.message}`
    })
  }
}

export const analytics = new Analytics()
export default analytics