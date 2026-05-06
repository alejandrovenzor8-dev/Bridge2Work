import { Router } from 'express';
import { getJobProfiles, createJobProfile, getJobProfileById, updateJobProfile, deleteJobProfile } from './jobProfile.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.get('/', getJobProfiles);
router.post('/', authenticate, createJobProfile);
router.get('/:id', getJobProfileById);
router.put('/:id', authenticate, updateJobProfile);
router.delete('/:id', authenticate, deleteJobProfile);

export default router;
