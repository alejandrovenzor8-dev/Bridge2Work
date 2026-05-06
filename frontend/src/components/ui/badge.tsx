import * as React from 'react';
import { cn } from '@/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'purple';
}

const variantClasses: Record<string, string> = {
  default: 'bg-[#06B6D4] text-white',
  secondary: 'bg-[#F1F5F9] text-[#0F172A]',
  outline: 'border border-[#E2E8F0] text-[#64748B] bg-transparent',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  purple: 'bg-purple-100 text-purple-700',
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
