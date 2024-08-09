import React from "react";
import {
  rock,
  rock1,
  rock2,
  rock3,
  rock4,
  rock5,
} from "../../assets/imageExports";
import Navbar from "../../components/Navbar";

const serviceData = [
  {
    text: `✨🛡️ Durability & Strength: Construct roads that withstand the test of time! 
          Our paving stones are engineered for exceptional strength, ensuring a robust foundation that endures heavy traffic and environmental challenges.`,
    image: rock,
  },
  {
    text: `🚗 Traffic Efficiency: Enhance road safety and efficiency with our carefully crafted paving stones. 
          Choose from various sizes to create smooth surfaces, promoting better vehicle traction and minimizing wear and tear.`,
    image: rock1,
  },
  {
    text: `🏞️ Aesthetics & Landscaping Integration: Elevate the visual appeal of your road projects! 
          Our diverse range of paving stones allows for creative landscaping integration, turning roads into aesthetically pleasing and functional corridors.`,
    image: rock2,
  },
  {
    text: `🌐 Custom Solutions: Tailor road designs to meet specific project requirements. 
          Our collection offers a variety of sizes, enabling customization for different sections of the road, intersections, and pedestrian walkways.`,
    image: rock3,
  },
  {
    text: `🔄 Quick Installation & Maintenance: Streamline construction timelines with our easy-to-install paving stones. 
          Additionally, their low-maintenance nature ensures that your roads remain pristine and safe for the long haul.`,
    image: rock4,
  },
  {
    text: `🌍 Elevate Your Road Construction Game: Explore the possibilities at our showroom or connect with our expert team online. 
          Discover how our paving stones can revolutionize your road construction projects.`,
    image: rock5,
  },
];

const ServiceItem = ({ text, image }) => (
  <div className="serviceDiv">
    <div className="serviceText">{text}</div>
    <div className="lineBr"></div>
    <div className="serviceImg">
      <img
        src={image}
        alt="Service"
        width={400}
        style={{ borderRadius: "12px", border: "5px solid black" }}
      />
    </div>
    <br />
  </div>
);

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>
          Revolutionize Road Construction with Our Superior Paving Stones! 🚧
        </h2>
        <h5>✨ Why Opt for Our Paving Stones in Road Construction?</h5>
        <div className="serviceContainer">
          {serviceData.map((service, index) => (
            <ServiceItem
              key={index}
              text={service.text}
              image={service.image}
              imageWidth={service.imageWidth}
            />
          ))}
          <h2>🚀 Choose Quality. Choose Innovation. Choose ALY Myanmar</h2>
        </div>
      </div>
    </>
  );
}
