import Image1 from "../../assets/p5.jpg";
import Image2 from "../../assets/p5.jpg";
import Image3 from "../../assets/p5.jpg";
import Image4 from "../../assets/p5.jpg";
import Image5 from "../../assets/p5.jpg";

import './Service.css'
const Service = () => {
  return (
    <div className="parallax-wrapper">
    <div className="parallax-bg"></div>
    <div className="expertise-content">
    <div className="ExpertiseStart_heading">Our <span style={{color:"#fff"}}>Services</span></div>

      <div className="expertise-container">
        <div className="card">
          <img src={Image1} alt="Heading1" className="card-bg" />
          <div className="card-content">
              <span className="card-number">01</span>
              <h2 className="card-heading">Matter Port 3D Tour</h2>
              <p className="card-paragraph">
                A Digital Twin of real-world space. Allows users to virtually
                walk inside your listing anytime, anywhere.
              </p>
            <div className="card-buttons">
              <button className="link-button">Link</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Image2} alt="Heading1" className="card-bg" />
          <div className="card-content">
            <span className="card-number">02</span>
            <h2 className="card-heading">360° Virtual Tours</h2>
            <p className="card-paragraph">
              Show off your properties with more impressive perspective.
            </p>
            <div className="card-buttons">
              <button className="link-button">Link</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Image3} alt="Heading1" className="card-bg" />
          <div className="card-content">
            <span className="card-number">03</span>
            <h2 className="card-heading">Virtual Staging (CGI)</h2>
            <p className="card-paragraph">
              Transform empty photos / 360° of your space into a more
              marketable and attractive staged images.
            </p>
            <div className="card-buttons">
              <button className="link-button">Link</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Image4} alt="Heading1" className="card-bg" />
          <div className="card-content">
            <span className="card-number">04</span>
            <h2 className="card-heading">3D rendering- 360° Virtual Tour</h2>
            <p className="card-paragraph">
              Tour that is a set of 360°s high resolution panoramic images of
              your space that allows users to walkthrough before entering the
              construction phase.
            </p>
            <div className="card-buttons">
              <button className="link-button">Link</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Image5} alt="Heading1" className="card-bg" />
          <div className="card-content">
            <span className="card-number">05</span>
            <h2 className="card-heading">Video Tours</h2>
            <p className="card-paragraph">
              Immerse buyers in the next generation of home shopping
              experience.
            </p>
            <div className="card-buttons">
              <button className="link-button">Link</button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>  )
}

export default Service