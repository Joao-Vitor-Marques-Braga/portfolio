import React from 'react'
import './style.css'
import { Carousel } from 'rsuite';

export const MinhasHabilidades = () => {
  return (
    <div id='my-skills' className='minhas-habilidades'>
        <h1>Minhas Habilidades</h1>

        <div className='habilidades'>
          <div className='card-html'>
            <img src="https://img.icons8.com/color/240/null/html-5--v1.png"/>
            
          </div>
          <div className='card-css'>
            <img src="https://img.icons8.com/color/240/null/css3.png"/>
            
          </div>
          <div className='card-javascript'>
            <img src="https://img.icons8.com/color/240/null/javascript--v1.png"/>
            
          </div>
          <div className='card-react'>
            <img src="https://img.icons8.com/plasticine/240/null/react.png"/>
            
          </div>
          <div className='card-bootstrap'>
            <img src="https://img.icons8.com/color/240/null/bootstrap.png"/>
            
          </div>
          <div className='card-python'>
            <img src="https://img.icons8.com/color/240/null/python--v1.png"/>
           
          </div>
          <div className='card-flask'>
            <img src="https://img.icons8.com/fluency/240/000000/flask.png"/>
            
          </div>
          <div className='card-mysql'>
            <img src="https://img.icons8.com/color/240/null/mysql-logo.png"/>
            
          </div>
        </div>
    </div>
  )
}
