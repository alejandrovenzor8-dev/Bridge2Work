import { Request, Response } from 'express';

const companies = [
  { id: '1', nombre: 'TechCorp', industria: 'Tecnología', tamano: 'Grande', ubicacion: 'CDMX', website: 'techcorp.com', descripcion: 'Empresa líder en soluciones tecnológicas', userId: '2' },
  { id: '2', nombre: 'DataMind', industria: 'Data & AI', tamano: 'Mediana', ubicacion: 'Guadalajara', website: 'datamind.io', descripcion: 'Especialistas en inteligencia artificial y datos', userId: '3' },
  { id: '3', nombre: 'CloudSystems', industria: 'Cloud Computing', tamano: 'Grande', ubicacion: 'Monterrey', website: 'cloudsystems.mx', descripcion: 'Infraestructura cloud de primer nivel', userId: '4' },
  { id: '4', nombre: 'InnovateLab', industria: 'Startup', tamano: 'Pequeña', ubicacion: 'CDMX', website: 'innovatelab.mx', descripcion: 'Laboratorio de innovación tecnológica', userId: '5' },
  { id: '5', nombre: 'AIVentures', industria: 'Venture Capital', tamano: 'Pequeña', ubicacion: 'Remoto', website: 'aiventures.vc', descripcion: 'Invirtiendo en el futuro de la IA', userId: '6' },
];

export const getCompanies = (_req: Request, res: Response): void => { res.json(companies); };

export const createCompany = (req: Request, res: Response): void => {
  const company = { id: String(companies.length + 1), ...req.body, userId: '1' };
  companies.push(company);
  res.status(201).json(company);
};

export const getCompanyById = (req: Request, res: Response): void => {
  const company = companies.find((c) => c.id === req.params.id);
  if (!company) { res.status(404).json({ error: 'Company not found' }); return; }
  res.json(company);
};

export const updateCompany = (req: Request, res: Response): void => {
  const company = companies.find((c) => c.id === req.params.id);
  if (!company) { res.status(404).json({ error: 'Company not found' }); return; }
  res.json({ ...company, ...req.body });
};
