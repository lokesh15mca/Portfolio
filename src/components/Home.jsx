// import React, {useState} from "react";
import "./Home.css";
// import logo from '../Img/logo2.png'
import mypic from '../Img/roundedpic.png'

function Home() {
  return (
    <div className="home" id="Home">
      <div className="home__bg">

        {/* HOME CONTENT */}
        <div className="container1 row">
          <div className="home__content col__2">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I'm Lokesh Singh</h2>
              <div className="home__text sweet pz__10">I am passionate about designing and developing innovative, user-friendly websites that deliver exceptional experiences</div>
            </div>
          </div>
          <div className="col__2">
              <img src={mypic} alt="" className="myimg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
