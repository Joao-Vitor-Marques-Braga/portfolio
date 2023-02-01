import React from 'react'
import './style.css'
import crud from '../../images/images-projects/crud.png'
import cep from  '../../images/images-projects/buscar-cep.png'
import form from '../../images/images-projects/forms.png'
import menu from '../../images/images-projects/menu-restaurante.png'
import vocabulo from '../../images/images-projects/vocabulo.png'

export const MeusProjetos = () => {
  return (
    <div id='my-projects' className='meus-projetos'>
      <div className='sistema-crud'>   
        <h1>Sistema CRUD</h1>
        <a href="https://joao-vitor-marques-braga.github.io/sistema-CRUD-JavaScript/" target="_blank">
          <img src={crud} width='75%'/>
        </a>
        <h3>Desenvolvido com HTML, CSS e JavaScript</h3>
      </div>

      <div>
        <h1>Rastrear CEP</h1>
        <a href="https://rastrear-cep.vercel.app/" target="_blank">
          <img src={cep} width='75%'/>
        </a>
          <h3>Desenvolvido com o framework React.JS e a utilizaçãop da API 'viacep'</h3>
      </div>
      
      <div>
        <h1>Formulário Sobre Desenvolvedores</h1>
        <a href="https://formulario-dev-pearl.vercel.app/" target="_blank">
          <img src={form} width='75%'/>
        </a>
        <h3>Desenvolvido com HTML e CSS com a utilização das possibilidades de formulários disponíveis no HTML</h3>
      </div>

      <div>
        <h1>Menu para restaurante</h1>
        <a href="https://menu-restaurante-ashy.vercel.app/" target="_blank">
          <img src={menu} width='75%'/>
        </a>
        <h3>Desenvolvido em HTML, CSS e JavaScript, afim de utilizar funções disponíveis no JavaScript</h3>
      </div>

      <div>
        <h1>Vocábulo</h1>
        <a href="https://vocabulo-liard.vercel.app/">
          <img src={vocabulo} width='75%' />
        </a>
        <h3>Projeto desenvolvido em React, baseado no jogo forca</h3>
      </div>
    </div>
  )
}


