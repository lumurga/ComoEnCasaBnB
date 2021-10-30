import React from 'react';

import Header from '../Header/Header';
import Buscador from '../Buscador/Buscador';
import Categorias from '../Categorias/Categorias';
import Recomendaciones from '../Recomendaciones/Recomendaciones';
import Card from "../Card/Card"

import './Home.scss'


import productos from '../productos.json'

const Home = ({logeado}) => {
    return (
        <>
        <Header logeado={logeado}/>
        <main>
          <Buscador />
          <Categorias />
          <Recomendaciones>
            {productos.map(productos => {
              return(
                <Card img={productos.img} category={productos.category.toUpperCase()} title={productos.title} location={productos.location} description={productos.description}/>);
              })
            }
          </Recomendaciones>
        </main>
      </>
    );
}

export default Home;
