import { Router } from "express";
import Account from "../api/podVerseServer/controllers/AccountController";
import Auth from "../api/auth/AuthController"
import { isEqualPassword } from "../middlewares/permissions/isEqualPassword";

const routers = Router();

routers.post("/api/podverse/register", isEqualPassword, Account.store);
routers.post("/api/auth", Auth.authentication);


export default routers;
