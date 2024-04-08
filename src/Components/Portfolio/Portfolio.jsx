// import React from 'react';
// import Spline from '@splinetool/react-spline';
import '../Portfolio/Portfolio.css';

const Portfolio = () => {
    return (
        <div className="grid">
           
            {/* Your portfolio content goes here */}
                <div className="relative bg-black top-6  left-9 w-0 h-0.5 horizontal-line1"></div> 
    <div className="relative bg-black top-9 left-6 h-0 w-0.5 vertical-line1"></div>
   
            <h1 className=" absolute text-base md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold animate-slideFadeIn pl-20 pt-10" style={{
                    color: 'green',
                    textShadow: '1px 1px 2px #000000',
                    // filter: 'drop-shadow(0 0 0.75rem crimson)'
                }}>Portfolio Page</h1>
            </div>
        
        
    );
};

export default Portfolio;