import { Router } from 'express';
import * as analyticsController from './analytics.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

// Public endpoints (no authentication required for development)
router.get('/global', analyticsController.getGlobalAnalytics);
router.get('/industries', analyticsController.getIndustryAnalytics);
router.get('/skills', analyticsController.getSkillTrends);
router.get('/trends', analyticsController.getMarketTrends);
router.get('/regions', analyticsController.getRegionalAnalytics);
router.get('/careers', analyticsController.getCareerAnalytics);
router.get('/insights', analyticsController.getMarketInsights);

export default router;
