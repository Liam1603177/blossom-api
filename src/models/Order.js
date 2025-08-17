import { Schema, model } from "mongoose";

const orderItem = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    nombre: String,
    precio: Number,
    qty: { type: Number, min: 1 }
  },
  { _id: false }
);

const orderSchema = new Schema(
  {
    items: { type: [orderItem], required: true },
    total: { type: Number, required: true },
    cliente: {
      nombre: { type: String, required: true },
      metodo: { type: String, enum: ["retiro", "envio"], default: "retiro" },
      horario: { type: String, default: "" },
      notas: { type: String, default: "" }
    },
    estado: { type: String, enum: ["pendiente","confirmada","entregada","cancelada"], default: "pendiente" }
  },
  { timestamps: true }
);

export default model("Order", orderSchema);
