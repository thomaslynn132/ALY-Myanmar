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
      <div className="container">
        <Navbar />
        <h3>
          Revolutionize Road Construction with Our Superior Paving Stones! 🚧
        </h3>
        Unleash the power of innovation on your road construction projects with
        our premium paving stones, meticulously designed for durability, safety,
        and aesthetic excellence. 🛣️✨
        <h5>✨ Why Opt for Our Paving Stones in Road Construction?</h5>
        <div
          className="serviceContainer"
          style={{
            textAlign: "left",
            padding: "15px",
            fontFamily: "sans-serif",
          }}>
          ✨🛡️ Durability & Strength: Construct roads that withstand the test of
          time! Our paving stones are engineered for exceptional strength,
          ensuring a robust foundation that endures heavy traffic and
          environmental challenges.
          <br />
          <img src={rock} alt="Rock" height={300} />
          <br /> <br />
          🚗 Traffic Efficiency: Enhance road safety and efficiency with our
          carefully crafted paving stones. Choose from various sizes to create
          smooth surfaces, promoting better vehicle traction and minimizing wear
          and tear.
          <br />
          <img src={rock1} alt="Rock" height={300} />
          <br />
          <br /> 🏞️ Aesthetics & Landscaping Integration: Elevate the visual
          appeal of your road projects! Our diverse range of paving stones
          allows for creative landscaping integration, turning roads into
          aesthetically pleasing and functional corridors.
          <br />
          <img src={rock2} alt="Rock" height={300} />
          <br />
          <br /> 🌐 Custom Solutions: Tailor road designs to meet specific
          project requirements. Our collection offers a variety of sizes,
          enabling customization for different sections of the road,
          intersections, and pedestrian walkways.
          <br />
          <img src={rock3} alt="Rock" height={300} />
          <br />
          <br /> 🔄 Quick Installation & Maintenance: Streamline construction
          timelines with our easy-to-install paving stones. Additionally, their
          low-maintenance nature ensures that your roads remain pristine and
          safe for the long haul.
          <br /> <img src={rock4} alt="Rock" height={300} />
          <br />
          <br />
          🌍 Elevate Your Road Construction Game: Explore the possibilities at
          our showroom or connect with our expert team online. Discover how our
          paving stones can revolutionize your road construction projects.
          <br />
          <img src={rock5} alt="Rock" height={300} />
          <br /> <br />
          <h3>🚀 Choose Quality. Choose Innovation. Choose ALY Myanmar</h3>{" "}
        </div>
      </div>
    </>
  );
}
