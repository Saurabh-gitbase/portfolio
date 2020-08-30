import React from 'react';
import Nav from "./nav";
import Footer from './footer';
function Skill(){
    return(
        <React.Fragment>
            <Nav/>
        <section class="skills b-light" id="skills-id">
        <div class="skills-title"><div class="border-title"> TECH SKILLS </div></div>
        <div class="skills-desc">
          <div class="skills-card">C/C++</div>
          <div class="skills-card">Python</div>
          <div class="skills-card">Django</div>
          <div class="skills-card">HTML/CSS</div>
          <div class="skills-card">JavaScript</div>
          <div class="skills-card">Cyber Security</div>

        </div>
        </section>
      
        <section class="skills b-dark">
        <div class="skills-title"><div class="border-title"> INTERPERSONAL SKILLS </div></div>
        <div class="skills-desc">
          <div class="skills-card">Teamwork</div>
          <div class="skills-card">Responsibility</div>
          <div class="skills-card">Leadership</div>
          <div class="skills-card">Flexibility</div>
          <div class="skills-card">Patience</div>
          <div class="skills-card">Active listening</div>
        </div>
        
        <div class="lang" id="language">
          <div class="lang-title">Languages</div>
          <div class="lang-desc">
            <div class="lang-type">
              <div class="lang-name">English</div>
              <div class="lang-meter"><div class="lang-meter-val"></div></div>
            </div>
            <div class="lang-type">
              <div class="lang-name">Hindi</div>
              <div class="lang-meter"><div class="lang-meter-val"></div></div>
            </div>
          </div>
        </div>

        </section>
        <Footer/>
        </React.Fragment>
    )
}

export default Skill;