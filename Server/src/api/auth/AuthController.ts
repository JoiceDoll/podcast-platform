import { Request, Response } from "express";
import AuthService from "../podverse/services/AuthService";
import jwt from "jsonwebtoken";

class AuthController {
  async auth(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({
        message: "You need to provide email or password",
      });
    }
    const user = await AuthService.authenticate({ email });

    const secret = process.env.SECRET as string;

    const token = jwt.sign({ user }, secret, {
      expiresIn: "5h",
    });

    return res.status(200).json({
      user,
      token,
    });
  }
}

export default new AuthController();
