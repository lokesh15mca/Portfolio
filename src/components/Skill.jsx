import React from 'react'
import './Skill.css';
import reactImg from '../Img/react-logo.png'
import htmlImg from '../Img/Html-logo.png'
import cssImg from '../Img/css-logo.png'
import jsImg from '../Img/js-logo.png'
import nodeImg from '../Img/node-logo.png'
import expressImg from '../Img/express-logo.png'
import mongoImg from '../Img/mongo-logo.jpeg'
import gitImg from '../Img/git-logo.png'
export default function Skill() {
    return (
        <div className="skill component__space" id="Skill">
            <div className="skill_text">My Skills</div>
            {/* Starting */}

            <div class="mt-4"></div>
<div class="container">
  <div class="row">
  <div class="col-6 col-md-3">
    <div class="card skill-card">
      <div class="card-img">
        <img src={htmlImg} alt="" class="img-fluid" />
      </div>
      <div class="card-body">
        <h4>HTML</h4>
      </div>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="card skill-card">
      <div class="card-img">
        <img src={cssImg} alt="" class="img-fluid" />
      </div>
      <div class="card-body">
        <h4>CSS</h4>
      </div>
    </div>
  </div>
<div class="col-6 col-md-3">
    <div class="card skill-card">
      <div class="card-img">
        <img src={jsImg} alt="" class="img-fluid" />
      </div>
      <div class="card-body">
        <h4>JavaScript</h4>
      </div>
    </div>
  </div>

  <div class="col-6 col-md-3">
    <div class="card skill-card">
      <div class="card-img">
        <img src={reactImg} alt="" class="img-fluid" />
      </div>
      <div class="card-body">
        <h4>React js</h4>
      </div>
    </div>
  </div>

<div class="col-6 col-md-3">
    <div class="card skill-card">
      <div class="card-img">
        <img src={nodeImg} alt="" class="img-fluid" />
      </div>
      <div class="card-body">
        <h4>Node js</h4>
      </div>
    </div>
  </div>
<div class="col-6 col-md-3">
    <div class="card skill-card">
      <div class="card-img">
        <img src={expressImg} alt="" class="img-fluid" />
      </div>
      <div class="card-body">
        <h4>Express js</h4>
      </div>
    </div>
  </div>
<div class="col-6 col-md-3">
    <div class="card skill-card">
      <div class="card-img">
        <img src={mongoImg} alt="" class="img-fluid" />
      </div>
      <div class="card-body">
        <h4>MongoDB</h4>
      </div>
    </div>
  </div>

  <div class="col-6 col-md-3">
    <div class="card skill-card">
      <div class="card-img">
        <img src={gitImg} alt="" class="img-fluid" />
      </div>
      <div class="card-body">
        <h4>Git</h4>
      </div>
    </div>
  </div>

</div>
</div>
            {/* ended */}

            
        </div>
    )
}
