import { Skill, ChartDataPoint, CareerTrend, AnalyticsOverview } from '@/types';

export const mockSkills: Skill[] = [
  { id: '1', nombre: 'Python', categoria: 'Programación', demanda: 95, crecimiento: 12 },
  { id: '2', nombre: 'Machine Learning', categoria: 'IA/ML', demanda: 88, crecimiento: 24 },
  { id: '3', nombre: 'React', categoria: 'Frontend', demanda: 85, crecimiento: 8 },
  { id: '4', nombre: 'Node.js', categoria: 'Backend', demanda: 80, crecimiento: 6 },
  { id: '5', nombre: 'SQL', categoria: 'Base de Datos', demanda: 78, crecimiento: 4 },
  { id: '6', nombre: 'Cloud (AWS/GCP)', categoria: 'Infraestructura', demanda: 82, crecimiento: 18 },
  { id: '7', nombre: 'Docker', categoria: 'DevOps', demanda: 75, crecimiento: 15 },
  { id: '8', nombre: 'TypeScript', categoria: 'Programación', demanda: 79, crecimiento: 20 },
];

export const mockCareerTrends: CareerTrend[] = [
  { month: 'Ene', sistemas: 40, datos: 30, software: 50, industrial: 25 },
  { month: 'Feb', sistemas: 42, datos: 35, software: 52, industrial: 26 },
  { month: 'Mar', sistemas: 45, datos: 40, software: 55, industrial: 28 },
  { month: 'Abr', sistemas: 43, datos: 45, software: 58, industrial: 27 },
  { month: 'May', sistemas: 48, datos: 50, software: 60, industrial: 30 },
  { month: 'Jun', sistemas: 50, datos: 55, software: 62, industrial: 32 },
  { month: 'Jul', sistemas: 52, datos: 60, software: 65, industrial: 33 },
];

export const mockSkillsDemand: ChartDataPoint[] = mockSkills.map(s => ({
  name: s.nombre,
  value: s.demanda,
}));

export const mockAnalytics: AnalyticsOverview = {
  totalUsers: 1248,
  totalCompanies: 87,
  totalUniversities: 12,
  totalStudents: 1149,
  jobProfilesCreated: 342,
  skillsTracked: 215,
  monthlyGrowth: 18,
  activeThisMonth: 456,
};

export const mockIndustriesDemand: ChartDataPoint[] = [
  { name: 'Tecnología', value: 38 },
  { name: 'Finanzas', value: 22 },
  { name: 'Salud', value: 18 },
  { name: 'Manufactura', value: 12 },
  { name: 'Educación', value: 10 },
];
