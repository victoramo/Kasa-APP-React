import React, { useState } from "react";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import "./carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const showArrowsAndNumber = images && images.length > 1;

  return (
    <div className="carrousel_container">
      {images && images.length > 0 && (
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      )}
      {showArrowsAndNumber && (
        <div>
          <img
            className="left_arrow"
            src={leftArrow}
            alt="Flêche de gauche"
            onClick={prevSlide}
          />
          <div className="slide_number">
            {currentIndex + 1}/{images.length}
          </div>
          <img
            className="right_arrow"
            src={rightArrow}
            alt="Flêche de droite"
            onClick={nextSlide}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
