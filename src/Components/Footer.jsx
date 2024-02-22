import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

function Footer() {
    return (
    <footer>
        <h4>Copyright &copy; 2024. All rights reserved</h4>
        <div className="footer-container">
            <a href="https://github.com/Igor2723" title="GitHub" target="_blank"><FontAwesomeIcon className="contact-icon" icon={faGithub} style={{color: "#FFFFFF",}} /></a>
            <a href="https://www.linkedin.com/in/igor-zivkovic-5846b6252/" title="LinkedIn" target="_blank"><FontAwesomeIcon className="contact-icon" icon={faLinkedin} style={{color: "#FFFFFF",}} /></a>
            <a href="mailto:igorbussineszivkovic95@gmail.com"><FontAwesomeIcon title="Gmail" className="contact-icon" icon={faEnvelope} style={{color: "#FFFFFF",}} /></a>
        </div>
    </footer>
    )
}

export default Footer;
