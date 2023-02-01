import React from 'react'
import Image from '../../images/minha-foto.jpg'
import './style.css'

export const SobreMim = () => {
  return (
    <div id='about-me' className='sobremim'>
        <div className='minha-imagem'>
            <img src={Image} alt="minha imagem"/>
          </div>
            <div className='descricao'>
            <h1>Olá, eu sou o João Vitor!</h1>
            <h3>
              Tenho 17 anos, iniciante no mundo do desenvolvimento buscando uma grande carreira,
              atualmente cursando Engenharia de Software (Bacharelado) pela Universidade de Rio Verde (UNIRV).
              Ensino médio concluído na Unidade Integrada SESI SENAI Rio Verde, além do curso técnico em desenvolvimento de sistemas.
              Possuo experiencia na area de front-end e back-end além de conhecimento sobre o gerenciamento de projetos.
            </h3>
          </div>
    </div>
  )
}
