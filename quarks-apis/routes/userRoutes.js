import express from 'express'
import { createUser, getUser } from '../controllers/userController';

const useRouter = express.Router();

useRouter.post('/',createUser);
useRouter.get('/:id',getUser);

export {useRouter};