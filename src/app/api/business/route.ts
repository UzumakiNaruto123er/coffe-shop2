import { NextResponse } from 'next/server';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

export function GET() {
  try {
    return NextResponse.json(
      {
        name: BUSINESS_INFO.name,
        tagline: BUSINESS_INFO.tagline,
        description: BUSINESS_INFO.description,
        address: BUSINESS_INFO.address,
        phone: BUSINESS_INFO.phone,
        phoneHref: BUSINESS_INFO.phoneHref,
        instagram: BUSINESS_INFO.instagram,
        instagramUrl: BUSINESS_INFO.instagramUrl,
        rating: BUSINESS_INFO.rating,
        reviewCount: BUSINESS_INFO.reviewCount,
        priceRange: BUSINESS_INFO.priceRange,
        services: BUSINESS_INFO.services,
        googleMaps: GOOGLE_MAPS,
      },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
    );
  } catch {
    return NextResponse.json(
      { error: 'Unable to retrieve business information.' },
      { status: 500 }
    );
  }
}