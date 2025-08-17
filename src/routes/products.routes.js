import { Router } from "express";
import { listProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js";
import { validate } from "../middleware/validate.js";
import { productCreateSchema, productUpdateSchema, productQuerySchema } from "../validation/schemas.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();


router.get("/", validate(productQuerySchema,"query"), listProducts);
router.get("/:id", getProduct);
router.post("/", requireAdmin, validate(productCreateSchema), createProduct);
router.put("/:id", requireAdmin, validate(productUpdateSchema), updateProduct);
router.delete("/:id", requireAdmin, deleteProduct);

export default router;
