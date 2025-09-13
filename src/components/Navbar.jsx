import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">MonLogo</div>
      <ul className="flex space-x-6">
        <li><Link to="/home" className="text-white hover:text-gray-300">Accueil</Link></li>
        <li><Link to="/recette" className="text-white hover:text-gray-300">Recettes</Link></li>
        <li><Link to="/apropos" className="text-white hover:text-gray-300">À propos</Link></li>
        <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

