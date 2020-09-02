import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import gym from "../../Images/ruby-gym.png";
import worldquiz from "../../Images/worldquiz.png";
import jobswipe from "../../Images/jobswipe.png";
import sspca from "../../Images/sspca.png";
import covid19 from "../../Images/covid19.png";
import discoveringdunbar from "../../Images/discoveringdunbar.png";

import ruby from "../../Images/ruby.png";
import sinatra from "../../Images/sinatra.png";
import postgresql from "../../Images/postgresql.png";
import heroku from "../../Images/heroku.png";

import javascript from "../../Images/javascript.png";
import vue from "../../Images/vue.png";
import mongodb from "../../Images/mongodb.png";

import spring from "../../Images/spring.png";
import react from "../../Images/react.png";
import java from "../../Images/java.png";

import reactnative from "../../Images/reactnative.png";
import firebase from "../../Images/firebase.png";
import githubpages from "../../Images/githubpages.png";





const Projects = () => {

  useEffect(()=> {
    window.scrollTo( 0, 0 )
  });

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

      <div className="projects-banner">
        <div className="project-container">
        
        <div className="project-item">
          <img src={ gym } alt="gym app screenshot" />
          <h1 className="project-title"> The Gymnasium</h1>
          <p className="project-detail">
          The Gymnasium was my very first solo project at Codeclan built from scratch in six days, after just five weeks of coding. It is built using Ruby, structured using REST, MVC and OOP principles, Sinatra and integration with a PostgreSQL CRUD multi-relational database.
        </p>
        <div className="project-icon">
        <img src={ ruby } alt="ruby logo" />
        <img src={ sinatra } alt="sinatra logo" />
        <img src={ postgresql } alt="postgresql logo" />
        <img src={ heroku } alt="heroku logo" />
        </div>
        <br />

    <button><a href="https://rubygymnasium.herokuapp.com/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/the_ruby_gymnasium" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ worldquiz } alt="world map screenshot" />
          <h1 className="project-title">World Map Quiz</h1>
          <p className="project-detail">
          The World Map Quiz is an educational interactive game for children based around countries and capital cities. This was my second project at Codeclan, this time as part of a group (x4). Built from scratch in six days, it is built using JavaScript with Vue as the web framework.
        </p>
        <div className="project-icon">
        <img src={ javascript } alt="javascript logo" />
        <img src={ vue } alt="vue logo" />
        <img src={ mongodb } alt="mongodb logo" />
        </div>
        <br />

    <button><a href="https://rubygymnasium.herokuapp.com/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/world_quiz_group_project" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ jobswipe } alt="jobswipe screenshot" />
          <h1 className="project-title">JobSwipe</h1>
          <p className="project-detail">
          This was my final project as part of the Codeclan course. Built from scratch, it was a group project (x5) that was designed as a web app to help look for jobs in the tech sector. It fetches an API from 'Reed.co.uk' and uses a React.js front-end connected to a Java / Spring back-end. 
        </p>
        <div className="project-icon">
        <img src={ react } alt="react logo" />
        <img src={ javascript } alt="javascript logo" />
        <img src={ java } alt="java logo" />
        <img src={ spring } alt="spring logo" />
        </div>
        <br />

    <button><a href="https://rubygymnasium.herokuapp.com/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/the_ruby_gymnasium" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ sspca } alt="sspac app screenshot" />
          <h1 className="project-title">Scottish SPCA</h1>
          <p className="project-detail">
          This was a volunteering experience supported by Scottish SPCA and Codeclan. A group project (x3) given an existing codebase to be developed further. This was a cross-platform mobile application to help users look after their pets. It was built React Native with a Firebase back-end.
        </p>
        <div className="project-icon">
        <img src={ reactnative } alt="react native logo" />
        <img src={ javascript } alt="javascript logo" />
        <img src={ firebase } alt="firebase logo" />
        </div>
        <br />

    {/* <button><a href="https://rubygymnasium.herokuapp.com/" target="_blank"> view deployed site </a></button> */}
    <button><a href="https://github.com/StevieV1903/the_ruby_gymnasium" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ covid19 } alt="covid app screenshot" />
          <h1 className="project-title">COVID-19 Tracker</h1>
          <p className="project-detail">
          This was my first solo project, post Codeclan and at the beginning of lockdown during the global pandemic. I built an SPA COVID-19 country tracker that fetches an external API. I used Javascript and React Native. It also developed my experience using IOS and Andriod emulators. 
        </p>
        <div className="project-icon">
        <img src={ reactnative } alt="react native logo" />
        <img src={ javascript } alt="javascript logo" />
        </div>
        <br />

    {/* <button><a href="https://rubygymnasium.herokuapp.com/" target="_blank"> view deployed site </a></button> */}
    <button><a href="https://github.com/StevieV1903/solo_react_native_api_May2020" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ discoveringdunbar } alt="discovering dunbar screenshot" />
          <h1 className="project-title">Discovering Dunbar</h1>
          <p className="project-detail">
          This project is a fully responsive website, using Javascript and React. The aim of the website is to encourage people to shop local and use independent traders. It helped my develop my CSS skills and also really focus on media queries to deliver the responsive element of the site.
        </p>
        <div className="project-icon">
        <img src={ react } alt="react logo" />
        <img src={ javascript } alt="javascript logo" />
        <img src={ githubpages } alt="git hub pages logo" />
        </div>
        <br />

    <button><a href="https://steviev1903.github.io/react-dunbar-pages/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/react-dunbar-pages" target="_blank"> view source code </a></button>
        </div>
        
        
        </div>
        </div>
    
        </>
        )
}

export default Projects;