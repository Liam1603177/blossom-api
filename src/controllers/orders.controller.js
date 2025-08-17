import Order from "../models/Order.js";

export async function createOrder(req, res) {
  const order = await Order.create(req.body);
  res.status(201).json(order);
}

export async function getOrder(req, res) {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ error: "NOT_FOUND" });
  res.json(order);
}
