import React from "react";
// import Avatar from "../../assets/img/avatar.png";
// import Avatar1 from "../../assets/img/chan-dung-edit.png";
import Avatar2 from "../../assets/img/full-nguoi-edit.webp";
import "./style.css";
const Greeting = () => {
  return (
    <div className="intro-wrapper">
      <div className="nav-wrapper">
        <div className="nav-wrapper-left__dots-wrapper">
          <div className="browser-dot dot-1"></div>
          <div className="browser-dot dot-2"></div>
          <div className="browser-dot dot-3"></div>
        </div>
        <ul className="nav-wrapper-right__navigation-list">
          <li>
            <a href="mailto:mohamed.ahmed8412000@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
      <div className="left-column">
        <img className="avatar" src={Avatar2} alt="Avatar" />
        <h5>Mohamed Ahmed</h5>
        <p>{" <@mohamedahmed14> "}</p>
      </div>
      <div className="right-column">
        <div className="right-column__preview-shadow">
          <div className="right-column__preview">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <h3>What I Do?</h3>
            <p style={{ fontSize: "16px" }}>
              Mid-level Developer, interested in designing and developing
              websites, especially things related to Front-end stacks.
            </p>
            <div className="corner corner-br"></div>
            <div className="corner corner-bl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
