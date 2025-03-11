import React from 'react'
import "./Contacts.css"
import { FaLocationCrosshairs } from "react-icons/fa6";
import { ImClock } from "react-icons/im";

function Contacts() {
  return (
    <div>
     <h1>Contact Us</h1> 
      <Contact/>
      <MapEmbed/>
    </div>
  )
}

export default Contacts


function Contact () {
  return (
    <div className="contacts-form-container">
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email:</label>
          <input type="email" placeholder="Email" required />

          <label>Message:</label>
          <textarea placeholder="Write your message here" required></textarea>

          <button type="submit">Request Quote</button>
        </form>
      </div>

      <div className="contact-details">
        <h2>Our Locations</h2>
        <p><FaLocationCrosshairs/> Murang'a Town, Uhuru Highway, Mathioya Plaza, 2nd Floor B10</p>
        <p><FaLocationCrosshairs/> Mombasa Town, Nyali Road, Ocean Plaza, 3rd Floor, Suite 12</p>
        <p><FaLocationCrosshairs/> Nairobi, Lang’ata Road, Savannah Business Center, 2nd Floor, Office 5</p>


        
      </div>
      <div className='hours-details'>
      <h2>Office Hours</h2>
        <p><ImClock/> Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p><ImClock/>  Saturday: 10:00 AM - 4:00 PM</p>
        <p><ImClock/>  Sunday: Closed</p>
      </div>

 
      
    </div>
  )
}

function MapEmbed() {
  return (
    <div className="map-container">
      <h2>Find Us on the Map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6569282611376!2d36.8584450756904!3d-1.3824869357403233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0fbbde36bc45%3A0x6f9671d1966870ec!2sNairobi%20National%20Park!5e0!3m2!1sen!2ske!4v1741724048025!5m2!1sen!2ske"
        width="100%"
        height="450"
        style={{ border: "0", borderRadius: "10px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}



