import React, { useEffect } from "react";
import "./HomePage.css";
export default function HomepageText() {
  useEffect(() => {
    const textContainer = document.getElementById("animatedText");
    const text = textContainer.innerText;
    textContainer.innerHTML = ""; // Clear original text
    // Split the text into words and wrap each word in a span
    const words = text.split("");
    for (const word of words) {
      const span = document.createElement("span");
      span.textContent = word + ""; // Add space between words
      textContainer.appendChild(span);
    }

    // Trigger animation by adding class to each span with a delay
    const spans = textContainer.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.15}s`;
    });
  }, []);

  return (
    <div
      style={{
        width: "700px",
        height: "auto",
        padding: "25px",
        margin: "25px",
      }}>
      <div
        className="text"
        id="animatedText"
        style={{
          color: "cyan",
          fontSize: "175%",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: "20px",
          textShadow: "revert",
        }}>
        Welcome to ALY Myanmar Website
      </div>
      <br />
      <p>
        Here we are about to help you with our available offers. <br /> You can
        check about our available offers at
        <a href="./Services"> Services</a> Page.
      </p>
    </div>
  );
}
