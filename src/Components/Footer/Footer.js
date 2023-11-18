import React from 'react'
import Easytramitt from '../../../src/Easytramitt.jpg';
import './Footer.css'
import { IoLogoLinkedin } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoInstagram } from 'react-icons/io'
import Easywtbg from '../../../src/Easywtbg.png';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='main-footer-wrapper'>
          <div className='footer-individual-wrapper-1'>
          <Link to="hero" spy={true} smooth={true} offset={120} duration={500}> <img className='easy-logo' src={Easywtbg}></img></Link>
          </div>
          <div className='footer-individual-wrapper-2'>
            <p>Acesse nossas redes sociais e mantenha-se atualizado sobre nossos serviços!</p>
          </div>
          <div className='footer-individual-wrapper-3'>
            <div className='icons-wrapper'>
              <a href='https://www.linkedin.com/company/easy-tramitt/'> < IoLogoLinkedin /> </a>
              <a href='https://www.instagram.com/easytramitt/'> < IoLogoInstagram /> </a>
            </div>
          </div>
        </div>
        <div className='text-wrapper-footer'>
          <p className='leo'>Developed by<a href='https://www.linkedin.com/in/leoreus/'>Leo Reus Oliveira</a></p>
        </div>
      </footer>
    </>
  )
}

export default Footer
