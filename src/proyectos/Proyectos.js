import React from 'react'
import ecommerce from "../assets/ecommerce.png"
import calculadora from "../assets/calculadoraneo.png"
import landing from "../assets/landingTraining.png"
import wheater from "../assets/wheaterapp.png"
import marvel from "../assets/marvel.png"
import taskList from "../assets/lista-de-tareas.png"
import wikiMovies from '../assets/wikiPeliculas.png'

import "../proyectos/proyectos.css"

export default function Proyectos() {
  return (
    <>
    <section id='trabajo' className='contenedor-cards row m-0 '>
        <h2>Mis Proyectos</h2>
    <div className="cards p-0 col-lg-5 mb-5">
    <div className='contenedorImg'>
            <img className="card-img-top" src={ecommerce} height='100%' width='100%' alt="Card image cap"/>
            </div>
            <div className="card-body">
                <h5  className="m-2 card-title">Ecommerce</h5>
                <p className="m-2 card-text">Desarrolle un ecommerce en react con formulario de login y registro donde el usuario es alojado en firebase y utilice material ui para el maquetado. </p>
                <button href="#" className="btn-demo m-2"><a target="_blank" href="https://ecommerce-six-sandy.vercel.app/">Ver demo →</a></button>
                <button href="#" className="btn-repo"><a target="_blank" href="https://github.com/martinimbastari/ecommerce">Ver Repositorio →</a></button>
            </div>
    </div>
    <div className="cards p-0 col-lg-5 mb-5">
        <div className='contenedorImg'>
        <img className="card-img-top" src={wikiMovies} width='100%' height='100%' alt="Card image cap"/>
        </div>
            
            <div className="card-body">
                <h5  className="m-2 card-title">Wiki Movies</h5>
                <p className="m-2 card-text">Desarrolle spa consumiendo datos de una api para, esta conectada con firebase para el login y registro de usuarios,  puedes filtrar por paginas o por medio de la busqueda. </p>
                <button href="#" className="btn-demo m-2"><a target="_blank" href="https://62d9aa9ca03611070e13c005--movies-wiki.netlify.app/">Ver demo →</a></button>
                <button href="#" className="btn-repo"><a target="_blank" href="https://github.com/martinimbastari/Wiki-Movies">Ver Repositorio →</a></button>
            </div>
    </div>
    <div className="cards p-0 col-lg-5 mb-5">
    <div className='contenedorImg'>
            <img className="card-img-top" src={landing} height='100%' width='100%' alt="Card image cap"/>
            </div>
            <div className="card-body">
                <h5  className="m-2 card-title">Landing Training</h5>
                <p className="m-2 card-text">Desarrolle el maquetado de una landing page para un cliente, utilice css puro y react.   </p>
                <button href="#" className="btn-demo m-2"><a target="_blank" href="https://landing-training.vercel.app/">Ver demo →</a></button>
                <button href="#" className="btn-repo"><a target="_blank" href="https://github.com/martinimbastari/Landing-training">Ver Repositorio →</a></button>
            </div>
    </div>
    <div className="cards p-0 col-lg-5 mb-5">
    <div className='contenedorImg'>
            <img className="card-img-top" src={calculadora} height='100%' width='100%' alt="Card image cap"/>
            </div>
            <div className="card-body">
                <h5  className="m-2 card-title">Calculadora</h5>
                <p className="m-2 card-text">Realice una calculadora en javascript, maquetandola con html y css puro utilizando los efectos de neomorphism.</p>
                <button href="#" className=" btn-demo m-2"><a target="_blank" href="https://calculadora-martin.vercel.app/">Ver demo →</a></button>
                <button  href="#" className="btn-repo"><a target="_blank" href="https://github.com/martinimbastari/Calculadora">Ver Repositorio →</a></button>
            </div>
    </div>
    <div className="cards p-0 col-lg-5 mb-5">
    <div className='contenedorImg'>
            <img className="card-img-top" src={wheater} height='100%' width='100%' alt="Card image cap"/>
            </div>
            <div className="card-body">
                <h5  className="m-2 card-title">Aplicacion del Clima</h5>
                <p className="m-2 card-text">Una Aplicacion donde podemos acceder a los datos del clima en nuestra ubicacion gracias al consumo de la api de "Open weather app".</p>
                <button href="#" className="btn-demo m-2"><a target="_blank" href="https://app-clima-martinimbastari.vercel.app/">Ver demo →</a></button>
                <button href="#" className="btn-repo"><a target="_blank" href="https://github.com/martinimbastari/App-clima">Ver Repositorio →</a></button>
            </div>
    </div>
    <div className="cards p-0 col-lg-5 mb-5">
    <div className='contenedorImg'>
            <img className="card-img-top" src={taskList} height='100%' width='100%' alt="Card image cap"/>
            </div>
            <div className="card-body">
                <h5  className="m-2 card-title">Lista de tareas</h5>
                <p className="m-2 card-text">Cree una lista de tareas con react, typescript y bootswatch para estilos y maquetado</p>
                <button href="#" className="btn-demo m-2"><a target="_blank" href="https://lista-de-tareas-ten.vercel.app/">Ver demo →</a></button>
                <button href="#" className="btn-repo"><a target="_blank" href="https://github.com/martinimbastari/lista-de-tareas">Ver Repositorio →</a></button>
            </div>
    </div>
    </section>
    </>
  )
}
