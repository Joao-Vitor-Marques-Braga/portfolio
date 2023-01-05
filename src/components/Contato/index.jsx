import React from 'react'
import './style.css'

export const Contato = () => {
  return (
    <div className='contato'>
        <h1>Contato</h1>
        <ul>
            <li>
                <a href="mailto:joaovitorkge@gmail.com">
                        <img src="https://img.icons8.com/color/96/null/gmail-new.png"/>
                   <h3>joaovitorkge@gmail.com</h3> 
                </a>
            </li>
           
            <li>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-marques-braga-901666257/">
                        <img src="https://img.icons8.com/color/96/null/linkedin.png"/>
                    <h3>João Vitor Marques Braga</h3>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/j_v_joaovitor/">
                        <img src="https://img.icons8.com/fluency/96/null/instagram-new.png"/>
                    <h3>j_v_joaovitor</h3>
                </a>
            </li>
        </ul>
    </div>
  )
}
