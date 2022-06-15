import React from 'react'
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import foto from "../assets/png-perfil1.png"


import "../about/about.css"

export default function About() {
  return (
    <>
        <section id='about' className='about'>
            <div className='main'>
                <img src={foto}/>
                <div className='about-text'>
                    <h2>Sobre Mi</h2>
                    <h5>Desarrollador Web Frontend</h5>
                    <p>Cuento con formación en desarrollo web frontend, aunque me capacito en backend también, tengo experiencia desarrollando paginas y aplicaciones webs , Desde chico mi motor siempre fue  la tecnología , me interesa mucho generar un impacto real en la vida de las personas con la tecnología, me encanta estar en foros y asistir a eventos de tecnología.</p>
                    <button><a target="_blank" href='https://github.com/martinimbastari?tab=repositories'><BsGithub className='about-icon_github'/></a></button>
                    <button><a target="_blank" href='https://www.linkedin.com/in/martin-imbastari/'><BsLinkedin className='about-icon_linkdin'/></a></button>
                </div>
            </div>
        </section>
            
                
                
        
    </>
    
  )
}
