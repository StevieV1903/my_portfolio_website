import React from "react";
import './Footer.css';

import ruby from "../../Images/ruby.png";
import javascript from "../../Images/javascript.png";
import java from "../../Images/java.png";
import postgresql from "../../Images/postgresql.png";
import sinatra from "../../Images/sinatra.png";
import vue from "../../Images/vue.png";
import mongodb from "../../Images/mongodb.png";
import react from "../../Images/react.png";
import spring from "../../Images/spring.png";
import reactnative from "../../Images/reactnative.png";
import firebase from "../../Images/firebase.png";
import html from "../../Images/html.jpg";
import css from "../../Images/css.png";
import github from "../../Images/github.png";
import heroku from "../../Images/heroku.png";
import nodejs from "../../Images/nodejs.jpg";

const Footer = () => {

    return (
        <div className="footer">
            
            <div className="footer-title">
                <p>[ my_Techstack ]</p>
            </div>
            

            <ul className="footer-list">
                <li className="footer-item"> 
                    <img src={ ruby } alt="ruby logo" />
                </li>

                <li className="footer-item">
                    <img src={ javascript } alt="javascript logo" />
                </li>

                <li className="footer-item">
                    <img src={ java } alt="java logo" />
                </li>

                <li className="footer-item">
                    <img src={ html } alt="html five logo" />
                </li>

                <li className="footer-item">
                    <img src={ css } alt="css three logo" />
                </li>

                <li className="footer-item">
                    <img src={ postgresql } alt="postgresql logo" />
                </li>

                <li className="footer-item">
                    <img src={ sinatra } alt="sinatra logo" />
                </li>

                <li className="footer-item">
                    <img src={ nodejs } alt="node js logo" />
                </li>

                <li className="footer-item">
                    <img src={ vue } alt="vue logo" />
                </li>

                <li className="footer-item">
                    <img src={ mongodb } alt="mongodb logo" />
                </li>

                <li className="footer-item">
                    <img src={ react } alt="react logo" />
                </li>

                <li className="footer-item">
                    <img src={ spring } alt="spring logo" />
                </li>

                <li className="footer-item">
                    <img src={ reactnative } alt="react native logo" />
                </li>

                <li className="footer-item">
                    <img src={ firebase } alt="firebase logo" />
                </li>

                <li className="footer-item">
                    <img src={ heroku } alt="heroku logo" />
                </li>

                <li className="footer-item">
                    <img src={ github } alt="github logo" />
                </li>
            </ul>
        </div>
    )
}

export default Footer;