import express from "express";
const router = express.Router();
import memberController from "./controllers/member.contrtoller";
import uploader from "./libs/utils/uploader";

/** Member */
router
  .post("/member/login", memberController.login)
  .post("/member/signup", memberController.signup)
  .post("/member/logout", memberController.verifyAuth, memberController.logout)
  .get(
    "/member/detail",
    memberController.verifyAuth,
    memberController.getMemberDetail
  )
  .post(
    "/member/update",
    memberController.verifyAuth,
    uploader("members").single("memberImage"),
    memberController.updateMember
  )
  .get("/member/top-users", memberController.getTopUsers);

/** Product */

/** Order */

export default router;
