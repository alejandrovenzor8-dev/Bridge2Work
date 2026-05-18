'use client';

import { useState } from 'react';
import { TrendingUp, Users, Building2, GraduationCap, Target, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { BarChart, LineChart, PieChart } from '@/components/shared/Charts';
import { MetricCard } from '@/components/shared/MetricCard';

const usersGrowthData = [
  { mes: 'Ene', total: 450, empresas: 28, universidades: 6, estudiantes: 320 },
  { mes: 'Feb', total: 580, empresas: 31, universidades: 7, estudiantes: 410 },
  { mes: 'Mar', total: 720, empresas: 34, universidades: 7, estudiantes: 520 },
  { mes: 'Abr', total: 890, empresas: 36, universidades: 8, estudiantes: 680 },
  { mes: 'May', total: 1150, empresas: 38, universidades: 8, estudiantes: 850 },
];

const activityByRoleData = [
  { name: 'Estudiantes', value: 74, color: '#10B981' },
  { name: 'Empresas', value: 15, color: '#06B6D4' },
  { name: 'Universidades', value: 7, color: '#8B5CF6' },
  { name: 'Admins', value: 4, color: '#F59E0B' },
];

const topUniversitiesData = [
  { name: 'TEC de Monterrey', usuarios: 180 },
  { name: 'UNAM', usuarios: 145 },
  { name: 'IPN', usuarios: 120 },
  { name: 'UDG', usuarios: 95 },
  { name: 'UAM', usuarios: 78 },
];

export default function AdminAnalyticsPage() {
  const [timePeriod, setTimePeriod] = useState('30days');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Analytics de la Plataforma</h1>
          <p className="text-[#64748B]">Métricas detalladas y análisis de uso</p>
        </div>
        <Select value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
          <option value="7days">Últimos 7 días</option>
          <option value="30days">Últimos 30 días</option>
          <option value="90days">Últimos 90 días</option>
          <option value="year">Último año</option>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Usuarios Activos"
          value="892"
          icon={Activity}
          color="cyan"
          change={12}
          trend="up"
          description="En los últimos 30 días"
        />
        <MetricCard
          title="Nuevos Registros"
          value="125"
          icon={Users}
          color="purple"
          change={18}
          trend="up"
          description="Este mes"
        />
        <MetricCard
          title="Tasa de Retención"
          value="87.3%"
          icon={Target}
          color="green"
          change={3.5}
          trend="up"
          description="Usuarios recurrentes"
        />
        <MetricCard
          title="Engagement Promedio"
          value="24.5 min"
          icon={TrendingUp}
          color="orange"
          change={8}
          trend="up"
          description="Por sesión"
        />
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
          Crecimiento de Usuarios
        </h3>
        <p className="text-sm text-[#64748B] mb-4">
          Evolución de usuarios por tipo en los últimos 5 meses
        </p>
        <LineChart data={usersGrowthData} height={350} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
            Actividad por Rol
          </h3>
          <p className="text-sm text-[#64748B] mb-4">
            Distribución de actividad en la plataforma
          </p>
          <PieChart data={activityByRoleData} height={300} />
        </div>

        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
            Universidades Más Activas
          </h3>
          <p className="text-sm text-[#64748B] mb-4">
            Top 5 universidades por número de usuarios
          </p>
          <BarChart data={topUniversitiesData} height={300} />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Métricas Detalladas por Tipo de Usuario</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#06B6D4]/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-[#06B6D4]" />
                  <span className="text-sm font-medium text-[#64748B]">Empresas</span>
                </div>
                <div className="text-2xl font-bold text-[#0F172A] mb-1">38</div>
                <div className="text-xs text-[#64748B]">156 perfiles publicados</div>
              </div>

              <div className="bg-[#8B5CF6]/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-sm font-medium text-[#64748B]">Universidades</span>
                </div>
                <div className="text-2xl font-bold text-[#0F172A] mb-1">8</div>
                <div className="text-xs text-[#64748B]">68 reportes generados</div>
              </div>

              <div className="bg-[#10B981]/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-[#10B981]" />
                  <span className="text-sm font-medium text-[#64748B]">Estudiantes</span>
                </div>
                <div className="text-2xl font-bold text-[#0F172A] mb-1">850</div>
                <div className="text-xs text-[#64748B]">1,240 matches realizados</div>
              </div>

              <div className="bg-[#F59E0B]/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-sm font-medium text-[#64748B]">Crecimiento</span>
                </div>
                <div className="text-2xl font-bold text-[#0F172A] mb-1">+156%</div>
                <div className="text-xs text-[#64748B]">vs trimestre anterior</div>
              </div>
            </div>

            <div className="border-t border-[#E2E8F0] pt-6">
              <h4 className="font-semibold text-[#0F172A] mb-4">Estadísticas de Uso</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {[
                    { label: 'Sesiones totales', value: '12,840' },
                    { label: 'Duración promedio sesión', value: '24.5 min' },
                    { label: 'Páginas vistas', value: '48,920' },
                    { label: 'Tasa de rebote', value: '32.5%' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center py-2 border-b border-[#F1F5F9] last:border-0"
                    >
                      <span className="text-sm text-[#64748B]">{item.label}</span>
                      <span className="font-semibold text-[#0F172A]">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Búsquedas realizadas', value: '3,240' },
                    { label: 'Perfiles visualizados', value: '8,560' },
                    { label: 'Aplicaciones enviadas', value: '1,150' },
                    { label: 'Matches exitosos', value: '220' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center py-2 border-b border-[#F1F5F9] last:border-0"
                    >
                      <span className="text-sm text-[#64748B]">{item.label}</span>
                      <span className="font-semibold text-[#0F172A]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dispositivos y Navegadores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Desktop', percentage: 62, color: 'bg-[#06B6D4]' },
                { name: 'Mobile', percentage: 32, color: 'bg-[#8B5CF6]' },
                { name: 'Tablet', percentage: 6, color: 'bg-[#10B981]' },
              ].map((device) => (
                <div key={device.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#0F172A]">{device.name}</span>
                    <span className="text-sm font-semibold text-[#64748B]">
                      {device.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${device.color} rounded-full transition-all`}
                      style={{ width: `${device.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Horarios de Mayor Actividad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: '9:00 - 12:00', activity: 85, label: 'Mañana' },
                { time: '12:00 - 15:00', activity: 95, label: 'Mediodía' },
                { time: '15:00 - 18:00', activity: 78, label: 'Tarde' },
                { time: '18:00 - 21:00', activity: 45, label: 'Noche' },
              ].map((slot) => (
                <div key={slot.time}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-medium text-[#0F172A]">{slot.time}</span>
                      <span className="text-xs text-[#64748B] ml-2">({slot.label})</span>
                    </div>
                    <span className="text-sm font-semibold text-[#64748B]">
                      {slot.activity}% activo
                    </span>
                  </div>
                  <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] rounded-full transition-all"
                      style={{ width: `${slot.activity}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
