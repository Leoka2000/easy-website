import React, {useEffect} from 'react';
import Navbar from './Navbar/Navbar'
import Hero from '../pages/Hero/Hero';
import About from '../pages/about/About';
import Services from '../pages/services/Services';
import Depoimentos from '../pages/depoimentos/Depoimentos';
import Contact from '../pages/Contato/Contato';
import Lannara from '../pages/Lannara/Lannara';
import Footer from '../Components/Footer/Footer';
import { useLocation } from 'react-router-dom';



const Home = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      < Services />
      < Depoimentos  />
      < Contact />
      < Lannara />
      <Footer />
     
    
    </div>
  )
}

export default Home
