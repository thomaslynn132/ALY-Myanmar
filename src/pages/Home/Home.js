import React, { useState, useEffect } from "react";
import "./HomePage.css";
import craneImage from "./crane.jpeg";
import rocksImage from "./rocks.jpg";
import onSiteImage from "./onSite.jpg";
import rocks3Image from "./rocks3.jpg";
import surveyImage from "./survey.jpg";

export default function Home() {
  const images = [
    craneImage,
    rocksImage,
    onSiteImage,
    rocks3Image,
    surveyImage,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(slideshowInterval);
  }, [images.length, setCurrentImageIndex]);

  return (
    <div className="slideshow-container">
      <div
        className="slide"
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
          can check about our available offerrs at
          <a href="./Services"> Services</a> Page.
        </p>
      </div>
    </div>
  );
}
