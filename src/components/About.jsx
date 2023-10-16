
import React from "react";
import "./About.css";
import aboutImg from '../Img/roundedpic.png'
function About() {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">I am a Full-stack developer with a deep knowledge of JavaScript, HTML, CSS, and React and a 1000 hours of coding practice. Looking at joining a challenging work environment where I can develop a deeper understanding of web development.
              </p>
              
              <div className="about__button d__flex align__items__center">
                <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://drive.google.com/file/d/1lG0lKTzaT4UExsx7KpbFIREo25ltLrHs/view?usp=sharing">
                  <button className="about btn pointer">Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
