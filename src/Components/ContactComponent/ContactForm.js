import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './ContactForm.css'

import twitter from "../../Images/twitter.png";
import instagram from "../../Images/instagram.png";
import linkedin from "../../Images/linkedin.png";
import github from "../../Images/github2.png";


const ContactForm = () => {

    const [ userName, setUserName ]  = useState ("")
    const [ userEmail, setUserEmail ] = useState ("")
    const [ message, setMessage ] = useState ("")


    
  function emailMe(event){
      event.preventDefault();

    emailjs.sendForm('gmail', 'contact_form', event.target, 'user_UtfJoidPGm4p97Zk0Pplz')
      .then((result) => {
        console.log(result.text);
        alert('Your mail has been sent!')
    }, (error) => {
        console.log(error.text)
        alert('OOPS something went wrong, please try again!')
    });
      document.getElementById("user_name").value=""
      document.getElementById("user_email").value=""
      document.getElementById("myText").value=""
  }  


  return (
    
    <>
    <div className="contact-header">
        <h1 className="contact-header-title">
          Contact Form
        </h1>
        <ul className="contact-header-icons">
              <li>
              <a href="https://www.linkedin.com/in/stevevance/">
                  <img src={ linkedin } alt="linkedin" /></a>
              </li>

              <li>
              <a href="https://github.com/StevieV1903">
                  <img src={ github } alt="github" /></a>
              </li>

              <li>
              <a href="https://twitter.com/stevievance">
                  <img src={ twitter } alt="twitter" /></a>
              </li>

              <li>
              <a href="https://www.instagram.com/steviev1903/">
                  <img src={ instagram } alt="instagram" /></a>
              </li>
          </ul>
      </div>
        
      <form onSubmit={emailMe}>
      <label>Your Name:
      <br></br><input type="text" id="user_name" name="user_name" placeholder="Your Name..." required onChange={event => setUserName(event.target.value)}/>
      </label>
      <br></br>
      <br></br>

      <label>Your Email Address:
      <br></br><input type="text" id="user_email" name="user_email" placeholder="Your Email..." required onChange={event => setUserEmail(event.target.value)}/>
      </label>
      <br></br>
      <br></br>

      <label>Your Message:
      <br></br><textarea id="myText" name="message" placeholder="Your Message..." required onChange={event => setMessage(event.target.value)}></textarea>
      </label>
      <br></br>

      <input type="submit" value="Send" />
      <br></br>

      </form>

    </>
  )
}

export default ContactForm;