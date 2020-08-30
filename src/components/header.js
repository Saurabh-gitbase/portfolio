import React from "react";
import Nav from "./nav";
function Header(){
    return(
        <header id="header">
            <Nav/>
            <div class="info-section">
                <p style={{fontSize:"2.6em",marginBottom:"0"}}>Hi, I'm Saurabh</p>
                <p style={{fontSize:"4em",marginTop:"0",fontWeight:"bolder"}}>Developer</p>
            </div>
        </header>
    )
}

export default Header;