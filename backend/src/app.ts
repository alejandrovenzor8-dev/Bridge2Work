import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/users/user.routes';
import companyRoutes from './modules/companies/company.routes';
import jobProfileRoutes from './modules/job-profiles/jobProfile.routes';
import skillRoutes from './modules/skills/skill.routes';
import analyticsRoutes from './modules/analytics/analytics.routes';
import matchingRoutes from './modules/matching/matching.routes';
import recommendationsRoutes from './modules/recommendations/recommendations.routes';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many authentication attempts, please try again later.' },
});

app.get('/health', (_req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/users', apiLimiter, userRoutes);
app.use('/api/companies', apiLimiter, companyRoutes);
app.use('/api/job-profiles', apiLimiter, jobProfileRoutes);
app.use('/api/skills', apiLimiter, skillRoutes);
app.use('/api/analytics', apiLimiter, analyticsRoutes);
app.use('/api/matching', apiLimiter, matchingRoutes);
app.use('/api/recommendations', apiLimiter, recommendationsRoutes);

app.use((_req, res) => res.status(404).json({ error: 'Route not found' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Bridge2Work API running on port ${PORT}`));

export default app;
