
import React from "react";
import "./Project.css";
import Project1 from '../Img/project1.png'
import Project2 from '../Img/project2.png'
// import Project4 from '../Img/project2.1.png'
import opt from '../Img/opt-page.png'

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading title">My Latest Project</h1>
        <p className="heading p__color">
        Work speaks louder than words.
        </p>
      </div>

      <div id="cards_landscape_wrap-2">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="https://capdas-suvamadhikary.vercel.app/signup">
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={Project1} alt="" />
                            </div>
                            <div class="text-container">
                                <h6>Capdas-Ecommerce</h6>
                                <p>Capdas is our self designed and developed mobile website which provides sustainable clothing store providing platform for national seller and tailors to provide their services online.</p>
                                <div className='buttonAncher'>
                                <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://github.com/suvamAdhikary/Capdas-ECommerce" className="project__btn">View Details</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="https://cloning-premierleague.netlify.app/">
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={Project2} alt="" />
                            </div>
                            <div class="text-container">                                    
                                <h6>Premier-League-clone</h6>
                                <p>Premier League website is basically a popular website which is mainly known by scoccer player and their all deatils of live matches and scores which is genrated time to time in that website.</p>
                                <div className='buttonAncher'>
                                <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://cloning-premierleague.netlify.app/" className="project__btn">View Details</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="https://op-clone.vercel.app/">
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={opt} alt="" />
                            </div>

                            <div class="text-container">
                                <h6>Clone of optimizely</h6>
                               <p>Optimizely is an American company that provides A/B testing and multivariate testing tools, website personalization, and feature toggle capabilities, as well as web content management and digital commerce.</p>
                               <div className='buttonAncher'>
                            <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://github.com/vinayak-pk/Optimizely-clone" className="project__btn">View Details</a>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
</div>
  );
}

export default Project;