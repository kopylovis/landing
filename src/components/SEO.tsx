import { Helmet } from 'react-helmet-async'

interface SEOProps {
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

export default function SEO({
  title,
  description,
  image = 'https://monoroh.com/media/develop_logo_512x512.png',
  url = 'https://monoroh.com/',
  type = 'website',
  siteName = 'Monoroh Developer',
  locale = 'en_US',
  twitterHandle = '@mnrhvd',
  keywords,
  author = 'Monoroh',
  canonical
}: SEOProps) {
  const fullTitle = title.includes('Monoroh') ? title : `${title} - Monoroh`
  const fullUrl = url.startsWith('http') ? url : `https://monoroh.com${url}`
  const canonicalUrl = canonical || fullUrl

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/media/develop_favicon.png" />
      <link rel="apple-touch-icon" sizes="512x512" href="/media/develop_logo_512x512.png" />
      
      {/* Telegram */}
      <meta name="telegram:channel" content="@mnrhvd" />
    </Helmet>
  )
}