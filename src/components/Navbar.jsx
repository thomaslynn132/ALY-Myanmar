import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "../App.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
      marginLeft: "10px",
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
      width: "75px",
      textAlign: "center",
      padding: "5px",
      marginLeft: "5px",
      color: "cyan",
      fontSize: "15px",
      borderRadius: "8%",
      boxShadow: "3px 3px 0px 0px",
      display: "inline-block",
      textShadow: "2px",
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
          width: "100%",
          height: "55px",
        }}>
        <NavLink
          to="/"
          exact
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
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
              color: "black",
            }}>
            ALY Myanmar
          </label>
        </NavLink>

        {isDesktop && (
          <div className="desktopMenu">
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
          </div>
        )}

        {!isDesktop && (
          <>
            <div className="navItems">
              <div className="desktopMenu">
                <div
                  onClick={toggleMobileMenu}
                  style={{ marginRight: "0px", marginLeft: "auto" }}>
                  <FiMenu
                    size={30}
                    style={{
                      color: "black",
                      border: "3px solid",
                      borderRadius: "20%",
                    }}
                  />
                </div>
                {isMobileMenuOpen && (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
