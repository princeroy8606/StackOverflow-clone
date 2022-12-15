import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import upVote from "../../assets/arrow-up.png";
import downVote from "../../assets/arrow-down.png";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import { useDispatch, useSelector } from "react-redux";
import { postAnswer, deleteQuestion , voteQuestion} from "../../actions/question";
import moment from "moment";
import copy from "copy-to-clipboard";

function QuestionDetail() {
  const { id } = useParams();
  const questionsLis = useSelector((state) => state.questionReducer);

  const [Answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);

  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();
    if (User !== null) {
      alert("Login or sign up to answer a question");
      navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswer: answerLength + 1,
            answerBody: Answer,
            userAnswered: User?.result.name,
            userId: User?.result.id,
          })
        );
      }
    }
  };

  //
  const location = useLocation();
  const url = "http://localhost:3000";
  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url :" + url + location.pathname);
  };
  //

  //
  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
  };
  //

  const handleUpVote = () => {
    dispatch(voteQuestion(id, "upVote", User?.result.id));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVote", User?.result.id));
  };
  var questionList = [
    {
      id: "1",
      votes: 1,
      upVotes: 2,
      downVotes: 3,
      noOfAnswer: 1,
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
      id: "2",
      votes: 1,
      upVotes: 2,
      downVotes: 3,
      noOfAnswer: 1,
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
  return (
    <div className="question-details-page">
      {questionList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList
            /*.data*/ .filter((question) => question.id === id)
            .map((question) => (
              <div key={question.id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upVote}
                        width="18"
                        className="votes-icon"
                        onClick={handleUpVote}
                      />
                      <p>{question.upVotes.length - question.downVotes.length}</p>
                      <img
                        src={downVote}
                        width="18"
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%", marginLeft: "1rem" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button
                            type="button"
                            className="edit-question-btn"
                            onClick={handleShare}
                          >
                            Share
                          </button>

                          {User?.result?.id === question?.userId && (
                            <button
                              type="button"
                              className="edit-question-btn"
                              onClick={handleDelete}
                            >
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>
                            Asked {/*moment*/ question.askedOn /*.fromNow()*/}
                          </p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswer !== 0 && (
                  <section>
                    <h3>{question.noOfAnswer}Answers</h3>
                    <DisplayAnswer
                      key={question.id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAnswer(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) => {
                        setAnswer(e.target.value);
                      }}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Your Answer Text"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      ask yourown question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default QuestionDetail;
