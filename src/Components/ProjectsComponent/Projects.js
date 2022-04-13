import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

import ReturnToTopBtn from "../ReturnToTopBtnComponent/ReturnToTopBtn.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// import gym from "../../Images/ruby-gym.png";
// import worldquiz from "../../Images/worldquiz.png";
// import jobswipe from "../../Images/jobswipe.png";
// import sspca from "../../Images/sspca.png";
// import covid19 from "../../Images/covid19.png";
// import discoveringdunbar from "../../Images/discoveringdunbar.png";
// import snookerscorer from "../../Images/snookerscorer.png";
// import wastenotwantnot from "../../Images/wastenot.png";
// import weatherforecast from "../../Images/weatherforecast.png";
// import munrobagger from "../../Images/munrobagger.png"
// import spacex from "../../Images/spacex.png"
// import jokegen from "../../Images/jokegen.png"
// import calculator from "../../Images/calculator.png"
// import miricyl from "../../Images/miricyl.png"
// import toptunes from "../../Images/toptunes.png"
// import hangman from "../../Images/hangman.png"
// import lottery from "../../Images/lottery.png"
// import rps from "../../Images/rps.png"

// import ruby from "../../Images/ruby.png";
// import sinatra from "../../Images/sinatra.png";
// import postgresql from "../../Images/postgresql.png";
// import heroku from "../../Images/heroku.png";

// import javascript from "../../Images/javascript.png";
// import vue from "../../Images/vue.png";
// import mongodb from "../../Images/mongodb.png";

// import spring from "../../Images/spring.png";
// import react from "../../Images/react.png";
// import java from "../../Images/java.png";

// import reactnative from "../../Images/reactnative.png";
// import firebase from "../../Images/firebase.png";
// import githubpages from "../../Images/githubpages.png";
// import netlify from "../../Images/netlify.png";
// import nodejs from "../../Images/nodejs.jpg";
// import awsAmplify from "../../Images/awsAmplifyLogo.png";

import { webProjects } from "../../Helpers/WebProjects.js"


const Projects = () => {

  useEffect(()=> {
    window.scrollTo( 0, 0 )
  }, [] );

  


  return (
        
<>
      <header>
          <div className="projects-description-container">
            <h1 className="projects-title">
            <FontAwesomeIcon icon={faFolderOpen} />
                        <span> my_Projects</span></h1>
          <hr></hr>
              <p className="projects-description-text">
              I have worked on a number of projects over the last wee while including those completed as part of my Codeclan adventure, as well as projects that I have taken on as part of my own personal development. If you would like any further information about the projects below, please do <Link to="/Contact"> get in touch</Link>!!
              </p>
              <p className="projects-description-text">Hover over the main image to find out more information about each project.</p>
          </div>
      </header>

      <div className="project-banner">
      <div className="project-container">
            {webProjects.map(( project ) => {
              
              return(

              <>
                  <div className="project-item">
                      <h1 className="project-title" >{ project.projectTitle }</h1>

                          {/* <img src={ project.projectHeaderImage } alt={project.projectHeaderAlt} />
                            <p className="project-detail" >{ project.projectDetail }</p> */}
                            <div className="container">
                              <img src={ project.projectHeaderImage } alt={project.projectHeaderAlt} />
                                <div className="overlay" >
                                  <div className="text" >{ project.projectDetail }</div>
                                </div>
                            </div>
                            
                            
                            
                        
                            
                            {project.techIcons.map(( icon )=> {
                            return(
                            <>
                              <div className="project-icon">
                              <img src={icon.link} alt={icon.alt}/>
                              </div>
                            </>
                            )
                          })}
                      <br/>
                    { project.deployURL ? <button className="project-btn"> <a href={project.deployURL} target="_blank"> view deployed site </a></button> : null }
                    { project.sourceURL ? <button className="project-btn"> <a href={project.sourceURL} target="_blank"> view source code </a></button> : null }

                  </div>
            
              </>
        )
      })}
  </div>
</div>

<ReturnToTopBtn />

    
    
</>
)
}

export default Projects;










