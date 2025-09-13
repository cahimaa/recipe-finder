import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-black min-h-[90vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* Texte à gauche */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
            Bienvenue sur <span className="text-red-500">Recettes Maison</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Découvrez des recettes faciles, rapides et savoureuses du monde entier. 🍲
          </p>
          <Link
            to="/recette"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Voir les Recettes
          </Link>
        </div>

        {/* Zone images à droite */}
        <div className="relative flex-1 h-[500px] ">
          <img
  src="/plate1.jpg"
  alt="Plat 1"
  className="absolute rounded-lg shadow-lg w-[610px]"
  style={{ top: '60px', left: '300px' }}
/>

          <img
            src="/plate2C.jpg"
            alt="Plat 2"
            className="absolute w-50 rounded-lg shadow-lg"
            style={{ top: '10px', left: '540px' }}
          />
          <img
            src="/plate3C.jpg"
            alt="Plat 3"
            className="absolute w-60 rounded-lg shadow-lg"
            style={{ top: '350px', left: '685px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
