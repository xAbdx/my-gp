import React from 'react'
import './Footer.css';
import IMAGES from '../../img/indexImg';


function Footer() {
    return (
        <div class="footerContainer">
            <div class="footerWraper">
                <div class="left">
                    <div class="content">
                        <img class="footerlogo" src={IMAGES.FooterLogo} width="200px" alt="logo"></img>
                        <p>Unlock Hebron's captivating past and vibrant present on immersive, unforgettable tours. Let us be your trusted guides to the heart of Hebron.</p>
                        <p class="copyRight">© 2023</p>
                    </div>
                </div>
                <div class="right">
                    <div class="content">
                        <h5 >SUPPORT</h5>
                        <p>For questions or support<br />contact via email</p>
                        <p class="contact">abd.salameeh@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer