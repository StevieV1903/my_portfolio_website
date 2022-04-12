import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import svLogo from '../../Images/svLogo.png'

const NavBar = () => {
    
    return (


        <nav className="navbar">
            
            <div className="title">
                <a href="/"><img src={ svLogo }></img></a>
            </div>

        
            <div className="navlist"> 
                
                <Link to="/" className="navlink-icon">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link to="/" className="navlink-text">
                    home
                </Link>

                <Link to="/about" className="navlink-icon">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="/about" className="navlink-text">
                    about
                </Link>

                <Link to="/Projects" className="navlink-icon">
                <FontAwesomeIcon icon={faFolderOpen} />
                </Link>
                <Link to="/Projects" className="navlink-text">
                    projects
                </Link>
                
                <Link to="/Contact" className="navlink-icon">
                <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                <Link to="/Contact" className="navlink-text">
                contact
                </Link>
                
            </div>

        </nav>


    
    )


}

export default NavBar;