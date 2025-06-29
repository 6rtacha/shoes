import express from "express";
const router = express.Router();
import memberController from "./controllers/member.contrtoller";
import uploader from "./libs/utils/uploader";
import productController from "./controllers/product.controller";
import orderController from "./controllers/order.controller";

/** Member */
router
  .get("/member/restaurant", memberController.getAdmin)
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
router.get("/product/all", productController.getProducts);
router.get(
  "/product/:id",
  memberController.retrieveAuth,
  productController.getProduct
);
/** Order */
router.post(
  "/order/create",
  memberController.verifyAuth,
  orderController.createOrder
);
router.get(
  "/order/all",
  memberController.verifyAuth,
  orderController.getMyOrders
);
router.post(
  "/order/update",
  memberController.verifyAuth,
  orderController.updateOrder
);

export default router;
