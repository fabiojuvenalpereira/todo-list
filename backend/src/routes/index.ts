import { Router } from 'express';

import taskListRouter from './taskListRouter';
import userRouter from './userRouter';

const router = Router();

router.use('/user', userRouter);
router.use('/tasks', taskListRouter);

export default router;
