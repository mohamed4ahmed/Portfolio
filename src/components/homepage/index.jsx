import React, { useState } from "react";
import "./style.css";
import Intro from "../intro";
import About from "../about";
import Posts from "../posts";
// import Contact from "../contact";
import Greeting from "../greeting";
import { FaArrowCircleUp } from "react-icons/fa";


const Homepage = ({ languages, socials, tools, posts }) => {

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
    <React.Fragment>
        <div className="scrollToTop">
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </div>
      <section className="s1">
        <div className="main-container">
          {/* <Greeting /> */}
          <Intro />
        </div>
      </section>
      <section className="s2">
        <div className="main-container">
          <About socials={socials} languages={languages} tools={tools} />
        </div>
      </section>
      <section className="s1">
        <div className="main-container">
          <Posts posts={posts} />
        </div>
      </section>
      <section className="s2">
				<div className="main-container">
					<Greeting />
				</div>
			</section>
    </React.Fragment>
  );
};

export default Homepage;
