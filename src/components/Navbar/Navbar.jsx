import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {" "}
      <nav className="navbar">
        <NavLink to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
        </NavLink>
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <NavLink
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black" }}
                className="navbar-item"

            >
                Home
            </NavLink>
            <Link
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black" }}
                className="navbar-item"


            >
                About
            </Link>
            {/* <NavLink
                to="/service"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black" }}
                className="navbar-item"


            >
                Service
            </NavLink> */}
            <NavLink to="/products" style={{textDecoration:'none', color:'black'}} className={({ isActive }) => isActive ? 'activeLink' : ''}>
            Products
          </NavLink>

            <NavLink
                to="/contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black" }}
                className="navbar-item"
s

            >
                Contact
            </NavLink>
            <NavLink to="/products" style={{whiteSpace:'nowrap'}}>
          <button className="quote-button">
            Products Catalog
          </button>
         
          {/* <button className="quote-button" >
            Get Information
          </button> */}
          </NavLink>
        </div>

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;