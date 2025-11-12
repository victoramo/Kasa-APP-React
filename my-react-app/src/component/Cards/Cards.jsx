import React from 'react';
import './cards.css';

/** Ce composant retourne :
 * Un article avec l'image du logement et le titre du logement.
 * Un lien permet de renvoyer au logement approprié via son id.
 */

export default function Cards({ id, cover, title }) {
  return (
    <article className="cards" data-id={id}>
      <img src={cover} alt={title} />
      <p className="p_logement">{title}</p>
    </article>
  );
}