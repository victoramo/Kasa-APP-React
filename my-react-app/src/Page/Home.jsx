import React from "react";
import Banner from "../component/Banner/Banner";
import CardList from "../component/Card/Card";
import bannerImg from "../assets/banner-img.png"; 

export default function Home() {
  return (
    <main className="home">
      <div className="container">
        <Banner
            image={bannerImg}
            alt="Paysage nature - Kasa"
            title="Chez vous, partout et ailleurs"
          />
         <CardList />
      </div>
    </main>
  );
}
