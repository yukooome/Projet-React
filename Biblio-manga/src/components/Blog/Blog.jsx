import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faBell, faSmile, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Assurez-vous d'importer les icônes nécessaires
import './Blog.css'; // Import des styles CSS
import Navbar from '../Navbar/Navbar'; // Import du composant Navbar

function Blog() {
  // Exemple de données pour les articles de blog
  const articles = [
    {
      id: 1,
      title: 'Introduction au Manga Japonais',
      excerpt: 'Découvrez l’origine des mangas et pourquoi ils captivent les lecteurs du monde entier.',
      image: './src/image/images/manga_intro.jpeg',
    },
    {
      id: 2,
      title: 'Les 5 meilleurs mangas de l\'année',
      excerpt: 'Un aperçu des mangas incontournables qui ont marqué cette année.',
      image: './src/image/images/top_manga.jpeg',
    },
    {
      id: 3,
      title: 'Les mangas les plus attendus de 2025',
      excerpt: 'Les séries à ne pas manquer l\'année prochaine.',
      image: './src/image/images/manga_2025.jpeg',
    },
  ];

  return (
    <section>
      {/* NAVBARRE */}
      <Navbar /> {/* Intégration de la barre de navigation dans la page Accueil */}

      {/* HEADER BLOG */}
      <div className="header">
        <div className="content-left">
          <div className="blog-introduction">
            <h1>Bienvenue sur notre blog Manga!</h1>
            <p>Explorez nos articles sur l'univers manga, les critiques, les actualités et bien plus encore.</p>
          </div>
        </div>

        <div className="content-right">
          <div className="articles-section">
            {articles.map((article) => (
              <div key={article.id} className="article-card">
                <img src={article.image} alt={article.title} className="article-image" />
                <div className="article-content">
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <a href="#" className="read-more">Lire la suite...</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;


// npm install react-router-dom
