// App.js : ton composant principal qui importe les autres.

import React from 'react';
import './App.css';
import Accueil from './components/Accueil/Accueil.jsx';  // Import du composant Header
import MangaSection from './components/MangaSection/MangaSection.jsx';  // Import du composant MangaSection
import Contact from './components/Contact/Contact.jsx'; // Import du composant Contact
import Footer from './components/Footer/Footer.jsx';  // Import du composant Footer

function App() {
  return (
    <div className="App">
      <Accueil />
      <MangaSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;




// import React from 'react';
// import './App.css';
// import Accueil from './components/Accueil/Accueil.jsx';
// import MangaSection from './components/MangaSection/MangaSection.jsx';
// import Contact from './components/Contact/Contact.jsx';
// import Footer from './components/Footer/Footer.jsx';
// import Login from './components/login/login.jsx';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           {/* Protéger la route accueil */}
//           <Route path="/" element={<PrivateRoute><Accueil /></PrivateRoute>} />
//           <Route path="/manga-section" element={<MangaSection />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/footer" element={<Footer />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

