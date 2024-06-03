import React from "react";
import './Socials.css';
import code from './../../assets/logo/code.png';
import github from './../../assets/logo/github.png';
import gmail from './../../assets/logo/gmail.png';
import link from './../../assets/logo/link.png';

const Socials = () => {
    return (
        <div className="Social-box">
            <img src={code} alt="Code" className="social-icon" />
            <img src={github} alt="GitHub" className="social-icon" />
            <img src={gmail} alt="Gmail" className="social-icon" />
            <img src={link} alt="LinkedIn" className="social-icon" />
        </div>
    );
}

export default Socials;
