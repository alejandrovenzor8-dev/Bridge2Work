'use client';

import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  trend?: number;
  icon?: React.ReactNode;
  className?: string;
}

export function StatsCard({ title, value, trend, icon, className }: StatsCardProps) {
  return (
    <Card className={cn('', className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#64748B] font-medium">{title}</p>
          {icon && <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center">{icon}</div>}
        </div>
        <p className="text-2xl font-bold text-[#0F172A]">{value}</p>
        {trend !== undefined && (
          <div className="flex items-center gap-1 mt-2">
            {trend > 0 ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : trend < 0 ? (
              <TrendingDown className="w-4 h-4 text-red-500" />
            ) : (
              <Minus className="w-4 h-4 text-[#64748B]" />
            )}
            <span className={cn('text-sm font-medium', trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-[#64748B]')}>
              {trend > 0 ? '+' : ''}{trend}% este mes
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
