import React from 'react';

import dogAdopt from '../assets/portfolio screenshots/Dog Adoption.png';
import empTrack from '../assets/portfolio screenshots/Employee Tracker.png';
import passGen from '../assets/portfolio screenshots/Password Gen.png';
import recSite from '../assets/portfolio screenshots/Recipe Site.png';
import noteTake from '../assets/portfolio screenshots/Note Taker.png';
import weather from '../assets/portfolio screenshots/Weather.png';

function Portfolio() {

    return (
    <div>
        <h1>Portfolio</h1>
        <div>
            The following are just some of the "finished projects" that I've worked on, but as we all know, a project is never truly finished!!
        </div>
        <div id="contentBox">
            <div class="portBox">
                <img src={dogAdopt} id="portImg" />
                <img src={recSite} id="portImg" />
                <img src={empTrack} id="portImg" />
                <img src={passGen} id="portImg" />
                <img src={noteTake} id="portImg" />
                <img src={weather} id="portImg" />



            </div>


        </div>
    </div>
    )
}

export default Portfolio;