import React from 'react'
import './style.css'
import crud from '../../images/images-projects/crud.png'
import cep from  '../../images/images-projects/buscar-cep.png'
import form from '../../images/images-projects/forms.png'

export const MeusProjetos = () => {
  return (
    <div id='my-projects' className='meus-projetos'>
      <div className='sistema-crud'>   
        <h1>Sistema CRUD</h1>
        <a href="https://joao-vitor-marques-braga.github.io/sistema-CRUD-JavaScript/">
          <img src={crud} width='75%'/>
        </a>
        <h3>Desenvolvido com HTML, CSS e JavaScript</h3>
      </div>

      <div>
        <h1>Rastrear CEP</h1>
        <a href="https://rastrear-cep.vercel.app/">
          <img src={cep} width='75%'/>
        </a>
          <h3>Desenvolvido com o framework React.JS e a utilizaçãop da API 'viacep'</h3>
      </div>
      
      <div>
        <h1>Formulário Sobre Desenvolvedores</h1>
        <a href="https://formulario-dev-pearl.vercel.app/">
          <img src={form} width='75%'/>
        </a>
      </div>
    </div>
  )
}


