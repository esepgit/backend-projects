import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById,
} from "../controllers/products.controller.js";
const router = Router();

import { authJwt } from "../middlewares/index.js";

router.post("/", [authJwt.verifyToken, authJwt.isModerator], createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], updateProductById);
router.delete("/:id",[authJwt.verifyToken, authJwt.isAdmin], deleteProductById);

export default router;
