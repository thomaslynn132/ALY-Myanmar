import React from "react";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <p>
          &copy; {currentYear} All rights reserved. ALY Myanmar <br />
        </p>
      </div>
    </footer>
  );
}
