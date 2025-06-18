import express from 'express'
import { createUser, getUser } from '../controllers/userController';

const useRouter = express.Router();

// Defining users routes for defined controllers
useRouter.post('/',createUser);
useRouter.get('/:id',getUser);

export {useRouter};