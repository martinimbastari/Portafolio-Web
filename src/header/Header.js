import React from 'react'
import fondo from "../assets/paint-fondo.png"

//styles
import "../header/header.css"


export default function Header() {
  return (
    <div className='container-header'>
      <img src={fondo}/>
      <div className='text'>
        <h1 >¡Hola, Bienvenido!</h1>
        <h2 >Soy Martin Imbastari.</h2>
      </div>
        
    </div>
      
  )
}
