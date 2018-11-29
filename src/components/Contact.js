import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import '../css/contact.css';

const Contact = () => {
    return (
        <div class="container">
            <form>

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                        <input type="submit" value="Submit" />

                </form>
                <Link to="/">
                <p>Back to Home</p>
                </Link>
            </div>
            


                );
            };
            
            
            
            
export default Contact;