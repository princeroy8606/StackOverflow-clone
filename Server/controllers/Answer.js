import mongoose from "mongoose";

import Questions from "../models/Questions";

export const postAnswer = async (req, res) => {
  const { id: id } = req.params;
  const { noOfAnswers, answerBody, userAnswered } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("question unavailable");
  }
  updatedNoOfQuestion(id, noOfAnswers);
  try {
    const updatedQuestion = await Questions.findByIdAndUpdate(id, {
      $addToSet: { answer: [{ answerBody, userId: req.userId }] },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updatedNoOfQuestion = async (id, noOfAnswers) => {
  try {
    await Questions.findByIdAndUpdate(id, {
      $set: { noOfAnswers: noOfAnswers },
    });
  } catch (error) {
    console.log(error);
  }
};
