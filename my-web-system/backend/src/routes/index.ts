import { Router } from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/index';
import { createWorkLog, getWorkLogs } from '../controllers/index';

const router = Router();

// User routes
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// WorkLog routes
router.post('/worklogs', createWorkLog);
router.get('/worklogs', getWorkLogs);

export default router;