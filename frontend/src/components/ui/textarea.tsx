'use client';

import * as React from 'react';
import { cn } from '@/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#0F172A] mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={cn(
          'w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-[#E2E8F0] bg-white',
          'focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent',
          'disabled:opacity-50 disabled:cursor-not-allowed resize-vertical',
          error && 'border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
);

Textarea.displayName = 'Textarea';
