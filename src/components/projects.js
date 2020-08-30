import React from "react";
import Certificates from './certificates';
import Nav from "./nav";
import Footer from './footer';


function Projects(){
    return(
        <div>
            <Nav/>
        <section id="projects" class="b-light">
        <div class="edu-title"><div class="border-title"> PROJECTS </div></div>
        
        <div class="edu-desc">
          
          <div class="edu-card">
            <img src="https://img.icons8.com/dusk/50/000000/source-code.png" alt=""/>
            <h3>NEWS PORTAL</h3>
            <p>(2018)</p>
            <p>In this project I have built a news portal using HTML, CSS and JavaScript. </p>
            <p>LINK - Lorem ipsum dolor sit amet</p>
          </div>
          
          <div class="edu-card">
            <img src="https://img.icons8.com/dusk/50/000000/source-code.png" alt=""/>
            
            <h3>COURIER MANAGEMENT SERVICE</h3>
            <p>(2019)</p>
            <p>This project was developed using Python and Tkinter. It provides a basic functionality of managing couriers.</p>
            <p>LINK - Lorem ipsum dolor sit amet</p>
          </div>
          
          <div class="edu-card">
            <img src="https://img.icons8.com/dusk/50/000000/source-code.png" alt=""/>
            <h3>HANGMAN GAME</h3>
            <p>(2018)</p>
            <p>This project was done using C++. In this game you are provided with a name of a movies with some missing letters and you have to guess it in limited chances.</p>
            <p>LINK - Lorem ipsum dolor sit amet</p>
          </div>
        </div>

      </section>
      <Certificates/>
      <Footer/>
      </div>
      
    );
}

export default Projects;