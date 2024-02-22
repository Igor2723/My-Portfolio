import React from 'react';
import "./AboutMe.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import aboutimg from '../assets/about.webp';

function AboutMe () {
    return(
        <>
            <div id="about" className="container">
                <img src={aboutimg} alt="aboutphoto"/>
                <div className="about-txt">
                   <h3>About me <FontAwesomeIcon icon={faAddressCard} style={{color: "#FFB30D",}} /> </h3>
                   <h2>A passionate self-taught Front-end <br/>React Developer</h2>
                    <p>As a self-taught Front-End React developer, I have wide set of skills in HTML5, CSS3, JavaScript, React and Redux. 
                       Self-teaching model has made me become more resorseful, practical, and efficient when it comes to 
                       developing and problem-solving.
                       Also, as someone who worked on creating mock-ups and vectorized drawings for my own vinyl clocks store, I have a solid set of skills in 
                       Adobe Illustrator and Photoshop.
                       This is when I found my self in web development as I participated in designing, and later maintaining 
                       the web-app for my store.<br/>
                       Since then, I've spent 3+ years learning, and 2+ years working on smaller projects as a freelancer and part-time developer.<br/>
                       I thrive when working in team, but I'm very comfortable at individual work as well.
                       Learning never stops for me,  and I am always up to expending my knowledge!
                    </p>
                </div> 
            </div>
        </>
    )
}
export default AboutMe;