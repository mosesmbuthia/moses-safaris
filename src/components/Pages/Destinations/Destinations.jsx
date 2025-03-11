import React from 'react'
import maasaiMara from "../../../assets/Images/maasai-mara.jpg"
import dianiImg from "../../../assets/Images/diani.jpg"
import amboseliImg from "../../../assets/Images/amboseli.jpg"
import lamuImg from "../../../assets/Images/lamu.jpg"
import nakuruImg from "../../../assets/Images/nakuru-park.jpg"
import tsavoImg from "../../../assets/Images/tsavo-park.jpg"
import "./Destinations.css"
function Destinations() {
  return (
    <div className='destinations-container'>
      <h1 className="title">Top Destinations in Kenya</h1>
      <div className="destinations-grid">
        <div className="destination-card">
          <img src={maasaiMara} alt="Maasai Mara" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Maasai Mara</h2>
            <p className="destination-description">Experience the Great Migration and breathtaking wildlife.</p>
            <p className="destination-price">Group Price: <span>$2000</span></p>
            <p className="destination-price">Solo Price: <span>$500</span></p>
            <a href="#" className="details-button">View Details</a>
          </div>
        </div>
        
        <div className="destination-card">
          <img src={dianiImg} alt="Diani Beach" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Diani Beach</h2>
            
            <p className="destination-description">Relax on Kenya's pristine white sandy beaches and enjoy these activities.</p>
            <ol>
              <li>Dolphin watch trips</li>
              <li>Island excursions</li>
              <li>Beach fishing</li>
            </ol>
            <p className="destination-price">Group Price: <span>$1800</span></p>
            <p className="destination-price">Solo Price: <span>$450</span></p>
            <a href="#" className="details-button">View Details</a>
          </div>
        </div>
        
        <div className="destination-card">
          <img src={amboseliImg} alt="Amboseli National Park" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Amboseli National Park</h2>
            <p className="destination-description">View stunning wildlife with Mount Kilimanjaro in the background.</p>
            <p className="destination-price">Group Price: <span>$2200</span></p>
            <p className="destination-price">Solo Price: <span>$600</span></p>
            <a href="#" className="details-button">View Details</a>
          </div>
        </div>
        
        <div className="destination-card">
          <img src={lamuImg} alt="Lamu Island" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Lamu Island</h2>
            <p className="destination-description">Explore the Swahili culture and stunning coastal scenery.</p>
            <p className="destination-price">Group Price: <span>$1900</span></p>
            <p className="destination-price">Solo Price: <span>$500</span></p>
            <a href="#" className="details-button">View Details</a>
          </div>
        </div>
        
        <div className="destination-card">
          <img src={nakuruImg} alt="Lake Nakuru National Park" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Lake Nakuru National Park</h2>
            <p className="destination-description">Famous for flamingos and diverse wildlife.</p>
            <p className="destination-price">Group Price: <span>$2100</span></p>
            <p className="destination-price">Solo Price: <span>$550</span></p>
            <a href="#" className="details-button">View Details</a>
          </div>
        </div>
        
        <div className="destination-card">
          <img src={tsavoImg} alt="Tsavo National Park" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Tsavo National Park</h2>
            <p className="destination-description">One of the largest national parks in the world, rich in wildlife.</p>
            <p className="destination-price">Group Price: <span>$2300</span></p>
            <p className="destination-price">Solo Price: <span>$650</span></p>
            <a href="#" className="details-button">View Details</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations
