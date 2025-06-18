import express from 'express'
import { registerUser, getUser } from '../controllers/userController.js';

const useRouter = express.Router();

// Defining users routes for defined controllers
useRouter.post('/register',registerUser);
useRouter.get('/:id',getUser);

export {useRouter};