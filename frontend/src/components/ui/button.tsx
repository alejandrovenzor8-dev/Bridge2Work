'use client';

import * as React from 'react';
import { cn } from '@/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const variantClasses: Record<string, string> = {
  default: 'bg-[#06B6D4] text-white hover:bg-[#0891B2] shadow',
  secondary: 'bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E2E8F0]',
  outline: 'border border-[#E2E8F0] bg-transparent hover:bg-[#F1F5F9] text-[#0F172A]',
  ghost: 'bg-transparent hover:bg-[#F1F5F9] text-[#0F172A]',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
  link: 'text-[#06B6D4] underline-offset-4 hover:underline bg-transparent',
};

const sizeClasses: Record<string, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';
