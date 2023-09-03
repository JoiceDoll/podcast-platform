import app from "../server";
import { Router } from "express";
import newAccount from "../api/podVerseServer/controllers/CreateAccountController";
import { isEqualPassword } from "../middlewares/permissions/isEqualPassword";

const registerRouter = Router();
app.use(registerRouter);
registerRouter.post("/register", isEqualPassword, newAccount);

export default registerRouter;
