import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';
import { SITE_URL } from '@/lib/site';

/**
 * Structured data with verified business information only.
 * Emits CafeOrCoffeeShop plus a WebSite schema so the page is eligible for
 * richer rich results, with cross-referenced @id hashes.
 */
export function JsonLd() {
  const businessId = `${SITE_URL}/#business`;

  const business = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    '@id': businessId,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: SITE_URL,
    telephone: BUSINESS_INFO.phone,
    priceRange: BUSINESS_INFO.priceRange,
    servingCuisine: ['Coffee', 'Sandwiches', 'Pizza', 'Salads', 'Pastries'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address,
      addressCountry: 'TN',
    },
    sameAs: [BUSINESS_INFO.instagramUrl],
    hasMap: GOOGLE_MAPS.directionsUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.rating,
      reviewCount: BUSINESS_INFO.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    inLanguage: ['en', 'fr', 'ar'],
    publisher: { '@id': businessId },
  };

  return (
    <>
      {[business, website].map((data) => (
        <script
          key={data['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}