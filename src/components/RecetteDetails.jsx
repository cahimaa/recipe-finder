import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function RecetteDetails() {
  const { id } = useParams();
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

  if (loading) return <p>Chargement...</p>;
  if (!recette) return <p>Recette non trouvée.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">&larr; Retour</Link>
      <h1 className="text-4xl font-bold mb-4">{recette.strMeal}</h1>
      <img src={recette.strMealThumb} alt={recette.strMeal} className="rounded-lg mb-6" />
      
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <p className="mb-4">{recette.strInstructions}</p>

      <h2 className="text-2xl font-semibold mb-2">Ingrédients</h2>
      <ul className="list-disc list-inside">
        {Array.from({ length: 20 }).map((_, i) => {
          const ingredient = recette[`strIngredient${i + 1}`];
          const measure = recette[`strMeasure${i + 1}`];
          if (ingredient && ingredient.trim()) {
            return (
              <li key={i}>
                {ingredient} - {measure}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}
