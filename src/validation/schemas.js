export const productCreateSchema = z.object({
  nombre: z.string().min(2),
  categoria: z.enum(["tortas","cookies","almuerzo","cupcake"]),
  descripcion: z.string().optional().default(""),
  ingredientes: z.array(z.string()).optional().default([]),
  precio: z.number().nonnegative(),
  imagen: z.string().min(1)
});
export const productUpdateSchema = productCreateSchema.partial();
import { z } from "zod";

export const productQuerySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
  category: z.string().optional(),
  search: z.string().optional(),
  sort: z.string().optional() // ej: "precio:asc" o "createdAt:desc"
});

export const orderCreateSchema = z.object({
  items: z.array(
    z.object({
      productId: z.string().min(1),
      nombre: z.string(),
      precio: z.number().nonnegative(),
      qty: z.number().int().min(1)
    })
  ).min(1),
  total: z.number().nonnegative(),
  cliente: z.object({
    nombre: z.string().min(2),
    metodo: z.enum(["retiro","envio"]),
    horario: z.string().optional().default(""),
    notas: z.string().optional().default("")
  })
});

export const reservationCreateSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  fecha: z.string().min(6),
  hora: z.string().min(3),
  personas: z.number().int().min(1),
  notas: z.string().optional().default("")
});
