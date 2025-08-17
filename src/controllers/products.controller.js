export async function createProduct(req,res){
  const p = await Product.create(req.body);
  res.status(201).json(p);
}

export async function updateProduct(req,res){
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new:true });
  if(!p) return res.status(404).json({ error: "NOT_FOUND" });
  res.json(p);
}

export async function deleteProduct(req,res){
  const ok = await Product.findByIdAndDelete(req.params.id);
  if(!ok) return res.status(404).json({ error: "NOT_FOUND" });
  res.json({ status:"deleted" });
}
import Product from "../models/Product.js";
import { buildPagination } from "../utils/paginate.js";

export async function listProducts(req, res) {
  const { page, limit, category, search, sort } = req.query;
  const { skip, limit: l, page: p } = buildPagination({ page, limit });

  const filter = {};
  if (category) filter.categoria = category;
  if (search) filter.$text = { $search: search };

  let sortObj = { createdAt: -1 };
  if (sort) {
    const [field, dir] = sort.split(":");
    sortObj = { [field]: dir === "asc" ? 1 : -1 };
  }

  const [items, total] = await Promise.all([
    Product.find(filter).sort(sortObj).skip(skip).limit(l),
    Product.countDocuments(filter)
  ]);

  res.json({
    page: p,
    limit: l,
    total,
    totalPages: Math.ceil(total / l),
    items
  });
}

export async function getProduct(req, res) {
  const item = await Product.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "NOT_FOUND" });
  res.json(item);
}
