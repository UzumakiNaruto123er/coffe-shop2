'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}

const variantStyles = {
  default: 'bg-charcoal-900 text-cream-400 border border-cream-200',
  primary: 'bg-terracotta-500 text-white',
  secondary: 'bg-bloo-50 text-bloo-950 border border-bloo-100',
  success: 'bg-sage-500 text-white',
  warning: 'bg-gold-500 text-white',
  outline: 'border-2 border-terracotta-500 text-terracotta-500 bg-transparent',
};

const sizeStyles = {
  sm: 'px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.15em]',
  md: 'px-3 py-1 text-xs uppercase tracking-[0.15em]',
  lg: 'px-4 py-1.5 text-sm uppercase tracking-[0.15em]',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', dot = false, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 font-semibold',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              'w-1.5 h-1.5 rounded-full',
              variant === 'default' && 'bg-terracotta-500',
              variant === 'secondary' && 'bg-terracotta-500',
              (variant === 'primary' || variant === 'success' || variant === 'warning') && 'bg-white',
              variant === 'outline' && 'bg-terracotta-500'
            )}
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';