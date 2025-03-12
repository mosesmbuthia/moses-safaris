import React from 'react'
import maasaiMara from "../../../assets/Images/maasai-mara.jpg"
import dianiImg from "../../../assets/Images/diani.jpg"
import amboseliImg from "../../../assets/Images/amboseli.jpg"
import lamuImg from "../../../assets/Images/lamu.jpg"
import nakuruImg from "../../../assets/Images/nakuru-park.jpg"
import tsavoImg from "../../../assets/Images/tsavo-park.jpg"
import "./Destinations.css"

const Destinations = () => {
  const toggleReadMore = (e) => {
    const content = e.target.previousElementSibling;
    content.classList.toggle("expanded");
    e.target.textContent = content.classList.contains("expanded") ? "Read Less ▲" : "Read More ▼";
  };

  return (
    <div className='destinations-container'>
      <h1 className="title">Top Destinations in Kenya</h1>
      <div className="destinations-grid">

        <div className="destination-card">
          <img src={maasaiMara} alt="Maasai Mara" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Maasai Mara</h2>
            <p className="destination-description">Immerse yourself in the breathtaking landscapes of the Maasai Mara, where vast golden savannahs stretch as far as the eye can see. Witness the awe-inspiring Great Migration as millions of wildebeest, zebras, and gazelles thunder across the plains...
              <span className='hidden-text'>
                braving the crocodile-infested waters of the Mara River. Beyond the wildlife, experience the vibrant Maasai culture, where traditions and nature exist in perfect harmony, offering a glimpse into a way of life unchanged for centuries.
              </span>
            </p>
            <h3 className="read-more-button" onClick={toggleReadMore}>Read More ▼</h3>
            <p className="destination-price">Group Price: <span>$2000</span></p>
            <p className="destination-price">Solo Price: <span>$500</span></p>
            <a href="#" className="details-button">Book now</a>
          </div>
        </div>

        <div className="destination-card">
          <img src={dianiImg} alt="Diani Beach" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Diani Beach</h2>

            <p className="destination-description">A tropical paradise on Kenya’s coast, Diani Beach boasts powdery white sands, crystal-clear waters, and swaying palm trees that create a serene escape. Whether you’re looking to relax under the sun, explore vibrant coral reefs while snorkeling, or embark on a thrilling dolphin-watching tour, Diani has something for everyone.
              <span className='hidden-text'>
                Adventurers can indulge in skydiving with breathtaking ocean views, while culture enthusiasts can visit nearby villages to experience Swahili traditions. As the sun sets, the beach transforms into a lively scene with beachfront dining, music, and bonfire-lit shores, making every moment magical.
              </span>
            </p>
            <h3 className="read-more-button" onClick={toggleReadMore}>Read More ▼</h3>
            <p className="destination-price">Group Price: <span>$1800</span></p>
            <p className="destination-price">Solo Price: <span>$450</span></p>
            <a href="#" className="details-button">Book now</a>
          </div>
        </div>

        <div className="destination-card">
          <img src={amboseliImg} alt="Amboseli National Park" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Amboseli National Park</h2>
            <p className="destination-description">With Mount Kilimanjaro towering in the background, Amboseli National Park offers a surreal safari experience like no other. Known as the land of giants, this park is home to large herds of elephants, gracefully roaming the open plains against Africa’s highest peak.
              <span className='hidden-text'>
                The diverse ecosystem also supports lions, cheetahs, giraffes, and over 400 bird species. Sunrises and sunsets paint the sky in golden hues, making every game drive a photographer’s dream. Beyond wildlife, visiting the local Maasai communities provides an enriching experience of their centuries-old traditions and warrior culture.
              </span>
            </p>
            <h3 className="read-more-button" onClick={toggleReadMore}>Read More ▼</h3>
            <p className="destination-price">Group Price: <span>$2200</span></p>
            <p className="destination-price">Solo Price: <span>$600</span></p>
            <a href="#" className="details-button">Book now</a>
          </div>
        </div>

        <div className="destination-card">
          <img src={lamuImg} alt="Lamu Island" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Lamu Island</h2>
            <p className="destination-description">Stepping onto Lamu Island feels like traveling back in time, where ancient Swahili culture, stunning architecture, and a laid-back coastal vibe blend harmoniously.
              <span className="hidden-text">
                Narrow, winding streets lead through the UNESCO-listed Lamu Old Town, where carved wooden doors and coral stone buildings tell tales of a rich trading past. Traditional dhow boats glide through the turquoise waters, inviting you for a peaceful sunset sail. Whether wandering through bustling markets, enjoying fresh seafood, or simply unwinding on pristine beaches, Lamu offers a unique escape untouched by modern hustle.
              </span>
            </p>
            <h3 className="read-more-button" onClick={toggleReadMore}>Read More ▼</h3>
            <p className="destination-price">Group Price: <span>$1900</span></p>
            <p className="destination-price">Solo Price: <span>$500</span></p>
            <a href="#" className="details-button">Book now</a>
          </div>
        </div>

        <div className="destination-card">
          <img src={nakuruImg} alt="Lake Nakuru National Park" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Lake Nakuru National Park</h2>
            <p className="destination-description">Famous for its shimmering pink horizon, Lake Nakuru is a sanctuary for thousands of flamingos that gather along its alkaline shores. This national park is more than just a bird-watcher’s paradise—it’s home to endangered rhinos, elusive leopards,
              <span className="hidden-text">
                and towering giraffes, all set against breathtaking landscapes of rocky escarpments and cascading waterfalls. The shimmering lake reflects golden sunsets, creating picture-perfect moments for nature lovers. Whether you’re on a scenic game drive or exploring the rich biodiversity, Lake Nakuru promises an unforgettable encounter with Kenya’s wild beauty.
              </span>
            </p>
            <h3 className="read-more-button" onClick={toggleReadMore}>Read More ▼</h3>
            <p className="destination-price">Group Price: <span>$2100</span></p>
            <p className="destination-price">Solo Price: <span>$550</span></p>
            <a href="#" className="details-button">Book now</a>
          </div>
        </div>

        <div className="destination-card">
          <img src={tsavoImg} alt="Tsavo National Park" className="destination-image" />
          <div className="destination-details">
            <h2 className="destination-name">Tsavo National Park</h2>
            <p className="destination-description">One of the world’s largest wildlife reserves, Tsavo National Park is a rugged, untamed land where raw nature reigns supreme. Famous for its red-dust-coated elephants and legendary man-eating lions of the past, the park offers a thrilling safari adventure.
              <span className="hidden-text">
                The striking landscapes range from volcanic hills and ancient lava flows to lush riverbanks teeming with hippos and crocodiles. Tsavo’s remote wilderness guarantees an off-the-beaten-path experience, where visitors can lose themselves in the vastness of Africa’s great outdoors and witness nature at its most wild and free.
              </span>
            </p>
            <h3 className="read-more-button" onClick={toggleReadMore}>Read More ▼</h3>
            <p className="destination-price">Group Price: <span>$2300</span></p>
            <p className="destination-price">Solo Price: <span>$650</span></p>
            <a href="#" className="details-button">Book now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations
