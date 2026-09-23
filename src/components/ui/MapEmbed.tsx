import { GOOGLE_MAPS } from '@/lib/data/business';
import { cn } from '@/lib/utils';

interface MapEmbedProps {
  title: string;
  className?: string;
  eager?: boolean;
}

/**
 * Single, responsive Google Maps embed driven by the owner-supplied URL.
 */
export function MapEmbed({ title, className, eager }: MapEmbedProps) {
  return (
    <div className={cn('map-container rounded-[2rem]', className)}>
      <iframe
        src={GOOGLE_MAPS.embedUrl}
        allowFullScreen
        loading={eager ? 'eager' : 'lazy'}
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
}