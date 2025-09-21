import React, { useState, useEffect } from 'react';
import CardRecette from '@/components/CardRecette';
import HowItWorks from '@/components/HowItWorks';

export default function Recette() {
  const [recettes, setRecettes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchName, setSearchName] = useState('');
  const [category, setCategory] = useState('');
  const [area, setArea] = useState('');
  const [areas, setAreas] = useState([]);

  const categories = ['Beef', 'Chicken', 'Vegetarian', 'Dessert', 'Seafood'];

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const data = await res.json();
        if (data.meals) setAreas(data.meals.map(item => item.strArea));
      } catch (error) {
        console.error(error);
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

      const lettres = 'abcdefghijklmnopqrstuvwxyz'.split('');
      let all = [];
      for (const lettre of lettres) {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${lettre}`);
        const data = await res.json();
        if (data.meals) all = all.concat(data.meals);
      }
      setRecettes(all);
      setLoading(false);
    };

    fetchRecettes();
  }, [searchName, category, area]);

  if (loading) return <p className="text-center text-yellow-600 mt-10">Loading...</p>;

  return (
    // <-- Fond global #242424 pour toute la page -->
    <div className="min-h-screen bg-[#242424] text-white p-6">
      <h1 className="text-4xl md:text-5xl font-bold italic text-center text-yellow-600 mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
        Popular Recipes 🍽️
      </h1>

      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchName}
          onChange={(e) => { setSearchName(e.target.value); setCategory(''); setArea(''); }}
          className="border border-gray-600 p-3 rounded-lg bg-[#242424] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />

        <select
          value={category}
          onChange={(e) => { setCategory(e.target.value); setSearchName(''); setArea(''); }}
          className="border border-gray-600 p-3 rounded-lg bg-[#242424] text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
        >
          <option value="">-- Category --</option>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>

        <select
          value={area}
          onChange={(e) => { setArea(e.target.value); setSearchName(''); setCategory(''); }}
          className="border border-gray-600 p-3 rounded-lg bg-[#242424] text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
        >
          <option value="">-- Area --</option>
          {areas.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>
        <HowItWorks />
      {/* Liste des recettes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recettes.length === 0 ? (
          <p className="text-center text-gray-300 col-span-3">No recipes found.</p>
        ) : (
          recettes.map((recette) => (
            <CardRecette
              key={recette.idMeal}
              recette={{
                idMeal: recette.idMeal,
                titre: recette.strMeal,
                image: recette.strMealThumb,
                description: recette.strInstructions
                  ? recette.strInstructions.substring(0, 100) + '...'
                  : '',
                buttonColor: 'bg-yellow-600 hover:bg-yellow-500 text-[#242424]'
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
