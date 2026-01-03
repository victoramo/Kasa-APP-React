import React from "react";
import { useLocation } from "react-router-dom";
import homeBanner from "../../assets/banner-img.png";
import aboutBanner from "../../assets/banner-img2.png";

import "./banner.css";

export default function Banner() {
  const { pathname } = useLocation();
  const isAbout = pathname === "/about";

  // Choix de l'image selon la page
  const image = isAbout ? aboutBanner : homeBanner;

  // Texte uniquement sur Home
  const title = isAbout ? "" : "Chez vous, partout et ailleurs";

  // Alt différent selon l'image
  const alt = isAbout ? "Bannière À propos" : "Bannière Accueil";

  return (
    <section className={`banner ${isAbout ? "banner--about" : "banner--home"}`}>
      <img src={image} alt={alt} className="banner__image" />

      <div className="banner__overlay">
        {title && <h1 className="banner__title">{title}</h1>}
      </div>
    </section>
  );
}
