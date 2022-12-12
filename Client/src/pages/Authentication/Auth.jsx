import "./Auth.css";
import { useState } from "react";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter e mail and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to Continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="stack-overflow -logo" className="login-logo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div className="password">
              <h4>Password</h4>
              {!isSignup && (
                <h4 className="fgrt-password">Forgot Password ?</h4>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
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
