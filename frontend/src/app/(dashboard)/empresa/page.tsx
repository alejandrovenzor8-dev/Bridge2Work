'use client';

import { useState } from 'react';
import { Briefcase, Plus, BarChart2, Users } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { SkillsChart } from '@/components/dashboard/SkillsChart';
import { JobProfileCard } from '@/components/dashboard/JobProfileCard';
import { Button } from '@/components/ui/button';
import { PerfilLaboral } from '@/types';

const mockProfiles: PerfilLaboral[] = [
  {
    id: '1',
    puesto: 'Desarrollador Full Stack',
    descripcion: 'Buscamos un desarrollador con experiencia en React y Node.js para proyectos de alto impacto.',
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
    descripcion: 'Especialista en machine learning y análisis de datos para toma de decisiones empresariales.',
    habilidadesTecnicas: ['Python', 'TensorFlow', 'SQL', 'Power BI', 'Pandas'],
    softSkills: ['Pensamiento analítico', 'Comunicación de datos', 'Atención al detalle'],
    experienciaAnios: 2,
    herramientas: ['Jupyter', 'Git', 'AWS'],
    salarioMin: 35000,
    salarioMax: 55000,
    modalidad: 'Remoto',
    empresaId: '1',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    puesto: 'DevOps Engineer',
    descripcion: 'Responsable de la infraestructura cloud y pipelines de CI/CD.',
    habilidadesTecnicas: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Linux'],
    softSkills: ['Resolución de problemas', 'Gestión del tiempo'],
    experienciaAnios: 4,
    herramientas: ['Jenkins', 'Grafana', 'Prometheus'],
    salarioMin: 40000,
    salarioMax: 65000,
    modalidad: 'Presencial',
    empresaId: '1',
    createdAt: new Date().toISOString(),
  },
];

export default function EmpresaDashboard() {
  const [profiles] = useState<PerfilLaboral[]>(mockProfiles);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Panel de Empresa</h1>
          <p className="text-[#64748B]">Gestiona tus perfiles laborales y analiza el talento disponible</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Nuevo Perfil
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatsCard title="Perfiles Activos" value={profiles.length} icon={<Briefcase className="w-5 h-5 text-[#06B6D4]" />} />
        <StatsCard title="Candidatos Potenciales" value="128" trend={15} icon={<Users className="w-5 h-5 text-[#8B5CF6]" />} />
        <StatsCard title="Habilidades Rastreadas" value="24" icon={<BarChart2 className="w-5 h-5 text-[#06B6D4]" />} />
      </div>

      <SkillsChart />

      <div>
        <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Perfiles Laborales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <JobProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}
