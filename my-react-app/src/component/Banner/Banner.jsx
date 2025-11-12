import React from "react";
import { useLocation } from "react-router-dom";
import homeBanner from "../../assets/banner-img.png";   // ✅ accueil
import aboutBanner from "../../assets/banner-img2.png"; // ✅ à propos
import "./banner.css";


export default function Banner() {
  const pathname = useLocation().pathname;
  const isAbout = pathname.startsWith("/about");

  const image = isAbout ? aboutBanner : homeBanner;
  const alt = isAbout ? "Bannière À propos" : "Bannière Accueil";
  const title = isAbout ? null : "Chez vous, partout et ailleurs";

  return (
    <section
      className={`banner ${isAbout ? "banner--about" : "banner--home"}`}
      data-testid="banner-component"
    >
      <img src={image} alt={alt} className="banner__image" />
      <div className="banner__overlay" data-testid="text-overlay">
        {title && <h1 className="banner__title">{title}</h1>}
      </div>
    </section>
  );
}
