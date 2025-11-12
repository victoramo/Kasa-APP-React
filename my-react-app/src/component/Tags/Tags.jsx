import React from "react";
import "./tags.css";

export default function Tags({ tagData }) {
  if (!tagData) {
    return <div>Loading tags...</div>; //handles async races to make sure the data is fetched before rendering
  }
  return (
    <div className="tags">
      {tagData.map((tag, index) => (
        <p key={index} className="tag_item">
          {tag}
        </p>
      ))}
    </div>
  );
}
