import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./Portfolio.css";

function Portfolio () {
    return(
        <>
            <div id="portfolio" className="portfolio-container">
                <h3>Portoflio <FontAwesomeIcon icon={faStar} style={{color: "#F9A31C",}} /></h3>
                <div className="vcart-container">
                    <div className="about-app-container">
                        <a href="https://vinyl-craft-art.netlify.app" target='blank'>
                            <h4>Vinyl Craft Art</h4>
                        </a>    
                        <p>
                        A redesigned clone of my original 'Vinyl Clocks Art' online store.<br/>
                        Simplistic with emphasized double borders, this web app distinguishes itself from the original one through 
                        both styling and functionality.
                        The styling is mostly being dictated by the products themselves, as well as conspicuous double borders 
                        and font style.
                        Technology used to build this app consists of HTML5, CSS3, JavaScript, React, and a little bit of Redux 
                        along with some external libraries such as Swiper.js.
                        As this was my first independent full-scale project, I tried to give my best in combining these 
                        technologies in the best way possible in order to achieve both simple, 
                        yet unique, design and better functionality and performances.
                        Furthermore, all the products were entirely made by me, 
                        as I wanted to present a small part of my designing skills when it comes to creating mock-ups and vectorized drawings. 
                        </p>
                    </div>
        
                    <a href="https://vinyl-craft-art.netlify.app" target='blank'>
                        <iframe src="https://vinyl-craft-art.netlify.app" className="iFrame" target="blank" title="Vinyl Craft Art"/>
                    </a>
                    
                </div>
            </div>
        </>
    )
}
export default Portfolio;