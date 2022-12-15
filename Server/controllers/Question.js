import Questions from "../models/Questions.js";
import mongoose from "mongoose";

export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  console.log(postQuestionData)
  const postQuestion = new Questions({ postQuestionData });
  try {
    await postQuestion.save();
    res.status(200).json("posted a question successfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("colud't post a new question");
  }
};

export const getAllquestions = async (req, res) => {
  try {
    const questionList = await Questions.find();
    res.status(200).json(questionList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id: id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("question unavailable");
  }
  try {
    await Questions.findByIdAndRemove(id);
    res.status(200).json({ message: "Successfull" });
  } catch (error) {
    res.status(200).json(error.message);
  }
};

export const voteQuestion = async (req, res) => {
  const { id: id } = req.params;
  const { value, userId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("question unavailable");
  }

  try {
    const question = await Questions.findById(id);
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.downVote.findIndex(
      (id) => id === String(userId)
    );

    if (value == "upVote") {
      if (downIndex !== -1) {
        question.downVote = question.downVotes.filter(
          (id) => id === String(userId)
        );
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
    } else if (value == "downVote") {
      if (upIndex !== -1) {
        question.upVote = question.upVotes.filter(
          (id) => id === String(userId)
        );
      }
      if (downIndex === -1) {
        question.downVote.push(userId);
      } else {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
    }
    await Questions.findByIdAndUpdate(id, question);
    res.status(200).json({ message: "Successfully  Voted" });
  } catch (error) {
    console.log(error);
  }
};
