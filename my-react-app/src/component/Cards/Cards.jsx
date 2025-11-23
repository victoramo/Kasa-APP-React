import React from 'react';
import './cards.css';

/** Ce composant retourne :
 * Un article avec l'image du logement et le titre du logement.
 * Un lien permet de renvoyer au logement approprié via son id.
 */

export default function Cards({ id, cover, title }) {
  return (
    <article className="cards" data-id={id}>
      <img className="cards__image" src={cover} alt={title} />
      <h2 className="cards__title">{title}</h2>
    </article>
  );
}