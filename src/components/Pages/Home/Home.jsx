import mountKenya from "../../../assets/Images/mountkenya.jpg";
import mountRuwenzori from "../../../assets/mountruwenzori.jpg";
import lakeNakuru from "../../../assets/Images/lake nakuru.jpg";
import tsavoPark from "../../../assets/Images/tsavo.jpg";
import nairobiPark from "../../../assets/Images/nairobi.jpg";
import coastalKenya from "../../../assets/Images/coastal kenya.jpg";
import Testimonials from "../../Testimonials/Testimonials";

import "./Home.css"

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Features/>
      <Testimonials/>
    </div>
  )
}

export default Home

function Hero(){
    return(
      <div className="hero-main">
        <p className="main-line">welcome to mbuthia safaris</p>
        <h1 className="sub-line">Best way to find your dream safari adventures</h1>
        
      </div>  
    )
}

function About() {
    return(
        <div className="hero-about">
            <h2 className="about-main-tag">About Us</h2>
            <p className="about-content">Africa has a safari for every traveller – what will your travel story be? African safari packages and tours range from bucket-list adventures to ultra-luxurious vacations and everything in between. Use the links below to find family-friendly vacations, romantic honeymoon packages, thrilling African safaris and affordable holidays. Remember, all our itineraries are totally flexible and can be changed to suit you. No time to browse? Get in touch with an Moses Safaris Expert to plan a tailor-made tour around your interests, wishes and budget.</p>

        </div>
    )
}

function Features() {
    return(
        <div className="featured-destinations">
        <div className="featured-tagline"><h2>Explore Our Top Destinations</h2></div>
        <div className="destination-cards">
        <div className="destination-card">
          <img src={mountKenya} alt="Mount Kenya"
          />
          <div className="card-content">
            <h3>Mount Kenya</h3>
            <p>Enjoy a breathtaking climb to Africa's second-highest peak.</p>
            <span className="price">$350</span>
            <button>View Details</button>
          </div>
        </div>

        <div className="destination-card">
          <img src={mountRuwenzori} alt="Mount Ruwenzori"
          />
          <div className="card-content">
            <h3>Mount Ruwenzori</h3>
            <p>Enjoy a breathtaking climb to Africa's second-highest peak.</p>
            <span className="price">$500</span>
            <button>View Details</button>
          </div>
        </div>

        <div className="destination-card">
          <img src={lakeNakuru} alt="lake nakuru"
          />
          <div className="card-content">
            <h3>Lake Nakuru</h3>
            <p>Visit the home of the pink flamingos and stunning landscapes.</p>
            <span className="price">$200</span>
            <button>View Details</button>
          </div>
        </div>

        <div className="destination-card">
          <img src={tsavoPark} alt="tsavo national park"
          />
          <div className="card-content">
            <h3>Tsavo National Park</h3>
            <p>Discover the vast, untamed wilderness where african giants roam.</p>
            <span className="price">$350</span>
            <button>View Details</button>
          </div>
        </div>

        <div className="destination-card">
          <img src={nairobiPark} alt="nairobi national park"
          />
          <div className="card-content">
            <h3>Nairobi National Park</h3>
            <p>Experience the wolrd's only wildlife capital where the city skyline meets the wild savannah.</p>
            <span className="price">$600</span>
            <button>View Details</button>
          </div>
        </div>

        <div className="destination-card">
          <img src={coastalKenya} alt="coastal kenya"
          />
          <div className="card-content">
            <h3>Coastal Kenya</h3>
            <p>Where the Swahili spirit meets the sapphire sea, a symphony of sea, sand, and Swahili charm.</p>
            <span className="price">$550</span>
            <button>View Details</button>
          </div>
        </div>
        </div>

      </div>
    )
}