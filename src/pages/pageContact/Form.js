import React, { useState, useEffect } from 'react'
import './Form.css'
import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom'
import { db } from '../../firebaseConfig';
import { addDoc, collection, getDocs } from 'firebase/firestore'


const Form = () => {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")
  
  const navigate = useNavigate();
  const { // here we are destructuring the useForm object in our app
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  // all we are doing here is looping through the documents in the collection and setting the users array to be equal to an array of document data and an id to each document
  useEffect(() => {
    // here we are making an asyncronous API call to get the firestore information
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      console.log(data)

    }
    getUsers()
  }, [])
 
  console.log(errors);

  const dataOnConsole = (data) => {
    addDoc(usersCollectionRef, {userData: data})
    console.log(data);
    navigate("/Success", {replace: false, state: {data}})
  }                         //And we also need to create a function onSubmit, that will do some specific action when the submit button is clicked or pressed.
 



  return (
    <>
     <section id='form' className='form-section'>
        <form onSubmit={handleSubmit(dataOnConsole)} id="form">
               <header>
               <h1>Contato</h1>
               </header>
               <div className='individual-form-wrapper'>
                <label>Nome</label>
                <input {...register("userName", { required: true, minLength: 3})} id='userName' placeholder="Pedro Sebastião da Silva" type='text'></input>
                {errors.userName && <p>Verifique seu nome</p>}
               </div>
               <div className='individual-form-wrapper'>
                <label>Email</label>
                <input {...register("email", { required: true, pattern:
             /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  })}  className="input" id="email"  name="email"  placeholder="fengs@gmail.com" type="email" />
              {errors.email && <p>Verifique seu email</p>}
               </div>
                <div className='individual-form-wrapper'>
                <label>Whatsapp</label>
                <input {...register("companyName", { required: true, pattern: 
             /^\+[1-9]{1}[0-9]{3,14}$/  })} placeholder="+5548967945556"></input>
                {errors.companyName && <p>Verifique seu número, não se esqueça do (+) no começo</p>}
               </div>
               <div className='individual-form-wrapper'>
                <label>Nos conte mais sobre oque precisa</label>
                <textarea {...register("message", { required: true, maxLength: 1000 })}></textarea>
               </div>

               <button>Enviar</button>

        </form>
        </section>
    </>
  )
}

export default Form
