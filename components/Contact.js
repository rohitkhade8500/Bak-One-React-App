import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit" className='btn'>Submit</button>
      </form>
      <div className="contact-info">
        <p><strong>Address:</strong> 12345 Hollywood Blvd Street, Los Angeles, California</p>
        <p><strong>Phone:</strong> +44 (Phone) 123456</p>
        <p><strong>Email:</strong> info@bak-onecompany.com</p>
      </div>
    </section>
  );
}

export default Contact;