import Reservation from "../models/Reservation.js";

export async function createReservation(req, res) {
  const r = await Reservation.create(req.body);
  res.status(201).json(r);
}
