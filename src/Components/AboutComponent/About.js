import React from "react";
import './About.css'
import headshot from "../../Images/headshot_BW.jpg"

const About = () => {

    return (
        <>
        <div className="about-container">
          <img
            className="about-headshot"
            src={headshot}
            alt="headshot of steve vance"
          />
            <div className="about-text">
                <h1>
                Hi, I'm Steve Vance
                </h1>
                <p>
                I'm a Software Developer currently living in Dunbar, East Lothian and I have recently graduated from <a href="https://codeclan.com/">
                Codeclan</a>.
                </p>
                <p>
                I like to think of myself as a client centred developer motivated to deliver software solutions that truly exceed customer expectations. With excellent communication skills, I enjoy working collaboratively or equally well independently. 
                </p>
                <p> 
                Seeking a role in the tech sector, I am enthusiastic, supportive, empathetic, loyal and driven to improve myself and those around me. I would love the opportunity to put this new technical skillset into practice within a dynamic company that encourages further learning and supported development.
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