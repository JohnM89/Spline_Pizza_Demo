// import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Pizza</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" />

                <button type="submit">Pizza Pizza Pizza Pizza Pizza </button>
            </form>
        </div>
    );
};

export default Contact;