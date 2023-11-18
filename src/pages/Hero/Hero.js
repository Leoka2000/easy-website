import React from 'react'
import './Hero.css'
import {Link} from 'react-scroll'


// max Powell said that instead of using height imn css, we shoudl use padding-top: 200px and bottom 200px


const Hero = () => {

  return (
    <>
        <section id='hero' className='hero-section'>
          <div className='hero-container'>
            <div className='text-container'>
                <h1>Vamos juntos conseguir sua primeira oportunidade no exterior?</h1>
                <h2>It's all so simple</h2> 
            </div>
            <div className='buttons-container'>
              <Link  spy={true} smooth={true} offset={-100} duration={500} to='services'><button href='#bio' className='solid'>SERVIÇOS</button></Link>
              <Link  spy={true} smooth={true} offset={-100} duration={500} to='bio'> <button className='outline'>CONHEÇA</button></Link>
            </div>

          </div>
        </section>
      
    </>
  )
}

export default Hero
