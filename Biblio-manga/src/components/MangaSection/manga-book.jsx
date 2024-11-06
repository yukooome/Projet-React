



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mangasection.css';
import MangaDetails from './manga-details'; // Importez le nouveau composant

function MangaBook({ showMyList, searchTerm, setSelectedMangaId }) {
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Charger la liste des mangas depuis localStorage
  const loadMangaList = () => {
    const savedMangaList = localStorage.getItem('myMangaList');
    return savedMangaList ? JSON.parse(savedMangaList) : [];
  };

  const [myMangaList, setMyMangaList] = useState(loadMangaList());

  const getMangas = async (search = '', page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/manga?q=${search}&limit=8&page=${page}`
      );
      if (page === 1) {
        setMangas(response.data.data);
      } else {
        setMangas((prev) => [...prev, ...response.data.data]);
      }
      setHasMore(response.data.data.length > 0);
    } catch (error) {
      console.error('Erreur lors de la récupération des données de l\'API', error);
      setError('Échec de la récupération des mangas. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    getMangas(searchTerm, 1);
  }, [searchTerm]);

  const loadMoreMangas = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    getMangas(searchTerm, nextPage);
  };

  // Fonction pour gérer l'ajout ou la suppression d'un manga
  const toggleMangaInList = (mangaId) => {
    let updatedList;
    if (myMangaList.includes(mangaId)) {
      // Supprimer du stockage
      updatedList = myMangaList.filter(id => id !== mangaId);
    } else {
      // Ajouter au stockage
      updatedList = [...myMangaList, mangaId];
    }
    setMyMangaList(updatedList);
    localStorage.setItem('myMangaList', JSON.stringify(updatedList)); // Sauvegarder dans localStorage
  };

  const displayedMangas = showMyList 
    ? mangas.filter(manga => myMangaList.includes(manga.mal_id))
    : mangas;

  return (
    <div className='collection'>
      {loading && <p className="loading-message">Chargement...</p>}
      {error && <p className="error-message">{error}</p>}

      {displayedMangas.map((manga) => (
        <div key={manga.mal_id} className='manga-item' onClick={() => setSelectedMangaId(manga.mal_id)}>
          <img src={manga.images.jpg.large_image_url} alt={manga.title} />
          <p>{manga.title}</p>
          <button 
            className={myMangaList.includes(manga.mal_id) ? 'btn-remove' : 'btn-add'}
            onClick={(e) => {
              e.stopPropagation(); // Empêche la propagation du clic
              toggleMangaInList(manga.mal_id);
            }}
          >
            {myMangaList.includes(manga.mal_id) ? 'Supprimer' : 'Ajouter'}
          </button>
        </div>
      ))}

      {hasMore && !showMyList && (
        <button onClick={loadMoreMangas} className="load-more-button">
          Voir plus de mangas
        </button>
      )}
    </div>
  );
}

export default MangaBook;
