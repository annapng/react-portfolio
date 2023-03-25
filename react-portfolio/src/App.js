import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import AboutMe from './content/aboutMe.js';
import Portfolio from './content/portfolio.js';
import Resume from './content/resume.js';
import Contact from './content/contact.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
      <AboutMe />
      <Portfolio />
      <Resume />
      <Contact />
      <p></p>
      <Footer />
      </div>

    </div>
  );
}

export default App;
