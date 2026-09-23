'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}

const variantStyles = {
  default: 'bg-white/5 text-cream-300 border border-white/10',
  primary: 'bg-terracotta-500 text-charcoal-950',
  secondary: 'bg-white/10 text-cream-100 border border-white/15',
  success: 'bg-sage-500 text-charcoal-950',
  warning: 'bg-gold-500 text-charcoal-950',
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
              (variant === 'primary' || variant === 'secondary' || variant === 'success') && 'bg-charcoal-950',
              variant === 'warning' && 'bg-charcoal-950',
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