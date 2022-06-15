import React from 'react'
import ecommerce from "../assets/ecommerce.png"
import calculadora from "../assets/Calculadora.png"
import landing from "../assets/landing.png"
import wheater from "../assets/wheaterapp.png"
import marvel from "../assets/marvel.png"

import "../proyectos/proyectos.css"

export default function Proyectos() {
  return (
    <>
    <section id='trabajo' className='contenedor-cards row m-0 '>
        <h2>Mis Proyectos</h2>
    <div className="cards p-0 col-lg-5 mb-5">
            <img className="card-img-top" src={ecommerce} alt="Card image cap"/>
            <div className="card-body">
                <h5  className="m-2 card-title">Ecommerce</h5>
                <p className="m-2 card-text">Desarrolle un ecommerce en react con formulario de login y registro donde el usuario es alojado en firebase y utilice material ui para el maquetado. </p>
                <button href="#" className="boton m-2"><a target="_blank" href="https://ecommerce-six-sandy.vercel.app/">Ver demo</a></button>
                <button href="#" className="boton"><a target="_blank" href="https://github.com/martinimbastari/ecommerce">Ver Repositorio</a></button>
            </div>
    </div>
    <div className="cards p-0 col-lg-5 mb-5">
            <img className="card-img-top" src={calculadora} alt="Card image cap"/>
            <div className="card-body">
                <h5  className="m-2 card-title">Calculadora</h5>
                <p className="m-2 card-text">Realice una calculadora en javascript, maquetandola con html y css puro.</p>
                <button href="#" className="boton m-2"><a target="_blank" href="https://calculadora-martin.vercel.app/">Ver demo</a></button>
                <button href="#" className="boton"><a target="_blank" href="https://github.com/martinimbastari/Calculadora">Ver Repositorio</a></button>
            </div>
    </div>
    <div className="cards p-0 col-lg-5 mb-5">
            <img className="card-img-top" src={wheater} alt="Card image cap"/>
            <div className="card-body">
                <h5  className="m-2 card-title">Aplicacion del Clima</h5>
                <p className="m-2 card-text">Una Aplicacion donde podemos acceder a los datos del clima en nuestra ubicacion gracias al consumo de la api de "Open weather app".</p>
                <button href="#" className="boton m-2"><a target="_blank" href="https://app-clima-martinimbastari.vercel.app/">Ver demo</a></button>
                <button href="#" className="boton"><a target="_blank" href="https://github.com/martinimbastari/App-clima">Ver Repositorio</a></button>
            </div>
    </div>
    <div className="cards p-0 col-lg-5 mb-5">
            <img className="card-img-top" src={landing} alt="Card image cap"/>
            <div className="card-body">
                <h5  className="m-2 card-title">Landing page</h5>
                <p className="m-2 card-text">Maquetado de un sitio web estilo landing.</p>
                <button href="#" className="boton m-2"><a target="_blank" href="https://landing-challenge.vercel.app/">Ver demo</a></button>
                <button href="#" className="boton"><a target="_blank" href="https://github.com/martinimbastari/Landing-challenge">Ver Repositorio</a></button>
            </div>
    </div>
    <div className="cards p-0 col-lg-5 mb-5">
            <img className="card-img-top" src={marvel} alt="Card image cap"/>
            <div className="card-body">
                <h5  className="m-2 card-title">Pagina de marvel</h5>
                <p className="m-2 card-text">Maquetado de un sitio web estilo landing para aprobar el modulo Diseño web.</p>
                <button href="#" className="boton m-2"><a target="_blank" href="https://proyecto-marvel.vercel.app/">Ver demo</a></button>
                <button href="#" className="boton"><a target="_blank" href="https://github.com/martinimbastari/Proyecto-marvel">Ver Repositorio</a></button>
            </div>
    </div>
    
    </section>
    </>
  )
}
