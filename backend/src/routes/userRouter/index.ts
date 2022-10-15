import { Router } from 'express';

import * as userController from '../../controllers/usersController/users.controller';

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);

userRouter.post('/', userController.createUser);
userRouter.post('/login', userController.userLogin);

userRouter.delete('/:id', userController.deleteUser);

export default userRouter;
