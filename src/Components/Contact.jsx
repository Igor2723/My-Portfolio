import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Reach out to me! <FontAwesomeIcon icon={faPaperPlane} style={{color: "#262626",}} /></h1>
      <div className="contact-container">
        <div className="email-container">
          <FontAwesomeIcon className="email-icon" icon={faEnvelope} style={{color: "#F9A31C",}} />
          <div className="email-txt">
            <h3> Send me an email!</h3>
            <a href="mailto:igorbussineszivkovic95@gmail.com">igorbussineszivkovic95@gmail.com</a>
          </div>
        </div>
        <div className="social-container">
          <h3> Follow Me!</h3>
          <div className="icons-container">
            <a href="https://github.com/Igor2723" target="_blank"><FontAwesomeIcon className="social-icon" icon={faGithub} style={{color: "#6E6E6E",}} /></a>
            <a href="#"><FontAwesomeIcon className="social-icon" icon={faLinkedin} style={{color: "#6E6E6E",}} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
