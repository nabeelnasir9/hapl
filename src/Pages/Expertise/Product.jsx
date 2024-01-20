import Image1 from "../../assets/p1.jpg";
import Image2 from "../../assets/p2.jpg";
import Image3 from "../../assets/p3.jpg";
import Image4 from "../../assets/p4.jpg";
import Image5 from "../../assets/p5.jpg";
import "./Product.css";
import { NavLink } from "react-router-dom";
const Product = () => {
  return (
    <div className="parallax-wrapper">
      <div className="parallax-bg"></div>
      <div className="expertise-content">
        <div className="ExpertiseStart_heading">
          Our <span style={{ color: "#fff" }}>Listed Products</span>
        </div>

        <div className="expertise-container">
          <div className="card">
            <img src={Image1} alt="Heading1" className="card-bg" />
            <div className="card-content">
              <span className="card-number">01</span>
              <h2 className="card-heading">Leather Auxiliaries</h2>
              <p className="card-paragraph">
                Explore our meticulously formulated Leather Auxiliaries,
                designed to enhance the durability and aesthetic appeal of
                leather. Our products ensure superior quality and performance,
                setting new standards in leather treatment and care.
              </p>
              <NavLink to="/contact">
                <div className="card-buttons">
                  <button className="link-button">Link</button>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="card">
            <img src={Image2} alt="Heading1" className="card-bg" />
            <div className="card-content">
              <span className="card-number">02</span>
              <h2 className="card-heading">Water Treatment Auxiliaries</h2>
              <p className="card-paragraph">
                Discover our advanced Water Treatment Auxiliaries, engineered to
                ensure clean and safe water through innovative purification
                processes. Tailored for efficiency, our solutions promote
                sustainability and optimal water quality in every drop
              </p>
              <NavLink to="/contact">
                <div className="card-buttons">
                  <button className="link-button">Link</button>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="card">
            <img src={Image3} alt="Heading1" className="card-bg" />
            <div className="card-content">
              <span className="card-number">03</span>
              <h2 className="card-heading">Textile Auxiliaries</h2>
              <p className="card-paragraph">
                Experience the difference with our Textile Auxiliaries, crafted
                to revolutionize fabric processing with superior color, finish,
                and texture. Embrace innovation in every fiber, ensuring
                textiles that are not only vibrant and long-lasting but also
                eco-friendly.
              </p>
              <NavLink to="/contact">
                <div className="card-buttons">
                  <button className="link-button">Link</button>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="card">
            <img src={Image4} alt="Heading1" className="card-bg" />
            <div className="card-content">
              <span className="card-number">04</span>
              <h2 className="card-heading">Sugar Industries Auxiliaries</h2>
              <p className="card-paragraph">
                Optimize your sugar production with our specialized Sugar
                Industry Auxiliaries, designed to enhance efficiency and quality
                throughout the processing chain. From refining to
                crystallization, our products ensure a sweeter outcome with
                every use.
              </p>
              <NavLink to="/contact">
                <div className="card-buttons">
                  <button className="link-button">Link</button>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="card">
            <img src={Image5} alt="Heading1" className="card-bg" />
            <div className="card-content">
              <span className="card-number">05</span>
              <h2 className="card-heading">Paper & Pulp Auxiliaries</h2>
              <p className="card-paragraph">
                Enhance your paper and pulp production with our premium Paper &
                Pulp Auxiliaries, designed for superior fiber treatment and
                paper quality. Our innovative solutions promise improved
                processing, sustainability, and end-product excellence, catering
                to the evolving needs of the industry.
              </p>
              <NavLink to="/contact">
                <div className="card-buttons">
                  <button className="link-button">Link</button>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
