export type Role = 'ADMIN' | 'EMPRESA' | 'UNIVERSIDAD' | 'ESTUDIANTE';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface Empresa {
  id: string;
  nombre: string;
  industria: string;
  tamano: string;
  ubicacion: string;
  website?: string;
  descripcion?: string;
  userId: string;
}

export interface PerfilLaboral {
  id: string;
  puesto: string;
  descripcion?: string;
  habilidadesTecnicas: string[];
  softSkills: string[];
  experienciaAnios: number;
  herramientas: string[];
  salarioMin?: number;
  salarioMax?: number;
  modalidad: string;
  empresaId: string;
  createdAt: string;
}

export interface Universidad {
  id: string;
  nombre: string;
  ubicacion: string;
  carreras: string[];
  website?: string;
  userId: string;
}

export interface Estudiante {
  id: string;
  intereses: string[];
  habilidades: string[];
  carreraInteres?: string;
  nivelEducativo?: string;
  userId: string;
}

export interface Skill {
  id: string;
  nombre: string;
  categoria: string;
  demanda: number;
  crecimiento: number;
}

export interface AnalyticsOverview {
  totalUsers: number;
  totalCompanies: number;
  totalUniversities: number;
  totalStudents: number;
  jobProfilesCreated: number;
  skillsTracked: number;
  monthlyGrowth: number;
  activeThisMonth: number;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

export interface CareerTrend {
  month: string;
  sistemas: number;
  datos: number;
  software: number;
  industrial: number;
}
