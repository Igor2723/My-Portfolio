import React,{useState} from 'react';
import {Icon} from 'react-icons-kit';
import {menu} from 'react-icons-kit/feather/menu';
import {x} from 'react-icons-kit/feather/x';
import "./Navbar.css";
import { HashLink as Link } from 'react-router-hash-link';

function Navbar () {

  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  const closeMenu = () => setToggle(false)

  return (
    <nav className={toggle?'navbar expanded':'navbar'}>
		<h2 className="nav-logo"><Link to="#home" smooth onClick={closeMenu}> IgDev</Link></h2>
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle?<Icon icon={x} size={35}/>:<Icon icon={menu} size={35}/>}
        </div>
        <ul className='links'>
          <li><Link to="#home" smooth onClick={closeMenu}>Home</Link></li>
          <li><Link to="#about" smooth onClick={closeMenu}>About</Link></li>
          <li><Link to="#portfolio" smooth onClick={closeMenu}>Portfolio</Link></li>
          <li><Link to="#contact" smooth onClick={closeMenu}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;



/*import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";
import {Link} from 'react-scroll';

export default function Navbar() {
	const navRef = useRef();
  
	const toggleNavbar = () => {
	  navRef.current.classList.toggle(
		"responsive_nav"
	  );
	};
  
	const linkProps = {
	  onClick: toggleNavbar, 
	  spy: true,
	  smooth: true,
	  offset: -100,
	  duration: 500,
	};
  
	return (
	  <header>
		<nav ref={navRef}>  
		  <Link to="home" {...linkProps}>Home</Link>
		  <Link to="about" {...linkProps}>About me</Link>
		  <Link to="mywork" {...linkProps}>My Work</Link>
		  <Link to="contact" {...linkProps}>Contact</Link>
		  <button
			className="nav-btn nav-close-btn"
			onClick={toggleNavbar}
		  >
			<FontAwesomeIcon icon={faCircleXmark} style={{ color: "#FFB30D" }} 
   />
		  </button>
		</nav>
		<button
		  className="nav-btn nav-open"
		  onClick={toggleNavbar}
		>
		  <FontAwesomeIcon icon={faBars} style={{ color: "#FFB30D" }} />
		</button>
	  </header>
	);
  }
*/


