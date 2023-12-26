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
export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>
          Revolutionize Road Construction with Our Superior Paving Stones! 🚧
        </h2>
        <h5>
          Unleash the power of innovation on your road construction projects
          <br /> with our premium paving stones, <br />
          meticulously designed for durability, <br />
          safety, and aesthetic excellence. 🛣️✨
          <br />✨ Why Opt for Our Paving Stones in Road Construction?
        </h5>
        <div
          className="serviceContainer"
          style={{
            textAlign: "left",
            alignItems: "center",
          }}>
          ✨🛡️ Durability & Strength: <br />
          Construct roads that withstand the test of time! <br />
          Our paving stones are engineered for exceptional strength, <br />
          ensuring a robust foundation that endures heavy traffic and <br />
          environmental challenges.
          <br />
          <img src={rock} alt="Rock" width={300} />
          <br /> <br />
          🚗 Traffic Efficiency: <br />
          Enhance road safety and efficiency with our carefully crafted paving
          stones. <br />
          Choose from various sizes to create smooth surfaces, <br />
          promoting better vehicle traction and minimizing wear and tear.
          <br />
          <img src={rock1} alt="Rock" width={350} />
          <br />
          <br /> 🏞️ Aesthetics & Landscaping Integration: <br />
          Elevate the visual appeal of your road projects! <br /> Our diverse
          range of paving stones allows for creative landscaping integration,{" "}
          <br /> turning roads into aesthetically pleasing and functional
          corridors.
          <br />
          <img src={rock2} alt="Rock" width={350} />
          <br />
          <br /> 🌐 Custom Solutions: <br />
          Tailor road designs to meet specific project requirements. <br />
          Our collection offers a variety of sizes, <br />
          enabling customization for different sections of the road, <br />
          intersections, and pedestrian walkways.
          <br />
          <img src={rock3} alt="Rock" width={350} />
          <br />
          <br /> 🔄 Quick Installation & Maintenance: <br />
          Streamline construction timelines with our easy-to-install paving
          stones. <br />
          Additionally, their low-maintenance nature ensures that your roads
          remain pristine <br />
          and safe for the long haul.
          <br /> <img src={rock4} alt="Rock" width={350} />
          <br />
          <br />
          🌍 Elevate Your Road Construction Game: <br />
          Explore the possibilities at our showroom <br />
          or connect with our expert team online. <br />
          Discover how our paving stones can revolutionize your road
          construction projects.
          <br />
          <img src={rock5} alt="Rock" width={350} />
          <br /> <br />
          <h3>🚀 Choose Quality. Choose Innovation. Choose ALY Myanmar</h3>
        </div>
      </div>
    </>
  );
}
