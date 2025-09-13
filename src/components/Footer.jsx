import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} MonSite. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4">
          <a href="#!" className="hover:text-gray-400">Mentions légales</a>
          <a href="#!" className="hover:text-gray-400">Politique de confidentialité</a>
          <a href="#!" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
