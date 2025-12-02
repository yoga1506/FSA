import express from "express";
const router = express.Router();
import {
  createNotes,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controller/noteController.js";

router.get("/", getAllNotes);
router.post("/", createNotes);

router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
