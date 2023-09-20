import express from "express";
import registerRouter from "./api/podVerseServer/controllers/CreateAccountController";
import cors from "cors";
import selectRouter from "./api/podVerseServer/controllers/FindAccountController";
import "dotenv/config";
import jwt from "jsonwebtoken"

const app = express();
app.use(cors());
app.use(express.json());
app.use("/register", registerRouter);
app.use("/auth", selectRouter);

app.listen(4000, () => {
  console.log("Server running at 4000.");
});

export default app;
