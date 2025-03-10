import React from 'react'
import "./Newsletter.css"
function Newsletter() {
  return (
    <div className='newsletter-invite'>
      <div className="newsletter">
  <h2>Stay Ahead of the Adventure!</h2>
  <p>Subscribe to our newsletter and be the first to discover new destinations and exclusive discounts on our tours!</p>
  <form>
    <input type="email" placeholder="Enter your email" required />
    <button type="submit">Subscribe Now</button>
  </form>
</div>

    </div>
    
  )
}

export default Newsletter
