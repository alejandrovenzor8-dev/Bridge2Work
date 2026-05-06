import { Users, Building2, GraduationCap, BarChart2 } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { SkillsChart } from '@/components/dashboard/SkillsChart';
import { TrendsChart } from '@/components/dashboard/TrendsChart';
import { mockAnalytics } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">Panel de Administración</h1>
        <p className="text-[#64748B]">Visión general de la plataforma Bridge2Work</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Usuarios" value={mockAnalytics.totalUsers.toLocaleString()} trend={mockAnalytics.monthlyGrowth} icon={<Users className="w-5 h-5 text-[#06B6D4]" />} />
        <StatsCard title="Empresas" value={mockAnalytics.totalCompanies} icon={<Building2 className="w-5 h-5 text-[#8B5CF6]" />} />
        <StatsCard title="Universidades" value={mockAnalytics.totalUniversities} icon={<GraduationCap className="w-5 h-5 text-[#06B6D4]" />} />
        <StatsCard title="Estudiantes" value={mockAnalytics.totalStudents.toLocaleString()} trend={12} icon={<Users className="w-5 h-5 text-[#8B5CF6]" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SkillsChart />
        <TrendsChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><BarChart2 className="w-5 h-5 text-[#06B6D4]" />Estadísticas Clave</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: 'Perfiles laborales creados', value: mockAnalytics.jobProfilesCreated },
              { label: 'Habilidades rastreadas', value: mockAnalytics.skillsTracked },
              { label: 'Activos este mes', value: mockAnalytics.activeThisMonth },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center py-2 border-b border-[#F1F5F9] last:border-0">
                <span className="text-sm text-[#64748B]">{item.label}</span>
                <span className="font-semibold text-[#0F172A]">{item.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Actividad Reciente</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {[
              { action: 'Nueva empresa registrada', detail: 'TechMX Solutions', time: 'hace 2h', type: 'empresa' as const },
              { action: 'Perfil laboral publicado', detail: 'Desarrollador Senior', time: 'hace 3h', type: 'perfil' as const },
              { action: 'Nuevo estudiante', detail: 'Ana García', time: 'hace 5h', type: 'estudiante' as const },
              { action: 'Universidad actualizada', detail: 'TEC Guadalajara', time: 'hace 1d', type: 'universidad' as const },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-[#F1F5F9] last:border-0">
                <Badge variant={item.type === 'empresa' ? 'default' : item.type === 'estudiante' ? 'success' : 'purple'}>
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
    </div>
  );
}
