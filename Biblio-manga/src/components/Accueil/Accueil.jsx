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
import CommunityReviews from '../Accueil/avis/avis';
import FeatureSection from '../Accueil/features/features'

function Accueil() {
  // Insérer les personnages dans la partie top personnage du moment (top-perso)
  const personnages = [
    { id: 1, src: './assets/image/images/personnages-nana-removebg-preview.png', alt: 'Personnage 1' },
    { id: 2, src: './assets/image/images/Edward-removebg-preview.png', alt: 'Personnage 2' },
    { id: 3, src: './assets/image/images/gon-removebg-preview.png', alt: 'Personnage 3' },
    { id: 4, src: './assets/image/images/nrt-removebg-preview.png', alt: 'Personnage 4' },
  ];

  const interieurs = [
    { id: 1, src: './assets/image/images/death-note-personnage-removebg-preview.png', alt: 'Intérieur 1' },
    { id: 2, src: './assets/image/images/luffy-tete-removebg-preview.png', alt: 'Intérieur 2' },
    { id: 3, src: './assets/image/images/hinata-removebg-preview.png', alt: 'Intérieur 3' },
    { id: 4, src: './assets/image/images/One-Punch-Man-saison-2-removebg-preview.png', alt: 'Intérieur 4' },
  ];

  // Insérer les manga dans la partie top manga du moment (top-manga)
  const manga = [
    { id: 1, src: './assets/image/images/op-test.jpeg', alt: 'Personnage 1' },
    { id: 2, src: './assets/image/images/Dandadan.jpeg', alt: 'Personnage 2' },
  ];

  return (
    <section>
      {/* NAVBARRE */}
      <Navbar /> 

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
                <h3>Bienvenue chez MangaKo</h3>
              </div>
              <div className='img-actu'>
                <img src="./assets/image/images/img-fullperso-actu.jpg" alt="img-fullperso-actu" />
              </div>
            </div>

            {/* Utilisation du composant Meteo */}
            <Meteo />
          </div>

          <div className='bottom-right'>
            <div className='jeux1'>
              <div className='nb1'>
                <h2>Histoire</h2>
                <Link to="/histoire ">
                <img src="./assets/image/images/Luffy-Gear-5-One-Piece-removebg-preview.png" alt="Superposition" className="image-superposee" />
                </Link>
              </div>
            </div>

            <div className="jeux2">
              <div className="nb2">
                <h2>Blog</h2>
                <Link to="/blog">
                  <img 
                    src="./assets/image/images/nauto-removebg-preview.png" 
                    alt="Superposition" 
                    className="image-superposee2" 
                  />
                </Link>
              </div>
            </div>

            <div className='jeux3'>
              <div className='nb3'>
                <div className='img-bg-3'></div>
              </div>
            </div>
          </div>
        </div>
      </div>









      {/* <div className="section-vide">
        <div className='more-place'>
          <div className="section-vide-header">
            <h3 className='underline'>Restez informé avec nos actualités professionnelles</h3>
          </div>

          <div className="section-vide-content">
            <div className="actualite-professionnelle">
              <h4>Les dernières tendances du manga</h4>
              <p>
                Découvrez les mangas les plus populaires cette saison, avec des analyses détaillées et des recommandations personnalisées. Nous explorons les dernières sorties et les classiques incontournables du genre.
              </p>
              <button className="cta-button">En savoir plus</button>
            </div>

            <div className="actualite-professionnelle">
              <h4>Événements et salons à venir</h4>
              <p>
                Participez aux événements majeurs du manga et des jeux vidéo. Rencontrez des créateurs, assistez à des panels, et découvrez les dernières nouveautés en avant-première. Ne manquez pas les événements à ne pas rater !
              </p>
              <button className="cta-button">Explorer les événements</button>
            </div>

            <div className="actualite-professionnelle">
              <h4>Les jeux inspirés de vos mangas préférés</h4>
              <p>
                Plongez dans des jeux vidéo qui vous permettent de vivre les aventures de vos héros de manga préférés. Découvrez des critiques et des conseils pour jouer à ces jeux incontournables.
              </p>
              <button className="cta-button">Voir les jeux</button>
            </div>
          </div>
        </div>
      </div> */}




      <div className='supplement'>
        <div className='more-place'>
          <div className='supplement-header'>
            <h3 className='underline'>Suggestions pour vous</h3>
          </div>

          <div className='supplement-content'>
            <div className='suggestion-item'>
              <h4>Découvrez nos mangas populaires</h4>
              <div className='suggestion-images'>
                <div className='suggestion-image'>
                  <img src='./assets/image/images/One-piece-anime-water_seven-arc.jpg' alt='Manga Populaire 1' />
                  <div className='image-overlay'>
                    <p>One Piece</p>
                  </div>
                </div>
                <div className='suggestion-image'>
                  <img src='./assets/image/images/naruto-team-7.jpeg' alt='Manga Populaire 2' />
                  <div className='image-overlay'>
                    <p>Naruto</p>
                  </div>
                </div>
                <div className='suggestion-image'>
                  <img src='./assets/image/images/Attaque_des_titans_deco_720x.png.webp' alt='Manga Populaire 3' />
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
              <h4>Jeux à découvrir</h4>
              <div className='suggestion-images'>
                <div className='suggestion-image'>
                  <img src='./assets/image/images/dbzfigter.jpeg' alt='Jeu 1' />
                  <div className='image-overlay'>
                    <p>Dragon Ball FighterZ</p>
                  </div>
                </div>
                <div className='suggestion-image'>
                  <img src='./assets/image/images/TheWitcher3.webp' alt='Jeu 2' />
                  <div className='image-overlay'>
                    <p>The Witcher 3</p>
                  </div>
                </div>
                <div className='suggestion-image'>
                  <img src='./assets/image/images/FF_XV_cover.jpg' alt='Jeu 3' />
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
              <h4>Actualités à ne pas manquer</h4>
              <div className='suggestion-news'>
                <div className='news-item'>
                  <img src='./assets/image/images/article-1.jpg' alt='Article 1' />
                  <p className='news-title'>Les dernières tendances dans l'univers du manga</p>
                </div>
                <div className='news-item'>
                  <img src='./assets/image/images/article-2.jpg' alt='Article 2' />
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
      </div>




      <div className="section-vide">
        <div className='more-place'>
          <div className="section-vide-header">
            <h3 className='underline'>Restez informé avec nos actualités professionnelles</h3>
          </div>

          <div className="section-vide-content">
            <div className="actualite-professionnelle">
              <h4>Les dernières tendances du manga</h4>
              <p>
                Découvrez les mangas les plus populaires cette saison, avec des analyses détaillées et des recommandations personnalisées. Nous explorons les dernières sorties et les classiques incontournables du genre.
              </p>
              <button className="cta-button">En savoir plus</button>
            </div>

            <div className="actualite-professionnelle">
              <h4>Événements et salons à venir</h4>
              <p>
                Participez aux événements majeurs du manga et des jeux vidéo. Rencontrez des créateurs, assistez à des panels, et découvrez les dernières nouveautés en avant-première. Ne manquez pas les événements à ne pas rater !
              </p>
              <button className="cta-button">Explorer les événements</button>
            </div>

            <div className="actualite-professionnelle">
              <h4>Les jeux inspirés de vos mangas préférés</h4>
              <p>
                Plongez dans des jeux vidéo qui vous permettent de vivre les aventures de vos héros de manga préférés. Découvrez des critiques et des conseils pour jouer à ces jeux incontournables.
              </p>
              <button className="cta-button">Voir les jeux</button>
            </div>
          </div>
        </div>
      </div>


      <FeatureSection />


      <div className='promo-container-abonement'>
  <div className='promotion-abo-abonement'>
    <div className='promo-abonement'>
      <h2>Choisissez votre abonnement et plongez dans l'univers manga !</h2>
      <div className='abo-options-abonement'>
        <div className='abo-abonement'>
          <h3>Abonnement Mensuel</h3>
          <p>Accès complet à notre catalogue pour 9,99€ par mois.</p>
          <ul>
            <li>Lecture illimitée de tous vos mangas préférés</li>
            <li>Mises à jour hebdomadaires</li>
            <li>Accès à des contenus exclusifs</li>
          </ul>
          <button className='button-abonement'>S'abonner maintenant</button>
        </div>
        <div className='abo-abonement'>
          <h3>Abonnement Trimestriel</h3>
          <p>Accès complet à notre catalogue pour 27,99€ tous les 3 mois.</p>
          <ul>
            <li>Économisez 10% par rapport à l'abonnement mensuel</li>
            <li>Lecture illimitée et contenus exclusifs</li>
            <li>Offres spéciales et accès anticipé aux nouveaux chapitres</li>
          </ul>
          <button className='button-abonement'>S'abonner maintenant</button>
        </div>
        <div className='abo-abonement'>
          <h3>Abonnement Annuel</h3>
          <p>Accès complet à notre catalogue pour 99,99€ par an.</p>
          <ul>
            <li>Économisez 15% par rapport à l'abonnement mensuel</li>
            <li>Lecture illimitée, contenus exclusifs et cadeaux offerts</li>
            <li>Accès premium à des événements en ligne et des promotions</li>
          </ul>
          <button className='button-abonement'>S'abonner maintenant</button>
        </div>
      </div>
    </div>
  </div>
</div>

<CommunityReviews />




    </section>
    
  );
}

export default Accueil;
