import { Request, Response } from 'express';

const skills = [
  { id: '1', nombre: 'React', categoria: 'Frontend', demanda: 95, crecimiento: 12.5 },
  { id: '2', nombre: 'Python', categoria: 'Backend', demanda: 90, crecimiento: 15.3 },
  { id: '3', nombre: 'TypeScript', categoria: 'Frontend', demanda: 88, crecimiento: 20.1 },
  { id: '4', nombre: 'Node.js', categoria: 'Backend', demanda: 85, crecimiento: 8.7 },
  { id: '5', nombre: 'SQL', categoria: 'Database', demanda: 82, crecimiento: 5.2 },
  { id: '6', nombre: 'Docker', categoria: 'DevOps', demanda: 78, crecimiento: 18.4 },
  { id: '7', nombre: 'AWS', categoria: 'Cloud', demanda: 75, crecimiento: 22.0 },
  { id: '8', nombre: 'Machine Learning', categoria: 'AI/ML', demanda: 70, crecimiento: 30.5 },
  { id: '9', nombre: 'Next.js', categoria: 'Frontend', demanda: 68, crecimiento: 35.2 },
  { id: '10', nombre: 'GraphQL', categoria: 'API', demanda: 65, crecimiento: 14.8 },
  { id: '11', nombre: 'Kubernetes', categoria: 'DevOps', demanda: 62, crecimiento: 25.0 },
  { id: '12', nombre: 'TensorFlow', categoria: 'AI/ML', demanda: 58, crecimiento: 28.3 },
];

export const getSkills = (_req: Request, res: Response): void => { res.json(skills); };

export const getTrendingSkills = (_req: Request, res: Response): void => {
  const trending = [...skills].sort((a, b) => b.crecimiento - a.crecimiento).slice(0, 5);
  res.json(trending);
};
