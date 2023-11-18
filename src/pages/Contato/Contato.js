import React from 'react'
import './Contato.css'
import {Link} from 'react-router-dom'

const Contato = () => {
  return (
    <>
      <section id='contato' className='contact-session'>
        <div className='text-wrapper2'>
          <h1>Contato</h1>
          <p>Nos conte sobre oque você precisa</p>
          <Link style={{ textDecoration: 'none' }} to='/contactParent'>
           <button>Contato</button>
        </Link>
        </div>
        
      </section>
    </>
  )
}

export default Contato
