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
import snookerscorer from "../../Images/snookerscorer.png";
import wastenotwantnot from "../../Images/wastenot.png";
import weatherforecast from "../../Images/weatherforecast.png";
import munrobagger from "../../Images/munrobagger.png"
import spacex from "../../Images/spacex.png"
import jokegen from "../../Images/jokegen.png"
import calculator from "../../Images/calculator.png"
import miricyl from "../../Images/miricyl.png"
import toptunes from "../../Images/toptunes.png"
import hangman from "../../Images/hangman.png"

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
import netlify from "../../Images/netlify.png";
import nodejs from "../../Images/nodejs.jpg";
import awsAmplify from "../../Images/awsAmplifyLogo.png";





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
        <img src={ heroku } alt="heroku logo" />
        </div>
        <br />

    <button><a href="https://sv-world-quiz.herokuapp.com/" target="_blank"> view deployed site </a></button>
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

    {/* <button><a href="https://rubygymnasium.herokuapp.com/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/the_ruby_gymnasium" target="_blank"> view source code </a></button> */}
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
    <button><a href="https://github.com/StevieV1903/cx_sspca_animal_info" target="_blank"> view source code </a></button>
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

        <div className="project-item">
          <img src={ snookerscorer } alt="snooker scorer screenshot" />
          <h1 className="project-title">Snooker Scorer</h1>
          <p className="project-detail">
          This was a group project (x3) post Codeclan. It was built using Javascript and React. The aim of the app is to keep score during a snooker match, either watching or playing with a friend. It includes a set-up page that stores players names and lets you pick who is to break first.
        </p>
        <div className="project-icon">
        <img src={ react } alt="react logo" />
        <img src={ javascript } alt="javascript logo" />
        <img src={ netlify } alt="netlify logo" />
        </div>
        <br />

    <button><a href="https://snooker-scorer-app.netlify.app" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/snooker_scorer_cjs" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ wastenotwantnot } alt="waste not want not screenshot" />
          <h1 className="project-title">Waste-Not Want-Not</h1>
          <p className="project-detail">
          This was a group project (x3) post Codeclan. It was built using Javascript and ReactNative. The app aims to minimise food waste. It fetches a data set from an external API and provides users with recipe suggestions based on specific ingredients. There is also an intolerance filter.
        </p>
        <div className="project-icon">
        <img src={ reactnative } alt="react native logo" />
        <img src={ javascript } alt="javascript logo" />
        {/* <img src={ githubpages } alt="git hub pages logo" /> */}
        </div>
        <br />

    {/* <button><a href="https://snooker-scorer-app.netlify.app" target="_blank"> view deployed site </a></button> */}
    <button><a href="https://github.com/StevieV1903/food_app" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ weatherforecast } alt="weather app screenshot" />
          <h1 className="project-title">Weather Forecaster</h1>
          <p className="project-detail">
          This was a group project (x3) post Codeclan. It was built using Javascript and Vue as the webframework. Using geolocation to locate a users coordinates, it fetches data from two API's and provides users with current weather and a 7-day forecast based on their location.
        </p>
        <div className="project-icon">
        <img src={ vue } alt="vue logo" />
        <img src={ javascript } alt="javascript logo" />
        <img src={ netlify } alt="netlify logo" />
        </div>
        <br />

    <button><a href="https://weatherforecaster-app.netlify.app/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/weather_app" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ munrobagger } alt="munro bagger screenshot" />
          <h1 className="project-title">Munro-Bagger</h1>
          <p className="project-detail">
          A group project (x3). Web-app built using Javascript and React as the webframework. Using tomtom maps sdk and a munro api, it fetches and plots data onto a map within the UI. Using firebase database it implements user authentication and tracks users completed munros.
        </p>
        <div className="project-icon">
        <img src={ react } alt="react logo" />
        <img src={ javascript } alt="javascript logo" />
        <img src={ firebase } alt="firebase logo" />
        </div>
        <br />

    <button><a href="https://munro-bagger-cca2f.web.app/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/munro_bagging_app" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ spacex } alt="space-x" />
          <h1 className="project-title">Space-X Launches</h1>
          <p className="project-detail">
          An individual project. Web-app built using Javascript and React as the webframework. Using a number of spaceX apis, it fetches and lists past and future rocket launches. It also allows the user to filter all the launches by date and sort launches by ascending and descending order.
        </p>
          <div className="project-icon">
        <img src={ react } alt="react logo" />
        <img src={ javascript } alt="javascript logo" />
        </div>
        <br />

    {/* <button><a href="https://munro-bagger-cca2f.web.app/" target="_blank"> view deployed site </a></button> */}
    <button><a href="https://github.com/StevieV1903/spacex_tracker" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
          <img src={ jokegen } alt="joke generator" />
          <h1 className="project-title">myJoke Generator</h1>
          <p className="project-detail">
          An individual project. myJoke Generator is a fully responsive React.js SPA that makes a fetch to an external api and renders the joke on the click of a button and also requires the user to click a seperate button to reveal the punchline. Also includes some pretty awesome button animations.
        </p>
        <div className="project-icon">
        <img src={ react } alt="react logo" />
        <img src={ javascript } alt="javascript logo" />
        <img src={ netlify } alt="netlify logo" />
        </div>
        <br />

    <button><a href="https://myjokegenerator.netlify.app/" target="_blank"> view deployed site </a></button>
    <button><a href="https://github.com/StevieV1903/joke_generator_application" target="_blank"> view source code </a></button>
        </div>

        <div className="project-item">
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
        </div>

        <div className="project-item">
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
    {/* <button><a href="https://github.com/StevieV1903/calculator_app" target="_blank"> view source code </a></button> */}
        </div>

        <div className="project-item">
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
        </div>

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

        
        
        </div>
        </div>
    
    
        </>
        )
}

export default Projects;