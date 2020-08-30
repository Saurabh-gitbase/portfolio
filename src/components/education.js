import React from 'react';
import Nav from "./nav";
import Footer from './footer';
function Education(){
    return(
        <React.Fragment>
        <Nav/>
        <section id="education" class="b-dark">
        <div class="edu-title"><div class="border-title"> EDUCATION </div></div>
        
        <div class="edu-desc">
          
          <div class="edu-card">
            <img src="https://img.icons8.com/dotty/80/000000/education.png" alt=""/>
            <h3>U.G</h3>
            <p>Computer Science</p>
            <p>Lovely Professional University, India</p>
            <p>(2017-Present)</p>
            <p>Secured CGPA 7 upto 4th Semester</p>
          </div>
          
          <div class="edu-card">
            <img src="https://img.icons8.com/dotty/80/000000/education.png" alt=""/>
            
            <h3>H.S.C</h3>
            <p>PCM</p>
            <p>Army Public School, India</p>
            <p>(2016-2017)</p>
            <p>Secured ( 75% )</p>
          </div>
          
          <div class="edu-card">
            <img src="https://img.icons8.com/dotty/80/000000/education.png" alt=""/>
            <h3>S.S.C (10th)</h3>
            <p>Army Public School, India</p>
            <p>(2014-2015)</p>
            <p>Secured (9.2 CGPA)</p>
          </div>
        </div>
      </section>
      <Footer/>
      </React.Fragment>
    )
}

export default Education;