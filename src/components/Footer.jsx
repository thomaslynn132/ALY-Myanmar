import React from "react";
import { Facebook } from "./index";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <p>
          &copy; {currentYear} All rights reserved. ALY Myanmar <br /> <br />
          Contact us via: <br />
        </p>
        <a href="https://www.facebook.com/profile.php?id=100063721672766&mibextid=ZbWKwL">
          <img
            src={Facebook}
            alt="Facebook Logo"
            width={20}
            height={20}
            style={{ borderRadius: "12%" }}
          />
          <label>Facebook</label>
        </a>
        <h3>Address:</h3>
        <p>
          Byuhar Road, Aung Si Lar Village, Leiway Township, Naypyitaw, Myanmar
        </p>
      </div>
    </footer>
  );
}
