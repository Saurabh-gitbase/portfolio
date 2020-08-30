import React from 'react';
import { Link } from "react-router-dom";
function Nav(){
    return(
        <div class="nav-section">
            <div class="logo"><Link to="/"><b>Resume</b></Link></div>
        
            <nav id="nav-bar">
                <div class="nav-element"><Link to="/about">ABOUT ME</Link></div>
                <div class="nav-element"><Link to="/education">EDUCATION</Link></div>
                <div class="nav-element"><Link to="/skill">SKILLS</Link></div>
                <div class="nav-element"><Link to="/project">PROJECTS</Link></div>
            </nav>
            </div>
    )
    
}
export default Nav;