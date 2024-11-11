import React, { useState } from 'react';
import './Contact.css'; // Importation du fichier CSS


import Navbar from '../Navbar/Navbar'; // Import du composant Navbar

const Contact = () => {
  const [pseudo, setPseudo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour traiter le formulaire (envoi d'email, etc.)
    console.log({ pseudo, subject, message });
    // Réinitialiser le formulaire après soumission
    setPseudo('');
    setSubject('');
    setMessage('');
  };

  return (
    <section>
      {/* NAVBARRE */}
      <Navbar /> 
      <div className='first-cont-contact'>
      <div className="container-contact">
      <h1 className="title-contact">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="form-contact">
        <div className="form-group-contact">
          <label className="label-contact">Pseudo :</label>
          <input
            type="text"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            required
            className="input-contact"
          />
        </div>
        <div className="form-group-contact">
          <label className="label-contact">Sujet :</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="input-contact"
          />
        </div>
        <div className="form-group-contact">
          <label className="label-contact">Message :</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="textarea-contact"
          />
        </div>
        <button type="submit" className="button-contact">Envoyer</button>
      </form>
    </div>

    </div>

    </section>

    
  );
};

export default Contact;
