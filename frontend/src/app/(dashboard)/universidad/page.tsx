import { GraduationCap, Users, BarChart2, TrendingUp } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { TrendsChart } from '@/components/dashboard/TrendsChart';
import { SkillsChart } from '@/components/dashboard/SkillsChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const carreras = [
  { nombre: 'Ingeniería en Sistemas', estudiantes: 320, empleabilidad: 92 },
  { nombre: 'Ciencia de Datos', estudiantes: 185, empleabilidad: 96 },
  { nombre: 'Ingeniería en Software', estudiantes: 410, empleabilidad: 94 },
  { nombre: 'Ingeniería Industrial', estudiantes: 290, empleabilidad: 88 },
  { nombre: 'Administración de TI', estudiantes: 150, empleabilidad: 85 },
];

export default function UniversidadDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">Panel de Universidad</h1>
        <p className="text-[#64748B]">Monitorea tendencias del mercado laboral y adapta tus programas</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Estudiantes" value="1,355" trend={8} icon={<Users className="w-5 h-5 text-[#06B6D4]" />} />
        <StatsCard title="Carreras Activas" value={carreras.length} icon={<GraduationCap className="w-5 h-5 text-[#8B5CF6]" />} />
        <StatsCard title="Tasa de Empleabilidad" value="91%" trend={3} icon={<TrendingUp className="w-5 h-5 text-[#06B6D4]" />} />
        <StatsCard title="Empresas Aliadas" value="23" icon={<BarChart2 className="w-5 h-5 text-[#8B5CF6]" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendsChart />
        <SkillsChart />
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
                  <Badge variant="secondary">{c.estudiantes} alumnos</Badge>
                </div>
                <span className="text-sm font-semibold text-[#06B6D4]">{c.empleabilidad}%</span>
              </div>
              <Progress value={c.empleabilidad} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
