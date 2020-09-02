import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import headshot from "../../Images/headshot_BW.jpg";

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
                        c&lt;&gt;mmunicate
                    </div>
                    <div className="home-title-collab">
                        c&lt;&gt;llaborate
                    </div>
                    <div className="home-title-code">
                        c&lt;&gt;de
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
        </div>
        </>
    )
}

export default HomePage;