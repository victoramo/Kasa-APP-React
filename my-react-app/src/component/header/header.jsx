import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/kasa.svg";

/**
 * Header du site Kasa.
 * - Affiche le logo à gauche.
 * - Affiche les liens "Accueil" et "À propos" à droite.
 * - Utilise NavLink pour ajouter une classe sur le lien actif.
 */
const Navigation = () => {
  return (
    <header>
      <nav className="header">
        {/* Logo cliquable vers la home */}
        <NavLink to="/" className="header__logo-link">
          <img
            className="header__logo"
            src={logo}
            alt="Logo Kasa"
          />
        </NavLink>

        {/* Menu de navigation */}
        <ul className="header__nav-list">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                "header__nav-link" + (isActive ? " header__nav-link--active" : "")
              }
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "header__nav-link" + (isActive ? " header__nav-link--active" : "")
              }
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
