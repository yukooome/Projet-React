// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Utilisation de Link pour les routes
import './Navbar.css'; // Assurez-vous d'importer vos styles pour la navbar

const Navbar = () => {
  return (
    <div className="app-container">
      {/* NavBar avec logo */}
      <nav className="navbar">
        <img 
          className="logo"
          src="./assets/image/Logo/logologo.png" 
          alt="Logo"
        />
      </nav>

      {/* Section "Manga", "Accueil", et "Contacts" */}
      <div className="links-section">
        {/* lien "Accueil" pointe vers / (racine), comme défini dans App.js. */}
        <Link to="/" className="link">Accueil</Link>
        <Link to="/manga" className="link">Manga</Link>
        <Link to="/contacts" className="link">Contacts</Link>
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

      {/* Logo de connexion et texte */}
      <div className="login-section">
        <FontAwesomeIcon 
          icon={faUser} 
          className="icon"
        />
        <span className="login-text">Yukooo</span>
      </div>
    </div>
  );
}

export default Navbar;
