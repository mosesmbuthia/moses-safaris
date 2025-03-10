import React from 'react'
import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaGithub, FaTripadvisor  } from "react-icons/fa";
import { BsTwitterX, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div className='main-footer'>
      <div className="main-footer-links">
        <h2>Quick Links</h2>
        <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">refund policy</a></li>
            <li><a href="#">terms & conditions</a></li>
            <li><a href="#">cookie policy</a></li>
        </ul>
      </div>

      <div className="main-footer-links">
        <h2>Our Contacts</h2>
        <p><FaMapMarkerAlt /> Murang'a Town,Uhuru Highway, Mathioya Plaza , 2nd Floor B10</p>
        <p><FaPhone /> +254 799258672 / 079966712</p>
        <p><FaEnvelope /> info@mbuthiasafaris.com</p>
      </div>
        
      <div className="main-footer-links">
      <h2>Connect with us</h2>
        <ul className='<li><a href="#"><FaTripadvisor /></a></li>'>
            <li><a href="https://www.tripadvisor.com/"><FaTripadvisor /></a></li>
            <li><a href="https://x.com/?lang=en"><BsTwitterX /></a></li>
            <li><a href="https://www.facebook.com/"><BsFacebook /></a></li>
            <li><a href="https://www.instagram.com/?hl=en"><FaInstagram /></a></li>
            <li><a href="https://github.com/mosesmbuthia"><FaGithub /></a></li>
            
        </ul>
      </div>
    </div>
  )
}

export default Footer
