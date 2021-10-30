import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import InputForm from '../InputForm/InputForm';
import "./FormLogin.scss"

const FormLogin = ({setLogeado}) => {

    let history = useHistory();

    const usuario = {
        email: "ignacio@aurrecoechea.com.ar",
        password: "prueba1"
    }

    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState(false)
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState(false)
    const [credencialesInvalidas, setCredencialesInvalidas] = useState (false)

    const loginHandler = (e) => {
        e.preventDefault()
        setErrorEmail(false)
        setErrorPassword(false)
        if(!email.includes("@")){
            setErrorEmail(true)
        } else if(password.length < 6) {
            setErrorPassword(true)
        }else if(email !== usuario.email || password !== usuario.password){
            setCredencialesInvalidas(true)
        }
        else {
            setLogeado(true)
            console.log("Holaaa");
            history.push("/")
        }
    }

    return (

        <form action="" id="formLogin">

            <h2>Iniciar sesión</h2>

            <InputForm class="loginGroup" label="Correo electrónico" name="mail" type="email" id="mail-input" getter={email} setter={setEmail} errorText="El dato ingresado no es un correo electronico valido" error={errorEmail} clearError={setErrorEmail} clearErrorValidation={setCredencialesInvalidas}/>
            <InputForm class="loginGroup" label="Contraseña" name="contra" type="password" id="password-input" getter={password} setter={setPassword} errorText="La contraseña debe tener un minimo de 6 digitos" error={errorPassword} clearError={setErrorPassword} clearErrorValidation={setCredencialesInvalidas}/>

            {credencialesInvalidas ? <h3>Sus credenciales son inválidas, vuelva a intentarlo</h3> : null}
            <div className="buttonGroup">
                <button onClick={loginHandler}>
                    Ingresar
                </button>
                <Link to="/register" >
                    ¿Aún no tenés cuenta? Dirigite al registro
                </Link>
            </div>
           
        </form>
    );
}


export default FormLogin;