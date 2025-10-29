import { register, login } from "../controller/userController.js";
import express from 'express'

const userRoute = express.Router();

userRoute.post('/signup', register);
userRoute.post('/login', login);

export default userRoute;