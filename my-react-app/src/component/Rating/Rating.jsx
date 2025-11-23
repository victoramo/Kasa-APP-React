import "./rating.css";

function Rating({ rating }) {
  // Convertit en nombre si "rating" est une string
  const value = Number(rating);

  // Nombre total d'étoiles dans Kasa
  const maxStars = 5;

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => {
        // Si l'étoile doit être pleine ou vide
        const isFilled = index < value;

        return (
          <span
            key={index}
            className={isFilled ? "star filled" : "star empty"}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export default Rating;
