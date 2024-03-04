import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller.js";
import { verifySignup } from "../middlewares/index.js";

const router = Router();

router.post("/signup", [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], signup);
router.post("/signin", signin);

export default router;
