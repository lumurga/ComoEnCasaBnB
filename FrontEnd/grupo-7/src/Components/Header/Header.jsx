import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginRegister from '../LoginRegister/LoginRegister';
import UserHeader from '../UserHeader/UserHeader';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAirbnb} from '@fortawesome/free-brands-svg-icons';
import "./Header.scss"

const Header = ({button, logeado}) => {

    return (
        <div className="headerContainer">
            <div className="logo">
                <Link to="/"><FontAwesomeIcon icon={faAirbnb}/></Link> 
                <Link to="/"><h4>Sentite como en tu hogar</h4></Link>
            </div>
            {logeado ? <UserHeader /> : <LoginRegister button={button} />}
        </div>
    );
}

export default Header;