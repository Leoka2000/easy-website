import React from 'react'
import './Form.css'
import {useForm} from 'react-hook-form';

const Form = () => {

  
  const { // here we are destructuring the useForm object in our app
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data); //And we also need to create a function onSubmit, that will do some specific action when the submit button is clicked or pressed.
  console.log(errors);


  return (
    <>
     <section className='form-section'>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
               <header>
               <h1>Contato</h1>
               </header>
               <div className='individual-form-wrapper'>
                <label>Seu Nome</label>
                <input {...register("userName", { required: true, minLength: 3})} id='userName' type='text'></input>
                {errors.userName && <p>Verifique seu nome</p>}
               </div>
               <div className='individual-form-wrapper'>
                <label>Seu Email</label>
                <input {...register("email", { required: true, pattern:
             /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  })}  className="input" id="email"  name="email"  placeholder="Por favor" type="email" />
              {errors.email && <p>Verifique seu email</p>}
               </div>
                <div className='individual-form-wrapper'>
                <label>Seu whatsapp</label>
                <input {...register("companyName", { required: true, pattern:
             /^\+[1-9]{1}[0-9]{3,14}$/  })}></input>
                {errors.companyName && <p>Verifique seu número</p>}
               </div>
               <div className='individual-form-wrapper'>
                <label>Nps conte mais sobre oque precisa</label>
                <textarea {...register("message", { required: true, maxLength: 1000 })}></textarea>
               </div>

               <button>Enviar</button>

        </form>
        </section>
    </>
  )
}

export default Form
