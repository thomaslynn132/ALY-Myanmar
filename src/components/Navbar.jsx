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
          justifyContent: 'center',
          width: "100%",
          height: "100px",
          backgroundColor: "skyblue",
        }}>
        <NavLink link="./" to="/" exact style={{ display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center',}}>
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
