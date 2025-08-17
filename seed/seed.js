import "dotenv/config";
import { connectDB } from "../src/config/db.js";
import Product from "../src/models/Product.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  await connectDB(process.env.MONGO_URI);
  const file = await fs.readFile(path.join(__dirname, "products.json"), "utf8");
  const data = JSON.parse(file);
  // Unir todos los productos de todas las categorías en un solo array
  const items = Object.values(data).flat();
  await Product.deleteMany({});
  await Product.insertMany(items);
  console.log(`✅ Cargados ${items.length} productos`);
  process.exit(0);
}
run().catch(e => { console.error(e); process.exit(1); });
