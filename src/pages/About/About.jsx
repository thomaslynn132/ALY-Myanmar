import React from "react";
import '../../App.css'
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
          <span className="info">
            <h4>Principal Activity</h4>
            <li>
              <ul>41 - Construction of Buildings</ul>
              <ul>08 - Other mining and quarraying</ul>
              <ul>42 - Civil Engineering</ul>
              <ul>Import - Export Trading</ul>
            </li>
          </span>
          <span className="info">
            {" "}
            <h4>""</h4>
            <p></p>
          </span>
          <span className="info">
            {" "}
            <h4>""</h4>
            <p></p>
          </span>
          <span className="info">
            {" "}
            <h4>""</h4>
            <p></p>
          </span>
          <span className="info">
            {" "}
            <h4>""</h4>
            <p></p>
          </span>
        </div>
      </div>
    </>
  );
}
