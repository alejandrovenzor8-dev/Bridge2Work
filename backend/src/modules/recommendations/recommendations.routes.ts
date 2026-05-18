import { Router } from 'express';
import * as recommendationsController from './recommendations.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

// Public endpoints for development (remove authentication)
router.get('/careers/:studentId', recommendationsController.getCareerRecommendations);
router.get('/skills/:studentId', recommendationsController.getSkillRecommendations);
router.get('/learning-path/:studentId', recommendationsController.getLearningPath);
router.post('/generate', recommendationsController.generateRecommendations);

export default router;
