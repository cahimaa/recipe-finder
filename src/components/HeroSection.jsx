import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-0">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>

      {/* Overlay sombre léger */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Bande de texte horizontale */}
      <div className="relative w-full flex justify-center">
        <div className="w-full max-w-full bg-black/30 backdrop-blur-md px-8 py-12 md:px-16 md:py-20 text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-500"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Enjoy Cooking
          </h1>
          <p
            className="text-md md:text-lg mb-6 text-white leading-relaxed"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Discover easy, quick, and delicious recipes from around the world. Cook like a pro and enjoy every bite!
          </p>
          <Link
            to="/recette"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg" style={{ fontFamily: 'Courgette, cursive' }}
          >
            View Recipes
          </Link>
        </div>
      </div>

      {/* Optionnel : vague ou bord arrondi
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#242424"
          d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,96C672,75,768,53,864,69.3C960,85,1056,139,1152,160C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
    </section>
  );
};

export default HeroSection;
