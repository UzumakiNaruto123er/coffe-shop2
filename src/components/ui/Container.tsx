'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

/* One gutter pattern for the whole site so header, sections, map and
   footer always sit on the same vertical grid. */
const paddingStyles = {
  none: 'px-0',
  sm: 'px-4 sm:px-6 lg:px-8',
  md: 'px-4 sm:px-6 lg:px-8',
  lg: 'px-4 sm:px-6 lg:px-8',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', padding = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full',
          sizeStyles[size],
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = 'Container';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alternate' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const variantStyles = {
  default: 'bg-charcoal-950',
  alternate: 'bg-charcoal-900',
  dark: 'bg-bloo-950 text-white',
};

const sectionPaddingStyles = {
  sm: 'py-14 sm:py-20',
  md: 'py-16 sm:py-24',
  lg: 'py-20 sm:py-28',
  xl: 'py-24 sm:py-32',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', padding = 'lg', id, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'w-full',
          variantStyles[variant],
          sectionPaddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = 'Section';