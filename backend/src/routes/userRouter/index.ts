import { Router } from 'express';

import * as userController from '../../controllers/usersController/users.controller';
import validateToken from '../../middlewares/validateToken.midleware';

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', validateToken, userController.getUserById);

userRouter.post('/', userController.createUser);
userRouter.post('/login', userController.userLogin);

userRouter.delete('/:id', validateToken, userController.deleteUser);

export default userRouter;
