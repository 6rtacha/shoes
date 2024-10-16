import express from "express";
const router = express.Router();
import memberController from "./controllers/member.contrtoller";

/** Member */
router
  .post("/member/login", memberController.login)
  .post("/member/signup", memberController.signup)
  .get("/member/detail", memberController.verifyAuth);

/** Product */

/** Order */

export default router;
