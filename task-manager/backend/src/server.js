import express, { json } from "express";
import cors from "cors";
import noteRoutes from "./route/noteRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
// import rateLimter from "./middlewars/rateLimter.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
// app.use(rateLimter);
app.use("/api/notes", noteRoutes);

connectDb().then(() => {
  app.listen(9000, () => {
    console.log("Server running on port 9000");
  });
});
