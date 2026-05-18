'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, Building2, GraduationCap, BarChart2, TrendingUp, ArrowRight, Shield, Database } from 'lucide-react';
import { MetricCard } from '@/components/shared/MetricCard';
import { LineChart } from '@/components/shared/Charts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const crecimientoData = [
  { name: 'Ene', usuarios: 450, empresas: 12, estudiantes: 320 },
  { name: 'Feb', usuarios: 580, empresas: 18, estudiantes: 410 },
  { name: 'Mar', usuarios: 720, empresas: 23, estudiantes: 520 },
  { name: 'Abr', usuarios: 890, empresas: 31, estudiantes: 680 },
  { name: 'May', usuarios: 1150, empresas: 38, estudiantes: 850 },
];

export default function AdminDashboard() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Panel de Administración</h1>
          <p className="text-[#64748B]">Visión general de la plataforma Bridge2Work</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/usuarios">
            <Button variant="outline">Gestionar Usuarios</Button>
          </Link>
          <Link href="/admin/analytics">
            <Button>Ver Analytics</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Usuarios"
          value="1,150"
          icon={Users}
          color="cyan"
          change={15}
          trend="up"
          description="Usuarios activos"
        />
        <MetricCard
          title="Empresas"
          value={38}
          icon={Building2}
          color="purple"
          change={12}
          trend="up"
          description="Empresas registradas"
        />
        <MetricCard
          title="Universidades"
          value={8}
          icon={GraduationCap}
          color="green"
          description="Instituciones activas"
        />
        <MetricCard
          title="Estudiantes"
          value="850"
          icon={Users}
          color="orange"
          change={18}
          trend="up"
          description="Estudiantes registrados"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Link href="/admin/usuarios" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#06B6D4]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#06B6D4] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Gestión de Usuarios</h3>
            <p className="text-sm text-[#64748B]">Administra usuarios y permisos</p>
          </div>
        </Link>

        <Link href="/admin/moderacion" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#8B5CF6]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#8B5CF6] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Moderación</h3>
            <p className="text-sm text-[#64748B]">Revisa y aprueba contenido</p>
          </div>
        </Link>

        <Link href="/admin/analytics" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#10B981]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                <BarChart2 className="w-6 h-6 text-[#10B981]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#10B981] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Analytics</h3>
            <p className="text-sm text-[#64748B]">Métricas de la plataforma</p>
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
          Crecimiento de la Plataforma
        </h3>
        <p className="text-sm text-[#64748B] mb-4">
          Evolución de usuarios, empresas y estudiantes en los últimos 5 meses
        </p>
        <LineChart data={crecimientoData} height={350} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-[#06B6D4]" />
              Estadísticas Clave
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: 'Perfiles laborales creados', value: 156 },
              { label: 'Habilidades rastreadas', value: 487 },
              { label: 'Activos este mes', value: 892 },
              { label: 'Matches realizados', value: 1240 },
              { label: 'Reportes generados', value: 68 },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center py-2 border-b border-[#F1F5F9] last:border-0">
                <span className="text-sm text-[#64748B]">{item.label}</span>
                <span className="font-semibold text-[#0F172A]">{item.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { action: 'Nueva empresa registrada', detail: 'TechMX Solutions', time: 'hace 2h', type: 'empresa' },
              { action: 'Perfil laboral publicado', detail: 'Desarrollador Senior', time: 'hace 3h', type: 'perfil' },
              { action: 'Nuevo estudiante', detail: 'Ana García', time: 'hace 5h', type: 'estudiante' },
              { action: 'Universidad actualizada', detail: 'TEC Guadalajara', time: 'hace 1d', type: 'universidad' },
              { action: 'Reporte generado', detail: 'Analytics Q1 2026', time: 'hace 2d', type: 'reporte' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-[#F1F5F9] last:border-0">
                <Badge
                  className={
                    item.type === 'empresa'
                      ? 'bg-[#06B6D4]'
                      : item.type === 'estudiante'
                      ? 'bg-[#10B981]'
                      : item.type === 'universidad'
                      ? 'bg-[#8B5CF6]'
                      : 'bg-[#F59E0B]'
                  }
                >
                  {item.type}
                </Badge>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#0F172A] truncate">{item.action}</p>
                  <p className="text-xs text-[#64748B]">{item.detail}</p>
                </div>
                <span className="text-xs text-[#94A3B8] whitespace-nowrap">{item.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#8B5CF6]/5 rounded-lg border border-[#E2E8F0] p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
            <Database className="w-6 h-6 text-[#06B6D4]" />
          </div>
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-2">Estado del Sistema</h4>
            <p className="text-sm text-[#64748B] mb-4">
              Todos los servicios operando normalmente. Última verificación hace 5 minutos.
            </p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-[#64748B]">API: Activa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-[#64748B]">Base de datos: Óptima</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-[#64748B]">Matching IA: Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
