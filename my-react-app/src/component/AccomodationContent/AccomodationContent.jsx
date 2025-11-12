import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Tags from "../Tags/Tags";
import Host from "../Host/Host";
import Rating from "../Rating/Rating";
import Collapse from "../Collapse/Collapse";
import "./accomodationContent.css";

export default function AccomodationContent() {
  const [cardData, setCardData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/properties/${id}`
        );

        if (response.status === 404) {
          console.log("Page not found. Redirecting to Page404");
          navigate("../../pages/Page404");
        } else {
          const data = await response.json();
          setCardData(data);
        }
      } catch (error) {
        console.error("Error fetching card data:", error);
        navigate("../../pages/Page404");
      }
    };

    fetchData();
  }, [id, navigate]);

  if (cardData === null) {
    // Return a loading state or placeholder while data is being fetched
    return <p>Loading...</p>;
  }

  return (
    <div className="content">
      <Carousel images={cardData.pictures} />

      <div className="description_column">
        <div className="description_title">
          <h2>{cardData.title}</h2>
          <p className="location">{cardData.location}</p>
          <Tags tagData={cardData.tags} />
        </div>

        <div className="description_host">
          <Host hostData={cardData.host} />
          <Rating ratingData={cardData.rating} />
        </div>
      </div>

      <div className="collapse_column">
        <Collapse title="Description" content={cardData.description} />
        <Collapse
          title="Equipements"
          content={cardData.equipments}
          isList={true}
        />
      </div>
    </div>
  );
}
