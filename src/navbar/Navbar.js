import React from 'react'
import logo from "../assets/logo-portfolio1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import {GrClose} from "react-icons/gr"
import { useState } from 'react';

//styles
import  "../navbar/navbar.css";


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
        <nav className="navbar position-fixed ">
            <div className='container-fluid'>
            <button className="navbar-brand">
                <a href='#'>
                    <img className='logo' alt='logo' width="100px" src={logo}/>
                </a>
                </button>
                <ul className='list-container'>
                    <li><button><a href='#about'>Sobre mi</a></button></li>
                    <li><button><a href='#skills'>Skills</a></button></li>
                    <li><button><a href='#trabajo'>Mi trabajo</a></button></li>
                    <li><button><a href='#contacto'>Contacto</a></button></li>
                </ul>
                <div className='navbar-smallscreen'>
                    <GiHamburgerMenu className='menu-boton' onClick={() => setToggleMenu(true)} fontSize="larger"/>
                    {toggleMenu && (
                        <div className='app__navbar-smallscreen_overlay'>
                            <GrClose className='closeIcon' onClick={() => setToggleMenu(false)} />
                            <ul className='app__navbar-smallscreen_links'>
                                <li><button><a href='#about'>Sobre mi</a></button></li>
                                <li><button><a href='#skills'>Skills</a></button></li>
                                <li><button><a href='#trabajo'>Mi trabajo</a></button></li>
                                <li><button><a href='#contacto'>Contacto</a></button></li>
                            </ul>
                        </div>
                    )}
                </div>
                </div>
        </nav>
        </>
            
                
    
  )
}
