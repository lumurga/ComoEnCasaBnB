import React from 'react';
import Header from '../Header/Header';
import FormLogin from "../FormLogin/FormLogin"

const Login = ({button, logeado, setLogeado}) => {
    return (
        <>
        <Header button={button} logeado={logeado}/>
        <main style={{display: 'flex', justifyContent: 'center', width: "100vw"}}>
            <FormLogin setLogeado={setLogeado}/>
        </main>
        </>
    );
}

export default Login;
