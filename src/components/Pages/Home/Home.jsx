import "./Home.css"

function Home() {
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default Home

function Hero(){
    return(
      <div className="hero-main">
        <h1 className="main-line">welcome to moses safaris</h1>
        <p className="sub-line">Best safaris and adventures</p>
      </div>  
    )
}