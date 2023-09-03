import express from "express";
import registerRouter from "./api/podVerseServer/controllers/CreateAccountController";
import cors from "cors";
import 'dotenv/config'

const app = express();
app.use(cors());
app.use(express.json());
app.use("/register", registerRouter);

app.listen(process.env.PORT, () => {
  console.log("Server running at 4000");
});

export default app;
