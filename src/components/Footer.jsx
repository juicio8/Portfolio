import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="social-links">
        <img className="zag" src="/zag.svg" />
        <div className="rotate">
          <a href="https://www.linkedin.com/in/deni-ochiche-156632247/">
            <img src="/linkedin.svg" alt="" target="_blank" />
          </a>
          <a href="https://github.com/juicio8" target="_blank">
            <img src="/github.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
