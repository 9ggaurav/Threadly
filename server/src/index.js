import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
