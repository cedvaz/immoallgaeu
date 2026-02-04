import { Metadata } from 'next'

interface StructuredDataProps {
  type?: 'website' | 'organization' | 'local-business'
  metadata?: Metadata
}

export default function StructuredData({ type = 'website', metadata }: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type === 'website' ? 'WebSite' : type === 'organization' ? 'Organization' : 'LocalBusiness',
    name: 'ImmoAllgaeu',
    description: 'Ihr regionaler Experte für Immobilien im Allgäu. Aktuelle Preise, kostenlose Bewertung und persönliche Beratung.',
    url: 'https://immoallgaeu.com',
    logo: 'https://immoallgaeu.com/images/logo.png',
  }

  if (type === 'organization' || type === 'local-business') {
    Object.assign(baseData, {
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Am Frickenland 4',
        addressLocality: 'Kempten',
        postalCode: '87437',
        addressCountry: 'DE',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+49-XXX-XXXXXXX', // Add actual phone number
        contactType: 'customer service',
        email: 'info@immoallgaeu.com',
      },
      sameAs: [
        // Add social media URLs if available
      ],
    })
  }

  if (type === 'website') {
    Object.assign(baseData, {
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://immoallgaeu.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseData),
      }}
    />
  )
}