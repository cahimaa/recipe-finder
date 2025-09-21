import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await res.json();
        setRecipes(data.meals ? data.meals.slice(0, 3) : []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="scroll-smooth bg-[#3B3B3B] text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        
      >
        <HeroSection />
        
      </section>
      


      {/* Recipe Preview Section */}
      <section id="recette" className="py-20 px-8 bg-[#242424]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-yellow-600" style={{ fontFamily: 'Playfair Display, serif' }}>
          Our Top Recipes
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {recipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="bg-[#242424] rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300" style={{ fontFamily: 'Courgette, cursive' }}
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }} >{recipe.strMeal}</h3>
                <Link
                  to={`/recette/${recipe.idMeal}`}
                  className="bg-yellow-600 text-[#242424] px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors" style={{ fontFamily: 'Courgette, cursive' }}
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/recette"
            className="inline-block bg-yellow-600 text-[#242424] px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors" style={{ fontFamily: 'Courgette, cursive' }}
          >
            See All Recipes
          </Link>
        </div>
      </section>

      <div className="w-full h-1 bg-yellow-500"></div>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-[#242424] text-white">
  <div className="max-w-6xl mx-auto text-center space-y-12">
    
    {/* Titre et intro */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
        About Us
      </h2>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Founded in 2020, our passion for culinary arts started in a small kitchen. 
        Today, we bring our love for authentic flavors to every plate we serve. 
        Discover our story, our values, and our commitment to quality.
      </p>
    </div>

    {/* Infos clés / icônes */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Rating avec étoiles */}
      <div className="bg-black bg-opacity-50 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`w-6 h-6 ${i < 4 ? 'text-yellow-500' : 'text-yellow-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.047 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z"/>
            </svg>
          ))}
          <span className="ml-2 text-white font-semibold">4.9</span>
        </div>
        <p className="text-white font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>Customer Rating</p>
      </div>

      {/* Localisation */}
      <div className="bg-black bg-opacity-50 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
        <span className="text-yellow-500 text-3xl mb-2">📍</span>
        <p className="text-white font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>Casablanca, Morocco</p>
      </div>

      {/* Distinction */}
      <div className="bg-black bg-opacity-50 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
        <span className="text-yellow-500 text-3xl mb-2">🏆</span>
        <p className="text-white font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>Best Local Cuisine 2024</p>
      </div>

    </div>
  </div>
</section>


      {/* Contact Section */}
      <section
  id="contact"
  className="relative py-16 px-8 flex items-center justify-center"
  style={{
    backgroundImage: `url('/contact.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay semi-transparent */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-3xl w-full text-center text-white p-8 rounded-xl bg-black/30 backdrop-blur-md">
    <h2 className="text-3xl font-extrabold mb-4 text-yellow-600" style={{ fontFamily: 'Playfair Display, serif' }}>
      Contact Us
    </h2>
    <p className="text-lg mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
      Have questions or want to say hi? Fill out the form below, and we will get back to you!
    </p>
    <form className="flex flex-col space-y-3">
      <input
        type="text"
        placeholder="Name"
        className="p-3 rounded-lg bg-white/80 text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
      <input
        type="email"
        placeholder="Email"
        className="p-3 rounded-lg bg-white/80 text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
      <textarea
        placeholder="Message"
        className="p-3 rounded-lg bg-white/80 text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        rows={4}
      ></textarea>
      <button
        type="submit"
        className="bg-yellow-600 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors" style={{ fontFamily: 'Courgette, cursive' }}
      >
        Send
      </button>
    </form>
  </div>
</section>
    </div>
  );
};

export default Home;
