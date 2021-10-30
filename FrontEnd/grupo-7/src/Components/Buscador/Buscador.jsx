import React, { useState } from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import iconLocalizador from "../../Assets/Images/localizador.png"
import iconCalendar from "../../Assets/Images/calendar.png"

import "./Buscador.scss";


import es from 'date-fns/locale/es';
registerLocale("es", es);


const Buscador = () => {

  const [fecha, setFecha] = useState(null)
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleFecha = (dates) => {
    const [start, end] = dates;
    setFecha(start);
    setEndDate(end);
    if (end) {setIsOpen(!isOpen)};
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }; 

    return (
        <section className="buscador">
          <h1>Buscá ofertas en cabañas, departamentos y mucho más</h1>
          <div className="inputsContainer">
            <input type="text" className="inputLocation" placeholder="¿A dónde vamos?"/>
            {/* <input type="text" placeholder="Check in- Check-out"/> */}
            <DatePicker 
              selected={fecha} 
              onChange={handleFecha}
              locale="es" 
              startDate={fecha}
              endDate={endDate} 
              selectsRange
              placeholderText="Check in - Check out"
              monthsShown={2}
            />
            <button class="buscar">
              Buscar
            </button>
          </div>
        </section>
    );
}

export default Buscador;


// {isOpen ? <input className="datepicker" onClick={handleClick} value={fecha} placeholder="Check in- Check-out"></input> :
//                 <DatePicker 
//                   selected={fecha} 
//                   onChange={handleFecha}
//                   locale="es" 
//                   startDate={fecha}
//                   endDate={endDate} 
//                   selectsRange
//                   inline
//                   placeholderText="Check in - Check out"
//                   monthsShown={2}
//                   />}