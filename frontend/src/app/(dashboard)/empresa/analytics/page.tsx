'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Users, Briefcase, Target } from 'lucide-react';
import { MetricCard } from '@/components/shared/MetricCard';
import { BarChart, LineChart, PieChart } from '@/components/shared/Charts';
import { SkeletonCard } from '@/components/shared/SkeletonLoader';
import { companyService } from '@/services/companyService';
import type { CompanyAnalytics } from '@/types';

export default function AnalyticsEmpresaPage() {
  const [analytics, setAnalytics] = useState<CompanyAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    setLoading(true);
    try {
      // TODO: Replace with actual company ID
      const data = await companyService.getCompanyAnalytics('1');
      setAnalytics(data);
    } catch (error) {
      console.error('Error loading analytics:', error);
      // Mock data for development
      setAnalytics({
        perfilesCreados: 12,
        candidatosPotenciales: 248,
        skillsMasDemandadas: [
          { skill: 'React', count: 8 },
          { skill: 'Python', count: 7 },
          { skill: 'TypeScript', count: 6 },
          { skill: 'Node.js', count: 5 },
          { skill: 'Docker', count: 4 },
        ],
        tendenciasContratacion: [
          { name: 'Ene', value: 12 },
          { name: 'Feb', value: 19 },
          { name: 'Mar', value: 15 },
          { name: 'Abr', value: 25 },
          { name: 'May', value: 22 },
          { name: 'Jun', value: 30 },
        ],
        matchingPromedio: 78,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading || !analytics) {
    return (
      <div className="space-y-6">
        <SkeletonCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  const skillsChartData = analytics.skillsMasDemandadas.map((item) => ({
    name: item.skill,
    value: item.count,
  }));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">
          Analytics Empresarial
        </h1>
        <p className="text-[#64748B]">
          Analiza tendencias de contratación y demanda de talento
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Perfiles Creados"
          value={analytics.perfilesCreados}
          icon={Briefcase}
          color="cyan"
          change={15}
          trend="up"
          description="Total de posiciones activas"
        />
        <MetricCard
          title="Candidatos Potenciales"
          value={analytics.candidatosPotenciales}
          icon={Users}
          color="purple"
          change={8}
          trend="up"
          description="Estudiantes compatibles"
        />
        <MetricCard
          title="Matching Promedio"
          value={`${analytics.matchingPromedio}%`}
          icon={Target}
          color="green"
          change={5}
          trend="up"
          description="Compatibilidad general"
        />
        <MetricCard
          title="Skills Demandadas"
          value={analytics.skillsMasDemandadas.length}
          icon={TrendingUp}
          color="orange"
          description="Habilidades únicas"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
            Skills Más Demandadas
          </h3>
          <BarChart data={skillsChartData} height={300} />
        </div>

        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
            Distribución de Skills
          </h3>
          <PieChart data={skillsChartData} height={300} />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
          Tendencias de Contratación
        </h3>
        <p className="text-sm text-[#64748B] mb-4">
          Evolución de perfiles laborales creados en los últimos 6 meses
        </p>
        <LineChart data={analytics.tendenciasContratacion} height={350} />
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
          Top Skills por Demanda
        </h3>
        <div className="space-y-4">
          {analytics.skillsMasDemandadas.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center text-sm font-semibold text-[#06B6D4]">
                  {index + 1}
                </div>
                <span className="font-medium text-[#0F172A]">{item.skill}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-48 h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]"
                    style={{
                      width: `${(item.count / analytics.skillsMasDemandadas[0].count) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-[#64748B] w-12 text-right">
                  {item.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
