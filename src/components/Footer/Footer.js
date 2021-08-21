import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Project By{" "}
        <a href="https://www.github.com/dmudgal2001" target="__blank">
          Devesh Mudgal
        </a>
      </span>
      <div className="iconContainer">
        
        <a href="https://www.linkedin.com/in/DeveshMudgal" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="mailto:dmudgal@outlook.com" target="__blank">
          <i className="fab fa-microsoft fa-2x"></i>
        </a>
        <a href="https://www.t.me/TheyKnew" target="__blank">
          <i className="fab fa-telegram fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
