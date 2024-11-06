import React, { useState } from 'react';
import axios from 'axios';
import './mangasection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import MangaBook from './manga-book';
import MangaDetails from './manga-details';

function MangaSection() {
  const [showMyList, setShowMyList] = useState(false); // État pour gérer l'affichage des mangas
  const [myMangaList, setMyMangaList] = useState([]); // Liste personnalisée des mangas
  const [searchTerm, setSearchTerm] = useState(''); // État pour la recherche
  const [selectedMangaId, setSelectedMangaId] = useState(null); // État pour gérer le manga sélectionné

  // Fonction pour basculer entre "Tous les mangas" et "Ma liste"
  const handleToggleList = (showMyList) => {
    setShowMyList(showMyList);
  };

  // Fonction pour ajouter ou supprimer un manga de la liste
  const toggleMangaInList = (manga) => {
    setMyMangaList((prev) => {
      if (prev.includes(manga)) {
        return prev.filter((item) => item !== manga); // Supprime le manga de la liste
      } else {
        return [...prev, manga]; // Ajoute le manga à la liste
      }
    });
  };

  return (
    <section>
      <div className='manga'>
        <div className='titre-section-manga'>
          <p className='underline'>Manga</p>
        </div>

        <div className="container-search">
          <div className='choice-btn'>
            <button className="btn all-manga-btn" onClick={() => handleToggleList(false)}>
              Tous les mangas
            </button>
            <button className="btn my-list-btn" onClick={() => handleToggleList(true)}>
              Ma liste
            </button>
          </div>

          <div className="search-section">
            <input 
              className="search-input" 
              type="text" 
              placeholder="Recherche" 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button className="search-button">
              <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                className="icon loupe-icon" 
              />
            </button>
          </div>
        </div>

        <div className='all-manga-section'>
          <div className='book'>
            <MangaBook 
              showMyList={showMyList} 
              myMangaList={myMangaList} 
              toggleMangaInList={toggleMangaInList} 
              searchTerm={searchTerm} 
              setSelectedMangaId={setSelectedMangaId} // Ajout de la fonction de sélection
            />
          </div>
          
          <div className='container-details'>
            {selectedMangaId && <MangaDetails mangaId={selectedMangaId} />} {/* Détails du manga ici */}
          </div>
          
        </div>
      </div> 
    </section>
  );
}

export default MangaSection;






