import { api } from './api';
import type { Empresa, PerfilLaboral, CompanyAnalytics, MatchScore } from '@/types';

export const companyService = {
  // Empresas
  getCompany: (id: string) => api.get<Empresa>(`/companies/${id}`),
  
  createCompany: (data: Partial<Empresa>) => api.post<Empresa>('/companies', data),
  
  updateCompany: (id: string, data: Partial<Empresa>) =>
    api.put<Empresa>(`/companies/${id}`, data),
  
  deleteCompany: (id: string) => api.delete(`/companies/${id}`),

  // Perfiles Laborales
  getJobProfiles: (empresaId: string) =>
    api.get<PerfilLaboral[]>(`/companies/${empresaId}/job-profiles`),
  
  getJobProfile: (id: string) => api.get<PerfilLaboral>(`/job-profiles/${id}`),
  
  createJobProfile: (data: Partial<PerfilLaboral>) =>
    api.post<PerfilLaboral>('/job-profiles', data),
  
  updateJobProfile: (id: string, data: Partial<PerfilLaboral>) =>
    api.put<PerfilLaboral>(`/job-profiles/${id}`, data),
  
  deleteJobProfile: (id: string) => api.delete(`/job-profiles/${id}`),

  // Analytics
  getCompanyAnalytics: (empresaId: string) =>
    api.get<CompanyAnalytics>(`/companies/${empresaId}/analytics`),

  // Matching
  getMatches: (perfilLaboralId: string) =>
    api.get<MatchScore[]>(`/job-profiles/${perfilLaboralId}/matches`),
};
