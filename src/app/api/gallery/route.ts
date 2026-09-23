import { NextResponse } from 'next/server';
import { GALLERY_IMAGES } from '@/lib/data/business';

export function GET() {
  try {
    return NextResponse.json(
      {
        images: GALLERY_IMAGES,
        note: 'These photos are illustrative and serve to convey the atmosphere.',
      },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
    );
  } catch {
    return NextResponse.json(
      { error: 'Unable to retrieve gallery images.' },
      { status: 500 }
    );
  }
}