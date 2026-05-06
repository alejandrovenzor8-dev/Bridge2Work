import { Router } from 'express';
import { getSkills, getTrendingSkills } from './skill.controller';

const router = Router();

router.get('/', getSkills);
router.get('/trending', getTrendingSkills);

export default router;
