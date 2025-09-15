import express from "express";
import bookRouter from "./routes/book.route";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", bookRouter);

export default app;
