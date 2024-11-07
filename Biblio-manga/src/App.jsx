// // App.js : ton composant principal qui importe les autres.

// import React from 'react';
// import './App.css';
// import Accueil from './components/Accueil/Accueil.jsx';  // Import du composant Header
// import MangaSection from './components/MangaSection/MangaSection.jsx';  // Import du composant MangaSection
// import Contact from './components/Contact/Contact.jsx'; // Import du composant Contact
// import Footer from './components/Footer/Footer.jsx';  // Import du composant Footer

// function App() {
//   return (
//     <div className="App">
//       <Accueil />
//       <MangaSection />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;




import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importation des composants du routeur
import Accueil from './components/Accueil/Accueil.jsx';  // Import du composant Accueil
import MangaSection from './components/MangaSection/MangaSection.jsx';  // Import du composant MangaSection
import Contact from './components/Contact/Contact.jsx'; // Import du composant Contact
import Footer from './components/Footer/Footer.jsx';  // Import du composant Footer
import Blog from './components/Blog/Blog.jsx';  // Import du composant Blog (ajoutez-le ici)

function App() {
  return (
    <Router> {/* Encapsule toute l'application dans le Router */}
      <div className="App">
        {/* Définir les routes ici */}
        <Routes>
          <Route path="/" element={<Accueil />} /> {/* Route pour la page Accueil */}
          <Route path="/manga" element={<MangaSection />} /> {/* Route pour la page Manga */}
          <Route path="/contacts" element={<Contact />} /> {/* Route pour la page Contact */}
          <Route path="/blog" element={<Blog />} /> {/* Route pour la page Blog */}
        </Routes>

        <Footer /> {/* Footer en dehors des routes, car il doit être présent sur toutes les pages */}
      </div>
    </Router>
  );
}

export default App;
