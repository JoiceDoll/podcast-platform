import { Request, Response } from "express";
import bcrypt from "bcrypt";
import CreateAccount from "../services/AccountService";
import { isEqualPassword } from "../../../middlewares/permissions/isEqualPassword";

async function newAccount(req: Request, res: Response) {
  const { nameData, emailData, passwordData } = req.body;

  try {
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(passwordData, salt);
    await CreateAccount.store({
      nameData,
      emailData,
      hashedPassword,
    });

    return res.status(200).json({ message: "Success!" });
  } catch (err) {
    return res.status(400).json({ message: "Error" });
  }
}

export default [isEqualPassword, newAccount];
