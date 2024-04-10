// import React from 'react';
// import { useEffect, useRef } from 'react';
import '../About/About.css';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import Spline from '@splinetool/react-spline';

const About = () => {
//   const mountRef = useRef(null); // This ref will point to the div where the Three.js scene should be rendered

//   useEffect(() => {
//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
//     mountRef.current.appendChild(renderer.domElement); // Append the renderer to the DOM

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
//     scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//     scene.add(directionalLight);

//     // Camera positioning
//     camera.position.z = 5;

//     // GLTFLoader to load a .glb file
//     const loader = new GLTFLoader();
//     loader.load('/untitled.gltf', (gltf) => {
//       scene.add(gltf.scene);
//     });

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []); // Empty array ensures this effect runs only once on mount

 








    return (
        <div className="grid grid-cols-2 gap-4 h-screen">

            <div className="flex flex-col justify-center items-center p-16 lg:flex-grow">
            </div>

      
            <div className="relative space-y-6 p-16 flex flex-col justify-start items-center">
                                    <div className="absolute bg-black top-16 right-16 w-0 h-0.5 horizontal-line2"></div> 
    <div className="absolute bg-black top-16 right-12 h-0 w-0.5 vertical-line2"></div>


              
                <h1 className=" text-base md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold animate-slideFadeInR" style={{ color: 'green', textShadow: '1px 1px 2px #000000' }}>More about Pizza!</h1>
                
  
<div className="w-full flex flex-col space-y-4">
    <div className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-md h-3/5 flex items-center justify-center">
     
    </div>
    <div className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-md h-3/5 flex items-center justify-center">
     
    </div>
    <div className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-md h-3/5 flex items-center justify-center">
       
    </div>
</div>

            </div>
        </div>
    );
};

export default About;
