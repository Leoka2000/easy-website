import React, {useEffect} from 'react'
import LannaraBody from '../../../src/LannaraBody.png'
import {IoLogoLinkedin} from 'react-icons/io';
import {BsFacebook} from  'react-icons/bs';
import {IoLogoInstagram} from  'react-icons/io'
import {Link, useLocation} from 'react-router-dom'


import './Portfolio.css'


const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
   
       <section className='portfolio-section'>
      
     <div className='img-wrapper'>
          <img className='Lannara-img'src={LannaraBody}></img>
      </div>
        <div className='lower-text-wrapper'>
        <h4>Meu nome é Lannara Natyelle, sou natural de Teresina/PI, atualmente morando na Hungria. Tenho graduação em Engenharia Agronômica pela Universidade Federal do Maranhão.</h4>
        <div className='bar-p-wrapper'>
          <div></div>
           <p>Muitos jovens no Brasil ainda não tem o conhecimento de onde buscar oportunidades no exterior e acabam desistindo do seu sonho de estudar fora, pois acham algo muito distante de sua realidade.</p>
        </div>
        <p>Percebendo esse problema, decidi criar a @easytamitt, fundada em março de 2019, com o objetivo de tornar mais acessível oportunidades de bolsas de estudos no exterior para os jovens brasileiros.</p>
        <div className='signature-parent'>
           <div className='signature-wrapper'>
             <h4>Lannara Natyelle</h4>
             <p>Fundadora e CEO</p>
             <Link style={{ textDecoration: 'none' }} to='/contactParent'>
                <button>Contato</button>
             </Link>
           </div>
           <div className='icons-wrapper'>
            <a href='https://www.instagram.com/easytramitt/'><IoLogoInstagram id='instagram' /></a>
            <a href='https://www.linkedin.com/company/easy-tramitt/'><IoLogoLinkedin /></a>
           </div>
        </div>
        </div>
        </section>
    </>
  )
}

export default Portfolio
