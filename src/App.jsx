// import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import AboutMe from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

// import ParallaxComponent from './utils/Parallax.jsx'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.getElementById('star-pattern').style.backgroundPositionY = offset * 0.5 + 'px'; // Moves at half the speed of the scroll
      document.getElementById('stripe-pattern').style.backgroundPositionY = offset * 0.7 + 'px'; // Adjust the speed as necessary
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Router>

      <div id="app">
        
        <div id="star-container">
          <div className="app-content">
          <header>
            {/* Navigation links or components */}
          </header>
          <main>
            <section id="home">
              <HomePage />
            </section>
            <section id="about-me" className="background-about">
              <AboutMe />
            </section>
            <section id="portfolio" className="background-portfolio">
              <Portfolio />
            </section>
            <section id="contact" className="background-contact">
              <Contact />
            </section>
          </main>
          <footer>
            {/* Footer content */}
          </footer>
        </div>
          
          <div id="star-pattern"></div>
          
          <div id="star-gradient-overlay"></div>
          
        </div>

        <div id="stripe-container">
          
          <div id="stripe-pattern"></div>
        </div>

        {/* Existing App content now wrapped inside */}
      </div>

    </Router>
  );
}

export default App;
