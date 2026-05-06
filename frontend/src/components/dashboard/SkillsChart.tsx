'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockSkillsDemand } from '@/lib/mockData';

export function SkillsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Demanda de Habilidades</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockSkillsDemand} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{ border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px' }}
            />
            <Bar dataKey="value" fill="#06B6D4" radius={[4, 4, 0, 0]} name="Demanda %" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
