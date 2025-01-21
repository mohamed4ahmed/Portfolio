import React, { useState } from "react";
import avatar from "../../assets/img/full-nguoi-edit.webp";
import avatarIcon from "../../assets/img/avatar.webp";
import "./styles.css";
import { Link } from "react-router-dom";
import Greeting from "../../components/greeting";
import { FaArrowCircleUp } from "react-icons/fa";

const Information = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="app">
      <div className="scrollToTop">
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </div>
      <div className="intro-wrapper1">
        <div className="nav-wrapper">
          <div className="nav-wrapper-left__dots-wrapper">
            <div className="browser-dot dot-1"></div>
            <div className="browser-dot dot-2"></div>
            <div className="browser-dot dot-3"></div>
          </div>
        </div>

        <div className="information">
          <img src={avatar} alt="avatar" />
          <h2>Salah Ragab </h2>

          <div className="social">
            <Link to="/portfolio">
              <div className="icon">
                <img src={avatarIcon} alt="website" />
              </div>
              <p>Portfolio</p>
              <div className=""></div>
            </Link>
          </div>
          <div className="social">
            <a rel="noopener noreferrer" target="__blank" href="resume.pdf">
              <div className="icon">
                <img
                  src="https://img.icons8.com/nolan/50/open-resume.png"
                  alt="resume"
                />
              </div>
              <p>Resume</p>
              <div className=""></div>
            </a>
          </div>
          {/* <div className="social">
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="https://github.com/mohamed4ahmed"
            >
              <div className="icon">
                <img
                  src="https://img.icons8.com/fluent/48/000000/github.png"
                  alt="github"
                />
              </div>
              <p>Github</p>
              <div className=""></div>
            </a>
          </div> */}

          <div className="social">
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="mailto:engsalah@aitcosa.com"
            >
              <div className="icon">
                <img
                  src="https://img.icons8.com/fluent/48/000000/gmail-new.png"
                  alt="email"
                />
              </div>
              <p>Email</p>
              <div className=""></div>
            </a>
          </div>

          <div className="social">
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="tel:+966540619187"
            >
              <div className="icon">
                <img
                  src="https://img.icons8.com/fluent/48/000000/phone.png"
                  alt="phone"
                />
              </div>
              <p>Phone Number</p>
              <div className=""></div>
            </a>
          </div>

          <div className="social">
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="https://www.linkedin.com/in/salah-ragab-07ba84240/"
            >
              <div className="icon">
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin.png"
                  alt="linkedin"
                />
              </div>
              <p>Linkedin</p>
              <div className=""></div>
            </a>
          </div>

          <div className="social">
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="https://www.facebook.com/profile.php?id=100000594597316"
            >
              <div className="icon">
                <img
                  src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                  alt="facebook"
                />
              </div>
              <p>Facebook</p>
              <div className=""></div>
            </a>
          </div>

          <div className="social">
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="https://www.instagram.com/aitcosa?igsh===MWpsZhttps://www.instagram.com/aitcosa?igsh=MWpsZ2lhODU5YWRteQ=="
            >
              <div className="icon">
                <img
                  src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                  alt="instagram"
                />
              </div>
              <p>Instagram</p>
              <div className=""></div>
            </a>
          </div>

          <div className="social">
            <a href="whatsapp://send?text=welcome-let-your-messange&phone=+966540619187">
              <div className="icon">
                <img
                  src="https://img.icons8.com/clouds/100/000000/whatsapp.png"
                  alt="whatsapp"
                />
              </div>
              <p>WhatsApp</p>
              <div className=""></div>
            </a>
          </div>

          <Greeting />
        </div>
      </div>
    </div>
  );
};

export default Information;
