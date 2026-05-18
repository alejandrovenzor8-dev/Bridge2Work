'use client';

import * as React from 'react';
import { cn } from '@/utils';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, children, ...props }, ref) => (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#0F172A] mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'w-full h-10 px-3 py-2 text-sm rounded-md border border-[#E2E8F0] bg-white',
            'focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed appearance-none',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
);

Select.displayName = 'Select';
