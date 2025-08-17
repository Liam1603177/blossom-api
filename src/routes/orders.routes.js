import { Router } from "express";
import { createOrder, getOrder } from "../controllers/orders.controller.js";
import { validate } from "../middleware/validate.js";
import { orderCreateSchema } from "../validation/schemas.js";

const router = Router();

router.post("/", validate(orderCreateSchema), createOrder);
router.get("/:id", getOrder);

export default router;
