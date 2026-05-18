'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
  color?: 'cyan' | 'purple' | 'green' | 'orange' | 'red';
}

const colorClasses = {
  cyan: 'bg-[#06B6D4]/10 text-[#06B6D4]',
  purple: 'bg-[#8B5CF6]/10 text-[#8B5CF6]',
  green: 'bg-[#10B981]/10 text-[#10B981]',
  orange: 'bg-[#F59E0B]/10 text-[#F59E0B]',
  red: 'bg-[#EF4444]/10 text-[#EF4444]',
};

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  trend = 'neutral',
  description,
  color = 'cyan',
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-[#64748B] font-medium">{title}</p>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-3xl font-bold text-[#0F172A]">{value}</h3>
            {change !== undefined && (
              <span
                className={cn(
                  'text-sm font-medium',
                  trend === 'up' && 'text-[#10B981]',
                  trend === 'down' && 'text-[#EF4444]',
                  trend === 'neutral' && 'text-[#64748B]'
                )}
              >
                {change > 0 && '+'}
                {change}%
              </span>
            )}
          </div>
        </div>
        <div className={cn('w-12 h-12 rounded-lg flex items-center justify-center', colorClasses[color])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      {description && (
        <p className="text-xs text-[#64748B]">{description}</p>
      )}
    </div>
  );
}
