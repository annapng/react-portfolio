import React from 'react';

import portrait from '../assets/IBM PS1 CRT Monitor2.png';

function AboutMe() {
    return (
        <div id="aboutMe">
            <h1>About Me</h1>
            <div id="contentBox">
            <img src={portrait} id="portrait"/>
        <div id="words">         
            Greetings! Welcome to the humble beginnings of my portfolio and in turn, my web development career! I'm a Colorado native who's been coding for a few years and dreaming for even longer, and I'm ready to make my dreams a reality by helping design and develop the web. Thanks for visiting!
            </div>   
            </div>
        </div>
    )
}

export default AboutMe;