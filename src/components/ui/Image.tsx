'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  fill = false,
  className,
  sizes,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      fill={fill}
      className={cn('object-cover', className)}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23dce6ee'/></svg>",
  width,
  height,
  priority = false,
  fill = false,
  className,
  sizes,
  quality = 85,
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      src={hasError ? fallbackSrc : src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      fill={fill}
      className={cn('object-cover', className)}
      sizes={sizes}
      quality={quality}
      onError={() => setHasError(true)}
    />
  );
}