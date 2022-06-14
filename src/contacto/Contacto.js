import React from 'react'
import {SiGmail} from "react-icons/si"
import {BsLinkedin,BsGithub,BsWhatsapp} from "react-icons/bs"



import "../contacto/contacto.css"

export default function Contacto() {
  return (
    <>
    <div className='contenedor-forms'>
        <h2>Contactame</h2>
        <div className='contenedor-redes'>
            <button><a target="_blank" href='https://github.com/martinimbastari?tab=repositories'><BsGithub className='contact-icon_github'/></a></button>
            <button><a target="_blank" href='https://www.linkedin.com/in/martin-imbastari/'><BsLinkedin className='contact-icon_linkdin'/></a></button>
            <button><a target="_blank" href='https://www.linkedin.com/in/martin-imbastari/'><SiGmail className='contact-icon_gmail'/></a></button>
            <button><a target="_blank" href='https://www.linkedin.com/in/martin-imbastari/'><BsWhatsapp className='contact-icon_wpp'/></a></button>
        </div>
    {/* <form className='forms'>
  <div className="form-group">
    <label for="exampleInputName1">Nombre completo</label>
    <input type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Ingresa tu nombre"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Escribe un mensaje</label>
    <textarea  className="form-control"  placeholder="Deja tu mensaje.."/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> */}
    </div>
    
    </>
  )
}
