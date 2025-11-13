import React, { useState, useRef } from "react";
import collapseIcon from "../../assets/collapse-arrow.svg";
import "./collapse.css";

export default function Collapse({ title, content, isList = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // pour mesurer la hauteur réelle du contenu

  const toggle = () => setIsOpen((prev) => !prev);

  // id unique (utile pour aria-controls)
  const contentId = `collapse-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`collapse ${isOpen ? "is-open" : ""}`}>
      {/* Barre cliquable */}
      <div
        className="collapse_title"
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <h2 className="collapse_titleText">{title}</h2>

        {/* Pas besoin de gérer la rotation en JS : le CSS s’en charge via .is-open */}
        <button type="button" className="collapse_icon" aria-label="déplier/replier">
          <img src={collapseIcon} alt="" aria-hidden="true" />
        </button>
      </div>

      {/* Zone qui se déplie */}
      <div
        id={contentId}
        ref={contentRef}
        className={`collapse_content ${isList ? "facilities" : ""}`}
        // Astuce : quand c'est ouvert, on met max-height = hauteur réelle
        // sinon 0px pour refermer. La transition se fait en CSS.
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 0}px` : "0px",
        }}
      >
        <div className="collapse_inner">
          {isList ? (
            <ul>
              {(Array.isArray(content) ? content : []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}
