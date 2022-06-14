import React from 'react'
import ecommerce from "../assets/ecommerce.png"
import calculadora from "../assets/Calculadora.png"

import "../proyectos/proyectos.css"

export default function Proyectos() {
  return (
    <>
    <section className='contenedor-cards row m-0 '>
        <h2>Mis Proyectos</h2>
    <div className="cards p-0 col-lg-5">
            <img className="card-img-top" src={ecommerce} alt="Card image cap"/>
            <div className="card-body">
                <h5  className="m-2 card-title">Ecommerce</h5>
                <p className="m-2 card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="boton m-2">Ver demo</button>
                <button href="#" className="boton">Ver Repositorio</button>
            </div>
    </div>
    <div className="cards p-0 col-lg-5">
            <img className="card-img-top" src={calculadora} alt="Card image cap"/>
            <div className="card-body">
                <h5  className="m-2 card-title">Calculadora</h5>
                <p className="m-2 card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="boton m-2">Ver demo</button>
                <button href="#" className="boton">Ver Repositorio</button>
            </div>
    </div>
    
    </section>
    </>
  )
}
