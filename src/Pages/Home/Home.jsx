import React, { useState, useEffect } from "react";
import "./HomePage.css";

export default function Home() {
  const images = [
    "./crane.jpeg",
    "./rocks.jpg",
    "./onSite.jpg",
    "./rocks3.jpg",
    "./survey.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Adjust the display time (2.5 seconds)

    return () => clearInterval(slideshowInterval);
  }, [images.length]); // Add images.length to the dependency array

  return (
    <div className="slideshow-container">
      <div
        className="slide"
        style={{
          backgroundImage: `url("${images[currentImageIndex]}")`,
        }}>
        <h1>Hello</h1>
      </div>
    </div>
  );
}
