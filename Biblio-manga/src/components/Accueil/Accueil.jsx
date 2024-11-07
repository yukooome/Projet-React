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

import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'; // Import du composant Navbar

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
      <Navbar /> {/* Intégration de la barre de navigation dans la page Accueil */}

      
      {/* <div className="app-container">
        
        <nav className="navbar">
          <img 
            className="logo"
            src="./src/image/Logo/logologo.png" 
            alt="Logo"  
          /> 
        </nav>

        
        <div className="links-section">
          <a href="/accueil" className="link">Accueil</a>
          <a href="/manga" className="link">Manga</a>
          <a href="/contacts" className="link">Contacts</a>
        </div>

        
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

        
        <div className="login-section">
          <FontAwesomeIcon 
            icon={faUser} 
            className="icon" 
          />
          <span className="login-text">Yukooo</span>
        </div>
      </div> */}

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
                <h3> Bienvenue chez MangaKo</h3>
              </div>
              <div 
              // // lien fictif
              // onClick={() => window.location.href = './src/components/Blog/Blog.jsx'}
              className='img-actu'>
                <img src="./src/image/images/img-fullperso-actu.jpg" alt="img-fullperso-actu" />
              </div>
            </div>

            {/* Utilisation du composant Meteo */}
            <Meteo />

          </div>

          <div className='bottom-right'>
            <div className='jeux1'>
              <div 
              // lien fictif
              onClick={() => window.location.href = 'https://lien-externe.com'}
              className='nb1'>
              <h2>Histoire</h2>
                <img src="./src/image/images/Luffy-Gear-5-One-Piece-removebg-preview.png" alt="Superposition" className="image-superposee" />
              </div>
            </div>
            
            <div className="jeux2">
        <div className="nb2">
          <h2>Blog</h2>
          <Link to="/blog">
            <img 
              src="./src/image/images/nauto-removebg-preview.png" 
              alt="Superposition" 
              className="image-superposee2" 
            />
          </Link>
        </div>
      </div>

            <div className='jeux3'>
              <div className='nb3'>
                <div className='img-bg-3'>

                </div>
              {/* <img src="./src/image/images/son-goku-at:taque-ii-removebg-preview.png" alt="Superposition" className="image-superposee3" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>













      <div className='supplement'>
  <div className='supplement-header'>
    <h2>Suggestions pour vous</h2>
  </div>

  <div className='supplement-content'>
    <div className='suggestion-item'>
      <h3>Découvrez nos mangas populaires</h3>
      <div className='suggestion-images'>
        <div className='suggestion-image'>
          <img src='./src/image/images/One-piece-anime-water_seven-arc.jpg' alt='Manga Populaire 1' />
          <div className='image-overlay'>
            <p>One Piece</p>
          </div>
        </div>
        <div className='suggestion-image'>
          <img src='./src/image/images/naruto-team-7.jpeg' alt='Manga Populaire 2' />
          <div className='image-overlay'>
            <p>Naruto</p>
          </div>
        </div>
        <div className='suggestion-image'>
          <img src='./src/image/images/Attaque_des_titans_deco_720x.png.webp' alt='Manga Populaire 3' />
          <div className='image-overlay'>
            <p>Attack on Titan</p>
          </div>
        </div>
      </div>
      <p className='more-info'>
        Explorez notre collection complète de mangas populaires, cliquez ici pour plus !
      </p>
      <button className='cta-button'>Voir plus</button>
    </div>

    <div className='suggestion-item'>
      <h3>Jeux à découvrir</h3>
      <div className='suggestion-images'>
        <div className='suggestion-image'>
          <img src='./src/image/images/dbzfigter.jpeg' alt='Jeu 1' />
          <div className='image-overlay'>
            <p>Dragon Ball FighterZ</p>
          </div>
        </div>
        <div className='suggestion-image'>
          <img src='./src/image/images/TheWitcher3.webp' alt='Jeu 2' />
          <div className='image-overlay'>
            <p>The Witcher 3</p>
          </div>
        </div>
        <div className='suggestion-image'>
          <img src='./src/image/images/FF_XV_cover.jpg' alt='Jeu 3' />
          <div className='image-overlay'>
            <p>Final Fantasy XV</p>
          </div>
        </div>
      </div>
      <p className='more-info'>
        Découvrez ces jeux incroyables inspirés de vos mangas préférés. Cliquez pour voir plus !
      </p>
      <button className='cta-button'>Explorer les jeux</button>
    </div>

    <div className='suggestion-item'>
      <h3>Actualités à ne pas manquer</h3>
      <div className='suggestion-news'>
        <div className='news-item'>
          <img src='./src/image/images/article-1.jpg' alt='Article 1' />
          <p className='news-title'>Les dernières tendances dans l'univers du manga</p>
        </div>
        <div className='news-item'>
          <img src='./src/image/images/article-2.jpg' alt='Article 2' />
          <p className='news-title'>Les nouveaux jeux vidéo adaptés de mangas à découvrir</p>
        </div>
      </div>
      <p className='more-info'>
        Lisez les derniers articles sur les tendances manga et les jeux inspirés des univers manga.
      </p>
      <button className='cta-button'>Lire plus d'articles</button>
    </div>
  </div>
</div>






    </section>
  );
}

export default Accueil;
