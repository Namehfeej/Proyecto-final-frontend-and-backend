import React from 'react'
import { useForm } from '../hooks/useForm';
import { postProduct } from '../utils/api';
import { NavLink } from 'react-router';
import Form from '../components/Form';
import { FaHome } from "react-icons/fa";

const validationsUpload = {
    name: {
        validation: value => value.length > 2, 
        errorText: "El nombre del producto es incorrecto"
    },
    price: {
        validation: value => value > 0, 
        errorText: "El precio debe ser mayor a cero"
    },
    stock: {
        validation: value => value > 0, 
        errorText: "El stock debe ser mayor a cero"
    },
    brand: {
        validation: value => value.length > 0, 
        errorText: "La marca es un campo requerido"
    },
    category: {
        validation: value => value.length > 3, 
        errorText: "La categoría debe tener al menos 4 caracteres"
    },
    ageFrom: {
        validation: value => value > 0, 
        errorText: "La edad desde debe ser mayor a cero"
    },
    ageTo: {
        validation: value => value > 0 && value <= 100, 
        errorText: "La edad hasta debe ser mayor a cero y menor o igual a 100"
    },
}



function Upload() {

  const {values, onChange, errors, resetForm } = useForm({
    name: "",
    price: 0,
    stock: 0,
    brand: "",
    category: "",
    shortDescription:"",
    largeDescritpion:"",
    ageFrom: 0,
    ageTo: 0,
    img: ""
  }, validationsUpload)

  const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(errors).every( val => !val )) {
            postProduct(values)
                .then(() => alert("Producto guardado correctamente"))
                .then(() => resetForm())
                .catch( err => console.error(err) )
        } else {
            alert("Formulario inválido")
        }
    }

  
  return (
<>
      <main>
        <div className="home-title">
            <h1>Upload</h1>
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
                  label: "nombre"
                  },
                  {
                  name: "price",
                  type: "number",
                  label: "price"
                  },
                  {
                  name: "stock",
                  type: "number",
                  label: "stock"
                  },
                  {
                  name: "brand",
                  type: "text",
                  label: "Brand"
                  },
                  {
                  name: "category",
                  type: "text",
                  label: "category"
                  },
                  {
                  name: "shortDescription",
                  type: "text",
                  label: "Short Description"
                  },
                  {
                  name: "largeDescription",
                  type: "text",
                  label: "Large Description"
                  },
                  {
                  name: "ageFrom",
                  type: "number",
                  label: "Edad desde"
                  },
                  {
                  name: "ageTo",
                  type: "number",
                  label: "Edad hasta"
                  },
                  {
                  name: "img",
                  type: "file",
                  label: "URL image"
                  },

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

export default Upload
