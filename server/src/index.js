import dotenv from "dotenv";
import { app } from "./app.js";
import connectLocalDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

const Port = process.env.PORT || 3000;

connectLocalDB()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server is running at http://localhost:${Port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB LOCAL connection failed!");
  });
