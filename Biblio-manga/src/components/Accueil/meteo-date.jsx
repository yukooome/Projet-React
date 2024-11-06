import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importer Axios pour faire des requêtes HTTP

const Meteo = () => {
  const [currentDate, setCurrentDate] = useState(''); // Stocke la date actuelle
  const [currentTemperature, setCurrentTemperature] = useState(null); // Stocke la température actuelle

  // Fonction pour obtenir la DATE actuelle formatée
  useEffect(() => {
    const loadDate = () => {
      const today = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      setCurrentDate(today.toLocaleDateString('fr-FR', options)); // Met à jour la date
    };

    // Fonction pour obtenir la METEO actuelle avec Axios
    const loadWeather = async () => {
      const apiKey = '13a8212552579d1e8ec8126ba3817805'; // clé API OpenWeatherMap 
      const city = 'Brussels';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;


      try {
        const response = await axios.get(apiUrl); // Appel API avec Axios
        const temperature = response.data.main.temp; // extraire la température depuis la réponse de l’API.
        setCurrentTemperature(Math.round(temperature)); // Ronde (arrondi) la température avant de la mettre à jour
      } catch (error) {
        console.error('Erreur lors de la récupération de la météo', error);
      }
    };

    loadDate(); // Met à jour la date au chargement
    loadWeather(); // Appel API pour récupérer la météo au chargement
  }, []); // Le tableau vide signifie que cela s'exécute une seule fois au montage

  return (
    <div className='meteo'>
      <div className='titre-meteo'>
        <h3>Météo</h3>
      </div>
      <div className='case-meteo'>
        <div className='date'>{currentDate}</div> {/* Affiche la date */}
        <div className='meteo-local'>
          {currentTemperature !== null ? `${currentTemperature}°C` : ''}   {/* je pourrai ecrire charchement dans les guillemets vides */}
        </div>
        <p>Si le temps le permet, nous vous conseillons vivement de sortir, de vous installer confortablement à l'extérieur et de savourer un bon Manga.</p>
      </div>
    </div>
  );
};

export default Meteo;
