import { Router } from "express";
import multer from "multer";
import cloudinary from "../services/cloudinary.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", requireAdmin, upload.single("file"), async (req,res)=>{
  const file = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
  const r = await cloudinary.uploader.upload(file, { folder: "blossom" });
  res.json({ url: r.secure_url });
});

export default router;
