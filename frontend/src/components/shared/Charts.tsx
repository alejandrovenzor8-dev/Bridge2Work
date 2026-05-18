'use client';

import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart as RechartsAreaChart,
} from 'recharts';

const COLORS = ['#06B6D4', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#6366F1'];

interface ChartProps {
  data: any[];
  height?: number;
}

export function BarChart({ data, height = 300 }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
        <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
        <YAxis stroke="#64748B" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
          }}
        />
        <Legend />
        {Object.keys(data[0] || {})
          .filter((key) => key !== 'name')
          .map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={COLORS[index % COLORS.length]}
              radius={[4, 4, 0, 0]}
            />
          ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}

export function LineChart({ data, height = 300 }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
        <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
        <YAxis stroke="#64748B" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
          }}
        />
        <Legend />
        {Object.keys(data[0] || {})
          .filter((key) => key !== 'name')
          .map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={COLORS[index % COLORS.length]}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}

export function AreaChart({ data, height = 300 }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
        <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
        <YAxis stroke="#64748B" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
          }}
        />
        <Legend />
        {Object.keys(data[0] || {})
          .filter((key) => key !== 'name')
          .map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stroke={COLORS[index % COLORS.length]}
              fill={COLORS[index % COLORS.length]}
              fillOpacity={0.6}
            />
          ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}

interface PieChartProps {
  data: Array<{ name: string; value: number }>;
  height?: number;
}

export function PieChart({ data, height = 300 }: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}
