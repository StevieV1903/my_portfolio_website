import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    
    return (


        <nav className="navbar">
            
            <div className="title">
                <span> StevieV1903 </span>
            </div>

            <ul className="navlist"> 

                <li>
                    <Link to="/" className="navlink">
                    <FontAwesomeIcon icon={faHome} />
                    <span>  home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/About" className="navlink">
                    <FontAwesomeIcon icon={faUser} />
                    <span>  about</span>
                    </Link> 
                </li>

                <li><Link to="/Projects" className="navlink">
                    <FontAwesomeIcon icon={faFolderOpen} />
                    <span>  projects</span>
                    </Link>
                </li>

                <li>
                    <Link to="/Contact" className="navlink">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>  contact</span>
                    </Link>
                </li>

            </ul>

        </nav>


    //    <nav className="navbar">
            
    //         <div className="title">
    //             <h2>StevieV1903</h2>
    //         </div>

    //         <ul className="navlist"> 

    //             <li>
    //                 <Link to="/">
    //                 <FontAwesomeIcon icon={faHome} />
    //                 Home
    //                 </Link>
    //             </li>

    //             <li>
    //                 <Link to="/About">
    //                 <FontAwesomeIcon icon={faUser} />
    //                     About
    //                 </Link> 
    //             </li>

    //             <li><Link to="/Projects">
    //             <FontAwesomeIcon icon={faFolderOpen} />
    //                 Projects
    //                 </Link>
    //             </li>

    //             <li>
    //                 <Link to="/Contact">
    //                 <FontAwesomeIcon icon={faEnvelope} />
    //                     Contact
    //                 </Link>
    //             </li>

    //         </ul>

    //     </nav>
    )


}

export default NavBar;