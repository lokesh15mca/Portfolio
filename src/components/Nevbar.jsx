import React from 'react'
import $ from 'jquery';
import '../components/Nevbar.css'

export const Nevbar = () => {
    function collapseNav(){
        
        var nav = $("nav");
        if(nav.find(".collapse").hasClass("show")) {
          nav.find(".navbar-toggle").trigger('click')
        }
      }
    return (
        <div className='nevheader'>
                <nav class="navbar navbar-dark navbar-expand-sm nevheader fixed-top">
        <div class="container">
        <a href="/" class="navbar-brand" style={{color:"white", fontSize: "20px", fontWeight: "400"}}>
        <i class="fas fa-blog"></i> &nbsp;
        LS
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>


        <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item textformet">
                <a href="#Home" style={{color:"white", fontSize: "20px", fontWeight: "400"}} class="nav-link" onClick={collapseNav}>
                    Home
                </a>
            </li>
            <li class="nav-item">
                <a href="#About" class="nav-link" style={{color:"white", fontSize: "20px", fontWeight: "400"}}>
                    About
                </a>
            </li>
            <li class="nav-item">
                <a href="#Project" class="nav-link" style={{color:"white", fontSize: "20px", fontWeight: "400"}}>
                    Project
                </a>
            </li>
            <li class="nav-item">
                <a href="#Skill" class="nav-link" style={{color:"white", fontSize: "20px", fontWeight: "400"}}>
                    Skills
                </a>
            </li>
            <li class="nav-item">
                <a href="#Certificates" class="nav-link" style={{color:"white", fontSize: "20px", fontWeight: "400"}}>
                Certificates
                </a>
            </li>
            <li class="nav-item">
                <a href="#Contact" class="nav-link" style={{color:"white", fontSize: "20px", fontWeight: "400"}}>
                    Contact
                </a>
            </li>
        </ul>
        </div>
    </div>
    </nav> 
        </div>
    )
}
