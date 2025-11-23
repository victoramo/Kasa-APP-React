import React from "react";
import "./tags.css";

function Tags({ tags }) {
  // Si aucune liste n'est fournie ou si c'est vide
  if (!tags || tags.length === 0) {
    return null; // On n'affiche rien
  }

  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag_item">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
