import React, {useState, useEffect} from 'react';
import Bloque from "../Bloque/Bloque"

const Categorias = (props) => {

  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchApi = async () => {
      const response = await fetch("http://localhost:8080/categorias");
      const responseJSON = await response.json()
      setCategorias(responseJSON);
      setLoading(false);
  }

  useEffect(() => {
      fetchApi();
  }, []);


  return (
      <section className="bloqueCategorias">
        <h2>Buscar por tipo de alojamiento</h2>          
        <div className="categorias">
          {categorias.map(cat => <Bloque src={cat.urlImagen} titulo={cat.titulo} />)}
        </div>
      </section>
  );
}

export default Categorias;
