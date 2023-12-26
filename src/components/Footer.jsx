import React from "react";
import { Facebook } from "../assets/imageExports";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <p>
          &copy; {currentYear} All rights reserved. ALY Myanmar <br /> <br />
          Contact us via: <br />
        </p>
        <div className="footerCtn">
          <div className="socialMedia">
            {" "}
            <a
              href="https://www.facebook.com/profile.php?id=100063721672766&mibextid=ZbWKwL"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}>
              <img
                src={Facebook}
                alt="Facebook Logo"
                width={20}
                height={20}
                style={{ borderRadius: "12%" }}
              />
              <label>Facebook</label>
            </a>
          </div>

          <div className="lineBr"></div>
          <div className="address">
            <h3>Address:</h3>
            <p>
              Byuhar Road, <br />
              Aung Si Lar Village, <br />
              Leiway Township, <br />
              Naypyitaw, Myanmar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
