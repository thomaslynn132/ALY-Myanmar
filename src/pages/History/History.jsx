import React from "react";
import {
  twtrcr,
  twtrcr1,
  twtrcr2,
  twtrcr3,
  twtrcr4,
  twtrcr5,
  ygnMdy1,
  ygnMdy2,
  ygnMdy3,
  ygnMdy4,
  ygnMdy5,
  ygnMdy6,
  ygnMdy7,
} from "../../assets/imageExports";
import Navbar from "../../components/Navbar";
export default function History() {
  const contracts = [
    {
      contractName:
        "Upgrading Carriageway to Bituminous Road Beside Yangon-Mandalay Expressway",
      location:
        "From (324.81)km to (327.68)km of the West Side of Yangon-Mandalay Expressway",
      length: "(2.87)km",
      type: "Bituminous Road",
      director: "U Khine Ngwe Lwin (or) U Phoe Thar Htoo",
      photos: [ygnMdy1, ygnMdy2, ygnMdy3, ygnMdy4, ygnMdy5, ygnMdy6, ygnMdy7],
      completedDate: "",
    },
    {
      contractName: "Thawatti-Tedaung Concrete Road",
      location:
        "Right After From Thawatti Basic Education High School to Tedaung Village Entrance Crossroads",
      length: "(3.219)km",
      type: "Concrete Road",
      director: "U Khine Ngwe Lwin (or) U Phoe Thar Htoo",
      photos: [twtrcr, twtrcr1, twtrcr2, twtrcr3, twtrcr4, twtrcr5],
      completedDate: "",
    },
  ];
  return (
    <>
      <Navbar />
      {contracts.map((contract, index) => (
        <div
          className="contract"
          key={contract.id}
          style={{
            margin: "30px",
            padding: "25px",
            alignItems: "start",
            textAlign: "left",
            display: "block",
            boxShadow: "5px 5px 0px 0px",
          }}>
          <h2>{contract.contractName}</h2>
          <p>
            Location: {contract.location} <br />
            Length of the Road: {contract.length} <br />
            Type of the Road: {contract.type} <br />
            Date Of Completion: {contract.completedDate}
            Name of the director: {contract.director} <br />
          </p>
          <div
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              maxHeight: "350px",
            }}>
            <div
              className="contractPhoto"
              style={{
                display: "flex",
                alignItems: "start",
              }}>
              {contract.photos.map((photo, photoIndex) => (
                <img
                  key={photoIndex}
                  src={photo}
                  alt="Proceses"
                  height="320px"
                  width="auto"
                  style={{ marginRight: "10px" }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
