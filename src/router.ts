import express from "express";
const router = express.Router();
import memberController from "./controllers/member.contrtoller"


router
    .post('/login', memberController.login)
    .post('/signup', memberController.signup);

export default router;