import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    return (
        <>
            <header>
                <div className="homepage-title">
                    <h1>Hello World!</h1>
                    <h2>I'm Steve...</h2>
                    <h3>Software Developer.</h3>
                </div>
            </header>

            {/* <div>
            <Link to="/Projects">
            <div className="hompage-body-link">
            <h1 className="homepage-body-title"> Projects</h1>
            </div>
            </Link>
          </div> */}
        </>
    )
}

export default HomePage;