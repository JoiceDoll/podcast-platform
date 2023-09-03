import { Request, Response, NextFunction } from "express";

export const isEqualPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { passwordData, confirmPassword } = req.body;
  if (!passwordData) {
    throw new Error("Informe uma senha!");
  } else if (passwordData !== confirmPassword) {
    throw new Error("As senhas informadas não são iguais!");
  } else {
    next();
  }
};
