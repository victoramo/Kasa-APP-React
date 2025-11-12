import "./rating.css";

export default function Rating({ ratingData }) {
  const filledStars = Array.from({ length: ratingData }, (_, index) => (
    <i key={index} className="fas fa-star filled-star"></i>
  ));
  // the (_,index) syntax signals that we want to ignore the first argument and use the second as index
  const emptyStars = Array.from({ length: 5 - ratingData }, (_, index) => (
    <i key={index} className="far fa-star empty-star"></i>
  ));

  return (
    <div className="rating">
      {filledStars}
      {emptyStars}
    </div>
  );
}
