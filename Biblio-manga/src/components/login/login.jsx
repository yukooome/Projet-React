// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';  // Pour rediriger après connexion
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Envoyer les données au serveur Node.js
//       const response = await axios.post('http://localhost:5000/api/login', { username, password });

//       // Sauvegarder le token dans le localStorage ou sessionStorage
//       localStorage.setItem('token', response.data.token);

//       // Rediriger vers la page d'accueil après connexion
//       navigate('/');
//     } catch (error) {
//       // En cas d'erreur de connexion, afficher un message
//       setErrorMessage(error.response.data.message || 'Erreur lors de la connexion');
//     }
//   };

//   return (
//     <div className="first-cont-login">
//       <div className="container-login">
//         <h1 className="title-login">Connexion</h1>
//         <form onSubmit={handleSubmit} className="form-login">
//           <div className="form-group-login">
//             <label className="label-login">Nom d'utilisateur :</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="input-login"
//             />
//           </div>
//           <div className="form-group-login">
//             <label className="label-login">Mot de passe :</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="input-login"
//             />
//           </div>
//           {errorMessage && <p className="error">{errorMessage}</p>}
//           <button type="submit" className="button-login">Se connecter</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



