import { NextResponse } from 'next/server';
import { BUSINESS_INFO } from '@/lib/data/business';

export function GET() {
  try {
    return NextResponse.json(
      {
        status: 'coming-soon',
        services: BUSINESS_INFO.services,
        note: 'The full menu and current prices are available in-store.',
      },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
    );
  } catch {
    return NextResponse.json(
      { error: 'Unable to retrieve menu information.' },
      { status: 500 }
    );
  }
}