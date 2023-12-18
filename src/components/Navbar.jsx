import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "small",
      textDecoration: isActive ? "none" : "underline",
      border: isActive ? "none" : "double",
      height: "25px",
      width: "65px",
      textAlign: "center",
      padding: "5px",
      marginLeft: "5px",
      color: "Black",
      fontSize: "17px",
      borderRadius: "8%",
      boxShadow: "3px 3px 0px 0px",
      display: "inline-block",
    };
  };

  return (
    <>
      <nav
        className="NavBar"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100px",
          backgroundColor: "skyblue",
        }}>
        <NavLink link="./" to="/" exact>
          <img
            src={Logo}
            alt="Logo Of ALY Myanmar"
            height={50}
            width={50}></img>
          <label style={{ fontSize: "30px", fontWeight: "bold" }}>
            ALY Myanmar
          </label>
        </NavLink>
        <div className="navItems">
          <NavLink style={navLinkStyles} link="./" to="/" exact>
            Home
          </NavLink>
          <NavLink style={navLinkStyles} link="./About" to="/About" exact>
            About
          </NavLink>
          <NavLink style={navLinkStyles} link="./Contact" to="/Contact" exact>
            Contact
          </NavLink>
          <NavLink style={navLinkStyles} link="./Services" to="/Services" exact>
            Services
          </NavLink>
          <NavLink style={navLinkStyles} link="./History" to="/History" exact>
            History
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
