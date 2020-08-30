import React from "react";
import Nav from "./nav";
import Footer from './footer'
import Logo from '../img/img1.png';

function About(){
    return(
        <React.Fragment>
            <Nav/>
        <section id="about-me" class="b-light">
            <div  class="about-title"><div class="border-title"> ABOUT ME </div></div>
            <div class="about-content">
            <div class="about-img">
                <img src={Logo} alt="" srcset="" width="300px" height="300px"/>
            </div>
            <div class="about-desc">
                <h3>Saurabh Singh</h3>
                <h4>Web Developer</h4>
                <p>A learning enthusiast. determined  and focused with a keen eye for details.</p>
                <h4>Objectives</h4>
                <p>To work with a company witch appreactes innovative inputs aso that i can enhaance my kwonalage and skillss to give my best  for the growth of the company. </p>
                <button> Download Resume </button>
            </div>
            </div>
        </section>
        <Footer/>
        </React.Fragment>
    );
}

export default About;