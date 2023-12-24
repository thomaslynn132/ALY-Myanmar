import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Example icon from react-icons
import "../App.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
          height: "85px",
          backgroundColor: "skyblue",
        }}>
        <NavLink
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
          <label
            style={{
              fontSize: "30px",
              fontFamily: "fantasy",
            }}>
            ALY Myanmar
          </label>
        </NavLink>
        <div className="navItems">
          <div onClick={toggleMobileMenu}>
            <FiMenu size={30} />
          </div>
          <div className="desktopMenu">
            {isMobileMenuOpen && (
              <div className="mobileMenu">
                {navItems.map((item, index) => (
                  <NavLink
                    key={index}
                    style={navLinkStyles}
                    to={item.to}
                    exact={item.exact}
                    onClick={toggleMobileMenu}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
