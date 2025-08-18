import Reservation from "../models/Reservation.js";

export async function createReservation(req, res) {
  try {
    const { nombre, email, fecha, hora, personas, notas } = req.body;

    if (!nombre || !fecha || !hora || !personas) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const r = await Reservation.create({ nombre, email, fecha, hora, personas, notas });
    return res.status(201).json({ ok: true, reservation: r });
  } catch (err) {
    console.error("createReservation", err);
    return res.status(500).json({ error: "Error creando la reserva" });
  }
}


export async function listReservations(req, res) {
  try {
    const items = await Reservation.find().sort({ createdAt: -1 });
    return res.json({ ok: true, items });
  } catch (err) {
    console.error("listReservations", err);
    return res.status(500).json({ error: "Error listando reservas" });
  }
}

// Eliminar reserva por ID
export async function deleteReservation(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Reservation.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }
    return res.json({ ok: true });
  } catch (err) {
    console.error("deleteReservation", err);
    return res.status(500).json({ error: "Error eliminando reserva" });
  }
}
