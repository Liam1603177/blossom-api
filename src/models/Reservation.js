import { Schema, model } from "mongoose";

const reservationSchema = new Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    fecha: { type: String, required: true },   // dd/mm/aaaa (MVP)
    hora: { type: String, required: true },    // hh:mm
    personas: { type: Number, required: true, min: 1 },
    notas: { type: String, default: "" },
    estado: { type: String, enum: ["pendiente","confirmada","cancelada"], default: "pendiente" }
  },
  { timestamps: true }
);

export default model("Reservation", reservationSchema);
