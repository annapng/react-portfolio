import React from 'react';

import resume from '../assets/resume sept 2021.pdf';

function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <div id="contentBox">
                Below, you're able to access my currently outdated resume!

                <form method="get" action="assets\resume sept 2021.pdf">
            <button class="download">Download</button> </form>

            </div>


        </div>


    )


}

export default Resume;