import "./Home.css"

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
    </div>
  )
}

export default Home

function Hero(){
    return(
      <div className="hero-main">
        <p className="main-line">welcome to moses safaris</p>
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