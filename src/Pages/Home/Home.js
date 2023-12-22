import React, { useState, useEffect } from "react";
import "./HomePage.css";
import craneImage from "./crane.jpeg";
import rocksImage from "./rocks.jpg";
import onSiteImage from "./onSite.jpg";
import rocks3Image from "./rocks3.jpg";
import surveyImage from "./survey.jpg";
import HomepageText from "./HomepageText";

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
      {/* <Navbar /> */}
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
          <HomepageText />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
