import React from 'react'
import 'boxicons'
import './style.css'

export const Header = () => {
  return (
    <div className='header'>
        {/* navbar */}
            <nav className='navbar-header'>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>

                    <li>
                        <a href="#about-me">Sobre mim</a>
                    </li>  

                    <li>
                        <a href="#my-skills">Minhas Habilidades </a>
                    </li>

                    <li>
                        <a href="#my-projects">Meus projetos</a>
                    </li>

                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </nav>
            <span className='target'></span>
        {/* navbar */}

        {/* nome */}
        <div className='containar-nome'>
            <h1>JOÃO VITOR MARQUES BRAGA</h1>
            <h3>DESENVOLVEDOR DE SOFTWARES</h3>
        </div>
            

    </div>
  )
}
