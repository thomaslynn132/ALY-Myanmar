import React, { useState, useEffect } from "react";
import "./HomePage.css";

import HomepageText from "./HomepageText";
import Navbar from "../../components/Navbar";
import {
  homepage,
  homepage1,
  homepage3,
  homepage4,
  homepage5,
} from "../../assets/imageExports";
export default function Home() {
  const images = [homepage, homepage1, homepage3, homepage4, homepage5];

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
            alignItems: "center",
            overflowX: "none",
            justify: "center",
          }}>
          <HomepageText />
        </div>
      </div>
    </>
  );
}
