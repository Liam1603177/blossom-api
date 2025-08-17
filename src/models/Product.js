import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    categoria: { type: String, required: true, enum: ["tortas","cookies","almuerzo","cupcake"] },
    descripcion: { type: String, default: "" },
    ingredientes: { type: [String], default: [] },
    precio: { type: Number, required: true, min: 0 },
    imagen: { type: String, required: true }
  },
  { timestamps: true }
);

productSchema.index({ nombre: "text", descripcion: "text" });

export default model("Product", productSchema);
