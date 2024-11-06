// src/components/Footer.js

import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
// npm install --save @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons


function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section about">
      <img src={"./src/image/Logo/logologo.png" } alt="MangaKo Logo" className="footer-logo" />
        <p>
          MangaKo est une plateforme qui vous permet de découvrir, trier, et organiser vos mangas préférés. Trouvez le manga parfait pour vous !
        </p>
      </div>

      <div className="footer-section links">
        <h2>Liens Utiles</h2>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Mentions légales</a></li>
        </ul>
      </div>

      <div className="footer-section social">
        <h2>Suivez-nous</h2>
        <div className="social-links">
  <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
  <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
</div>

      </div>
    </div>

    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} MangaKo | Tous droits réservés.
    </div>
    </footer>
  );
}

export default Footer;
