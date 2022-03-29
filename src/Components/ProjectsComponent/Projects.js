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
      

      <div className="projects-banner">
        <div className="project-container">

        {/* <div className="project-item">
          <img src={ calculator } alt="calculator" />
          <h1 className="project-title">Calculator App</h1>
          <p className="project-detail">
          A paired project. Responsive app built using React.js as the webframework and hosted on AWS Amplify. Using grid style CSS for the layout and react hooks and state, it acts and behaves like a calculator should, allowing the user to complete mathematical operations.
        </p>
          <div className="project-icon">
        <img src={ react } alt="react logo" />
        <img src={ javascript } alt="javascript logo" />
        <img src={ awsAmplify } alt="AWS Amplify" />
        </div>
        <br />

    <button><a href="https://main.d32umybxq09b6x.amplifyapp.com/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/calculator_app" target="_blank"> view source code </a></button>
        </div> */}

        {/* <div className="project-item">
          <img src={ miricyl } alt="miricyl app" />
          <h1 className="project-title">Miricyl App</h1>
          <p className="project-detail">
          Volunteering with the Scottish Tech Army assisting Miricyl, a charity that help children and young people affected by mental illness. Working as part of the front-end development team building the app from scratch, using React.js, Node.js, Express, MySQL and MS Azure.
        </p>
          <div className="project-icon">
        <img src={ react } alt="react logo" />
        <img src={ javascript } alt="javascript logo" />
        <img src={ nodejs } alt="node js logo" />
        </div>
        <br />

    <button><a href="https://help.miricyl.org/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/calculator_app" target="_blank"> view source code </a></button>
        </div> */}

        {/* <div className="project-item">
          <img src={ toptunes } alt="top tunes" />
          <h1 className="project-title">Top 40 Tunes</h1>
          <p className="project-detail">
          An individual project. A responsive SPA using React.js. It fetches an api from apple music and displays the most popular tunes. It also lets the user listen to a 30 sec. sample of the song with the play & pause toggle. The app also lets the user toggle between light and dark mode.
        </p>
          <div className="project-icon">
        <img src={ react } alt="react" />
        <img src={ javascript } alt="javascript" />
        <img src={ awsAmplify } alt="AWS Amplify" />
        </div>
        <br />

    <button><a href="https://master.d2fykhzd9mmkes.amplifyapp.com/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/react_api_lab" target="_blank"> view source code </a></button>
        </div> */}

        <div className="project-item">
          <img src={ hangman } alt="hangman" />
          <h1 className="project-title">Hangman Game</h1>
          <p className="project-detail">
          A group project (x3). A responsive SPA using React.js. It fetches from many external apis based on the category chosen. A typical hangman game, the user has seven lives and can choose to reveal a hint if required. It displays an image based on number of wrong guesses.
        </p>
          <div className="project-icon">
        <img src={ react } alt="react" />
        <img src={ javascript } alt="javascript" />
        <img src={ awsAmplify } alt="AWS Amplify" />
        </div>
        <br />

    <button><a href="https://main.d19fxw1vralx7u.amplifyapp.com/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/word_game" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ lottery } alt="lottery picker" />
          <h1 className="project-title">Lottery Numbers</h1>
          <p className="project-detail">
          An individual project. An SPA that is written in javascript and uses React as the web framework. The application allows users to select from a choice of lottery games and proceeds to select random lottery numbers for the selected game based on the requirements and number ranges.
        </p>
          <div className="project-icon">
        <img src={ react } alt="react" />
        <img src={ javascript } alt="javascript" />
        <img src={ awsAmplify } alt="AWS Amplify" />
        </div>
        <br />

    <button><a href="https://main.d1ccjr7ryl4ter.amplifyapp.com/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/lottery_numbers_picker" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ rps } alt="rock paper scisscors" />
          <h1 className="project-title">Rock, Paper, Scissors</h1>
          <p className="project-detail">
          An individual project. A simple Rock, Paper, Scissors game, written in javascript, using React as the web framework. It allows a player to pick a weapon and play against the computer's randomly drawn weapon. There is a score tracker winner and the scores can be reset at any time.
        </p>
          <div className="project-icon">
        <img src={ react } alt="react" />
        <img src={ javascript } alt="javascript" />
        <img src={ awsAmplify } alt="AWS Amplify" />
        </div>
        <br />

    <button><a href="https://main.d8crcfdicg30c.amplifyapp.com/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/rock_paper_scissors" target="_blank"> view source code </a></button>
        </div>

        
        
        </div>
        </div>
    
    
        </>
        )
}

export default Projects;