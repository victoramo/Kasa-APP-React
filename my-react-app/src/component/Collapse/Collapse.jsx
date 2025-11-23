import React, { useState, useRef } from "react";
import collapseIcon from "../../assets/collapse-arrow.svg";
import "./collapse.css";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => setIsOpen((prev) => !prev);

  const contentId = `collapse-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`collapse ${isOpen ? "is-open" : ""}`}>
      
      {/* Barre cliquable */}
      <div
        className="collapse_title"
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <h2 className="collapse_titleText">{title}</h2>

        <button type="button" className="collapse_icon" aria-label="toggle">
          <img src={collapseIcon} alt="" aria-hidden="true" />
        </button>
      </div>

      {/* Contenu */}
      <div
        id={contentId}
        ref={contentRef}
        className="collapse_content"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="collapse_inner">
          {children}
        </div>
      </div>
    </div>
  );
}
