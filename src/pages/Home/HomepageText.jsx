import React, { useEffect } from "react";
import "./HomePage.css";
export default function HomepageText() {
  useEffect(() => {
    const textContainer = document.getElementById("animatedText");
    const text = textContainer.innerText;
    textContainer.innerHTML = ""; // Clear original text
    const words = text.split("");
    for (const word of words) {
      const span = document.createElement("span");
      span.textContent = word + " "; // Add space between words
      textContainer.appendChild(span);
    }

    const spans = textContainer.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.15}s`;
    });
  }, []);
  useEffect(() => {
    const textContainer = document.getElementById("animatedText");
    const text = textContainer.innerText;
    textContainer.innerHTML = ""; // Clear original text
    const words = text.split("");
    for (const word of words) {
      const span = document.createElement("span");
      span.textContent = word + " "; // Add space between words
      textContainer.appendChild(span);
    }

    const spans = textContainer.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.15}s`;
    });
  }, []);
  return (
    <div
      style={{
        padding: "25px",
      }}>
      <div
        className="text"
        id="animatedText"
        style={{
          color: "cyan",
          fontSize: "22px",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "150px",
        }}>
        Welcome to ALY Myanmar Website
      </div>
      <br />
      <br />
      <br />
      <p style={{ fontSize: "15px" }}>
        Here we are about to help you with our available offers. <br /> You can
        check about our available offers at
        <a href="./Services"> Services</a> Page.
      </p>
    </div>
  );
}
