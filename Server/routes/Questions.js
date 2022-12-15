import express from "express";
import { AskQuestion } from "../controllers/Question.js";
import { getAllquestions } from "../controllers/Question.js";
import { deleteQuestion } from "../controllers/Question.js";
import { voteQuestion } from "../controllers/Question.js";
import auth from "../middlewares/auth.js";
const router = express.Router();


router.post("/Ask",auth, AskQuestion);
router.get("/get", getAllquestions);
router.delete("/delete/:id",auth,deleteQuestion);
router.patch('votr/:id',auth, voteQuestion)
export default router;
