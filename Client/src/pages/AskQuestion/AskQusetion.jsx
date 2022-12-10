import React from "react";
import "./AskQusetion.css";

const AskQusetion = () => {
  return (
    <div className="ask-question">
      <div className="ask-question-container">
        <h1>Ask a public Question</h1>
        <form>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine your asking a question to another person
              </p>
              <input
                type="text"
                id="ask-question-title"
                placeholder="e.g Is there an R function for finding the index of an element in a vector ?"
              />
            </label>
            <label htmlFor="ask-ques-title">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea name="" id="ask-question-title" cols="30" rows="10"/>
              {/* <input type="text"  /> */}
            </label>
            <label htmlFor="ask-ques-title">
              <h4>Tags</h4>
              <p>Add up to 5 tags to discribe what your question is about</p>
              <input
                type="text"
                id="ask-question-tags"
                placeholder="e.g (xml typescript wordpress)"
              />
            </label>
          </div>
          <input type='submit' value="Reivew your question" className="review-btn"/>
        </form>
      </div>
    </div>
  );
};

export default AskQusetion;
