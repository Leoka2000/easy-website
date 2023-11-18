import React, { useEffect, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Lannara.css';

const Lannara = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <section id='portfólio' className='section-lannara'>
        <div className='text-wrapper2'>
          <h1>Portfólio</h1>
          <p>Conheça mais sobre a CEO do Easy Tramitt, Lannara</p>
          <Link to='/ParentPortfolio' style={{ textDecoration: 'none' }}>
            <button>Portfólio</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Lannara;
