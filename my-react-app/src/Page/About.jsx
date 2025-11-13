import React from "react";
import Banner from "../component/Banner/Banner";
import bannerImg from "../assets/banner-img2.png";
import Collapse from "../component/Collapse/Collapse";

/**
 * Page À propos
 * - Affiche la bannière (image "montagne" comme sur la maquette)
 * - Liste de 4 collapses : Fiabilité, Respect, Service, Sécurité
 * 
 * 🔎 Explication simple :
 *  - On prépare un tableau "items" avec title + content.
 *  - On fait un .map() pour créer un <Collapse> par item.
 *  - <Collapse> reçoit le titre et le texte (children).
 *  - Le rendu est contenu dans <main className="about container"> pour
 *    respecter la largeur max 1240px de la maquette.
 */
const items = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default function About() {
  return (
    <main className="about container">

      <Banner 
      image={bannerImg} alt="Montagnes"/>

      {/* Liste des collapses */}
      <section className="about__list">
        {items.map(({ title, content }) => (
          <Collapse 
                key={title} 
                title={title} 
                content={content} 
          />
        ))}
      </section>
    </main>
  );
}
