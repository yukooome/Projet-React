import React from 'react';
import './features.css'; // Import du fichier CSS

const features = [
  {
    title: 'Lis tes mangas où et quand tu veux',
    description: 'Tes héroïnes de manga préférées seront toujours à tes côtés avec MangaKo ! Utilise notre app iOS et Android sur mobile ou notre plateforme web sur ton grand écran pour faire le plein de lecture.',
    imgSrc: './assets/image/images/hinata-attack.png',  // Exemple d'image (à remplacer)
    bgColor: 'linear-gradient(90deg, #db3a3a 0%, #f0621e 100%)',
  },
  {
    title: 'Profite d’un confort de lecture ultime',
    description: 'Notre lecteur a été pensé par des fans de manga pour des fans de manga. Fini les scans de mauvaise qualité, profite enfin de tes mangas en HD avec la traduction officielle. Lis sans publicité gênante et personnalise ton lecteur selon tes envies !',
    imgSrc: './assets/image/images/luffy-kid.png', 
    bgColor: 'linear-gradient(90deg, #4897fc 0%, #9b59d0 100%)',
  },
  {
    title: 'Découvre de nouvelles pépites en exclusivité',
    description: 'Découvre les derniers chapitres de tes mangas préférés en simultané, en direct du Japon et de la Chine ! Accède également à de nombreux mangas disponibles en avant-première, en exclusivité et en prépublication gratuite sur Mangas.io !',
    imgSrc: './assets/image/images/dandadan-fille.png',
    bgColor: 'linear-gradient(90deg, #f0621e 0%, #febe10 100%)',
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2 className="section-title">L'app ultime de lecture pour les fans de mangas !</h2>
      <p className="section-subtitle">Découvrez nos meilleurs titres gratuitement 👇</p>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card" style={{ background: feature.bgColor }}>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <div className="feature-image">
              <img src={feature.imgSrc} alt={feature.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
