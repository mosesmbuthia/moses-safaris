import React from 'react'
import { FaQuoteLeft } from "react-icons/fa"; 
import "./Testimonials.css"
import mosesImg from "../../assets/Images/moses.jpg"
import francsImg from "../../assets/Images/francis.jpg"
import jackieImg from "../../assets/Images/jackie.jpg"

function Testimonials() {
  return (
    
          <div className="testimonial-section">
            <h2 className='testimonial-tagline'>What Our Customers Say</h2>
            <div className="testimonials">
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">
                  "This safari was the best experience of my life! The wildlife and guides were amazing."
                </p>
                <div className="testimonial-info">
                  <img src={francsImg} alt="John Doe" />
                  <div>
                    <h4>francis muraya</h4>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>
      
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">
                  "A truly unforgettable adventure! I highly recommend this tour company."
                </p>
                <div className="testimonial-info">
                  <img src={jackieImg} alt="Jane Smith" />
                  <div>
                    <h4>jackline robert</h4>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>
      
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">
                  "Seeing the Big Five up close was incredible. Everything was well-organized!"
                </p>
                <div className="testimonial-info">
                  <img src={mosesImg} alt="Michael Brown" />
                  <div>
                    <h4>joe ndung'u</h4>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Testimonials
