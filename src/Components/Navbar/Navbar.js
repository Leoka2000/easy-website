import React, {useEffect, useState, useRef} from 'react'
import Easytramitt from '../../Easytramitt.jpg';
import './Navbar.css';
import {Link as LinkRoll} from 'react-scroll';
import Easywtbg from '../../Easywtbg.png';
import {Link} from 'react-router-dom'



import {FaBars} from  'react-icons/fa';
import {FaTimes} from 'react-icons/fa';

function Navbar () {
	const [navbar, setNavbar] = useState(true);
  const navRef = useRef();
  

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};


  const navbarScroll = () => {
	if (window.scrollY >= 100) {
		setNavbar(false)
	
	} else {
		setNavbar(true)
		
	}
  }

  window.addEventListener('scroll', navbarScroll)
  
	
	return (
		<header id='navbar' className={ navbar ? 'nav-header' : 'activated'}>
<Link style={{ textDecoration: 'none' }} to='/'>
			<img src={Easywtbg}></img>
</Link>
			<nav className='nav' ref={navRef}>
				<ul className='nav-ul'>
					<li ><LinkRoll  onClick={showNavbar} to="bio" spy={true} smooth={true} offset={-100} duration={500}>SOBRE</LinkRoll></li> {/*instead of the <a> tags, these are going to be links and the "two" attribute is like a href in a <a> tag*/}
					<li> <LinkRoll  onClick={showNavbar} to="services" spy={true} smooth={true} offset={-120} duration={500}>SERVIÇOS</LinkRoll></li>
					<li><LinkRoll  onClick={showNavbar} to="depoimentos" spy={true} smooth={true} offset={-120} duration={500}>DEPOIMENTOS</LinkRoll></li>
					<li><LinkRoll  onClick={showNavbar} to="contato" spy={true} smooth={true} offset={-100} duration={500}>CONTATO</LinkRoll> </li>
					<li><LinkRoll  onClick={showNavbar} to="portfólio" spy={true} smooth={true} offset={-100} duration={500}>PORTFÓLIO</LinkRoll></li>
				</ul>  {/*offset adjusts the bahavior on how the page will scroll*/}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}


export default Navbar
