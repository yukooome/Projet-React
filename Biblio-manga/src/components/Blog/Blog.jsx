import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faShareAlt } from '@fortawesome/free-solid-svg-icons'; 
import './Blog.css'; 
import Navbar from '../Navbar/Navbar'; 

function Blog() {
  // Contenu des articles réels sur le manga, basé sur des faits et tendances actuelles
  const articles = [
    {
      id: 1,
      title: 'L\'évolution du manga japonais : Une histoire en constante évolution',
      excerpt: 'Le manga japonais a évolué de manière spectaculaire depuis ses débuts au XIXe siècle. Dans cet article, nous explorons l\'histoire du manga, de ses origines à son influence mondiale aujourd\'hui.',
      image: './src/image/images/demonslayerpilier.png',
      author: 'Satoru Nakamura',
      date: '2024-11-08',
      commentsCount: 12,
    },
    {
      id: 2,
      title: 'Les mangas à ne pas manquer cette année',
      excerpt: '2024 est une année riche en nouveaux mangas passionnants. Voici une sélection des séries les plus attendues et des meilleurs titres qui vous tiendront en haleine.',
      image: './src/image/images/plage-manga.png',
      author: 'Rika Tanaka',
      date: '2024-11-06',
      commentsCount: 27,
    },
    {
      id: 3,
      title: 'L\'impact des mangas sur la culture mondiale',
      excerpt: 'Les mangas japonais ne sont plus confinés aux frontières du Japon. Leur influence s\'étend à travers le monde, notamment grâce à l\'anime et aux événements internationaux.',
      image: './src/image/images/impact-dessin.png',
      author: 'Hiroshi Yamada',
      date: '2024-11-01',
      commentsCount: 9,
    },
  ];

  // Etat pour gérer l'affichage des commentaires
  const [showComments, setShowComments] = useState(false);

  return (
    <section>
      <Navbar />
      

      <div className="header-blog">
  {/* <div className="content-left-blog">
    <div className="blog-introduction-blog">
      <h1>Bienvenue sur notre blog Manga!</h1>
      <p>Explorez les dernières tendances, critiques, et actualités sur l'univers du manga.</p>
    </div>
  </div> */}
<div className='place-blog'>
  
<div className="case-titre">
<p>Bienvenue sur notre blog MangaKo !</p>
<h3>Laissez-vous emporter par toutes les dernières nouvelles !</h3>
  {/* <h3>Toutes les actualités et nouveautés en un seul clic !</h3> */}
  {/* <p>Explorez le monde incroyable des mangas avec MangaKo !</p> */}
</div>


  <div className="content-right-blog">
    <div className="articles-section-blog">
      {articles.map((article) => (
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
      <button className="prev-button-blog">Précédent</button>
      <button className="next-button-blog">Suivant</button>
    </div>
  </div>
</div>
</div>

    </section>
  );
}

export default Blog;


// npm install react-router-dom
