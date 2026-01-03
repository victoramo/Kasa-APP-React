import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import Carousel from "../component/Carousel/Carousel";
import Tags from "../component/Tags/Tags";
import Host from "../component/Host/Host";
import Rating from "../component/Rating/Rating";
import Collapse from "../component/Collapse/Collapse";

import "../component/AccomodationContent/accomodationcontent.css";

export default function AccomodationContent() {
  const { id } = useParams();

  const [accommodation, setAccommodation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logement non trouvé");
        }
        return response.json();
      })
      .then((data) => {
        setAccommodation(data);
        setHasError(false);
      })
      .catch((error) => {
        console.error(error);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p>Chargement du logement...</p>;
  }

  if (hasError || !accommodation) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="accommodation-page">

      {/* Carrousel */}
      <Carousel images={accommodation.pictures} />

      {/* Header */}
      <section className="accommodation-header">

        {/* Partie gauche */}
        <div className="accommodation-header-left">
          <h1 className="accommodation-title">{accommodation.title}</h1>
          <p className="accommodation-location">{accommodation.location}</p>

          <Tags tags={accommodation.tags} />
        </div>

        {/* Partie droite */}
        <div className="accommodation-header-right">
          <Host host={accommodation.host} />
          <Rating rating={accommodation.rating} />
        </div>
      </section>

      {/* Collapses */}
      <section className="accommodation-collapses">

        <div className="accommodation-collapse-item">
          <Collapse title="Description">
            <p>{accommodation.description}</p>
          </Collapse>
        </div>

        <div className="accommodation-collapse-item">
          <Collapse title="Équipements">
            <ul className="accommodation-equipments">
              {accommodation.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Collapse>
        </div>

      </section>
    </main>
  );
}
