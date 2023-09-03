import { Request, Response } from "express";
import bcrypt from "bcrypt";
import CreateAccount from "../services/accountServices";
import { isEqualPassword } from "../../../middlewares/permissions/isEqualPassword";

async function newAccount(req: Request, res: Response) {
  const { nameData, emailData, passwordData } = req.body;

  const salt = await bcrypt.genSalt(8);

  const hashedPassword = await bcrypt.hash(passwordData, salt);

  await CreateAccount.account({
    nameData,
    emailData,
    hashedPassword,
  });

  return res.status(200).json({ message: "Success!" });
}

export default [isEqualPassword, newAccount];
