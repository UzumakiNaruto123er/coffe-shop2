'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Next Image wrapper with a branded fallback: if the source fails to load,
 * a dark placeholder with a coffee glyph is rendered instead of a broken
 * image icon.
 */
export function SafeImage({ alt, className, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'grid place-items-center bg-[#1A1A1A]',
          props.fill && 'absolute inset-0',
          className
        )}
      >
        <Coffee className="w-10 h-10 text-gold-500/40" aria-hidden="true" />
      </div>
    );
  }

  return <Image {...props} alt={alt} className={className} onError={() => setFailed(true)} />;
}