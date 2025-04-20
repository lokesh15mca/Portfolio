
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
              <p className="about__text p__color">I’m a dedicated Full-Stack Developer with 6 years of experience, specializing in JavaScript, HTML, CSS, React, Node.js, and Express.js. I’m passionate about building scalable, high-performance web applications and continuously improving my craft.
</p>
                <p className="about__text p__color">I thrive in dynamic, growth-focused environments where I can contribute meaningfully to both front-end and back-end development while expanding my knowledge of modern web technologies.
</p>
              
              <div className="about__button d__flex align__items__center">
                <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://drive.google.com/file/d/1wMZIDzelRma-jJRYMGeAkkM0epBczH9A/view?usp=sharing">
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
