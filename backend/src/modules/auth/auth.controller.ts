import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

// In-memory user store for demo purposes (replace with Prisma in production)
const users: Array<{
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
}> = [
  {
    id: '1',
    name: 'Admin Bridge2Work',
    email: 'admin@bridge2work.com',
    password: bcrypt.hashSync('admin123', 10),
    role: 'ADMIN',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'TechCorp HR',
    email: 'empresa@techcorp.com',
    password: bcrypt.hashSync('empresa123', 10),
    role: 'EMPRESA',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Universidad Demo',
    email: 'universidad@demo.com',
    password: bcrypt.hashSync('uni123', 10),
    role: 'UNIVERSIDAD',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Juan Estudiante',
    email: 'estudiante@demo.com',
    password: bcrypt.hashSync('est123', 10),
    role: 'ESTUDIANTE',
    createdAt: new Date().toISOString(),
  },
];

const getJwtSecret = (): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET environment variable is required');
  return secret;
};

const generateToken = (user: { id: string; email: string; role: string }) =>
  jwt.sign({ id: user.id, email: user.email, role: user.role }, getJwtSecret(), {
    expiresIn: '7d',
  });

export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ error: 'Name, email and password are required' });
    return;
  }
  if (users.find((u) => u.email === email)) {
    res.status(409).json({ error: 'Email already registered' });
    return;
  }
  const hashed = await bcrypt.hash(password, 10);
  const newUser = {
    id: String(users.length + 1),
    name,
    email,
    password: hashed,
    role: role?.toUpperCase() || 'ESTUDIANTE',
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  const token = generateToken(newUser);
  res.status(201).json({ token, user: { id: newUser.id, name, email, role: newUser.role } });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' });
    return;
  }
  const user = users.find((u) => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }
  const token = generateToken(user);
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
};

export const me = async (req: Request & { user?: { id: string } }, res: Response): Promise<void> => {
  const user = users.find((u) => u.id === req.user?.id);
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json({ id: user.id, name: user.name, email: user.email, role: user.role, createdAt: user.createdAt });
};
