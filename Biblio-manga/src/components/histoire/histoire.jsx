import React from 'react';
import './histoire.css';
import Navbar from '../Navbar/Navbar'; 

const Histoire = () => {
  return (
    <div className="histoire">
      <Navbar />
      {/* En-tête avec une couleur de fond unie */}
      <header className="histoire-header">
        <div className="histoire-header-content">
          <h1 className="histoire-title">L'histoire derrière MangaKo</h1>
          <p className="histoire-subtitle">Une passion partagée, une communauté grandissante</p>
        </div>
      </header>

      {/* Section principale expliquant l'origine du projet */}
      <section className="histoire-main-section">
        <div className="histoire-section-content">
          <h2 className="histoire-section-title">Pourquoi MangaKo ?</h2>
          <p className="histoire-section-paragraph">
            Tout a commencé par une idée simple : créer une bibliothèque numérique de mangas. Mais rapidement, cette idée est devenue bien plus ambitieuse : un lieu où tous les fans de mangas pourraient se réunir, échanger et découvrir ensemble de nouvelles œuvres.
          </p>
          <p className="histoire-section-paragraph">
            <span className="histoire-highlight">MangaKo</span> est ainsi né de l'envie de simplifier la gestion de nos collections tout en offrant un espace d'échange et de partage entre passionnés.
          </p>
        </div>
      </section>

      {/* Section émotionnelle sur l'impact de la communauté */}
      <section className="histoire-community-section">
        <div className="histoire-section-content">
          <h2 className="histoire-section-title">Une communauté qui grandit</h2>
          <p className="histoire-section-paragraph">
            MangaKo n'est pas seulement une bibliothèque, c'est une communauté. Chacun peut y partager ses avis, ses critiques et découvrir de nouvelles œuvres grâce aux autres membres. Ensemble, nous faisons vivre cette plateforme.
          </p>
          <p className="histoire-section-paragraph">
            Chaque interaction contribue à enrichir cette communauté. C'est grâce à vous, les fans, que MangaKo devient chaque jour plus vivant et plus dynamique.
          </p>
        </div>
      </section>

      {/* Section appel à l'action */}
      <section className="histoire-call-to-action">
        <div className="histoire-cta-content">
          <h2 className="histoire-cta-title">Rejoignez l'aventure MangaKo</h2>
          <p className="histoire-cta-paragraph">
            Ce projet est encore en pleine évolution, et nous avons besoin de votre soutien pour continuer à grandir. Rejoignez-nous, découvrez de nouveaux mangas et faites partie de cette aventure passionnante.
          </p>
          <button className="histoire-cta-button">Explorer MangaKo</button>
        </div>
      </section>
    </div>
  );
};

export default Histoire;
