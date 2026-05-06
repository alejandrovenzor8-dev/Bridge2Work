import { Request, Response } from 'express';

export const getOverview = (_req: Request, res: Response): void => {
  res.json({
    totalUsers: 1240,
    totalCompanies: 87,
    totalUniversities: 23,
    totalStudents: 1130,
    jobProfilesCreated: 342,
    skillsTracked: 156,
    monthlyGrowth: 12.5,
    activeThisMonth: 890,
  });
};

export const getSkillsDemand = (_req: Request, res: Response): void => {
  res.json([
    { skill: 'React', demanda: 95, mes: 'Ene' },
    { skill: 'Python', demanda: 90, mes: 'Ene' },
    { skill: 'TypeScript', demanda: 88, mes: 'Ene' },
    { skill: 'Node.js', demanda: 85, mes: 'Ene' },
    { skill: 'SQL', demanda: 82, mes: 'Ene' },
    { skill: 'Docker', demanda: 78, mes: 'Ene' },
    { skill: 'AWS', demanda: 75, mes: 'Ene' },
    { skill: 'ML', demanda: 70, mes: 'Ene' },
  ]);
};

export const getCareerTrends = (_req: Request, res: Response): void => {
  res.json([
    { month: 'Ene', sistemas: 65, datos: 45, software: 70, industrial: 40 },
    { month: 'Feb', sistemas: 68, datos: 52, software: 72, industrial: 42 },
    { month: 'Mar', sistemas: 72, datos: 58, software: 75, industrial: 45 },
    { month: 'Abr', sistemas: 75, datos: 65, software: 78, industrial: 48 },
    { month: 'May', sistemas: 78, datos: 70, software: 80, industrial: 50 },
    { month: 'Jun', sistemas: 82, datos: 78, software: 85, industrial: 52 },
  ]);
};
