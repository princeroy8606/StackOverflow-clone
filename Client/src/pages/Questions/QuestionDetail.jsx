import React from "react";
import { useParams } from "react-router-dom";

function QuestionDetail() {
  const { id } = useParams();
  var questionList = [
    {
      id: "1",
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
      id: "2",
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
                <section className="question-detail-container">
                  <h1>{question.questionTitle}</h1>
                  <h1>{question.id}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src="" alt="" />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img src="" alt="" />
                    </div>
                    <div style={{width:'100%'}}>

                    </div>
                  </div>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default QuestionDetail;
