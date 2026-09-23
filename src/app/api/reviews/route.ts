import { NextResponse } from 'next/server';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

export function GET() {
  try {
    return NextResponse.json(
      {
        rating: BUSINESS_INFO.rating,
        reviewCount: BUSINESS_INFO.reviewCount,
        googleReviewsUrl: GOOGLE_MAPS.viewUrl,
      },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
    );
  } catch {
    return NextResponse.json(
      { error: 'Unable to retrieve review information.' },
      { status: 500 }
    );
  }
}