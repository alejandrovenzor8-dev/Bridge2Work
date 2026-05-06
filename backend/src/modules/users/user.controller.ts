import { Request, Response } from 'express';
import { AuthRequest } from '../../middleware/auth.middleware';

const users = [
  { id: '1', name: 'Admin Bridge2Work', email: 'admin@bridge2work.com', role: 'ADMIN', createdAt: '2024-01-01' },
  { id: '2', name: 'TechCorp HR', email: 'empresa@techcorp.com', role: 'EMPRESA', createdAt: '2024-01-05' },
  { id: '3', name: 'Universidad Demo', email: 'universidad@demo.com', role: 'UNIVERSIDAD', createdAt: '2024-01-10' },
  { id: '4', name: 'Juan Estudiante', email: 'estudiante@demo.com', role: 'ESTUDIANTE', createdAt: '2024-01-15' },
  { id: '5', name: 'Maria Lopez', email: 'maria@demo.com', role: 'ESTUDIANTE', createdAt: '2024-01-20' },
];

export const getUsers = (_req: Request, res: Response): void => {
  res.json(users.map((u) => ({ id: u.id, name: u.name, email: u.email, role: u.role, createdAt: u.createdAt })));
};

export const getUserById = (req: Request, res: Response): void => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) { res.status(404).json({ error: 'User not found' }); return; }
  res.json(user);
};

export const updateUser = (req: AuthRequest, res: Response): void => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) { res.status(404).json({ error: 'User not found' }); return; }
  const updated = { ...user, ...req.body };
  res.json(updated);
};

export const deleteUser = (req: Request, res: Response): void => {
  const idx = users.findIndex((u) => u.id === req.params.id);
  if (idx === -1) { res.status(404).json({ error: 'User not found' }); return; }
  res.json({ message: 'User deleted' });
};
