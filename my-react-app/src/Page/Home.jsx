import React from "react"; 
import Banner from "../component/Banner/Banner"; 
import CardList from "../component/Card/Card"; 


export default function Home() { // Déclare et exporte le composant Home pour qu’il soit utilisable ailleurs.
  return ( // Indique que la fonction renvoie du JSX.
    <main className="home"> 
      <div className="container">
        <Banner/>
         <CardList /> {/* Affiche la liste des cartes présentant les logements. */}
      </div>
    </main>
  );
}