// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 5000; // Port du serveur

// // Middleware pour traiter les requêtes JSON
// app.use(bodyParser.json());
// app.use(cors()); // Pour permettre les requêtes provenant de ton application React

// // Simuler une base de données (ici, pour des fins de démonstration)
// const users = [
//   { id: 1, username: 'admin', password: bcrypt.hashSync('password', 10) } // Mot de passe hashé
// ];

// // Clé secrète pour signer les tokens JWT
// const SECRET_KEY = 'votre_clé_secrète';

// // Route de connexion
// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;

//   // Trouver l'utilisateur dans la "base de données"
//   const user = users.find(u => u.username === username);
//   if (!user) {
//     return res.status(400).json({ message: 'Utilisateur non trouvé' });
//   }

//   // Comparer le mot de passe avec celui hashé
//   const isMatch = bcrypt.compareSync(password, user.password);
//   if (!isMatch) {
//     return res.status(400).json({ message: 'Mot de passe incorrect' });
//   }

//   // Générer un token JWT
//   const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
//     expiresIn: '1h', // Le token expire après 1 heure
//   });

//   // Retourner le token
//   res.json({ token });
// });

// // Route protégée (exemple)
// app.get('/api/protected', (req, res) => {
//   const token = req.headers['authorization'];

//   if (!token) {
//     return res.status(401).json({ message: 'Accès non autorisé' });
//   }

//   // Vérifier le token
//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     res.json({ message: 'Bienvenue dans la route protégée', user: decoded });
//   } catch (err) {
//     res.status(401).json({ message: 'Token invalide ou expiré' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Serveur lancé sur le port ${PORT}`);
// });



// // npm init -y
// // npm install express bcryptjs jsonwebtoken cors body-parser
// // npm install axios

