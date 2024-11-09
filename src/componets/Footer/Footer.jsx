import React  from "react";
import './Footer.css'
import {assets} from "../../assets/assets.js";

const Footer = () => {
    return (

        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eligendi eveniet expedita molestias
                        nesciunt odio officia quas quo recusandae temporibus. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Nemo, quibusdam?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt=""/>
                        <img src={assets.twitter_icon} alt=""/>
                        <img src={assets.linkedin_icon} alt=""/>
                    </div>
                </div>
                <div className="footer-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>

                        <li>Delivery</li>
                        <li>About us</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+7-955-223-11-24</li>
                        <li>lorem@gmail.com</li>
                    </ul>


                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>Lorem ipxime saepe sequi tenetur. Deleniti doloremque nulla quidem repellendus.</p>


        </div>
    )
}

export default Footer