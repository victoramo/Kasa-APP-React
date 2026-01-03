import React from "react"; // Importe React pour pouvoir créer un composant fonctionnel.
import Banner from "../component/Banner/Banner"; // Récupère le composant Banner pour afficher une grande image d'en-tête.
import CardList from "../component/Card/Card"; // Récupère le composant qui affichera toutes les cartes de logements.
import bannerImg from "../assets/banner-img.png"; // Charge l’image du bandeau d’accueil depuis les ressources.

export default function Home() { // Déclare et exporte le composant Home pour qu’il soit utilisable ailleurs.
  return ( // Indique que la fonction renvoie du JSX.
    <main className="home"> {/* Balise principale de la page d’accueil, avec une classe CSS spécifique. */}
      <div className="container"> {/* Conteneur central pour appliquer une largeur max et des marges. */}
        <Banner
            image={bannerImg} // Transmet l’image du bandeau au composant Banner.
            alt="Paysage nature - Kasa" // Texte alternatif pour décrire l’image si elle ne se charge pas.
            title="Chez vous, partout et ailleurs" // Texte principal affiché sur le bandeau.
          />
         <CardList /> {/* Affiche la liste des cartes présentant les logements. */}
      </div>
    </main>
  );
}