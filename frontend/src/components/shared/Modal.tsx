'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils';
import { Button } from '@/components/ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
}: ModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          'relative bg-white rounded-lg shadow-xl w-full',
          sizeClasses[size],
          'max-h-[90vh] flex flex-col'
        )}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0]">
            <h2 className="text-lg font-semibold text-[#0F172A]">{title}</h2>
            <button
              onClick={onClose}
              className="text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className="px-6 py-4 overflow-y-auto flex-1">{children}</div>
        {footer && (
          <div className="px-6 py-4 border-t border-[#E2E8F0] flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
