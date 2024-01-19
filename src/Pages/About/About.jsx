/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";
import "./About.css";
import map from "../../assets/map.png";

const About = () => {
  return (
    <div id="about-section">
      <div className="Home-wrapper">
        <div className="Home-container">
          <div className="home-container-mid">Special About Us</div>
          <div className="home-container-below">
            Empower your operations with{" "}
          </div>
          <div className="home-container-below-1"> robust safety through </div>
          <div className="home-container-below-2">
            <span style={{ color: "#01923f" }}>Chemical Solutions</span>{" "}
            worldwide .
          </div>
          <div className="home-container-below-3">
            {" "}
            Ensure constant vigilance over your processes and facilities.{" "}
          </div>
          <div className="home-container-below-4">
            {" "}
            Enhance efficiency and reliability across your chemical enterprise.
          </div>

          <div className="btn-conteiner">
            <NavLink className="btn-content" to="/products">
              <span className="btn-title">Visit Our Products</span>
              <span className="icon-arrow">
                <svg
                  width="66px"
                  height="43px"
                  viewBox="0 0 66 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="arrow"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      id="arrow-icon-one"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      id="arrow-icon-two"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      id="arrow-icon-three"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </span>
            </NavLink>
          </div>
          <img
            src={map}
            style={{ width: "100%", height: "auto", marginTop: "40px", marginBottom:'30px' }}
          />
          <div className="About-exp">
            <div className="about-exp-head">
                About <span style={{borderBottom:'3px solid #cb2000'}}>GBL CHIMICA:</span>
            </div>
            <div className="about-exp-para">
              <span style={{fontWeight:'bold'}}>GBL CHIMICA </span>stands at the forefront of the chemical industry,
              specializing in the bespoke production of specialty chemical
              auxiliaries. Our mission is clear: to furnish our clientele with
              products of unparalleled quality. Our expansive operations are
              strategically situated across two key locations in Italy and
              Turkey, each facility boasting state-of-the-art in-house
              laboratories and production units. This setup allows us to engage
              in rigorous experimentation and production of an extensive range
              of chemical auxiliaries. Our expertise spans across multiple
              sectors, including leather, textile, water treatment, and pulp and
              paper industries.<br></br><br></br> At <span style={{fontWeight:'bold'}}> GBL CHIMICA</span>, innovation is at the core of our
              business. We are not just a company; we are a hub of innovation
              and excellence, relentlessly pushing the boundaries of whats
              possible in the realm of chemical auxiliaries. Our commitment to
              excellence is matched by our dedication to our customers, ensuring
              that each product we deliver adheres to the highest standards of
              quality and performance. Our global footprint is a testament to
              our commitment and expertise. GBL CHIMICA is proudly associated
              with leading manufacturing industries worldwide, bringing advanced
              chemical treatment technologies and an extensive range of
              technical services to the table. Our team of experts is dedicated
              to solving complex industrial applications in chemical
              auxiliaries, ensuring that we remain at the cutting edge of
              industry developments and continue to deliver solutions that not
              only meet but exceed our customers expectations. At GBL CHIMICA,
              we are more than just a chemical company - we are your trusted
              partner in innovation, quality, and service.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
