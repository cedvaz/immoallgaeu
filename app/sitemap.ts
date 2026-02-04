import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://immoallgaeu.com'

  // Static pages
  const staticPages = [
    '',
    '/datenschutz',
    '/impressum',
    '/kontakt',
    '/team',
    '/methodik',
    '/nebenkostenrechner',
    '/immobilienbewertung',
    '/marktreport/kempten',
  ]

  // City pages
  const cities = [
    'immenstadt',
    'kaufbeuren',
    'kempten',
    'memmingen',
    'oberstdorf',
    'pfronten',
    'sonthofen',
  ]

  // Price pages for each city
  const pricePages = cities.map(city => `/immobilienpreise/${city}`)

  // Property pages for each city
  const propertyPages = cities.map(city => `/immobilien-${city}`)

  // Ratgeber pages
  const ratgeberPages = [
    '/ratgeber',
    '/ratgeber/haus-kaufen-allgaeu',
    '/ratgeber/immobilie-bewerten-lassen',
    '/ratgeber/immobilie-erben',
    '/ratgeber/immobilie-verkaufen',
    '/ratgeber/immobilienpreise-allgaeu-2025',
    '/ratgeber/kapitalanlage-immobilien',
  ]

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...pricePages,
    ...propertyPages,
    ...ratgeberPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : page.startsWith('/ratgeber') ? 0.8 : 0.9,
  }))
}