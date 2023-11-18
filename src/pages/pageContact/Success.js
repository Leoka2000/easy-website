import React from 'react'
import './Success.css'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Success = () => {
  const { state } = useLocation()

  return (
    <>
      <section className='success'>
<h1>Obrigado pela atenção, {state.data.userName}</h1>
<p>Retornaremos o contato em breve</p>
<Link style={{ textDecoration: 'none' }} to='/'><button type='submit'>Home</button></Link>
      </section>
    </>
  )
}

export default Success
