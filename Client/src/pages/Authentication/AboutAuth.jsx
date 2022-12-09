import React from "react";
import qstn from '../../assets/message.png'
import icon from '../../assets/voting.png'
import save from '../../assets/save.png'
import badge from '../../assets/badge.png'

function AboutAuth() {
  return (
    <div className="auth-container-1">
      <h1> Join the Stack Overflow community</h1>
      <p className="img-containor"><img src={qstn} alt="icon" /> Get unstuck - ask a question</p>
      <p  className="img-containor"><img src={icon} alt="icon" /> Unlock new privilleges like voting and comments</p>
      <p className="img-containor" ><img src={save} alt="icon" /> Save your favorite tags , files, and jobs</p>
      <p className="img-containor"><img src={badge} alt="icon" /> Earn reputation and badges</p>
      <p style={{ fontSize: ".9rem", color: "#666767" }}>
        Collaboration and share knowldege with a private group
      </p>
      <p style={{ fontSize: ".9rem", color: "#007ac6" }}>
        Get Stack Overflow terms free for upto 50 users
      </p>
    </div>
  );
}

export default AboutAuth;
