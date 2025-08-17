import { Router } from "express";
import { createReservation } from "../controllers/reservations.controller.js";
import { validate } from "../middleware/validate.js";
import { reservationCreateSchema } from "../validation/schemas.js";

const router = Router();

router.post("/", validate(reservationCreateSchema), createReservation);

export default router;
