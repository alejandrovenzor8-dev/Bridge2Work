'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Target, BookOpen, Briefcase, TrendingUp, ArrowRight, User, Lightbulb, Map } from 'lucide-react';
import { MetricCard } from '@/components/shared/MetricCard';
import { BarChart } from '@/components/shared/Charts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const recommendations = [
  { carrera: 'Ciencia de Datos', match: 94, habilidades: ['Python', 'SQL', 'Estadística'], demanda: 'Alta' },
  { carrera: 'Ingeniería en Software', match: 88, habilidades: ['React', 'Node.js', 'TypeScript'], demanda: 'Alta' },
  { carrera: 'DevOps/Cloud', match: 76, habilidades: ['Docker', 'AWS', 'Linux'], demanda: 'Media' },
];

const skillsData = [
  { name: 'React', value: 85 },
  { name: 'Python', value: 70 },
  { name: 'Git', value: 90 },
  { name: 'SQL', value: 60 },
];

export default function EstudianteDashboard() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Mi Panel</h1>
          <p className="text-[#64748B]">Descubre tu camino profesional ideal</p>
        </div>
        <Link href="/estudiante/perfil">
          <Button className="gap-2">
            <User className="w-4 h-4" /> Mi Perfil
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Compatibilidad"
          value="86%"
          icon={Target}
          color="cyan"
          change={5}
          trend="up"
          description="Con el mercado laboral"
        />
        <MetricCard
          title="Skills Desarrolladas"
          value={12}
          icon={BookOpen}
          color="purple"
          description="Habilidades mapeadas"
        />
        <MetricCard
          title="Oportunidades"
          value={34}
          icon={Briefcase}
          color="green"
          change={22}
          trend="up"
          description="Posiciones disponibles"
        />
        <MetricCard
          title="Progreso"
          value="67%"
          icon={TrendingUp}
          color="orange"
          description="De tu roadmap"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Link href="/estudiante/perfil" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#06B6D4]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                <User className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#06B6D4] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Mi Perfil</h3>
            <p className="text-sm text-[#64748B]">Actualiza tus habilidades e intereses</p>
          </div>
        </Link>

        <Link href="/estudiante/recomendaciones" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#8B5CF6]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#8B5CF6] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Recomendaciones IA</h3>
            <p className="text-sm text-[#64748B]">Carreras y skills sugeridas</p>
          </div>
        </Link>

        <Link href="/estudiante/roadmap" className="block group">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-lg transition-all hover:border-[#10B981]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                <Map className="w-6 h-6 text-[#10B981]" />
              </div>
              <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#10B981] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Mi Roadmap</h3>
            <p className="text-sm text-[#64748B]">Ruta de aprendizaje personalizada</p>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Carreras Recomendadas</CardTitle>
              <Link href="/estudiante/recomendaciones">
                <Button variant="ghost" size="sm">Ver todas</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((r) => (
              <div key={r.carrera} className="p-4 border border-[#E2E8F0] rounded-lg space-y-3 hover:border-[#06B6D4] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#0F172A]">{r.carrera}</span>
                  <div className="flex items-center gap-2">
                    <Badge
                      className={r.demanda === 'Alta' ? 'bg-[#10B981]' : 'bg-[#F59E0B]'}
                    >
                      {r.demanda} demanda
                    </Badge>
                    <span className="text-[#06B6D4] font-bold">{r.match}%</span>
                  </div>
                </div>
                <Progress value={r.match} />
                <div className="flex flex-wrap gap-1">
                  {r.habilidades.map(h => (
                    <Badge key={h} variant="outline" className="text-xs">{h}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
            Mis Habilidades
          </h3>
          <p className="text-sm text-[#64748B] mb-4">
            Nivel de dominio de tus skills principales
          </p>
          <BarChart data={skillsData} height={300} />
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#8B5CF6]/5 rounded-lg border border-[#E2E8F0] p-8">
        <div className="flex items-start justify-between">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              ¿Listo para crecer profesionalmente?
            </h3>
            <p className="text-[#64748B] mb-4">
              Completa tu roadmap de aprendizaje y descubre las oportunidades que te esperan 
              en el mercado laboral. Nuestro sistema de IA te guiará paso a paso.
            </p>
            <Link href="/estudiante/roadmap">
              <Button>Ver Mi Roadmap</Button>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">67%</div>
                <div className="text-xs">Completado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
