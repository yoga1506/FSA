import express, { json } from "express";
import noteRoutes from "./route/noteRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

connectDb();

app.use("/api/notes", noteRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

//
