import React from 'react'
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router';

function AboutUs() {
  return (
    <>

    <main className="main-container main-container__aboutUs">

        <div className="home-title">
            <h1>Sobre Nosotros</h1>
        </div>
    

    <div className="about-us-container">
        <div className="about-container__mision">  
            <h2>Misión</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit nesciunt nulla iusto, velit et, atque aut reiciendis optio, fugit enim architecto labore dolores perspiciatis repudiandae facilis veniam magni. Hic. </p>
        </div>

        <div className="about-container__vision">
            <h2>Visión</h2> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aliquam voluptatum quia minus voluptatibus iusto a commodi porro est assumenda molestias dignissimos error reiciendis. Voluptatum dolorum nihil ea. Doloribus, animi! </p>
        </div>

        <div className="about-container__map">      
            <h2>Nuestras Oficinas</h2> 
            <div className="about-container-map__googlemaps">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12233.284161552376!2d-75.58446648706659!3d6.243741186574876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429ac150efd3b%3A0xe07ee393112a7a77!2sParques%20del%20R%C3%ADo!5e0!3m2!1sen!2sco!4v1743227684069!5m2!1sen!2sco" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    </div>
        
    </main>
      <div className='home-btn_container'>
        <NavLink to="/"><FaHome/></NavLink>
      </div>
    </>
    
  )
}

export default AboutUs
