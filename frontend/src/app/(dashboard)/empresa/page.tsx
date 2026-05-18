'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Briefcase, Plus, BarChart2, Users, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { MetricCard } from '@/components/shared/MetricCard';
import { BarChart } from '@/components/shared/Charts';
import { JobProfileCard } from '@/components/dashboard/JobProfileCard';
import { Button } from '@/components/ui/button';
import { PerfilLaboral } from '@/types';
import { companyService } from '@/services/companyService';

export default function EmpresaDashboard() {
  const [profiles, setProfiles] = useState<PerfilLaboral[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const profilesData = await companyService.getJobProfiles('1');
      setProfiles(profilesData);
    } catch (error) {
      console.error('Error loading data:', error);
      // Mock data for development
      setProfiles([
        {
          id: '1',
          puesto: 'Desarrollador Full Stack',
          descripcion: 'Buscamos un desarrollador con experiencia en React y Node.js',
          habilidadesTecnicas: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
          softSkills: ['Trabajo en equipo', 'Comunicación', 'Proactividad'],
          experienciaAnios: 3,
          herramientas: ['Git', 'Jira', 'Figma'],
          salarioMin: 30000,
          salarioMax: 50000,
          modalidad: 'Híbrido',
          empresaId: '1',
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          puesto: 'Data Scientist',
          descripcion: 'Especialista en machine learning y análisis de datos',
          habilidadesTecnicas: ['Python', 'TensorFlow', 'SQL', 'Power BI', 'Pandas'],
          softSkills: ['Pensamiento analítico', 'Comunicación de datos'],
          experienciaAnios: 2,
          herramientas: ['Jupyter', 'Git', 'AWS'],
          salarioMin: 35000,
          salarioMax: 55000,
          modalidad: 'Remoto',
          empresaId: '1',
          createdAt: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const skillsData = [
    { name: 'React', value: 8 },
    { name: 'Python', value: 7 },
    { name: 'TypeScript', value: 6 },
    { name: 'Node.js', value: 5 },
    { name: 'Docker', value: 4 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Panel de Empresa</h1>
          <p className="text-[#64748B]">Gestiona tus perfiles laborales y analiza el talento disponible</p>
        </div>
        <Link href="/empresa/perfiles">
          <Button className="gap-2">
            <Plus className="w-4 h-4" /> Nuevo Perfil
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Perfiles Activos"
          value={profiles.length}
          icon={Briefcase}
          color="cyan"
          change={15}
          trend="up"
          description="Posiciones abiertas"
        />
        <MetricCard
          title="Candidatos Potenciales"
          value={248}
          icon={Users}
          color="purple"
          change={8}
          trend="up"
          description="Estudiantes compatibles"
        />
        <MetricCard
          title="Matching Promedio"
          value="78%"
          icon={Target}
          color="green"
          change={5}
          trend="up"
          description="Compatibilidad general"
        />
        <MetricCard
          title="Skills Demandadas"
          value={24}
          icon={TrendingUp}
          color="orange"
          description="Habilidades únicas"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Link href="/empresa/perfiles" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#06B6D4]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#06B6D4] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Gestionar Perfiles</h3>
            <p className="text-sm text-[#64748B]">Crea y administra tus perfiles laborales</p>
          </div>
        </Link>

        <Link href="/empresa/analytics" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#8B5CF6]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                <BarChart2 className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#8B5CF6] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Analytics</h3>
            <p className="text-sm text-[#64748B]">Analiza tendencias y demanda de skills</p>
          </div>
        </Link>

        <Link href="/empresa/matching" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#10B981]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#10B981]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#10B981] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Matching</h3>
            <p className="text-sm text-[#64748B]">Encuentra candidatos compatibles</p>
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
        <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Skills Más Demandadas</h2>
        <BarChart data={skillsData} height={300} />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#0F172A]">Perfiles Recientes</h2>
          <Link href="/empresa/perfiles">
            <Button variant="outline" size="sm">Ver todos</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.slice(0, 3).map((profile) => (
            <JobProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}
