import React, { useState, useEffect } from 'react';
import CardRecette from '@/components/CardRecette';

export default function Recette() {
  const [recettes, setRecettes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filtre
  const [searchName, setSearchName] = useState('');
  const [category, setCategory] = useState('');
  const [area, setArea] = useState('');
  const [areas, setAreas] = useState([]); // liste dynamique des pays

  // Catégories statiques (tu peux aussi les récupérer dynamiquement si besoin)
  const categories = ['Beef', 'Chicken', 'Vegetarian', 'Dessert', 'Seafood'];

  // Charger la liste des pays au chargement du composant
  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const data = await res.json();
        if (data.meals) {
          setAreas(data.meals.map(item => item.strArea));
        }
      } catch (error) {
        console.error('Erreur chargement des zones :', error);
      }
    };
    fetchAreas();
  }, []);

  useEffect(() => {
    const fetchRecettes = async () => {
      setLoading(true);

      if (searchName) {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`);
        const data = await res.json();
        setRecettes(data.meals || []);
        setLoading(false);
        return;
      }

      if (category) {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await res.json();
        setRecettes(data.meals || []);
        setLoading(false);
        return;
      }

      if (area) {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        const data = await res.json();
        setRecettes(data.meals || []);
        setLoading(false);
        return;
      }

      // Pas de filtre actif, on récupère tout comme avant
      const lettres = 'abcdefghijklmnopqrstuvwxyz'.split('');
      let all = [];
      for (const lettre of lettres) {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${lettre}`);
        const data = await res.json();
        if (data.meals) {
          all = all.concat(data.meals);
        }
      }
      setRecettes(all);
      setLoading(false);
    };

    fetchRecettes();
  }, [searchName, category, area]);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold italic text-center mb-6">Recettes populaires 🍽️</h1>

      <div className="flex gap-4 mb-6 justify-center">
        <input
          type="text"
          placeholder="Chercher par nom..."
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
            setCategory('');
            setArea('');
          }}
          className="border p-2 rounded"
        />

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSearchName('');
            setArea('');
          }}
          className="border p-2 rounded"
        >
          <option value="">-- Catégorie --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={area}
          onChange={(e) => {
            setArea(e.target.value);
            setSearchName('');
            setCategory('');
          }}
          className="border p-2 rounded"
        >
          <option value="">-- Pays --</option>
          {areas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {recettes.length === 0 ? (
          <p>Aucune recette trouvée.</p>
        ) : (
          recettes.map((recette) => (
  <CardRecette
    key={recette.idMeal}
    recette={{
      idMeal: recette.idMeal,              // <- ajoute ça !
      titre: recette.strMeal,
      image: recette.strMealThumb,
      description: recette.strInstructions
        ? recette.strInstructions.substring(0, 100) + '...'
        : '',
    }}
  />
))

        )}
      </div>
    </div>
  );
}
