import React from 'react';

const InputForm = (props) => {

    const handleChange = (e) => {
        props.setter(e.target.value)
        props.clearError(false)
        props.clearErrorValidation(false)
    }

    return (
        <div className={props.class}>
            <label>{props.label}</label>
            <input name={props.name} type={props.type} id={props.id} value={props.getter} onChange={handleChange}/>
            {props.error ? <p >{props.errorText}</p> : null}
        </div>
    );
}

export default InputForm;