import { Router } from 'express';
import { getCompanies, createCompany, getCompanyById, updateCompany } from './company.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.get('/', getCompanies);
router.post('/', authenticate, createCompany);
router.get('/:id', getCompanyById);
router.put('/:id', authenticate, updateCompany);

export default router;
