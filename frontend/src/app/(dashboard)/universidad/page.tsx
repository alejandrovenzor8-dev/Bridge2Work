'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap, Users, BarChart2, TrendingUp, ArrowRight, FileText } from 'lucide-react';
import { MetricCard } from '@/components/shared/MetricCard';
import { BarChart, LineChart } from '@/components/shared/Charts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const carreras = [
  { nombre: 'Ingeniería en Sistemas', estudiantes: 320, empleabilidad: 92, crecimiento: 8 },
  { nombre: 'Ciencia de Datos', estudiantes: 185, empleabilidad: 96, crecimiento: 15 },
  { nombre: 'Ingeniería en Software', estudiantes: 410, empleabilidad: 94, crecimiento: 12 },
  { nombre: 'Ingeniería Industrial', estudiantes: 290, empleabilidad: 88, crecimiento: 5 },
  { nombre: 'Administración de TI', estudiantes: 150, empleabilidad: 85, crecimiento: 3 },
];

const skillsEmergentes = [
  { name: 'IA & Machine Learning', value: 85 },
  { name: 'Cloud Computing', value: 72 },
  { name: 'Blockchain', value: 68 },
  { name: 'Cybersecurity', value: 80 },
  { name: 'DevOps', value: 65 },
];

export default function UniversidadDashboard() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Panel de Universidad</h1>
          <p className="text-[#64748B]">Monitorea tendencias del mercado laboral y adapta tus programas</p>
        </div>
        <Link href="/universidad/reportes">
          <Button className="gap-2">
            <FileText className="w-4 h-4" /> Generar Reporte
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Estudiantes"
          value="1,355"
          icon={Users}
          color="cyan"
          change={8}
          trend="up"
          description="Matriculados actualmente"
        />
        <MetricCard
          title="Carreras Activas"
          value={carreras.length}
          icon={GraduationCap}
          color="purple"
          description="Programas académicos"
        />
        <MetricCard
          title="Empleabilidad"
          value="91%"
          icon={TrendingUp}
          color="green"
          change={3}
          trend="up"
          description="Tasa promedio"
        />
        <MetricCard
          title="Empresas Aliadas"
          value={23}
          icon={BarChart2}
          color="orange"
          description="Partners activos"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Link href="/universidad/comparativa" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#06B6D4]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                <BarChart2 className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#06B6D4] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Comparativa Académica</h3>
            <p className="text-sm text-[#64748B]">Analiza carreras vs demanda laboral</p>
          </div>
        </Link>

        <Link href="/universidad/analytics" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#8B5CF6]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#8B5CF6] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Analytics</h3>
            <p className="text-sm text-[#64748B]">Tendencias y métricas avanzadas</p>
          </div>
        </Link>

        <Link href="/universidad/reportes" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#10B981]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#10B981]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#10B981] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Reportes</h3>
            <p className="text-sm text-[#64748B]">Genera reportes profesionales</p>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
            Skills Emergentes
          </h3>
          <p className="text-sm text-[#64748B] mb-4">
            Habilidades con mayor crecimiento en demanda laboral
          </p>
          <BarChart data={skillsEmergentes} height={300} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Empleabilidad por Carrera</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {carreras.map((c) => (
              <div key={c.nombre} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-[#0F172A]">{c.nombre}</span>
                    <Badge variant="secondary" className="text-xs">{c.estudiantes} alumnos</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#10B981]">+{c.crecimiento}%</span>
                    <span className="text-sm font-semibold text-[#06B6D4]">{c.empleabilidad}%</span>
                  </div>
                </div>
                <Progress value={c.empleabilidad} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#8B5CF6]/5 rounded-lg border border-[#E2E8F0] p-8">
        <div className="flex items-start justify-between">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Inteligencia Laboral en Tiempo Real
            </h3>
            <p className="text-[#64748B] mb-4">
              Accede a datos actualizados sobre tendencias del mercado laboral, 
              demanda de habilidades y oportunidades de crecimiento para tus programas académicos.
            </p>
            <Link href="/universidad/comparativa">
              <Button>Explorar Tendencias</Button>
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#06B6D4]">92%</div>
              <div className="text-xs text-[#64748B]">Precisión</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#8B5CF6]">500+</div>
              <div className="text-xs text-[#64748B]">Skills</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
