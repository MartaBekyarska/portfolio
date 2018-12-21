import React from 'react';
import './contact.css';
import Menu from '../menu/Menu';
import Footer1 from '../footer/Footer1';

const Contact = () => {
    return (
        <div className="container">
            <Menu />
            <div className="wrap-message">
                <h1 className="message">
                    I would love to hear from you via
            <a className="mailto" href="mailto:martatsoneva@yahoo.com">
                        &nbsp;email </a>or simply send me a message through
            <a href="https://www.linkedin.com/in/marta-bekyarska-4280b7137/">
                        &nbsp;Linkedin
            </a>
                    . I will answer as soon as possible.
            </h1>
            </div>
            <Footer1 />
        </div>
    );
};
export default Contact;