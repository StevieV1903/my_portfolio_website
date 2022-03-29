import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import homeImg from '../../Images/homeGraphic.svg';

const HomePage = () => {

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    return (
        <>
        <div className="home-container">
           
            <div className="home-title-container">
                <div className="home-title">

                    <div className="home-title-comm">
                        <p>c&lt;&gt;mmunicate</p>
                    </div>
                    <div className="home-title-collab">
                        <p>c&lt;&gt;llaborate</p>
                    </div>
                    <div className="home-title-code">
                        <p>c&lt;&gt;de</p>
                    </div>
                </div>
                
                <div className="home-image-container">
                    <img className="home-image" src={homeImg} alt="digital graphic" />
                </div>
            </div>
           
                <div className="home-button-container">
                    <button className="home-button">
                        <Link to="/Projects">
                        <FontAwesomeIcon icon={faFolderOpen} />
                        <span>  view_my_projects</span>
                        </Link>
                    </button>
                </div>
        </div>
        </>
    )
}

export default HomePage;



