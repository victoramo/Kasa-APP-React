import React from "react";
import { NavLink } from "react-router-dom";
import "./error404.css";

export default function Error404() {
  return (
    <div className="Error">
      <h1>404</h1>
      <p className="Error_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="Error_link">
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
}
