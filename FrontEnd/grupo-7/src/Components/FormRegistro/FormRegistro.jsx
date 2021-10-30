import React from 'react';
import { Link } from 'react-router-dom';

import InputForm from '../InputForm/InputForm';
import "./FormRegistro.scss"

const FormLogin = () => {
    return (

        <form action="" id="formRegistro">

            <h2>Crear cuenta</h2>

            <div class="name">
                <InputForm class="registGroup" label="Nombre" name="nombre" type="text" id="nombre-input"/>
                <InputForm class="registGroup" label="Apellido" name="apellido" type="text" id="apellido-input"/>
            </div>

            <InputForm class="registGroup" label="Correo electrónico" name="mail" type="email" id="mail-input"/>
            <InputForm class="registGroup" label="Contraseña" name="contra" type="password" id="password-input"/>
            <InputForm class="registGroup" label="Confirmar contraseña" name="re-contra" type="password" id="re-password-input"/>

            <div className="buttonGroup">
                <button type="submit">
                    Crear cuenta
                </button>
                <Link to="/login" >
                    ¿Ya tenés cuenta? Dirigite al Login
                </Link>
            </div>
        </form>
    );
}


export default FormLogin;