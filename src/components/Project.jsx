
import React from "react";
import "./Project.css";
import Project1 from '../Img/project1.png'
import Project2 from '../Img/project2.png'
// import Project4 from '../Img/project2.1.png'
import opt from '../Img/opt-page.png'
import Alriyadah from '../Img/Alriyadah1.PNG'
import Addroitte from '../Img/Addroitte.jpg'
import Addroitteweb from '../Img/Addroitteweb.jpg'

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading title">My Latest Project</h1>
        <p className="heading p__color">
        Work speaks louder than words.
        </p>
      </div>

    {/* Company project  */}



    <div id="cards_landscape_wrap-2">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href=""> 
                {/* https://capdas-suvamadhikary.vercel.app */}
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={Project1} alt="" />
                            </div>
                            <div class="text-container">
                                <h6>Hello Ujjivan Mobile App</h6>
                                <p>The official Voice Guided
Android mobile banking application of Ujjivan Small Finance Bank is
India's 1st voice and visual-assisted vernacular banking app.</p>
<p>Features: End to End Voice Guidance throughout the App. Manage your own fund transfer limit. Loan EMI Repayments. Flexibility to download, view or e-mail your e-statement and Refer Someone Option</p>
                                {/* <div className='buttonAncher'>
                                <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://capdas-suvamadhikary.vercel.app" className="project__btn">View Details</a>
                                </div> */}
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="">
                    {/* https://cloning-premierleague.netlify.app/ */}
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={Project2} alt="" />
                            </div>
                            <div class="text-container">                                    
                                <h6>PLANET by L&T Finance</h6>
                                <p>PLANET by L&T Finance stands for Personalized Lending & Assisted NETworks of you, our valued customer, helping enable your aspirations. PLANET App is one of the highest-rated finance Apps on Google Play Store and Apple App Store with a score of 4.3. The App’s success can be attributed to its simplicity, comprehensive features, and commitment to customer satisfaction.</p>
                                {/* <div className='buttonAncher'>
                                <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://cloning-premierleague.netlify.app/" className="project__btn">View Details</a>
                                </div> */}
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="">
                    {/* https://op-clone.vercel.app/ */}
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={opt} alt="" />
                            </div>

                            <div class="text-container">
                                <h6>Internat Banking and Mobile Banking (IBMB)</h6>
                               <p>All Ujjivan banking services are now a few clicks away with our Personal Net Banking services. Access your Savings Account and Deposits, transfer funds through IFT (Within Ujjivan fund transfer), IMPS, NEFT and RTGS, track your transactions and carry out almost all other operations that you may require from the convenience of your home.</p>
                               {/* <div className='buttonAncher'>
                            <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://op-clone.vercel.app/" className="project__btn">View Details</a>
                            </div> */}
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

    <div id="cards_landscape_wrap-2">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="">
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={Alriyadah} alt="" />
                            </div>
                            <div class="text-container">
                                <h6>Alriyadah</h6>
                                <p>Alriyadah is a driving education. The principles of traffic safety by raising
the quality and excellence standards in providing the best services related
to driving schools throughout the Kingdom of Saudi Arabia and in
accordance with the highest international standards,</p>
                                {/* <div className='buttonAncher'>
                                <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="" className="project__btn">View Details</a>
                                </div> */}
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="">
                    {/* https://cloning-premierleague.netlify.app/ */}
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={Addroitteweb} alt="" />
                            </div>
                            <div class="text-container">                                    
                                <h6>Addroitte web</h6>
                                <p>Addroitte is a portal where student can search the internship and institue
post the course that will help students to find the intern and company
will post the intership and job on same.
website for the Institute and Company to post the courses and Internship or job.
</p>
                                {/* <div className='buttonAncher'>
                                <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://cloning-premierleague.netlify.app/" className="project__btn">View Details</a>
                                </div> */}
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="">
                    {/* https://op-clone.vercel.app/ */}
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={Addroitte} alt="" />
                            </div>

                            <div class="text-container">
                                <h6>Addroitte Mobile App</h6>
                               <p>Addroitte is a portal where student can search the internship and institue
post the course that will help students to find the intern and company
will post the intership and job on same.
Mobile App for students to access in mobile and apply for courses and internship.
</p>
                               {/* <div className='buttonAncher'>
                            <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://op-clone.vercel.app/" className="project__btn">View Details</a>
                            </div> */}
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

    {/* Company project end */}



      <div id="cards_landscape_wrap-2">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="">
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={Project1} alt="" />
                            </div>
                            <div class="text-container">
                                <h6>Ujjivan Small Finance Bank</h6>
                                <p>Hello Ujjivan App (VVV, HHD, IBMB, Admin) The official Voice Guided
Android mobile banking application of Ujjivan Small Finance Bank is
India's 1st voice and visual-assisted vernacular banking app.
Features:
End to End Voice Guidance throughout the App.
Manage your own fund transfer limit
Loan EMI Repayments
Areas of responsibility:
Implemented Loan Acknowledgement flow ,
Implemented Pre-login flow end to end
Tech Stack:- HTML, CSS, Jquery, ES6, JavaScript</p>
                                {/* <div className='buttonAncher'>
                                <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://capdas-suvamadhikary.vercel.app" className="project__btn">View Details</a>
                                </div> */}
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
            {/* <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="">
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
            </div> */}
            {/* <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a target="_blank" rel = "noopener noreferrer" href="">
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={opt} alt="" />
                            </div>

                            <div class="text-container">
                                <h6>Clone of optimizely</h6>
                               <p>Optimizely is an American company that provides A/B testing and multivariate testing tools, website personalization, and feature toggle capabilities, as well as web content management and digital commerce.</p>
                                <div className='buttonAncher'>
                            <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://op-clone.vercel.app/" className="project__btn">View Details</a>
                            </div> 
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div> */}
        </div>
    </div>
</div>
</div>
  );
}

export default Project;