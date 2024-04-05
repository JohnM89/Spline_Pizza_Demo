// import React from 'react';
import Spline from '@splinetool/react-spline';
import '../HomePage/HomePage.css';

const HomePage = () => {

    return (
        <div className="flex">
                <div className="absolute bg-black top-6  left-9 w-0 h-0.5 horizontal-line"></div> 
    <div className="absolute bg-black top-9 left-6 h-0 w-0.5 vertical-line"></div>
            {/* Left side content */}
            <div className="">
                <h1 className="text-6xl font-bold animate-slideFadeIn pl-14 pt-12" style={{
                    color: 'green',
                    textShadow: '1px 1px 2px #000000',
                    // filter: 'drop-shadow(0 0 0.75rem crimson)'
                }}>Welcome to my Pizza!</h1>


                {/* Other content here */}
            </div>

            {/* Right side for Spline 3D object */}
                                    {/* <div className=" spline-container" > */}
                            <Spline className="z-10" style={{ transform: 'scale(1.3)' }} scene="https://prod.spline.design/YTEw5P9UNxWb4XB7/scene.splinecode" />
                        {/* </div> */}
            {/* <div className="" id="modal-wrapper">
                <div id="modal">
                    <div id="modal-background"></div>
                    <div id="modal-content">

                        <div className="flex justify-center items-center h-screen">

                            <button type="button" className="bg-white modal-action">
                                <div className="modal-action-pattern"></div>
                                <div className="modal-action-fade"></div>
                                <span className="modal-action-text inter-font">PIZZA</span>
                            </button>
                        </div>

                    </div>

                </div>
            </div> */}

        </div>
    );
};

export default HomePage;
