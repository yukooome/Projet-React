import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMagnifyingGlass, 
  faUser, 
  faBell, 
  faSmile, 
  faGlobe, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons'; // Assurez-vous d'importer les icônes nécessaires
// npm install @fortawesome/free-brands-svg-icons


import './Accueil.css'; // Import des styles CSS
import Meteo from './meteo-date'; // Import du composant Meteo

function Accueil() {
  // Insérer les personnages dans la partie top personnage du moment (top-perso)
  const personnages = [
    { id: 1, src: './src/image/images/personnages-nana-removebg-preview.png', alt: 'Personnage 1' },
    { id: 2, src: './src/image/images/Edward-removebg-preview.png', alt: 'Personnage 2' },
    { id: 3, src: './src/image/images/gon-removebg-preview.png', alt: 'Personnage 3' },
    { id: 4, src: './src/image/images/nrt-removebg-preview.png', alt: 'Personnage 4' },
  ];

  const interieurs = [
    { id: 1, src: './src/image/images/death-note-personnage-removebg-preview.png', alt: 'Intérieur 1' },
    { id: 2, src: './src/image/images/luffy-tete-removebg-preview.png', alt: 'Intérieur 2' },
    { id: 3, src: './src/image/images/hinata-removebg-preview.png', alt: 'Intérieur 3' },
    { id: 4, src: './src/image/images/One-Punch-Man-saison-2-removebg-preview.png', alt: 'Intérieur 4' },
  ];

  // Insérer les manga dans la partie top manga du moment (top-manga)
  const manga = [
    { id: 1, src: './src/image/images/op-test.jpeg', alt: 'Personnage 1' },
    { id: 2, src: './src/image/images/Dandadan.jpeg', alt: 'Personnage 2' },
  ];

  return (
    <section>
      {/* NAVBARRE */}
      <div className="app-container">
        {/* NavBar avec logo */}
        <nav className="navbar">
          <img 
            className="logo"
            src="./src/image/Logo/logologo.png" 
            alt="Logo"  
          /> 
        </nav>

        {/* Section "Manga" et "Contacts" */}
        <div className="links-section">
          <a href="/accueil" className="link">Accueil</a>
          <a href="/manga" className="link">Manga</a>
          <a href="/contacts" className="link">Contacts</a>
        </div>

        {/* Barre de recherche */}
        <div className="search-section">
          <input 
            className="search-input" 
            type="text" 
            placeholder="Recherche" 
          />
          <button className="search-button">
            <FontAwesomeIcon 
              icon={faMagnifyingGlass} 
              className="icon loupe-icon" 
            />
          </button>
        </div>

        {/* Logo de connexion et texte Yoko */}
        <div className="login-section">
          <FontAwesomeIcon 
            icon={faUser} 
            className="icon" 
          />
          <span className="login-text">Yukooo</span>
        </div>
      </div>

      {/* HEADER */}
      <div className="header">
        <div className="content-left">
          <div className='annonce'>
            <a href="#" className="link-annonce">
              <FontAwesomeIcon icon={faBell} className="icon bell-icon" /> Annonce
            </a>
            <a href="#" className="link-annonce">
              <FontAwesomeIcon icon={faSmile} className="icon smile-icon" /> Nouveautés
            </a>
            <a href="#" className="link-annonce">
              <FontAwesomeIcon icon={faGlobe} className="icon globe-icon" /> Communauté
            </a>
            <a href="#" className="link-annonce">
              <FontAwesomeIcon icon={faEnvelope} className="icon envelope-icon" /> Messagerie
            </a>
          </div>

          <div className="top-perso">
            <p>Top personnages du moment</p>
            <div className="boules">
                {personnages.map((perso) => (
                    <div key={perso.id} className="boule">
                        <img src={perso.src} alt={perso.alt} />
                    </div>
                ))}
            </div>
            <div className="boules">
                {interieurs.map((interieur) => (
                    <div key={interieur.id} className="boule">
                        <img src={interieur.src} alt={interieur.alt} />
                    </div>
                ))}
            </div>
          </div>

          <div className='top-manga'>
            <p>Top manga du moment</p>
            <div className="carres">
                {manga.map((mangas) => (
                    <div key={mangas.id} className="carre">
                        <img src={mangas.src} alt={mangas.alt} />
                    </div>
                ))}
            </div>
            <p>Plongez dans l'univers infini du manga : découvrez, lisez, et partagez votre passion ! Rien ne peut vous arrêter, si ce n'est votre imagination !</p>
          </div>
        </div>

        <div className="content-right">
          <div className='top-right'>
            <div className='actualite'>
              <div className='titre-actu'>
                <h3>Actualité</h3>
              </div>
              <div className='img-actu'>
                <img src="./src/image/images/img-fullperso-actu.jpg" alt="img-fullperso-actu" />
              </div>
            </div>

            {/* Utilisation du composant Meteo */}
            <Meteo />

          </div>

          <div className='bottom-right'>
            <div className='jeux1'>
              <div className='nb1'>
                <img src="./src/image/images/Luffy-Gear-5-One-Piece-removebg-preview.png" alt="Superposition" className="image-superposee" />
              </div>
            </div>
            <div className='jeux2'>
              <div className='nb2'>
              <img src="./src/image/images/nauto-removebg-preview.png" alt="Superposition" className="image-superposee2" />
              </div>
            </div>
            <div className='jeux3'>
              <div className='nb3'>
              {/* <img src="./src/image/images/son-goku-at:taque-ii-removebg-preview.png" alt="Superposition" className="image-superposee3" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accueil;
