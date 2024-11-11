import React from 'react';
import './avis.css'; // Fichier CSS pour le style

const reviews = [
    {
      name: 'Hinata4541',
      date: 'Le 10 septembre 2024',
      text: `Un catalogue très complet, passant par les titres populaires à d'autres uniquement disponibles chez MangaKo, et à prix abordable... Une belle alternative aux plateformes illégales !`,
      avatar: './src/image/images/personnages-nana-removebg-preview.png', // Exemple de lien d'avatar
      emoji: '😍',
      bgColor: '#7a4bfc', // Bleu-violet
    },
    {
      name: 'NanaYush',
      date: 'Le 2 octobre 2024',
      text: `Super app, un abonnement pas cher pour des mangas en illimité. Le catalogue romance commence à être très intéressant pour les amateurs de webtoon, c’est le bon choix rapport qualité prix !`,
      avatar: './src/image/images/hinata-removebg-preview.png',
      emoji: '🔥',
      bgColor: '#f78c44', // Orange doux
    },
    {
      name: 'Ninou718',
      date: 'Le 2 novembre 2024',
      text: `Très bonne application, avec quelques très bons mangas complets. Je conseille Bakuman notamment. J'espère que la communauté va grossir pour que MangaKo puissent attirer encore plus d'éditeurs !`,
      avatar: './src/image/images/luffy-tete-removebg-preview.png',
      emoji: '😍',
      bgColor: '#fbbf0f', // Jaune chaud
    },
    {
      name: 'Nouhi3',
      date: 'Le 1er décembre 2024',
      text: `Un plaisir dans les transports ou dans son lit de pouvoir lire ses mangas tranquillement. Il y a des ajouts et l’équipe est toujours à la recherche de nouvelles licences pour notre plus grand plaisir.`,
      avatar: './src/image/images/Edward-removebg-preview.png',
      emoji: '😲',
      bgColor: '#63b3ed', // Bleu clair
    },
  ];
  

const CommunityReviews = () => {
  return (
    <section className="reviews-container">
      <h2 className="reviews-title">Les avis de la communauté manga</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card" style={{ backgroundColor: review.bgColor }}>
            <h3>{review.name}</h3>
            <p className="review-date">{review.date}</p>
            <p>{review.text}</p>
            <div className="review-footer">
              <img src={review.avatar} alt={`${review.name} avatar`} className="avatar" />
              <span className="emoji">{review.emoji}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityReviews;
