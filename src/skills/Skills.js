import React from 'react'
import {FaReact,FaHtml5,FaBootstrap} from "react-icons/fa"
import {SiJavascript, SiMaterialui, SiCss3} from "react-icons/si"
import {AiFillApi} from "react-icons/ai"
import {DiGit, DiFirebase} from "react-icons/di"




import "../skills/skills.css"

export default function Skills() {
  return (
    <>
        <section className='skills'>
            <div className='main-skills'>
                <div className='row'>
                    <div className='skills-text col-lg-8 p-5 mt-3'>
                        <h2>Mis Habilidades</h2>
                        <p>Cuento con habilidades enfocadas en desarrollo web frontend, aunque me capacito en backend también, me considero una persona con buena capacidad resolutiva, me gusta trabajar en equipo y recibir consejos de gente mas experimentada asi como tambien poder aportar mi granito de arena.</p>
                    </div>
                    <div className='col-lg-4 skills-list mt-5 pt-5'>
                        <ul>
                        <h2>Habilidades tecnicas:</h2>
                            <li><SiJavascript color='#F0DB4F'/><span>JAVASCRIPT</span></li>
                            <li><FaReact color='#61DBFB'/><span>REACTJS</span></li>
                            <li><FaHtml5 color=' #F06529'/><span>HTML5</span></li>
                            <li><SiCss3 color='#3C99DC'/><span>CSS3</span></li>
                            <li><FaBootstrap color='#553C7B'/><span>BOOTSTRAP</span></li>
                            <li><SiMaterialui color='#3C99DC'/><span>MATERIAL UI</span></li>
                            <li><DiGit color='#F1502F'/><span>GIT</span></li>
                            <li><DiFirebase color='#F5820D'/><span>FIREBASE</span></li>
                            <li><AiFillApi color='#C92E13'/><span>API</span></li>
                        </ul>
                </div>
                </div>
            </div>
        </section>
    </>
    
  )
}
