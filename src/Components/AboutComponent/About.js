import React, { useEffect } from "react";
import "./About.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import headshot from "../../Images/headshot_BW.jpg";



const About = () => {

  useEffect(()=> {
    window.scrollTo( 0, 0 )
});

    return (
        <>
        <header>
        <div className="about-description-container">
        <h1 className="about-title">
        <FontAwesomeIcon icon={faUser} />
                    <span> About_Me</span></h1>
        <hr></hr>
        </div>
      </header>
        <div className="about-container">
          <img
            className="about-headshot"
            src={headshot}
            alt="headshot of steve vance"
          />
            <div className="about-text">
                <h1>
                Welcome to my portfolio site.
                </h1>
                <p>
                I'm a Software Developer currently living in Dunbar, East Lothian. I have graduated from <a href="https://codeclan.com/">
                Codeclan</a>, a sixteen-week intensive Professional Software Development course involving 800+ hours of coding. Whilst on the course I attained an SCQF Level 8 PDA in Professional Software Development.
                </p>
                <p>
                I like to think of myself as a client-centred developer motivated to deliver software solutions that truly exceed customer expectations. With excellent communication skills, I enjoy working collaboratively or equally well independently. 
                </p>
                <p> 
                Seeking a role in the tech sector, I am enthusiastic, supportive, empathetic, loyal and driven to improve myself and those around me. Highly motivated, enthusiastic and  inclusive, I really thrive working in a collaborative and fast paced environment.
                </p>
                <p>
                The challenge of working with complex problems is one that I thoroughly enjoy and embrace. I would love the opportunity to put this new technical skillset into practice within a dynamic company that encourages further learning and supported development.
                </p>
                <p> 
                Additionally, I bring several years experience where I was fortunate enough to take on a number of project management and digital roles, which have provided me with a varied skill set, including planning & prioritisation, working towards tight deadlines whilst maintaining high quality standards and the ability to liaise empathetically with customers. 
                </p>
                <p>
                In my spare time, I love to play chess, cricket and table tennis. I also enjoy walking, cycling, cooking pizza and ofcourse, practising my coding skills. 
                </p>

            
          </div> 
          
        </div>
    </>
  );
};

export default About;