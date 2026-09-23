'use client';

import { forwardRef, ButtonHTMLAttributes, Children, isValidElement, cloneElement } from 'react';
import { cn } from '@/lib/utils';

function Slot({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & Record<string, unknown>) {
  const child = Children.only(children);
  if (!isValidElement<HTMLElement & { className?: string }>(child)) {
    return null;
  }
  return cloneElement(child, {
    ...props,
    className: cn(className, child.props.className),
  });
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  asChild?: boolean;
}

const variantStyles = {
  primary: 'bg-terracotta-500 text-white hover:bg-terracotta-600 active:bg-terracotta-700 focus:ring-bloo-300',
  secondary: 'bg-white text-bloo-800 border border-bloo-200 hover:bg-bloo-50 hover:border-bloo-300 active:bg-bloo-100 focus:ring-bloo-300',
  outline: 'border border-bloo-300 text-bloo-700 hover:border-bloo-500 hover:bg-bloo-50 active:bg-bloo-100 focus:ring-bloo-300',
  ghost: 'text-bloo-600 hover:bg-bloo-50 hover:text-bloo-800 active:bg-bloo-100 focus:ring-bloo-300',
  destructive: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500',
};

const sizeStyles = {
  sm: 'px-5 py-2.5 text-xs uppercase tracking-[0.25em] gap-2',
  md: 'px-6 py-3 text-sm uppercase tracking-[0.2em] gap-2.5',
  lg: 'px-8 py-4 text-sm uppercase tracking-[0.2em] gap-3',
  xl: 'px-10 py-5 text-base uppercase tracking-[0.2em] gap-3',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      disabled,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const buttonClasses = cn(
      'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-0',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'active:scale-[0.98]',
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    );

    if (asChild) {
      return (
        <Slot
          className={buttonClasses}
          aria-busy={loading}
          aria-disabled={isDisabled}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : icon && iconPosition === 'left' ? (
          <span aria-hidden="true">{icon}</span>
        ) : null}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' && (
          <span aria-hidden="true">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';