// import React from 'react';
import Spline from '@splinetool/react-spline';
import '../HomePage/HomePage.css';
import polaroidImage from '../../assets/images/poleroid2.png';

const HomePage = () => {

    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                <div className="absolute bg-black top-6  left-9 w-0 h-0.5 horizontal-line"></div> 
    <div className="absolute bg-black top-9 left-6 h-0 w-0.5 vertical-line"></div>
            {/* Left side content */}
            <div className="z-10 flex flex-col  pl-14 pt-12 pr-14">
                <h1 className="text-6xl font-bold animate-slideFadeIn pl-2 pt-2 pr-2" style={{
                    color: 'green',
                    textShadow: '1px 1px 2px #000000',
                    // filter: 'drop-shadow(0 0 0.75rem crimson)'
                }}>Welcome to my Pizza!</h1>
                <img src={polaroidImage} alt="Descriptive Alt Text" className="w-1/2 md:w-3/4 lg:w-full mt-36 ml-14 mr-14" style={{ maxWidth: '50%', maxHeight: 'auto' }} />


                {/* Other content here */}
            </div>

            {/* Right side for Spline 3D object */}
    <div className="z-10 mt-14 mb-14 ml-14 mr-14 items-center justify-end md:pr-10">
        <div className="spline-container overflow-hidden relative" style={{ maxWidth: '90%', maxHeight: '90vh' }}>
            <Spline className="spline-scale w-full h-auto" scene="https://prod.spline.design/YTEw5P9UNxWb4XB7/scene.splinecode" />
        </div>
  
    </div>
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
