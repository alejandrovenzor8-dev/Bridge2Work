import { Request, Response } from 'express';

const jobProfiles = [
  {
    id: '1', puesto: 'Frontend Developer', descripcion: 'Desarrollo de interfaces web modernas',
    habilidadesTecnicas: ['React', 'TypeScript', 'CSS', 'Next.js'],
    softSkills: ['Comunicación', 'Trabajo en equipo', 'Proactividad'],
    experienciaAnios: 2, herramientas: ['Git', 'Figma', 'VS Code'],
    salarioMin: 30000, salarioMax: 50000, modalidad: 'híbrido', empresaId: '1',
  },
  {
    id: '2', puesto: 'Data Scientist', descripcion: 'Análisis y modelado de datos complejos',
    habilidadesTecnicas: ['Python', 'SQL', 'Machine Learning', 'TensorFlow'],
    softSkills: ['Pensamiento analítico', 'Resolución de problemas'],
    experienciaAnios: 3, herramientas: ['Jupyter', 'Pandas', 'Sklearn'],
    salarioMin: 40000, salarioMax: 70000, modalidad: 'remoto', empresaId: '2',
  },
  {
    id: '3', puesto: 'DevOps Engineer', descripcion: 'Gestión de infraestructura cloud',
    habilidadesTecnicas: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    softSkills: ['Atención al detalle', 'Comunicación técnica'],
    experienciaAnios: 4, herramientas: ['Terraform', 'Jenkins', 'Prometheus'],
    salarioMin: 50000, salarioMax: 80000, modalidad: 'presencial', empresaId: '3',
  },
  {
    id: '4', puesto: 'Full Stack Developer', descripcion: 'Desarrollo completo de aplicaciones web',
    habilidadesTecnicas: ['Node.js', 'React', 'PostgreSQL', 'GraphQL'],
    softSkills: ['Autonomía', 'Gestión del tiempo'],
    experienciaAnios: 2, herramientas: ['Git', 'Docker', 'Postman'],
    salarioMin: 35000, salarioMax: 60000, modalidad: 'híbrido', empresaId: '1',
  },
];

export const getJobProfiles = (_req: Request, res: Response): void => { res.json(jobProfiles); };

export const createJobProfile = (req: Request, res: Response): void => {
  const profile = { id: String(jobProfiles.length + 1), ...req.body };
  jobProfiles.push(profile);
  res.status(201).json(profile);
};

export const getJobProfileById = (req: Request, res: Response): void => {
  const profile = jobProfiles.find((p) => p.id === req.params.id);
  if (!profile) { res.status(404).json({ error: 'Job profile not found' }); return; }
  res.json(profile);
};

export const updateJobProfile = (req: Request, res: Response): void => {
  const profile = jobProfiles.find((p) => p.id === req.params.id);
  if (!profile) { res.status(404).json({ error: 'Job profile not found' }); return; }
  res.json({ ...profile, ...req.body });
};

export const deleteJobProfile = (req: Request, res: Response): void => {
  const idx = jobProfiles.findIndex((p) => p.id === req.params.id);
  if (idx === -1) { res.status(404).json({ error: 'Job profile not found' }); return; }
  res.json({ message: 'Job profile deleted' });
};
