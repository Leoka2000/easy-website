import React from 'react'
import NavbarContact from '../pageContact/NavbarContact'
import Biography from '../biography/Biography'
import Footer from '../../Components/Footer/Footer'
import Portfolio from './Portfolio'

const ParentPortfolio = () => {
  return (
    <>
       <NavbarContact />
       < Portfolio/>
       < Biography />
       < Footer />
    </>
  )
}

export default ParentPortfolio
