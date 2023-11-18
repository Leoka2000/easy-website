import React from 'react'
import './Services.css'
import {GiLoveLetter} from 'react-icons/gi';
import {FaMicrophone, FaPencilAlt} from 'react-icons/fa';
import {BsTranslate} from 'react-icons/bs';



 

const Services = () => {
  return (
    <>
    <section id='services' className='services-section'>
      <header className='services-header'>
        <h1>Nossos Serviços</h1>
        <p>Com o objetivo de expandir as fronteiras acadêmicas dos estudantes, oferecemos serviços de consultoria com foco em bolsas de estudos no exterio, desde mentoria para entendimento das necessidades e objetivos até a preparação para entrevistas. </p>
      </header>
      <div className='cards-main-wrapper'>
         <div className='cards-individual-wrapper'>
        <span>
         <GiLoveLetter  />
         </span>
            <div className='text-wrapper'>
               <h3>Mentoria</h3>
               <p>Na mentoria realizamos um mapeamento completo da sua situação atual e objetivo de estudo. A partir disso, criamos juntos um plano para aplicação nas bolsas de estudos. Durante todo o processos fazemos um acompanhamento da sua evolução, auxiliando no seu desenvolvimento com orientações e outras estratégias.  </p>
            </div>
         </div>
         <div className='cards-individual-wrapper'>
         <span>
         <FaMicrophone  />
         </span>
            <div className='text-wrapper'>
               <h3>REVISÕES</h3>
               <p>Oferecemos serviços de revisão que consiste na análise detalhada de cartas de motivação e documentação visando corrigir ou acrescentar conteúdo buscando maior assertividade na sua aplicação. </p>
            </div>
         </div>
         <div className='cards-individual-wrapper'>
         <span>
         <FaPencilAlt  />
         </span>
            <div className='text-wrapper'>
               <h3>Tradução livre de documentos</h3>
               <p>A tradução livre de documentos visa adequar termos de um idioma considerando os aspectos culturais para que a mensagem seja recebida de forma direta e correta. Oferecemos a tradução de documentos do português para inglês e inglês para português.</p>
            </div>
         </div>
         <div className='cards-individual-wrapper'>
         <span>
         <BsTranslate />
         </span>
            <div className='text-wrapper'>
               <h3>Preparação para entrevistas</h3>
               <p>Preparamos você para as entrevistas de bolsas de forma individualizada. Consideramos as descrições das bolsas e através do nosso suporte te ajudamos a estruturar e personalizar respostas de acordo com suas experiências. Trazemos feedbacks para uma abordagem construtiva visando melhorar o desempenho na entrevista.  </p>
            </div>
         </div>

      </div>
      </section>
    </>
  )
}

export default Services
