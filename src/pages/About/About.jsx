import React from "react";
import "../../App.css";
export default function About() {
  return (
    <>
      <div className="container">
        <h2 className="Title">Company Information</h2>
        <div className="subContainer">
          <span className="info">
            <h4>Registration Number</h4>
            <p>127618798</p>
          </span>
          <span className="info">
            <h4>Registration Date</h4>
            <p>24/09/2020</p>
          </span>
          <span className="info">
            <h4>Status</h4>
            <p>Registered</p>
          </span>
          <span className="info">
            <h4>Company Type</h4>
            <p>Private Company Limited by Shares</p>
          </span>
          <span className="info">
            <h4>Forein Company</h4>
            <p>No</p>
          </span>
          <span className="info">
            <h4>Small Company</h4>
            <p>No</p>
          </span>
          <span className="info">
            <h4>Date Of Last Annual Return</h4>
            <p>24/09/2020</p>
          </span>
        </div>
        <br />
        <span className="infoLi">
          <h4>Principal Activity</h4>
          <ul>
            <li>41 - Construction of Buildings</li>
            <li>08 - Other mining and quarraying</li>
            <li>42 - Civil Engineering</li>
            <li>Import - Export Trading</li>
          </ul>
        </span>
      </div>
      <div className="container"></div>
    </>
  );
}
