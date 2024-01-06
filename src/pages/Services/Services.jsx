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
        <h5>✨ Why Opt for Our Paving Stones in Road Construction?</h5>
        <div className="serviceContainer">
          <div className="serviceDiv">
            <div className="serviceText">
              ✨🛡️ Durability & Strength: <br />
              Construct roads that withstand the test of time! <br />
              Our paving stones are engineered for exceptional strength,
              ensuring a robust foundation that endures heavy traffic and
              environmental challenges.
            </div>
            <div className="lineBr"></div>
            <div className="serviceImage">
              <img src={rock} alt="Rock" />
            </div>
          </div>
          <br />
          <div className="serviceDiv">
            <div className="serviceText">
              🚗 Traffic Efficiency: <br />
              Enhance road safety and efficiency with our carefully crafted
              paving stones. Choose from various sizes to create smooth
              surfaces, promoting better vehicle traction and minimizing wear
              and tear.
            </div>
            <div className="lineBr"></div>
            <div className="serviceImg">
              <img src={rock1} alt="Rock" />
            </div>
          </div>
          <br />
          <div className="serviceDiv">
            <div className="serviceText">
              🏞️ Aesthetics & Landscaping Integration: <br />
              Elevate the visual appeal of your road projects! <br /> Our
              diverse range of paving stones allows for creative landscaping
              integration, <br /> turning roads into aesthetically pleasing and
              functional corridors.
            </div>
            <div className="lineBr"></div>
            <div className="serviceImg">
              <img src={rock2} alt="Rock" />
            </div>
          </div>
          <br />
          <div className="serviceDiv">
            <div className="serviceText">
              🌐 Custom Solutions: <br />
              Tailor road designs to meet specific project requirements. <br />
              Our collection offers a variety of sizes, <br />
              enabling customization for different sections of the road, <br />
              intersections, and pedestrian walkways.
            </div>
            <div className="lineBr"></div>
            <div className="serviceImg">
              <img src={rock3} alt="Rock" />
            </div>
          </div>
          <br />
          <div className="serviceDiv">
            <div className="serviceText">
              🔄 Quick Installation & Maintenance: <br />
              Streamline construction timelines with our easy-to-install paving
              stones. Additionally, their low-maintenance nature ensures that
              your roads remain pristine and safe for the long haul.
            </div>
            <div className="lineBr"></div>
            <div className="serviceImg">
              <img src={rock4} alt="Rock" />
            </div>
          </div>
          <br />
          <div className="serviceDiv">
            <div className="serviceText">
              🌍 Elevate Your Road Construction Game: Explore the possibilities
              at our showroom or connect with our expert team online. Discover
              how our paving stones can revolutionize your road construction
              projects.
            </div>
            <div className="lineBr"></div>
            <div className="serviceImg">
              <img src={rock5} alt="Rock" />
            </div>
          </div>
          <h2>🚀 Choose Quality. Choose Innovation. Choose ALY Myanmar</h2>
        </div>
      </div>
    </>
  );
}
