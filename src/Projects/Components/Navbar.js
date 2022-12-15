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
        <li onClick={() => seticon(!icon)}>Home</li>
        <li onClick={() => seticon(!icon)}>Our Approach</li>
        <li onClick={() => seticon(!icon)}>About</li>
        <li onClick={() => seticon(!icon)}>Services</li>
        <li onClick={() => seticon(!icon)}>Why Choose Us</li>
        <li onClick={() => seticon(!icon)}>Team</li>
        <li onClick={() => seticon(!icon)}>Events</li>
        <li onClick={() => seticon(!icon)}>FAQS</li>
        <li onClick={() => seticon(!icon)}>News</li>
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
