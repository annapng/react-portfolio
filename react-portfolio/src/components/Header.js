import React from 'react';
import signature from '../assets/signatures/Signature.png';
import resume from '../assets/signatures/Resume.png';
import portfolio from '../assets/signatures/Portfolio.png';
import contact from '../assets/signatures/Contact.png';
import aboutMe from '../assets/signatures/About Me.png';


function Header() {
    return (
        <div className="header">
            <img src={signature} id="signature"/>
        <div className="navBarDiv">
            <a href="#aboutMe"><img src={aboutMe} id="navBar"/></a>
            <a href="#portfolio"><img src={portfolio} id="navBar"/></a>
            <a href="#resume"><img src={resume} id="navBar"/></a>
            <a href="#contact"><img src={contact} id="navBar"/></a>
        </div></div>
    )
}

// nav bar

export default Header;