import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    const baseStyles = {
      fontWeight: isActive ? "bold" : "small",
      textDecoration: isActive ? "none" : "underline",
      border: isActive ? "none" : "double",
      height: "20px",
      width: "65px",
      textAlign: "center",
      padding: "5px",
      marginLeft: "5px",
      color: "black",
      fontSize: "15px",
      borderRadius: "8%",
      boxShadow: "3px 3px 0px 0px",
      display: "inline-block",
    };

    const mobileStyles = {
      fontWeight: isActive ? "bold" : "small",
      textDecoration: isActive ? "none" : "underline",
      width: "55px",
      borderRadius: "8%",
      textAlign: "center",
      marginLeft: "5px",
      display: "block",
      fontSize: "5px",
    };

    return {
      ...baseStyles,
      "@media screen and (min-width: 767px)": {
        ...baseStyles,
      },
      "@media screen and (max-width: 768px)": {
        ...mobileStyles,
      },
    };
  };

  const navItems = [
    { label: "Home", to: "/", exact: true },
    { label: "About", to: "/About", exact: true },
    { label: "Contact", to: "/Contact", exact: true },
    { label: "Services", to: "/Services", exact: true },
    { label: "History", to: "/History", exact: true },
  ];

  return (
    <>
      <nav
        className="NavBar"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          height: "100px",
          backgroundColor: "skyblue",
        }}>
        <NavLink
          link="./"
          to="/"
          exact
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img
            src={Logo}
            alt="Logo Of ALY Myanmar"
            height={50}
            width={50}
            style={{ marginLeft: "0" }}></img>
          <label style={{ fontSize: "30px", fontWeight: "bold" }}>
            ALY Myanmar
          </label>
        </NavLink>
        <div
          className="navItems"
          style={{ marginLeft: "auto", marginRight: "100px" }}>
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              style={navLinkStyles}
              to={item.to}
              exact={item.exact}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
