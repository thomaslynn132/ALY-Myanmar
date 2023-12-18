import React, { useState, useEffect } from "react";
import "./HomePage.css";
import craneImage from "./crane.jpeg";
import rocksImage from "./rocks.jpg";
import onSiteImage from "./onSite.jpg";
import rocks3Image from "./rocks3.jpg";
import surveyImage from "./survey.jpg";
import { Navbar, Footer } from "../../components";

export default function Home() {
  const images = [
    craneImage,
    rocksImage,
    onSiteImage,
    rocks3Image,
    surveyImage,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setFade("fade-out");

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade("fade-in");
      }, 500); // Adjust the delay based on your transition duration
    }, 4000);

    return () => clearInterval(slideshowInterval);
  }, [images.length, setCurrentImageIndex, setFade]);

  return (
    <>
    <Navbar />
      <div className="slideshow-container">
        <div
          className={`slide ${fade}`}
          style={{
            backgroundImage: `url("${images[currentImageIndex]}")`,
            backgroundPosition: "center",
            color: "white",
            fontWeight: "bold",
            padding: "5px",
            alignItems: "center",
          }}>
          <h1>Welcome to ALY Myanmar Website</h1>
          <p>
            Here we are about to help you with our available offers. <br /> You
            can check about our available offers at
            <a href="./Services"> Services</a> Page.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
