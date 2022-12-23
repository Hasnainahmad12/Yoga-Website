import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "../Styles/Navbar.css";
import logo from "../Images/Capture.PNG";

const Navbar = () => {
  const [icon, seticon] = useState(false);

  return (
    <div className="navbar">
      <div>
        <img src={logo} className="h-14 w-14" alt=""/>
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        <li onClick={() => seticon(!icon)}><a href="#home">Home</a></li>
        <li onClick={() => seticon(!icon)}><a href="#about">About</a></li>
        <li onClick={() => seticon(!icon)}><a href="#our">Our Approach</a></li>
        <li onClick={() => seticon(!icon)}><a href="#services">Services</a></li>
        <li onClick={() => seticon(!icon)}><a href="#why">Why Choose Us</a></li>
        <li onClick={() => seticon(!icon)}><a href="#team">Team</a></li>
        <li onClick={() => seticon(!icon)}><a href="#testimonial">Testimonial</a></li>
        <li onClick={() => seticon(!icon)}><a href="#contact">Contacts</a></li>
        <li onClick={() => seticon(!icon)}><a href="#news">News</a></li>
      </ul>

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
