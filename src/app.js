import express from "express";
import morgan from "morgan";
import cors from "cors";
import uploadRouter from "./routes/upload.routes.js";
import authRouter from "./routes/auth.routes.js";
import productsRouter from "./routes/products.routes.js";
import ordersRouter from "./routes/orders.routes.js";
import reservationsRouter from "./routes/reservations.routes.js";
import { errorHandler } from "./middleware/error.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// CORS (Vercel front)
const origin = process.env.CORS_ORIGIN?.split(",").map(s => s.trim());
app.use(cors({ origin, credentials: true }));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.use("/api/upload", uploadRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/reservations", reservationsRouter);

app.use(errorHandler);
export default app;
