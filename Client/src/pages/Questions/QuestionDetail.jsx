import React from "react";
import { Link, useParams } from "react-router-dom";
import upVote from "../../assets/arrow-up.png";
import downVote from "../../assets/arrow-down.png";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";

function QuestionDetail() {
  const { id } = useParams();
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
            .filter((question) => question.id === id)
            .map((question) => (
              <div key={question.id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upVote} width="18" className="votes-icon" />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img src={downVote} width="18" className="votes-icon" />
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
                          <button type="button" className="edit-question-btn">
                            Share
                          </button>
                          <button type="button" className="edit-question-btn">
                            Delete
                          </button>
                        </div>
                        <div>
                          <p>Asked {question.askedOn}</p>
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
                    <DisplayAnswer key={question.id} question={question} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
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
