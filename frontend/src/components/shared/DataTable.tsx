'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/utils';

export interface Column<T> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  onRowClick,
  emptyMessage = 'No hay datos disponibles',
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortedData = sortKey
    ? [...data].sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      })
    : data;

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-[#E2E8F0] p-12 text-center">
        <p className="text-[#64748B]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    'px-6 py-3 text-left text-xs font-medium text-[#64748B] uppercase tracking-wider',
                    column.sortable && 'cursor-pointer hover:bg-[#F1F5F9]'
                  )}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {column.sortable && sortKey === column.key && (
                      <>
                        {sortDirection === 'asc' ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {sortedData.map((row, idx) => (
              <tr
                key={idx}
                className={cn(
                  'hover:bg-[#F8FAFC] transition-colors',
                  onRowClick && 'cursor-pointer'
                )}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 text-sm text-[#0F172A]"
                  >
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
