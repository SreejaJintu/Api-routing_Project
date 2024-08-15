import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
   
      <div className="copyright">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;