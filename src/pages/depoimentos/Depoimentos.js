import React, {useState} from 'react'

import './Depoimentos.css'
import { images } from "../../Helpers/CarouselData" // here he is importing his own hook
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const Depoimentos = () => {
  const [currImg, setCurrImg] = useState(0);
    
  return (
    <>
      <section id='depoimentos'className='section-depoimentos'>
        <h1>Depoimentos</h1>
        <div className='bar2'></div>
     <div className='img-arrow-wrapper'>
         <FaArrowAltCircleLeft onClick={() => {currImg > 0 && setCurrImg(currImg - 1); }} className='left-arrow' />
         <div className='pic-container'>
          <img className='img1' src={images[currImg].img}></img> {/*here you can either upload as a background image or image itself*/}
         </div>
         <FaArrowAltCircleRight  onClick={() => { currImg < images.length - 1 && setCurrImg(currImg + 1);}} className='right-arrow' />
     </div>
        <h3>{images[currImg].title}</h3>
        <p className='p1'>{images[currImg].profession}</p>
        <p className='p2'>{images[currImg].subtitle}</p>
      </section>
    </>
  )
}

export default Depoimentos
