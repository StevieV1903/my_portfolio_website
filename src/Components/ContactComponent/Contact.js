import React, { useEffect } from "react";
import "./Contact.css";
import ContactForm from "./ContactForm.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import twitter from "../../Images/twitter.png";
import instagram from "../../Images/instagram.png";
import linkedin from "../../Images/linkedin.png";
import github from "../../Images/github2.png";
import phone from "../../Images/phone.png";


const Contact = () => {

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    return (
        
    <div className="contact-page-container">

            <header>
                <div className="contact-description-container">
                <h1 className="contact-title">
                <FontAwesomeIcon icon={faEnvelope} />
                    <span>  Contact_Details</span></h1>
                <hr></hr>
                <p className="contact-description-text">
                I would love to hear from you!! so please do get in touch as I value all feedback!! You can contact me by using the form on this page, give me a call on the mobile below or connect across a variety of social media platforms!!
                </p>
                </div>
            </header>
            
                
            <div className="contact-body">
                <div className="contact">
                    <div className="contact-list">

                        <ul className="contact-icons">
                            
                            <li>
                            <img src={ phone } alt="phone" /> 
                            </li>

                            <li>
                            <a href="https://www.linkedin.com/in/stevevance/">
                                <img src={ linkedin } alt="linkedin" /></a>
                            </li>

                            <li>
                            <a href="https://github.com/StevieV1903">
                                <img src={ github } alt="github" /> </a>
                            </li>

                            <li>
                            <a href="https://twitter.com/stevievance">
                                <img src={ twitter } alt="twitter" /></a>
                            </li>

                            <li>
                            <a href="https://www.instagram.com/steviev1903/">
                                <img src={ instagram } alt="instagram" /> </a>
                            </li>
                        </ul>
                    </div>

                            <div className="contact-list-info">
                                <ul className="contact-list-info-links">
                                    <li>
                                    <span> +44 (0)7414 518 160 </span>  
                                    </li>
                                    <li>
                                    <a href="https://www.linkedin.com/in/stevevance/">
                                    <span> linkedin.com/in/stevevance</span></a>  
                                    </li>
                                    <li>
                                    <a href="https://github.com/StevieV1903">
                                    <span> StevieV1903</span></a>
                                    </li>
                                    <li>
                                    <a href="https://twitter.com/stevievance">
                                    <span> @StevieVance</span></a>  
                                    </li>
                                    <li>
                                    <a href="https://www.instagram.com/steviev1903/">
                                    <span> StevieV1903</span></a>
                                    </li>
                                </ul>
                            </div>

                            
                        
                    
                </div>
            <div className="contact-form-container">
                <ContactForm />
            </div>
    </div>
     </div>   


        
   
    )
}

export default Contact;