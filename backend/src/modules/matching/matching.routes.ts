import { Router } from 'express';
import * as matchingController from './matching.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

// Public endpoints for development (remove authentication)
router.get('/job-profile/:id', matchingController.getMatchesForJobProfile);
router.get('/student/:id', matchingController.getMatchesForStudent);
router.post('/calculate', matchingController.calculateMatchScore);
router.get('/stats', matchingController.getMatchingStats);

export default router;
