import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  

  if (!authorization) {
    res.status(401).json({ message: "Unauthorized" });
  }

  const token = authorization?.replace("Bearer", "").trim() as string;
  const secret = process.env.SECRET as string;

  try {
    const decoded = jwt.verify(token, secret);
    res.locals.userData = decoded;
  } catch (err) {
    res.sendStatus(401).json({ message: "Token inválido" });
  }
  return next();
}