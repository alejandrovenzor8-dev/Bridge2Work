import { Router } from 'express';
import { getUsers, getUserById, updateUser, deleteUser } from './user.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';

const router = Router();

router.get('/', authenticate, authorize('ADMIN'), getUsers);
router.get('/:id', authenticate, getUserById);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, authorize('ADMIN'), deleteUser);

export default router;
