import Router from 'express';
import { getUsers, createUser } from '../controller/userController.js';

export const userRouter = Router();

userRouter
    .route('/')
    .get(getUsers)
    .post(createUser)