import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from '../../assets/globe.png'

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClassName="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div><p>PUBLIC</p></div>
        </div>
        <NavLink
          to="/Questions"
          className="side-nav-links"
          activeClassName="active"
        >
          <img className="global-icon" src={Globe} alt="" />
          <p style={{ paddingLeft: ".6rem" }}>Questions</p>
        </NavLink>
        <NavLink to="/Tags" className="side-nav-links" activeClassName="active">
          <p>Tags</p>
        </NavLink>
        <NavLink to="/Users" className="side-nav-links" activeClassName="active">
          <p>User</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default LeftSidebar;
