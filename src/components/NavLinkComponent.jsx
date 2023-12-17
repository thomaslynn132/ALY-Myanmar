import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import Logo from "../Assets/Logo.png";

const NavLinkComponent = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "small",
      textDecoration: isActive ? "none" : "underline",
      border: isActive ? "none" : "double",
      height: "25px",
      width: "65px",
      textAlign: "center",
      padding: "10px",
      marginLeft: "10px",
      color: "Black",
      fontSize: "20px",
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
          height: "50px",
        }}>
        <NavLink link="./" to="/" exact>
          <span className="navLi">
            <img
              src={Logo}
              alt="Logo Of ALY Myanmar"
              height={50}
              width={50}></img>
            <label style={{ fontSize: "30px", fontWeight: "bold" }}>
              ALY Myanmar
            </label>
          </span>
        </NavLink>
        <div
          className="navItems"
          style={{
            marginRight: "10px",
            position: "sticky",
            marginLeft: "auto", // Move to the right corner
          }}>
          <NavLink style={navLinkStyles} link="./" to="/" exact>
            <span className="navLi">Home</span>
          </NavLink>
          <NavLink style={navLinkStyles} link="./About" to="/About" exact>
            <span>About</span>
          </NavLink>
          <NavLink style={navLinkStyles} link="./Contact" to="/Contact" exact>
            <span className="navLi"> Contact</span>
          </NavLink>
          <NavLink style={navLinkStyles} link="./Services" to="/Services" exact>
            <span className="navLi"> Services</span>
          </NavLink>
          <NavLink style={navLinkStyles} link="./History" to="/History" exact>
            <span className="navLi"> History</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavLinkComponent;
