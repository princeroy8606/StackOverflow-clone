import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/message-regular.svg";
import pen from "../../assets/pen-solid.svg";
import stack from "../../assets/stack-overflow.svg";

function Widget() {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="" width="15" />
          <p>AWS joins Collectives™ on Stack Overflow</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="" width="15" />
          <p>How to make time for learning in tech</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="" width="15" />
          <p>Help us identify new roles for community members</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="" width="15" />
          <p>Navigation and UI research starting soon</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={stack} alt="" width="15" />
          <p>Temporary policy: ChatGPT is banned</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>35</p>
          <p>Why was this spam flag declined ,yet</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>What is the best course of action </p>
        </div>
      </div>
    </div>
  );
}

export default Widget;
