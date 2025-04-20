import '../components/Certificates.css'
import React, { useEffect, useState } from "react";
// import Project4 from '../Img/project2.1.png'
import c1 from '../Img/C1.png'
import c2 from '../Img/C2.png'
import c3 from '../Img/C3.png'
import c4 from '../Img/C4.png'
import c5 from '../Img/C5.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Certificates = () => {
    var images= [c1, c2, c3,c4,c5];
    // const images = [
    //   {url:c1},
    //   {url:c2},
    //   {url:c3},
    //   {url:c4},
    //   {url:c5}
    // ];
    return <>
        <div className="project1 component__space" id="Certificates">
      <div className="heading"></div>

    <div id="imgSlider" >
    <Carousel autoPlay infiniteLoop interval={2000} width = "60%" textAlign="center" useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" textAlign="center" src={URL} key={index} id="sliderimg"/>
          </div>
        ))}
      </Carousel>                                                                                 
    </div>
</div>
    </>
}

export default Certificates;