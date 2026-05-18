'use client';

import { cn } from '@/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-[#F1F5F9] rounded',
        className
      )}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
      <Skeleton className="h-4 w-24 mb-4" />
      <Skeleton className="h-8 w-32 mb-2" />
      <Skeleton className="h-3 w-full" />
    </div>
  );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden">
      <div className="p-4 border-b border-[#E2E8F0]">
        <Skeleton className="h-5 w-48" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="p-4 border-b border-[#E2E8F0] flex gap-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/6" />
        </div>
      ))}
    </div>
  );
}
