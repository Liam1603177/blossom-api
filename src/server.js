import "dotenv/config";
import { connectDB } from "./config/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ Falta MONGO_URI en .env");
  process.exit(1);
}

await connectDB(MONGO_URI);
app.listen(PORT, () => console.log(`🚀 API en http://localhost:${PORT}`));
