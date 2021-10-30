import React from 'react';
import "./Bloque.scss"

const Card = (props) => {
    return (
        <div className="bloqueContainer">
            <div className="imgContainer">
                <img src={props.src} alt="Imagen de la categoria"/> 
            </div>
            <div className="tituloContainer">
                <h3>{props.titulo}</h3>
                <p>100.104 Alojamientos disponibles</p>
            </div>
        </div>
    );
}

export default Card;