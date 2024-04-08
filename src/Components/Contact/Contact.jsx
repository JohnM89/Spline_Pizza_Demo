// import React from 'react';
import { useEffect, useState, useRef } from 'react'

const Contact = () => {

    const form = useRef()
    return (
        <div>
            <h1 className="text-base md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold animate-slideFadeIn pl-24 pt-28" style={{
                color: 'green',
                textShadow: '1px 1px 2px #000000',
                // filter: 'drop-shadow(0 0 0.75rem crimson)'
            }}>Contact Pizza</h1>
            <form className="flex justify-center items-center">
                <label htmlFor="name">DO NOT:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">CONTACT:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">THE PIZZA:</label>
                <textarea id="message" name="message" rows="4" />

                <button type="submit">  </button>
            </form>
        </div>
    );
};

export default Contact;