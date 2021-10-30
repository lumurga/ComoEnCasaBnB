import React from 'react';
import "./Card.scss"

const Card = (props) => {
    return (
        <article className="cardContainer">
            <img src={props.img} alt="imagen del producto"/>
            <div>
                <h5>{props.category}</h5>
                <h3>{props.title}</h3>
                <p>{props.location}</p>
                <p>{props.description}</p>
                <button>
                    Ver Detalle
                </button>
            </div>
        </article>
    );
}

export default Card;