// import React from 'react';
// import './avis.css'; // Fichier CSS pour le style

// const reviews = [
//     {
//       name: 'Hinata4541',
//       date: 'Le 10 septembre 2024',
//       text: `Un catalogue très complet, passant par les titres populaires à d'autres uniquement disponibles chez MangaKo, et à prix abordable... Une belle alternative aux plateformes illégales !`,
//       avatar: './src/image/images/personnages-nana-removebg-preview.png', // Exemple de lien d'avatar
//       emoji: '😍',
//       bgColor: '#7a4bfc', // Bleu-violet
//     },
//     {
//       name: 'NanaYush',
//       date: 'Le 2 octobre 2024',
//       text: `Super app, un abonnement pas cher pour des mangas en illimité. Le catalogue romance commence à être très intéressant pour les amateurs de webtoon, c’est le bon choix rapport qualité prix !`,
//       avatar: './src/image/images/hinata-removebg-preview.png',
//       emoji: '🔥',
//       bgColor: '#f78c44', // Orange doux
//     },
//     {
//       name: 'Ninou718',
//       date: 'Le 2 novembre 2024',
//       text: `Très bonne application, avec quelques très bons mangas complets. Je conseille Bakuman notamment. J'espère que la communauté va grossir pour que MangaKo puissent attirer encore plus d'éditeurs !`,
//       avatar: './src/image/images/luffy-tete-removebg-preview.png',
//       emoji: '😍',
//       bgColor: '#fbbf0f', // Jaune chaud
//     },
//     {
//       name: 'Nouhi3',
//       date: 'Le 1er décembre 2024',
//       text: `Un plaisir dans les transports ou dans son lit de pouvoir lire ses mangas tranquillement. Il y a des ajouts et l’équipe est toujours à la recherche de nouvelles licences pour notre plus grand plaisir.`,
//       avatar: './src/image/images/Edward-removebg-preview.png',
//       emoji: '😲',
//       bgColor: '#63b3ed', // Bleu clair
//     },
//   ];
  

// const CommunityReviews = () => {
//   return (
//     <section className="reviews-container">
//       <h2 className="reviews-title">Les avis de la communauté manga</h2>
//       <div className="reviews-grid">
//         {reviews.map((review, index) => (
//           <div key={index} className="review-card" style={{ backgroundColor: review.bgColor }}>
//             <h3>{review.name}</h3>
//             <p className="review-date">{review.date}</p>
//             <p>{review.text}</p>
//             <div className="review-footer">
//               <img src={review.avatar} alt={`${review.name} avatar`} className="avatar" />
//               <span className="emoji">{review.emoji}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CommunityReviews;




import React, { useState, useEffect } from 'react';
import './avis.css'; // Fichier CSS pour le style

const reviews = [
    {
      name: 'Hinata4541',
      date: 'Le 10 septembre 2024',
      text: `Un catalogue très complet, passant par les titres populaires à d'autres uniquement disponibles chez MangaKo, et à prix abordable... Une belle alternative aux plateformes illégales !`,
      avatar: './assets/image/images/personnages-nana-removebg-preview.png',
      emoji: '😍',
      bgColor: '#7a4bfc', // Bleu-violet
    },
    {
      name: 'NanaYush',
      date: 'Le 2 octobre 2024',
      text: `Super app, un abonnement pas cher pour des mangas en illimité. Le catalogue romance commence à être très intéressant pour les amateurs de webtoon, c’est le bon choix rapport qualité prix !`,
      avatar: './assets/image/images/hinata-removebg-preview.png',
      emoji: '🔥',
      bgColor: '#f78c44', // Orange doux
    },
    {
      name: 'Ninou718',
      date: 'Le 2 novembre 2024',
      text: `Très bonne application, avec quelques très bons mangas complets. Je conseille Bakuman notamment. J'espère que la communauté va grossir pour que MangaKo puissent attirer encore plus d'éditeurs !`,
      avatar: './assets/image/images/luffy-tete-removebg-preview.png',
      emoji: '😍',
      bgColor: '#fbbf0f', // Jaune chaud
    },
    {
      name: 'Nouhi3',
      date: 'Le 1er décembre 2024',
      text: `Un plaisir dans les transports ou dans son lit de pouvoir lire ses mangas tranquillement. Il y a des ajouts et l’équipe est toujours à la recherche de nouvelles licences pour notre plus grand plaisir.`,
      avatar: './assets/image/images/Edward-removebg-preview.png',
      emoji: '😲',
      bgColor: '#63b3ed', // Bleu clair
    },
    {
      name: 'Marie123',
      date: 'Le 5 décembre 2024',
      text: `Excellente app, avec des ajouts réguliers. La qualité est top et les mangas sont diversifiés. J’espère que la sélection continuera de grandir !`,
      avatar: './assets/image/images/personnages-nana-removebg-preview.png',
      emoji: '😊',
      bgColor: '#9b59b6', // Violet doux
    },
    {
      name: 'Tetsuya5',
      date: 'Le 7 décembre 2024',
      text: `Superbe plateforme avec un abonnement très compétitif. Les options de lecture sont vraiment pratiques et bien pensées.`,
      avatar: './assets/image/images/personnages-nana-removebg-preview.png',
      emoji: '👍',
      bgColor: '#e67e22', // Orange plus chaud
    },
    {
      name: 'Lina97',
      date: 'Le 12 décembre 2024',
      text: `MangaKo m’a réconcilié avec les mangas numériques. Un catalogue super varié et une interface facile à utiliser.`,
      avatar: './assets/image/images/personnages-nana-removebg-preview.png',
      emoji: '💖',
      bgColor: '#f39c12', // Jaune doré
    },
    {
      name: 'JunoX',
      date: 'Le 20 décembre 2024',
      text: `La meilleure plateforme pour lire des mangas en streaming ! La qualité est top, et les nouvelles sorties sont mises à jour très rapidement.`,
      avatar: './assets/image/images/personnages-nana-removebg-preview.png',
      emoji: '🌟',
      bgColor: '#1abc9c', // Bleu-vert apaisant
    },
  ];

const CommunityReviews = () => {
  // Utilisation de useState pour gérer le groupe d'avis affichés
  const [currentGroup, setCurrentGroup] = useState(0);

  // Nombre d'avis à afficher par groupe
  const reviewsPerGroup = 4;

  // Fonction pour changer de groupe d'avis
  const changeGroup = () => {
    setCurrentGroup(prevGroup => (prevGroup + 1) % Math.ceil(reviews.length / reviewsPerGroup));
  };

  // Utilisation de useEffect pour changer le groupe d'avis toutes les 30 secondes
  useEffect(() => {
    const interval = setInterval(changeGroup, 5000); // 5 secondes
    return () => clearInterval(interval); // Nettoyage de l'intervalle lorsque le composant est démonté
  }, []);

  // Extraire les avis à afficher en fonction du groupe actuel
  const startIndex = currentGroup * reviewsPerGroup;
  const selectedReviews = reviews.slice(startIndex, startIndex + reviewsPerGroup);

  return (
    <section className="reviews-container">
      <h2 className="reviews-title">Les avis de la communauté manga</h2>
      <div className="reviews-grid">
        {selectedReviews.map((review, index) => (
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
