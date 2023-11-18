import React, { useEffect, useState, useRef } from 'react'
import Easytramitt from '../../Easytramitt.jpg';
import './NavbarContact.css';
import { Link, useNavigate } from 'react-router-dom'



import Easywtbg from '../../Easywtbg.png';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

function NavbarContact() {
	const navigate = useNavigate();




	return (
		<header className='nav-header-contact'>
			<Link to='/'>
				<img src={Easywtbg}></img>
			</Link>
			<nav className='nav-contact'>
				<ul className='nav-contact-ul'>
					<li><Link style={{ textDecoration: 'none' }} onClick={() => navigate(-1)}>HOME</Link></li> {/*instead of the <a> tags, these are going to be links and the "two" attribute is like a href in a <a> tag*/}
				</ul>  {/*offset adjusts the bahavior on how the page will scroll*/}
			</nav>
		</header>
	);
}


export default NavbarContact
