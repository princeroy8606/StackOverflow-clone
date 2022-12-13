import React from "react";
import "./HomeMainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionLIst from "./QuestionLIst";
import { useSelector } from "react-redux";
// import AskQusetion from "../../pages/AskQuestion/AskQusetion";

function HomeMainbar() {
  const location = useLocation();
  const user = "1";
  const navigate = useNavigate();

  const questionsLis = useSelector(state => state.questionReducer)
  console.log(questionsLis)

  var questionList = [
    {
      id: 1,
      votes: 1,
      upVotes: 2,
      downVotes: 3,

      noOfAnswer: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "Python"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      id: 2,
      votes: 1,
      upVotes: 2,
      downVotes: 3,
      noOfAnswer: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "Python"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Ravi",
          answeredOn: "jan 5",
          userId: 2,
        },
      ],
    },
  ];
  const checkAuth = () => {
    if (user === "null") {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header ">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionList/*.data*/ === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList/*.data*/.length} questions</p>

            <QuestionLIst questionList={questionList} />
          </>
        )}
      </div>
    </div>
  );
}
export default HomeMainbar;
