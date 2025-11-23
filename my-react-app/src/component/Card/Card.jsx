// src/component/Card/card.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards.jsx";
import "./card.css"; // ⚠️ on pointe bien sur le CSS du dossier Card

export default function CardList() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setGallery(data))
      .catch((error) =>
        console.error("Erreur lors du chargement :", error)
      );
  }, []);

  return (
    <div className="gallery-container">
      {gallery.map((item) => (
        <Link
          key={item.id}
          to={`/accommodation/${item.id}`}
          className="cards__link"
        >
          <Cards
            id={item.id}
            cover={item.cover}
            title={item.title}
          />
        </Link>
      ))}
    </div>
  );
}
