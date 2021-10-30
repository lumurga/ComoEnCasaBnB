import React from 'react';

const Recomendaciones = (props) => {
    return (
        <section className="bloqueProductos">
          <h2>Recomendaciones</h2>
          <div className="cards">
            {props.children}
          </div>
        </section>
    );
}

export default Recomendaciones;
