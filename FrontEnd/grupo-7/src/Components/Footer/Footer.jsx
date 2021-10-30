import React from 'react';
import "./Footer.scss"

/* IMPORTO LOS LOGOS DE FONTAWSOME EN VEZ DE USAR LOS PNG */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className="copyright">©2021 Digital Booking</div>
            <div className="socials">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faLinkedinIn}/>
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
        </footer>
    );
}

export default Footer;
