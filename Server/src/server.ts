import "dotenv/config";
import app from "./app";

app.listen(4000, () => {
  console.log("Server running at 4000.");
});
