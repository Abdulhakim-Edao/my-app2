import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-text">You can reach me through the following ways:</p>
            <ul className="contact-list">
                <li>Email: me@example.com</li>
                <li>Phone: 555-555-5555</li>
                <li>Twitter: @username</li>
            </ul>
        </div>
    );
}

export default Contact;
