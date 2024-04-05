// import React from 'react';
import '../About/About.css';
import Spline from '@splinetool/react-spline';
const About = () => {
    return (

        <div className="about">
                <h1 className="text-6xl font-bold animate-slideFadeIn pl-24 pt-28" style={{
                    color: 'green',
                    textShadow: '1px 1px 2px #000000',
                    // filter: 'drop-shadow(0 0 0.75rem crimson)'
                }}>More about Pizza!</h1>
                            <div className="modal-container pr-16 pt-28" id="modal-wrapper">
                <div id="modal">
                    <div id="modal-background"></div>
                    <div id="modal-content">
                        <div className=" spline-container" >
                            <Spline scene="https://prod.spline.design/YTEw5P9UNxWb4XB7/scene.splinecode" />
                        </div>
                        <div className="flex justify-center items-center h-screen">

                            <button type="button" className="bg-white modal-action">
                                <div className="modal-action-pattern"></div>
                                <div className="modal-action-fade"></div>
                                <span className="modal-action-text inter-font">PIZZA</span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
            <p className="text-1xl font-bold animate-slideFadeIn" style={{
                    color: 'green',
                    textShadow: '1px 1px 2px #000000',
                    // filter: 'drop-shadow(0 0 0.75rem crimson)'
                }}>
                Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza Pizza 
            </p>

        </div>

    );
};

export default About;