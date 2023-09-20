import app from "../server";
import { Router } from "express";
import newAccount from "../api/podVerseServer/controllers/CreateAccountController";
import { isEqualPassword } from "../middlewares/permissions/isEqualPassword";
import verifyAccount from "../api/podVerseServer/controllers/FindAccountController";

const registerRouter = Router();
const selectRouter = Router();
app.use(registerRouter);
app.use(selectRouter);

registerRouter.post("/register", isEqualPassword, newAccount);
selectRouter.get("/auth", verifyAccount);

export default {registerRouter, selectRouter}
