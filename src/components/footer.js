import React from 'react';

function Footer(){
    return(
        <footer class="footer-box" id="contact">
          <div class="info">
            <img src="https://img.icons8.com/dusk/64/000000/phone.png" alt=""/>
            <div class="info-name">Phone</div>
            <div class="info-detail">+919188241XXX</div>
          </div>
          <div class="info">
            <div class="info-row">
            <img src="https://img.icons8.com/dusk/64/000000/linkedin.png" alt=""/>
            <img src="https://img.icons8.com/dusk/64/000000/github.png" alt=""/>
            </div>
          </div>
          <div class="info">
            <img src="https://img.icons8.com/dusk/64/000000/send-mass-email.png" alt=""/>
            <div class="info-name">Email</div>
            <div class="info-detail">Rokr.saurabh31@gmail.com</div>
          </div>
      </footer>
    )
}

export default Footer;