import React from 'react';

import Button from "../Button/Button"

const Loginregister = ({button}) => {

    if (button === "login") {
        return (
        <div className="buttons">
        <Button text="Iniciar sesión" route="/login"/>
        </div>
    )} else if (button === "register") {
            return(
                <div className="buttons">
                <Button text="Crear cuenta" route="/register"/>
                </div>)
    } else {
        return (
                <div className="buttons">
                <Button text="Iniciar sesión" route="/login"/>
                <Button text="Crear cuenta" route="/register"/>
                </div>
            )
        }
}

export default Loginregister;
