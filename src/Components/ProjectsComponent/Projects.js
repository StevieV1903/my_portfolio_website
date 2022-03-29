import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

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
import calculator from "../../Images/calculator.png"
import miricyl from "../../Images/miricyl.png"
import toptunes from "../../Images/toptunes.png"
import hangman from "../../Images/hangman.png"
import lottery from "../../Images/lottery.png"
import rps from "../../Images/rps.png"

// import ruby from "../../Images/ruby.png";
// import sinatra from "../../Images/sinatra.png";
// import postgresql from "../../Images/postgresql.png";
// import heroku from "../../Images/heroku.png";

import javascript from "../../Images/javascript.png";
// import vue from "../../Images/vue.png";
// import mongodb from "../../Images/mongodb.png";

// import spring from "../../Images/spring.png";
import react from "../../Images/react.png";
// import java from "../../Images/java.png";

// import reactnative from "../../Images/reactnative.png";
// import firebase from "../../Images/firebase.png";
// import githubpages from "../../Images/githubpages.png";
// import netlify from "../../Images/netlify.png";
import nodejs from "../../Images/nodejs.jpg";
import awsAmplify from "../../Images/awsAmplifyLogo.png";

import { webProjects } from "../../Helpers/WebProjects.js"






const Projects = () => {

  useEffect(()=> {
    window.scrollTo( 0, 0 )
  });

  // let technicalIcons

  // const getArray = () => {
  //   webProjects.map(( project ) => {
  //     technicalIcons = project.techIcons
  //   })
  //   return technicalIcons
  // }

 


    // webProjects.map(( project, index ) => {
    //   console.log(project.projectTitle, 
    //     project.projectDetail,
    //     project.projectHeaderImage,
    //     index)

    //     project.techIcons.forEach(( icon, index ) => {
    //       console.log(icon.link, icon.alt)
    //     })
    // })
  // }

  // let technicalIcons

  // const myFunction2 = () => {
  //  webProjects.map(( project )=> {
  //   technicalIcons = project.techIcons
  //   console.log(technicalIcons)
  //   })
  //   technicalIcons.map(( icon ))
    // ( icon => icon.links.forEach(link => console.log(link) ))
  // }


  // function shallowIterator (webProjects) {
  //   for (const key in target) {
  //     console.log(webProjects[key]);
  //   }
  // }


  


  // <div className="slider">
  //           {imageSliderData.map(( slide, index )=> {
  //               // console.log(slide.image)
                
  //               return(
  //                   <div className={ index === currentSlide ? 'slide active' : 'slide' } key={index}>
  //                   {index === currentSlide && (
  //                   <>
  //                   <img className="slider-image" src={slide.image} alt={ slide.alt} key={index} />
  //                   <p className="slider-image-caption">{slide.caption}</p>
  //                   </>
  //                   )}
  //                   </div>
             
  //               )
                
  //           })
            
  //           }

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
        </div>
      </header>

<div className="project-banner">
<div className="project-container">
      {webProjects.map(( project ) => {
        return(
          <>
          
              <div className="project-item">
                <img src={ project.projectHeaderImage } alt={project.projectHeaderAlt} />
                  <h1 className="project-title" >{ project.projectTitle }</h1>
                    <p className="project-detail" >{ project.projectDetail }</p>
              
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

                    { project.deployURL ? <button><a href={project.deployURL} target="_blank"> view deployed site </a></button> : null }
                    { project.sourceURL ? <button><a href={project.sourceURL} target="_blank"> view source code </a></button> : null }

              </div>
            
          </>
        )
      })}
  </div>
</div>

    
    
</>
)
}

export default Projects;