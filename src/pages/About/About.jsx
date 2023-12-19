import React from "react";
import "../../App.css";
export default function About() {
  const officers = [
    {
      name: "Hein Zin",
      dateOfAppointment: "24/09/2020",
      nationality: "Myanmar",
      gender: "Male",
      position: "Director",
      dateOfBirth: "19/09/1986",
      nRC: "9/LaWaNa(N)159210",
    },
    {
      name: "Khine Ngwe Lwin",
      dateOfAppointment: "24/09/2020",
      nationality: "Myanmar",
      gender: "Male",
      position: "Director",
      dateOfBirth: "06/06/1988",
      nRC: "9/LaWaNa(N)1164524",
    },
    {
      name: "Myo Thu Zar",
      dateOfAppointment: "24/09/2020",
      nationality: "Myanmar",
      gender: "Female",
      position: "Director",
      dateOfBirth: "05/04/1984",
      nRC: "9/LaWaNa(N)140869",
    },
    {
      name: "Wai Hin Aung",
      dateOfAppointment: "24/09/2020",
      nationality: "Myanmar",
      gender: "Female",
      position: "Director",
      dateOfBirth: "15/05/1986",
      nRC: "7/YaTaYa(N)10775",
    },
    {
      name: "Zaw Lwin Aung",
      dateOfAppointment: "30/10/2020",
      nationality: "Myanmar",
      gender: "Male",
      position: "Director",
      dateOfBirth: "20/05/1966",
      nRC: "14/HaThaTa(N)215141",
    },
  ];
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
      <div className="container">
        <h2>Officers</h2>
        <div className="officers">
          {officers.map((officer) => (
            <div className="officer" key={officers.name}>
              <p>
                <b>Name : {officer.name}</b> <br />
                Position : {officer.position} <br />
                Gender : {officer.gender} <br />
                Date of Appointment : {officer.dateOfAppointment}
                <br />
                Date of Birth : {officer.dateOfBirth}
                <br />
                Nationality : {officer.nationality}
                <br />
                NRC Number : {officer.nRC}
                <br />
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
