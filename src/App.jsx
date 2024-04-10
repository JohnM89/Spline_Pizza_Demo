// import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import AboutMe from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';


// import ParallaxComponent from './utils/Parallax.jsx'

function App() {
useEffect(() => {
  const handleScroll = () => {
    const offset = window.pageYOffset;
    document.getElementById('star-pattern').style.backgroundPositionY = offset * 0.5 + 'px';
    document.getElementById('stripe-pattern').style.backgroundPositionY = offset * 0.7 + 'px';
  


    // Example condition to show/hide the Spline component
    const homeSection = document.getElementById('home');
    if (homeSection) {
      const homePosition = homeSection.getBoundingClientRect();
      setShowStickyDiv(homePosition.top < window.innerHeight && homePosition.bottom > 0);
    }
    const aboutSection = document.getElementById('about-me');
    if (aboutSection) {
      const aboutPosition = aboutSection.getBoundingClientRect();
      setShowStickyDiv(aboutPosition.top < window.innerHeight && aboutPosition.bottom > 0);
    }
    // const portfolioSection = document.getElementById('portfolio');
    // if (portfolioSection) {
    //   const portfolioPosition = portfolioSection.getBoundingClientRect();
    //   setShowStickyDiv(portfolioPosition.top < window.innerHeight && portfolioPosition.bottom > 0);
    // }
    // const contactSection = document.getElementById('contact');
    // if (contactSection) {
    //   const contactPosition = contactSection.getBoundingClientRect();
    //   setShowStickyDiv(contactPosition.top < window.innerHeight && contactPosition.bottom > 0);
    // }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  const [showStickyDiv, setShowStickyDiv] = useState(false);

  
  return (
    
    <Router  >
                <div className="app-content">
                        <div>
                    {showStickyDiv && 
        <Spline className="spline-scale fixed top-0  w-full z-50" scene="https://prod.spline.design/YTEw5P9UNxWb4XB7/scene.splinecode" />

      }
      </div>

      <div id="app">
            

        
        <div id="star-container">
        

            
            
          {/* <header >
          </header> */}
          
          <main>
            <section id="home">
              <HomePage setShowStickyDiv={setShowStickyDiv} />
            </section> 
            <section id="about-me" className="background-about">
              <AboutMe setShowStickyDiv={setShowStickyDiv} />
            </section>
            <section id="portfolio" className="background-portfolio">
              <Portfolio  />
            </section>
            <section id="contact" className="background-contact">
              <Contact />
            </section>
          </main>
          {/* <footer>
           
          </footer> */}
        </div>
          
          <div id="star-pattern"></div>
          
          <div id="star-gradient-overlay"></div>
                  <div id="stripe-container">
          
          <div id="stripe-pattern"></div>
        </div>
        </div>

        {/* <div id="stripe-container">
          
          <div id="stripe-pattern"></div>
        </div> */}

        {/* Existing App content now wrapped inside */}
      </div>
      

    </Router>
  );
}

export default App;
