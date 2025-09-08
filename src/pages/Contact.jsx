import React from 'react'
import { useForm } from '../hooks/useForm';
import { postContacts } from "../utils/api"
import Form from '../components/Form';
import { NavLink } from 'react-router';
import { FaHome } from "react-icons/fa";


function Contact() {
 const inputsValidations = {
    name: {
        validation: value => value.length > 2,
        errorText: "El nombre es incorrecto"
    },
    email: {
        validation: value => {
            const regexp = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
            return regexp.test(value);
        },
        errorText: "El email no tiene el formato correcto"
    },
    subject: {
        validation: value => value.length > 0,
        errorText: "El asunto es obligatorio"
    },
    message: {
        validation: value => value.length > 0,
        errorText: "Ingrese un texto"
    }
}

const {values, onChange, errors, resetForm} = useForm({
    name: "",
    email: "",
    subject: "",
    message: ""
}, inputsValidations)

const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(errors).every( val => !val)){
    postContacts(values)
        .then(() => alert("mensaje enviado"))
        .catch(err => console.error(err))
        resetForm()
    } else {
        console.log("Formulario inválido")
    }

    
}

  return (
    <>
    <main className="main-container main-container__contact">

      <div className="home-title">
            <h1>Contact Us</h1>
        </div>
      <div className="about-card-info">
        <Form 
            values={values}
            errors={errors}
            onChange={onChange}
            onSubmit={handleSubmit}
            inputsArray={[
                {
                    name: "name",
                    type: "text",
                    label: "Nombre",
                    isTextArea: true
                },
                {
                    name: "email",
                    type: "email",
                    label: "email",
                    isTextArea: true
                },
                {
                    name: "subject",
                    type: "text",
                    label: "Subject",
                    isTextArea: true
                },
                {
                    name: "message",
                    type: "text",
                    label: "Mensaje",
                    isTextArea: false
                }
            ]}
         />
      </div>

    </main>
      
      
      <div className='home-btn_container'>
        <NavLink to="/"><FaHome/></NavLink>
      </div>
    </>
  )
}

export default Contact
