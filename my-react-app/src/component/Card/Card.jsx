import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ✅ Important : garde le CSS des cartes
// Si ton fichier CSS est encore dans component/Cards/cards.css, mets le bon chemin.
// Le mieux : déplace cards.css dans component/Card/ et garde cette ligne :
import "../Card/Card.css";

export default function CardList() {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur API");
        return res.json();
      })
      .then((data) => {
        setLogements(data);
        setHasError(false);
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>Chargement...</p>;
  if (hasError) return <p>Erreur : impossible de charger les logements.</p>;

  return (
    <section className="card-list">
      {logements.map(({ id, cover, title }) => (
        <Link key={id} to={`/accommodation/${id}`} className="cards__link">
          {/* ✅ ICI : code de Cards.jsx intégré (plus besoin de Cards.jsx) */}
          <article className="cards" data-id={id}>
            <img className="cards__image" src={cover} alt={title} />
            <h2 className="cards__title">{title}</h2>
          </article>
        </Link>
      ))}
    </section>
  );
}
