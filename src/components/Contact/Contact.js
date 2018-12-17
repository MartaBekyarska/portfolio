import React from 'react';
import './Contact.css';
import Menu1 from '../menu1/Menu1';

const Contact = () => {
    return (
        <div class="container">
            <Menu1 />
            <h1 className="message">If you wish to contact me via email please click <a class="mailto" href="mailto:martatsoneva@yahoo.com">here </a>or simply send me a message through <a href="https://www.linkedin.com/in/marta-bekyarska-4280b7137/">Linkedin</a>.</h1>
        </div>
    );
};
export default Contact;