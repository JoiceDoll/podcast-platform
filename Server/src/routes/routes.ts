import { Router } from "express";
import UserController from "../api/podverse/controllers/UserController"
// import Account from "../api/podVerseServer/controllers/AccountController";
import AuthController from "../api/auth/AuthController"
// import { isEqualPassword } from "../middlewares/permissions/isEqualPassword";

const routers = Router();

routers.post("/api/podverse/register", UserController.store);
routers.post("/api/auth", AuthController.auth);


export default routers;
