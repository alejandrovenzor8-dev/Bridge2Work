'use client';

import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {Icon && (
        <div className="w-16 h-16 rounded-full bg-[#F1F5F9] flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-[#64748B]" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-sm text-[#64748B] text-center max-w-md mb-6">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
}
