import React from "react";
import "./Auth.css";
import { useState } from "react";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";

function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="stack-overflow -logo" className="login-logo" />
        )}
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <div className="password">
              <h4>Password</h4>
              {!isSignup && (
                <h4 className="fgrt-password">Forgot Password ?</h4>
              )}
            </div>
            <input type="password" name="password" id="password" />
            {isSignup && (
              <p>
                Passwords must contain at least eight characters,
                <br /> including at least 1 letter and 1 number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input
                type="checkbox"
                id="check"
                style={{ width: "1rem", height: "1rem" }}
              />
              <p style={{ fontSize: ".9rem" }}>
                Opt-in to receive occasional product <br /> updates, user
                research invitations, company <br /> announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: ".9rem" }}>
              By clicking “Sign up”, you agree to our &nbsp;
              <span style={{ color: "#007ac6" }}>
                terms of <br /> service
              </span>
              , &nbsp; <span style={{ color: "#007ac6" }}>privacy policy</span>{" "}
              and
              <span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an acoount ?" : "Don't have an account ?"}
          &nbsp;
          <button
            type="button"
            onClick={handleSwitch}
            className="handle-switch-btn"
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
