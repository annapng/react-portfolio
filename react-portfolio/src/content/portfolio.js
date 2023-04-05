import React from 'react';

import dogAdopt from '../assets/portfolio screenshots/Dog Adoption.png';
import empTrack from '../assets/portfolio screenshots/Employee Tracker.png';
import passGen from '../assets/portfolio screenshots/Password Gen.png';
import recSite from '../assets/portfolio screenshots/Recipe Site.png';
import noteTake from '../assets/portfolio screenshots/Note Taker.png';
import weather from '../assets/portfolio screenshots/Weather.png';
import game from '../assets/portfolio screenshots/Game.JPG'

function Portfolio() {

    return (
    <div id="portfolio">
        <h1>Portfolio</h1>
        <div>
            The following are just some of the "finished projects" that I've worked on, but as we all know, a project is never truly finished!!
        </div>
        <div id="contentBox">
            <div class="portBox">

            <div id="portImg"><a href="https://github.com/annapng/blackjack"><img src={game} id="portImg" /></a></div>


            <div id="portImg"><a href="https://github.com/annapng/dog-adoption"><img src={dogAdopt} id="portImg" /></a></div>
                <div id="portImg"><a href="https://github.com/annapng/Project1"><img src={recSite} id="portImg" /></a></div>
                <div id="portImg"><a href="https://github.com/annapng/Employee-Tracker"><img src={empTrack} id="portImg" /></a></div>
                <div id="portImg"><a href="https://github.com/annapng/passwordGen"><img src={passGen} id="portImg" /></a></div>
                <div id="portImg"><a href="https://github.com/annapng/PWA-App"><img src={noteTake} id="portImg" /></a></div>



            </div>


        </div>
    </div>
    )
}

export default Portfolio;