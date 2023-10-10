import { Request, Response } from "express";
import UserService from "../services/UserService";
class UserController {
  async store(req: Request, res: Response) {
    const { name, email, password, confirmPassword } = req.body;
    try {
      const result = await UserService.store({ name, email, password });
      return res.status(200).json({ result });
    } catch (err) {
      return res.status(400).json("Error");
    }
  }
}

export default new UserController();
