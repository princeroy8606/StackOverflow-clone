import React from "react";
import Question from "./Question";
function QuestionLIst({ questionList }) {
  return (
    <div>
      {questionList.map((question) => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
}

export default QuestionLIst;
