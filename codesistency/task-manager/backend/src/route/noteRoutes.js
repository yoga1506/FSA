import express from "express";
import {
  createNotes,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controller/noteController.js";
const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNotes);

router.put("/:id", updateNote);
router.get("/:id", getNoteById);
router.delete("/:id", deleteNote);

export default router;
