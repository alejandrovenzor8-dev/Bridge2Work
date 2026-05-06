import { Router } from 'express';
import { getOverview, getSkillsDemand, getCareerTrends } from './analytics.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.get('/overview', authenticate, getOverview);
router.get('/skills-demand', getSkillsDemand);
router.get('/career-trends', getCareerTrends);

export default router;
