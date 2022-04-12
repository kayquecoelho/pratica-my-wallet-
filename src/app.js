import cors from "cors";
import express from "express";
import "express-async-errors";
import errorHandler from "./middlewares/errorHandler.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

export default app;
