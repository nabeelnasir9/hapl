import "./Footer.css";
import Logo from "../../assets/gbl.png";
import { SlLocationPin } from "react-icons/sl";
import { HiMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div className="footer_content_1">
          <img src={Logo} alt="" className="footer_logo" />
          <p className="footer_logo_content">
            <span className="quotes">&quot;</span>GBL CHIMICA attached with
            worldwide manufacturing industries providing advanced chemical
            treatment technologies and extensive technical service to solve
            industrial applications in chemicals auxiliaries.
            <span className="quotes">&quot;</span>
          </p>
        </div>
        <div className="footer_content_2">
          <h1 className="footer_content_2_head_1">Company</h1>
          <p className="footer_content_2_para_1">Home</p>
          <p className="footer_content_2_para_1">About</p>
          <p className="footer_content_2_para_1">Products</p>
          <p className="footer_content_2_para_1">Contact Us</p>
        </div>
        <div className="footer_content_3">
          <h1 className="footer_content_2_head_1">Privacy</h1>
          <p className="footer_content_2_para_1">Help</p>
          <p className="footer_content_2_para_1">Terms of service</p>
          <p className="footer_content_2_para_1">Legal</p>
          <p className="footer_content_2_para_1">Privacy Policy</p>
        </div>
        <div className="footer_content_4">
          <div className="footer_contact_1">
            <h1 className="footer_content_2_head_1">Reach Us</h1>
            <div className="footer_content_Reach_1">
              <HiMail className="icon__footer" color="#fff" />
              <p className="footer_content_content_1">info@gblchimica.com</p>
            </div>
            <div className="footer_content_Reach_1">
              <FiPhoneCall className="icon__footer" color="#fff" />
              <p className="footer_content_content_1">+39 5322462461</p>
            </div>
            <div className="footer_content_Reach_1">
              <SlLocationPin className="icon__footer" color="#fff" />
              <p className="footer_content_content_1">
                Venezia, Nizzolina (Va)-Italy
              </p>
            </div>
            <div className="footer_content_Reach_1">
              <SlLocationPin className="icon__footer" color="#fff" />
              <p className="footer_content_content_1">Aliaga,Izmir-Turkey</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
