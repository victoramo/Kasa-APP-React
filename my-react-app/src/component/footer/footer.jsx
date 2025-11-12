import React from "react";
import "./footer.css";
import kasaLogo from "../../assets/kasa-footer.svg";


export default function Footer() {
  return (
    <footer className="footer" data-testid="footer-component">
      <img
        src={kasaLogo}
        alt="Logo Kasa blanc"
        className="footer__logo"
      />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
