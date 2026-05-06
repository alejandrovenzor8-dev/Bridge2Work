'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockCareerTrends } from '@/lib/mockData';

export function TrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tendencias de Carreras (2024)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockCareerTrends} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={{ border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px' }} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="sistemas" stroke="#06B6D4" strokeWidth={2} dot={false} name="Ing. Sistemas" />
            <Line type="monotone" dataKey="datos" stroke="#8B5CF6" strokeWidth={2} dot={false} name="Ciencia de Datos" />
            <Line type="monotone" dataKey="software" stroke="#10B981" strokeWidth={2} dot={false} name="Ing. Software" />
            <Line type="monotone" dataKey="industrial" stroke="#F59E0B" strokeWidth={2} dot={false} name="Ing. Industrial" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
