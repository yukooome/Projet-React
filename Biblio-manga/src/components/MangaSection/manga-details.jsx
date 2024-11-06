import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './mangasection.css';

function MangaDetails({ mangaId }) {
  const [mangaDetails, setMangaDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // States pour les données utilisateur
  const [status, setStatus] = useState(''); // Statut de lecture
  const [currentPage, setCurrentPage] = useState(''); // Page actuelle
  const [rating, setRating] = useState(0); // Évaluation par étoiles
  const [comment, setComment] = useState(''); // Commentaires
  const [currentTome, setCurrentTome] = useState(''); // Tome actuel

  // Clé unique pour chaque manga dans localStorage
  const localStorageKey = `manga_${mangaId}`;

  // Réinitialiser les informations à chaque fois que le mangaId change
  useEffect(() => {
    setStatus('');
    setCurrentPage('');
    setRating(0);
    setComment('');
    setCurrentTome(''); // Ajout de currentTome

    // Vérifier si des informations sont présentes dans localStorage pour ce manga
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
      const { status, currentPage, rating, comment, currentTome } = JSON.parse(savedData);
      setStatus(status);
      setCurrentPage(currentPage);
      setRating(rating);
      setComment(comment);
      setCurrentTome(currentTome); // Ajout de currentTome
    }
  }, [mangaId]);

  // Sauvegarder les données dans localStorage à chaque mise à jour
  useEffect(() => {
    const dataToSave = { status, currentPage, rating, comment, currentTome };
    localStorage.setItem(localStorageKey, JSON.stringify(dataToSave));
  }, [status, currentPage, rating, comment, currentTome, localStorageKey]);

  // Récupérer les détails du manga via l'API
  useEffect(() => {
    const fetchMangaDetails = async () => {
      if (mangaId) {
        setLoading(true);
        try {
          const response = await axios.get(`https://api.jikan.moe/v4/manga/${mangaId}`);
          setMangaDetails(response.data.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des détails du manga', error);
          setError('Échec de la récupération des détails du manga. Veuillez réessayer plus tard.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMangaDetails();
  }, [mangaId]);

  if (loading) return <p className='color-charg'>Chargement des détails...</p>;
  if (error) return <p>{error}</p>;
  if (!mangaDetails) return null;

  // Gérer la sélection des étoiles
  const handleStarClick = (star) => {
    setRating(star);
  };

  return (
    <div className="manga-details">
      <div className="details-container">
      <p>Chargement des détails...</p>
        <img src={mangaDetails.images.jpg.large_image_url} alt={mangaDetails.title} className="manga-image" />
        <div className="details-text">
          <h2>{mangaDetails.title}</h2>
          <p>{mangaDetails.synopsis}</p>
          <p><strong>Genres:</strong> {mangaDetails.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Score:</strong> {mangaDetails.score}</p>
        </div>
      </div>

      {/* Section pour le statut de lecture, la progression, l'évaluation et les commentaires */}
      <div className="manga-interaction">

        {/* Statut de lecture */}
        <div className="status">
          <label htmlFor="status">Statut de lecture:</label>
          <select 
            id="status" 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
          >
            {/* <option value="" disabled>Choisissez un statut</option> */}
            <option value="choisissez un statut" >Choisissez un statut</option>
            <option value="Envie de lire">Envie de lire</option>
            <option value="En cours de lecture">En cours de lecture</option>
            <option value="Fini">Fini</option>
          </select>
        </div>

        {/* Tome actuel */}
        <div className="progressionTome">
          <label htmlFor="currentTome">Tome actuel:</label>
          <input
            type="number"
            id="currentTome"
            value={currentTome}
            onChange={(e) => setCurrentTome(e.target.value)}
            placeholder="Ex: 1"
          />
        </div>

        {/* Progression (Page actuelle) */}
        <div className="progression">
          <label htmlFor="currentPage">Page actuelle:</label>
          <input
            type="number"
            id="currentPage"
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.value)}
            placeholder="Ex: 120"
          />
        </div>

        {/* Évaluation par étoiles */}
        <div className="rating">
          <label>Évaluation:</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'selected' : ''}`}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Commentaire */}
        <div className="comment-section">
          <label htmlFor="comment">Commentaire:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Laissez un commentaire..."
          />
        </div>
      </div>
    </div>
  );
}

export default MangaDetails;
