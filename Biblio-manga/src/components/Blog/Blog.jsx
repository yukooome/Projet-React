import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faShareAlt } from '@fortawesome/free-solid-svg-icons'; 
import './Blog.css'; 
import Navbar from '../Navbar/Navbar'; 

function Blog() {
  // Liste d'articles de blog avec plus de contenu
  const articles = [
    {
      id: 1,
      title: 'L\'évolution du manga japonais : Une histoire en constante évolution',
      excerpt: 'Le manga japonais a évolué de manière spectaculaire depuis ses débuts au XIXe siècle. De la naissance des premières œuvres comme "Toba Ehon" aux mangas modernes comme "One Piece", cette industrie n\'a cessé d\'influencer la culture mondiale.',
      image: './src/image/images/demonslayerpilier.png',
      author: 'Satoru Nakamura',
      date: '2024-11-08',
      commentsCount: 12,
      content: 'L\'histoire du manga commence avec des œuvres comme les "kibyôshi" au XVIIIe siècle. Ces premiers mangas étaient souvent des illustrations satiriques et comiques.'
    },
    {
      id: 2,
      title: 'Les mangas à ne pas manquer cette année',
      excerpt: '2024 est une année riche en nouveaux mangas passionnants qui devraient captiver les lecteurs de tous horizons.',
      image: './src/image/images/plage-manga.png',
      author: 'Rika Tanaka',
      date: '2024-11-06',
      commentsCount: 27,
      content: 'Parmi les mangas les plus attendus de 2024, "Jujutsu Kaisen 2" continue de surprendre ses lecteurs avec une histoire encore plus sombre et intense.'
    },
    {
      id: 3,
      title: 'L\'impact des mangas sur la culture mondiale',
      excerpt: 'Les mangas japonais ne sont plus confinés aux frontières du Japon. Leur influence s\'étend à travers le monde.',
      image: './src/image/images/impact-dessin.png',
      author: 'Hiroshi Yamada',
      date: '2024-11-01',
      commentsCount: 9,
      content: 'Les mangas ont transcendé leur origine japonaise pour devenir un phénomène culturel mondial. Des séries comme "Dragon Ball" et "Naruto" ont marqué des générations entières.'
    },
    // Articles 4, 5 et 6 avec des informations différentes
    {
      id: 4,
      title: 'Les tendances actuelles dans l\'anime',
      excerpt: 'Explorez les dernières tendances dans le monde de l\'anime, des séries les plus populaires aux nouvelles technologies utilisées dans la production.',
      // image: './src/image/images/impact-dessin.png', 
      author: 'Taro Tanaka',
      date: '2024-10-29',
      commentsCount: 18,
      content: 'Les technologies telles que l\'animation en 3D et les techniques de modélisation avancées prennent de plus en plus d\'importance dans l\'industrie de l\'anime. Les studios comme MAPPA et Studio Bones sont à la pointe de ces innovations.'
    },
    {
      id: 5,
      title: 'Les mangas à lire absolument pour les nouveaux fans',
      excerpt: 'Voici une sélection des mangas les plus accessibles pour les débutants, parfaits pour ceux qui veulent découvrir l\'univers manga.',
      // image: './src/image/images/demonslayerpilier.png', 
      author: 'Keiko Yoshida',
      date: '2024-10-15',
      commentsCount: 32,
      content: 'Des séries comme "My Hero Academia", "Naruto" et "Attack on Titan" sont parfaites pour ceux qui débutent dans l\'univers du manga. Ces histoires captivantes sont accessibles et offrent un bon point de départ pour les nouveaux fans.'
    },
    {
      id: 6,
      title: 'Les mangas classiques à découvrir',
      excerpt: 'Si vous êtes un fan de manga, voici une liste des classiques incontournables que tout amateur devrait lire.',
      // image: './src/image/images/classic-manga.png',  
      author: 'Hiroshi Yamamoto',
      date: '2024-10-10',
      commentsCount: 5,
      content: 'Des titres comme "Astro Boy", "Akira" et "Sailor Moon" ont marqué l\'histoire des mangas. Ces œuvres ont non seulement influencé d\'autres mangas mais ont également changé la perception du manga dans le monde entier.'
    },
  ];
  

  // État pour gérer la page actuelle et les articles par page
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  // Calculer les articles à afficher pour la page actuelle
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Fonction pour changer de page
  const handleNextPage = () => {
    if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
      <Navbar />
      <div className="header-blog">
        <div className='place-blog'>
          <div className="case-titre">
            <p>Bienvenue sur notre blog MangaKo !</p>
            <h3>Laissez-vous emporter par toutes les dernières nouvelles !</h3>
          </div>

          <div className="content-right-blog">
            <div className="articles-section-blog">
              {currentArticles.map((article) => (
                <div key={article.id} className="article-card-blog">
                  <img src={article.image} alt={article.title} className="article-image-blog" />
                  <div className="article-content-blog">
                    <h2>{article.title}</h2>
                    <p className="article-author-date-blog">Par {article.author} - {article.date}</p>
                    <p>{article.excerpt}</p>
                    <a href="#" className="read-more-blog">Lire la suite...</a>

                    <div className="article-footer-blog">
                      <div className="comment-section-blog">
                        <FontAwesomeIcon icon={faCommentDots} className="comment-icon-blog" />
                        <span>{article.commentsCount} Commentaires</span>
                      </div>
                      <div className="share-section-blog">
                        <FontAwesomeIcon icon={faShareAlt} className="share-icon-blog" />
                        <span>Partager</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination-blog">
              <button
                className="prev-button-blog"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Précédent
              </button>
              <button
                className="next-button-blog"
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
