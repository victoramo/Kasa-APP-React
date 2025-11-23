import React, { useState } from "react";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import "./carousel.css";

function Carousel({ images }) {

  // Toujours mettre les Hooks en haut du composant !
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si aucune image, on ne retourne rien (mais APRES le hook)
  if (!images || images.length === 0) {
    return null;
  }

  const goToNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const hasManyImages = images.length > 1;

  return (
    <div className="carrousel_container">
      <img
        className="carrousel_image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />

      {hasManyImages && (
        <div className="carrousel_controls">
          <img
            className="left_arrow"
            src={leftArrow}
            alt="Image précédente"
            onClick={goToPrevious}
          />

          <div className="slide_number">
            {currentIndex + 1}/{images.length}
          </div>

          <img
            className="right_arrow"
            src={rightArrow}
            alt="Image suivante"
            onClick={goToNext}
          />
        </div>
      )}
    </div>
  );
}

export default Carousel;
