import React from 'react';
import FormRegistro from '../FormRegistro/FormRegistro';
import Header from '../Header/Header';

const Register = ({button, logeado}) => {
    return (
        <>
        <Header button={button} logeado={logeado}/>
        <main style={{display: 'flex', justifyContent: 'center', width: "100vw"}}>
            <FormRegistro />
        </main>
        </>
    );
}

export default Register;
