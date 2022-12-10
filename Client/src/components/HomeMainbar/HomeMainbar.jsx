import React from "react";
import "./HomeMainbar.css";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import QuestionLIst from "./QuestionLIst";
import AskQusetion from "../../pages/AskQuestion/AskQusetion";

function HomeMainbar() {
  const location = useLocation();
  const user = "null";
  const navigate = useNavigate();

  var questionList = [
    {
      id: 1,
      votes: 1,
      noOfAnswer: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "Python"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
    {
      id: 2,
      votes: 1,
      noOfAnswer: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "Python"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
  ];
  const checkAuth = () => {
    if (user === "1") {
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
        {questionList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.length} questions</p>

            <QuestionLIst questionList={questionList} />
          </>
        )}
      </div>
    </div>
  );
}
export default HomeMainbar;
