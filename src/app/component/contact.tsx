

import React from 'react';
import './contact.css';

 function Contact() {
  return (
    <div  id='contact' className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for any projects or collaborations. I’d love to hear from you!</p>
      <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}


export default Contact