import React from 'react'
import './About.css'
import {FaUniversity} from 'react-icons/fa'
import {MdTravelExplore} from 'react-icons/md'
import {GiJourney} from 'react-icons/gi'


const About = () => {
  return (
    <div id='bio'>
      <section className='about-section'>
        <div className='main-upper-wrapper'>
            <header>
                <h1>Quem somos</h1>
                <div className='bar'></div>
                <p>Sobre a Easy Tramitt
                A Easy Tramitt foi fundada em 2019 com o objetivo de ajudar jovens brasileiros a conquistar oportunidades no exterior. Por falta de conhecimento sobre onde buscar e até mesmo um entedimento de que isso é distante de sua realidade, muitos acabam desistindo do seu sonho de estudar fora. Entendendo esse problema, a Easy Tramitt busca conectar bolsas de estudos no exterior com os jovens brasileiros de forma acessível. </p>
            </header>
        </div>
        <div className='main-lower-wrapper'>
            <div className='individual-wrapper'>

                <span><FaUniversity /></span>

              
                <div className='footer'>
                   <h3>Missão</h3>
                   <p>Empoderar a nova geração de brasileiros que sonham em estudar no exterior</p>
                </div>
            </div>
            <div className='individual-wrapper'>
          <span>
           <MdTravelExplore />
           </span>
               <div className='footer'>
                <h3>Visão</h3>
                <p>Ser referência para jovens brasileiros no processo de aplicação para bolsas de intercâmbio de forma simplificada</p>
                </div>
            </div>
            <div className='individual-wrapper'>
                <span>
              
                < GiJourney />
            </span>
                
                <div className='footer'> 
                    <h3>Valores</h3>
                    <p>Foco na qualidade dos serviços oferecidos com transparência e simplicidade</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
