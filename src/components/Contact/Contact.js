import React from 'react';
import './contact.css';
import Menu1 from '../menu1/Menu1';
import Footer from '../footer/Footer';

const Contact = () => {
    return (
        <div className="container">
            <Menu1 />
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
            <Footer />
        </div>
    );
};
export default Contact;