import app from "../app";
import { Router } from "express";
import newAccount from "../api/podVerseServer/controllers/CreateAccountController";
import { isEqualPassword } from "../middlewares/permissions/isEqualPassword";

const routers = Router();

routers.post("/api/podverse/register", isEqualPassword, newAccount);

export default routers;
