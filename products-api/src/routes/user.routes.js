import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
const router = Router();
import { authJwt, verifySignup } from "../middlewares/index.js";

router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted], createUser);

export default router;
