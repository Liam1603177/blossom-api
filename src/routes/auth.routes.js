import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/login", (req,res)=>{
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
    const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, { expiresIn: "8h" });
    return res.json({ token });
  }
  return res.status(401).json({ error: "INVALID_CREDENTIALS" });
});

export default router;
