// import React from 'react';
import Spline from '@splinetool/react-spline';
import '../HomePage/HomePage.css';
import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        // Target the specific element more accurately if possible
        const splineCanvas = document.querySelector('.spline-container canvas');
        if (splineCanvas) {
            splineCanvas.style.background = 'transparent';
        }
    }, []);
    return (
        <div className="flex flex-row justify-start items-start h-screen">
            {/* Left side content */}
            <div className="flex-1">
                <h1 className="text-6xl font-bold animate-slideFadeIn pl-24 pt-28" style={{
                    color: 'green',
                    textShadow: '1px 1px 2px #000000',
                    // filter: 'drop-shadow(0 0 0.75rem crimson)'
                }}>Welcome to my Pizza!</h1>

                {/* Other content here */}
            </div>

            {/* Right side for Spline 3D object */}
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

        </div>
    );
};

export default HomePage;
