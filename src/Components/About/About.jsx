// import React from 'react';
import '../About/About.css';
// import Spline from '@splinetool/react-spline';

const About = () => {
    return (
        <div className="grid grid-cols-2 gap-4 h-screen">
            {/* Left column for the Spline model and modal */}
<div className="flex flex-col justify-center items-center p-16 lg:flex-grow">
                <div id="modal-wrapper" className="w-full h-full flex justify-center items-center">
                    <div id="modal" className="w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"> {/* Control modal width on larger screens */}
                        <div id="modal-background"></div>
                        <div id="modal-content" className="flex flex-col justify-center items-center">
                            {/* <div className="spline-container">
                                <Spline scene="https://prod.spline.design/YTEw5P9UNxWb4XB7/scene.splinecode" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right column for title and containers */}
            <div className="relative space-y-6 p-16 flex flex-col justify-start items-center">
                                    <div className="absolute bg-black top-16 right-16 w-0 h-0.5 horizontal-line2"></div> 
    <div className="absolute bg-black top-16 right-12 h-0 w-0.5 vertical-line2"></div>


                {/* Title */}
                <h1 className=" text-base md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold animate-slideFadeInR" style={{ color: 'green', textShadow: '1px 1px 2px #000000' }}>More about Pizza!</h1>
                
                {/* Three containers */}
<div className="w-full flex flex-col space-y-4">
    <div className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-md h-3/5 flex items-center justify-center">
        {/* Content here */}
    </div>
    <div className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-md h-3/5 flex items-center justify-center">
        {/* Content here */}
    </div>
    <div className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-md h-3/5 flex items-center justify-center">
        {/* Content here */}
    </div>
</div>

            </div>
        </div>
    );
};

export default About;
