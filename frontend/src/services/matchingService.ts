import { api } from './api';
import type { MatchScore, CareerRecommendation, SkillRecommendation } from '@/types';

export const matchingService = {
  // Matching Empresa-Estudiante
  getMatchesForJobProfile: (jobProfileId: string) =>
    api.get<MatchScore[]>(`/matching/job-profile/${jobProfileId}`),

  getMatchesForStudent: (studentId: string) =>
    api.get<MatchScore[]>(`/matching/student/${studentId}`),

  // Recomendaciones para Estudiantes
  getCareerRecommendations: (studentId: string) =>
    api.get<CareerRecommendation[]>(`/recommendations/careers/${studentId}`),

  getSkillRecommendations: (studentId: string) =>
    api.get<SkillRecommendation[]>(`/recommendations/skills/${studentId}`),
};
