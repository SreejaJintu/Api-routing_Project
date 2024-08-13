import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        {/* <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a> */}
        <Link to={"/"}>Home</Link>
        <Link to={"/countries"}>Countries</Link>
        <Link to={"/todo"}>ToDo</Link>

      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;