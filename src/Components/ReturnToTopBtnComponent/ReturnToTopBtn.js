import React, { useEffect, useState } from 'react';
import "./ReturnToTopBtn.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowCircleUp, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';






const ReturnToTopBtn = () => {

    const [ isButtonVisible, setIsButtonVisible ] = useState( false )

    useEffect(()=> {
        window.addEventListener('scroll', showReturnToTopButton ) //adds event listener to user scrolling

        return () => {
            window.removeEventListener( 'scroll', showReturnToTopButton ) // return function removes event listener when component unmounts
        }

    }, [])

    const showReturnToTopButton = () => {
        if( window.pageYOffset >= 500 ) { //when user scrolls 200px changes state to true to IsButtonVisible
            setIsButtonVisible( true )
        } else {
            setIsButtonVisible( false )
        }
    };

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }


    return(
        <>
            { isButtonVisible && 
            <button className="top" onClick={scrollToTop} >
                {/* <i class="fas fa-arrow-up my-float"></i> */}
                {/* <FontAwesomeIcon icon={faArrowAltCircleUp} /> */}
                <FontAwesomeIcon icon={faArrowCircleUp} />
                {/* <FontAwesomeIcon icon={faLongArrowAltUp} /> */}
                {/* <i class="fa-solid fa-arrow-up-from-line"></i> */}
                {/* <img className="arrowUp" src={arrowUp} alt="up arrow" /> */}
            </button>}   
        </>

    )

};

export default ReturnToTopBtn;

