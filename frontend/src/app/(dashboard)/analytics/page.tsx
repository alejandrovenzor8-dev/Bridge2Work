'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrendingUp, Users, Briefcase, ArrowRight, Globe, BarChart3 } from 'lucide-react';
import { MetricCard } from '@/components/shared/MetricCard';
import { BarChart, LineChart, PieChart } from '@/components/shared/Charts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const skillsDemandadasData = [
  { name: 'JavaScript', demanda: 850 },
  { name: 'Python', demanda: 720 },
  { name: 'React', demanda: 680 },
  { name: 'TypeScript', demanda: 590 },
  { name: 'Node.js', demanda: 540 },
  { name: 'AWS', demanda: 480 },
  { name: 'Docker', demanda: 420 },
  { name: 'SQL', demanda: 380 },
];

const industriasActivasData = [
  { name: 'Tecnología', value: 35, color: '#06B6D4' },
  { name: 'Finanzas', value: 25, color: '#8B5CF6' },
  { name: 'Salud', value: 20, color: '#10B981' },
  { name: 'Educación', value: 12, color: '#F59E0B' },
  { name: 'Retail', value: 8, color: '#EF4444' },
];

const tendenciasData = [
  { name: 'Ene', ofertas: 120, aplicaciones: 450, matches: 85 },
  { name: 'Feb', ofertas: 145, aplicaciones: 580, matches: 110 },
  { name: 'Mar', ofertas: 180, aplicaciones: 720, matches: 145 },
  { name: 'Abr', ofertas: 210, aplicaciones: 890, matches: 180 },
  { name: 'May', ofertas: 250, aplicaciones: 1150, matches: 220 },
];

const carrerasCrecimientoData = [
  { carrera: 'Ingeniería en Software', crecimiento: 45, empleabilidad: 92 },
  { carrera: 'Ciencia de Datos', crecimiento: 38, empleabilidad: 89 },
  { carrera: 'Ciberseguridad', crecimiento: 35, empleabilidad: 87 },
  { carrera: 'DevOps', crecimiento: 32, empleabilidad: 85 },
  { carrera: 'UX/UI Design', crecimiento: 28, empleabilidad: 81 },
  { carrera: 'Cloud Computing', crecimiento: 25, empleabilidad: 78 },
];

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Analytics Global</h1>
          <p className="text-[#64748B]">
            Visión general del mercado laboral y tendencias de la industria
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/analytics/heatmaps">
            <Button variant="outline">Ver Heatmaps</Button>
          </Link>
          <Link href="/analytics/inteligencia">
            <Button>Inteligencia de Mercado</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Ofertas Laborales"
          value="250"
          icon={Briefcase}
          color="cyan"
          change={18}
          trend="up"
          description="Este mes"
        />
        <MetricCard
          title="Candidatos Activos"
          value="1,150"
          icon={Users}
          color="purple"
          change={15}
          trend="up"
          description="Estudiantes registrados"
        />
        <MetricCard
          title="Matches Exitosos"
          value="220"
          icon={TrendingUp}
          color="green"
          change={22}
          trend="up"
          description="Coincidencias este mes"
        />
        <MetricCard
          title="Industrias Activas"
          value={5}
          icon={Globe}
          color="orange"
          description="Sectores representados"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Link href="/analytics/heatmaps" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#06B6D4]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#06B6D4] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Heatmaps & Visualización</h3>
            <p className="text-sm text-[#64748B]">Mapas de calor y comparativas avanzadas</p>
          </div>
        </Link>

        <Link href="/analytics/inteligencia" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#8B5CF6]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#8B5CF6] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Inteligencia de Mercado</h3>
            <p className="text-sm text-[#64748B]">Tendencias y predicciones IA</p>
          </div>
        </Link>

        <Link href="/admin" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#10B981]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#10B981]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#10B981] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Panel Admin</h3>
            <p className="text-sm text-[#64748B]">Gestión de usuarios y moderación</p>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
            Skills Más Demandadas
          </h3>
          <p className="text-sm text-[#64748B] mb-4">
            Habilidades con mayor demanda en el mercado laboral actual
          </p>
          <BarChart data={skillsDemandadasData} height={350} />
        </div>

        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
            Industrias Activas
          </h3>
          <p className="text-sm text-[#64748B] mb-4">
            Distribución de ofertas laborales por sector
          </p>
          <PieChart data={industriasActivasData} height={350} />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
          Tendencias del Mercado Laboral
        </h3>
        <p className="text-sm text-[#64748B] mb-4">
          Evolución de ofertas, aplicaciones y matches en los últimos 5 meses
        </p>
        <LineChart data={tendenciasData} height={350} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Carreras con Mayor Crecimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[#64748B] mb-6">
            Carreras con mayor demanda y tasa de empleabilidad
          </p>
          <div className="space-y-6">
            {carrerasCrecimientoData.map((carrera, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-[#06B6D4] text-white">#{index + 1}</Badge>
                    <span className="font-medium text-[#0F172A]">{carrera.carrera}</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#10B981]" />
                      <span className="text-[#10B981] font-medium">
                        +{carrera.crecimiento}%
                      </span>
                    </div>
                    <span className="text-[#64748B]">
                      {carrera.empleabilidad}% empleabilidad
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-[#64748B] mb-1">Crecimiento</div>
                    <Progress value={carrera.crecimiento * 2} className="h-2" />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] mb-1">Empleabilidad</div>
                    <Progress value={carrera.empleabilidad} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#8B5CF6]/5 rounded-lg border border-[#E2E8F0] p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-[#06B6D4]" />
          </div>
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-2">
              Informe del Mercado Laboral - Mayo 2026
            </h4>
            <p className="text-sm text-[#64748B] mb-4">
              El mercado tecnológico muestra un crecimiento sostenido del 18% en ofertas
              laborales. Las skills más demandadas incluyen JavaScript, Python y React.
              Se observa una alta demanda de perfiles en áreas de Ciberseguridad (+35%) y
              Ciencia de Datos (+38%).
            </p>
            <Link href="/analytics/inteligencia">
              <Button variant="outline" size="sm">
                Ver Análisis Completo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
