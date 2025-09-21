import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function RecetteDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recette, setRecette] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecette = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setRecette(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecette();
  }, [id]);

  if (loading) return <p className="text-center text-yellow-500 mt-10">Loading...</p>;
  if (!recette) return <p className="text-center text-red-500 mt-10">Recette not found.</p>;

  return (
    <div className="min-h-screen bg-[#242424] p-6">
      {/* Bouton retour vers /recette */}
      {/* <button
  onClick={() => navigate('/recette')}
  className="mb-6 px-5 py-2 bg-yellow-600 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
>
  &larr; Back to Recipes
</button> */}

      <div className="max-w-4xl mx-auto rounded-xl shadow-xl bg-[#2c2c2c] p-6">
        {/* Titre */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {recette.strMeal}
        </h1>

        {/* Image */}
        <div className="mb-8 overflow-hidden rounded-xl shadow-lg">
          <img
            src={recette.strMealThumb}
            alt={recette.strMeal}
            className="w-full object-cover transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Instructions */}
        <div className="mb-8 p-6 bg-black bg-opacity-50 rounded-xl shadow-md">
          <h2
            className="text-2xl font-semibold mb-4 text-yellow-500"
            style={{ fontFamily: 'Courgette, cursive' }}
          >
            Instructions
          </h2>
          <p className="text-gray-200 leading-relaxed">{recette.strInstructions}</p>
        </div>

        {/* Ingredients */}
        <div className="p-6 bg-black bg-opacity-50 rounded-xl shadow-md">
          <h2
            className="text-2xl font-semibold mb-4 text-yellow-500"
            style={{ fontFamily: 'Courgette, cursive' }}
          >
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = recette[`strIngredient${i + 1}`];
              const measure = recette[`strMeasure${i + 1}`];
              if (ingredient && ingredient.trim()) {
                return (
                  <li key={i}>
                    <span className="font-semibold text-yellow-500">{ingredient}</span> - {measure}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
