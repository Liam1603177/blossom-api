import jwt from "jsonwebtoken";

export function requireAdmin(req,res,next){
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if(!token) return res.status(401).json({ error: "NO_TOKEN" });
  try{
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if(payload.role !== "admin") throw new Error("NO_ADMIN");
    next();
  }catch(e){
    return res.status(401).json({ error: "INVALID_TOKEN" });
  }
}
