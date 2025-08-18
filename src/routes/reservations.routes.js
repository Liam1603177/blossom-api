import { Router } from "express";
import { createReservation, listReservations, deleteReservation } from "../controllers/reservations.controller.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";

const router = Router();

// pública (form del sitio)
router.post("/", createReservation);

// protegida (panel admin)
router.get("/", requireAuth, requireAdmin, listReservations);


// Eliminar reserva (solo admin)
router.delete("/:id", requireAuth, requireAdmin, deleteReservation);
